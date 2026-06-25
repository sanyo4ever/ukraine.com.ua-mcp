import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { AdmClient } from "../adm-client.js";
import { errorResult, jsonResult } from "./utils.js";

export function registerHostingTools(server: McpServer, adm: AdmClient) {
  server.tool(
    "adm_hosting_accounts",
    "List hosting accounts available to the authenticated adm.tools account",
    {},
    async () => {
      try {
        const { response } = await adm.call("hosting/account/list", {}, { method: "GET" });
        return jsonResult("adm.tools hosting accounts", response);
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  server.tool(
    "adm_hosting_sites",
    "List sites and subdomains for a hosting account",
    {
      account_id: z.number().int().positive().describe("Hosting account ID"),
      virtual_domain_id: z.number().int().nonnegative().optional().describe("Optional site ID filter"),
      page: z.number().int().positive().optional().describe("Result page, defaults to 1"),
    },
    async ({ account_id, virtual_domain_id = 0, page = 1 }) => {
      try {
        const { response } = await adm.call("hosting/virtual/list", {
          account_id,
          virtual_domain_id,
          page,
        });
        return jsonResult("adm.tools hosting sites", response);
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  server.tool(
    "adm_hosting_webapp_info",
    "Get web application systemd/startup information for a hosting site host",
    {
      host_id: z.number().int().positive().describe("Hosting host ID"),
    },
    async ({ host_id }) => {
      try {
        const { response } = await adm.call("hosting/account/app/systemd/info", { host_id });
        return jsonResult("adm.tools hosting web app info", response);
      } catch (error) {
        return errorResult(error);
      }
    },
  );
}
