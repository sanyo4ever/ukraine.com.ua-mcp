import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { AdmClient } from "../adm-client.js";
import { errorResult, jsonResult } from "./utils.js";

export const serviceTypeSchema = z.enum([
  "account",
  "host",
  "vps",
  "dedicated",
  "domain",
  "storage",
  "mail",
  "mongo",
  "redis",
  "mysql",
  "rabbitmq",
  "manticore",
  "postgresql",
]);

export function registerServiceTools(server: McpServer, adm: AdmClient) {
  server.tool(
    "adm_get_services",
    "List available adm.tools services/hosts for the authenticated account",
    {
      type: serviceTypeSchema.describe("Service type to list"),
    },
    async ({ type }) => {
      try {
        const { response } = await adm.call("get_services", { type });
        return jsonResult(`adm.tools services: ${type}`, response);
      } catch (error) {
        return errorResult(error);
      }
    },
  );
}
