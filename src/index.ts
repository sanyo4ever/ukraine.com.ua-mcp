#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { AdmClient } from "./adm-client.js";
import { requireAdmToken } from "./config.js";
import { registerCatalogTools } from "./tools/catalog.js";
import { registerHostingTools } from "./tools/hosting.js";
import { registerRawTools } from "./tools/raw.js";
import { registerServiceTools } from "./tools/services.js";

const server = new McpServer({
  name: "ukraine-com-ua-mcp",
  version: "0.1.0",
});

const adm = new AdmClient({
  token: requireAdmToken(),
});

registerCatalogTools(server, adm);
registerServiceTools(server, adm);
registerHostingTools(server, adm);
registerRawTools(server, adm);

await server.connect(new StdioServerTransport());
