import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { AdmClient, AdmParams } from "../adm-client.js";
import { ADM_ACTIONS, findAdmAction, type AdmAction } from "../generated/actions.js";
import { errorResult, jsonResult } from "./utils.js";

const admParamValueSchema = z.union([z.string(), z.number(), z.boolean()]);

export function registerCatalogTools(server: McpServer, adm: AdmClient) {
  server.tool(
    "adm_api_catalog_search",
    "Search the generated adm.tools API catalog",
    {
      query: z.string().optional().describe("Text to match against path or title"),
      root: z.string().optional().describe("Top-level API group, for example hosting, dns, mail"),
      method: z.enum(["GET", "POST"]).optional().describe("HTTP method filter"),
      limit: z.number().int().positive().max(100).optional().default(25),
    },
    async ({ query, root, method, limit }) => {
      const normalizedQuery = query?.toLowerCase();
      const results = ADM_ACTIONS.filter((action) => {
        if (root && action.root !== root) return false;
        if (method && action.method !== method) return false;
        if (!normalizedQuery) return true;
        return (
          action.path.toLowerCase().includes(normalizedQuery) ||
          action.title.toLowerCase().includes(normalizedQuery)
        );
      }).slice(0, limit);

      return jsonResult("adm.tools API catalog search", results);
    },
  );

  server.tool(
    "adm_api_action_info",
    "Get generated documentation metadata for an adm.tools API action",
    {
      path: z.string().optional().describe("Action path, for example hosting/account/list"),
      id: z.number().int().positive().optional().describe("Internal docs action ID"),
    },
    async ({ path, id }) => {
      try {
        const action = requireAction({ path, id });
        return jsonResult("adm.tools API action info", action);
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  server.tool(
    "adm_api_call",
    "Call an adm.tools action using the generated catalog metadata",
    {
      path: z.string().optional().describe("Action path, for example hosting/account/list"),
      id: z.number().int().positive().optional().describe("Internal docs action ID"),
      params: z.record(admParamValueSchema).optional().describe("Request parameters"),
    },
    async ({ path, id, params }) => {
      try {
        const action = requireAction({ path, id });
        if (!action.method) {
          throw new Error(`Action ${action.path} does not have a documented HTTP method.`);
        }
        const { response } = await adm.call(action.path, (params ?? {}) as AdmParams, {
          method: action.method,
        });
        return jsonResult(`adm.tools API call: ${action.path}`, response);
      } catch (error) {
        return errorResult(error);
      }
    },
  );
}

function requireAction(locator: { path?: string; id?: number }): AdmAction {
  const action = findAdmAction(locator);
  if (!action) {
    throw new Error("Action not found in generated catalog.");
  }
  return action;
}
