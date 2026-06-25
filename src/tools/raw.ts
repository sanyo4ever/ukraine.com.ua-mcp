import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { AdmClient, AdmParams } from "../adm-client.js";
import { errorResult, jsonResult } from "./utils.js";

const admParamValueSchema = z.union([z.string(), z.number(), z.boolean()]);

export function registerRawTools(server: McpServer, adm: AdmClient) {
  server.tool(
    "adm_api_raw",
    "Call a raw adm.tools action endpoint. Advanced use only.",
    {
      action: z.string().describe("Action path, for example get_services or dns/list"),
      params: z.record(admParamValueSchema).optional().describe("Form params for the action"),
    },
    async ({ action, params }) => {
      try {
        const { response } = await adm.call(action, (params ?? {}) as AdmParams);
        return jsonResult(`adm.tools raw: ${action}`, response);
      } catch (error) {
        return errorResult(error);
      }
    },
  );
}
