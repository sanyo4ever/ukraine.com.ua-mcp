# ukraine.com.ua MCP

[![CI](https://github.com/sanyo4ever/ukraine.com.ua-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/sanyo4ever/ukraine.com.ua-mcp/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js >=20](https://img.shields.io/badge/node-%3E%3D20-339933)](package.json)

Model Context Protocol (MCP) server for the adm.tools / ukraine.com.ua hosting
API. It lets AI assistants and MCP clients discover and call documented
ukraine.com.ua API actions for hosting, DNS, domains, mail, databases, VPS,
storage, and billing automation.

This repository is only the MCP server runtime and public endpoint metadata.

## Why This Exists

- Use ukraine.com.ua / adm.tools from MCP-compatible clients.
- Search a generated catalog of 679 documented adm.tools API actions.
- Call documented actions through one generic catalog tool.
- Provide a public reference for adm.tools API paths, methods, and parameters.
- Give AI agents a safer, typed interface to hosting operations.

Related searches: `ukraine.com.ua API`, `adm.tools API`, `admtools MCP`,
`ukraine.com.ua hosting automation`, `Model Context Protocol hosting`, `MCP
server DNS hosting`.

## Current Tools

- `adm_get_services`: read-only service inventory via
  `POST https://adm.tools/action/get_services/`.
- `adm_hosting_accounts`: read-only hosting account inventory via
  `GET https://adm.tools/action/hosting/account/list/`.
- `adm_hosting_sites`: read-only site/subdomain inventory via
  `POST https://adm.tools/action/hosting/virtual/list/`.
- `adm_hosting_webapp_info`: read-only web-app process/start command info via
  `POST https://adm.tools/action/hosting/account/app/systemd/info/`.
- `adm_api_catalog_search`: search the generated full API catalog.
- `adm_api_action_info`: inspect generated metadata for one documented action.
- `adm_api_call`: call any documented action through the generated catalog.
- `adm_api_raw`: advanced raw call to `https://adm.tools/action/{action}/`.

## Agent Use Cases

- Inventory hosting accounts, sites, domains, mail, databases, VPS, and storage.
- Inspect available adm.tools API actions before calling them.
- Automate DNS and hosting workflows from Claude Desktop, Cursor, Codex, or any
  MCP-compatible client.
- Use specific read-only helper tools for common hosting inventory checks.
- Use the generic catalog tools when an action is documented but no custom MCP
  helper exists yet.

## API Catalog

The generated public catalog is available in
[`docs/api-catalog.generated.md`](docs/api-catalog.generated.md).

Current catalog coverage:

- 679 documented actions.
- 633 POST actions and 46 GET actions.
- 1551 documented parameters.
- Main groups include hosting, DNS, domains, mail, MySQL, PostgreSQL, Redis,
  VPS, storage, billing, and dedicated servers.

## Setup

```sh
npm install
cp .env.example .env
```

Set one local token variable:

```sh
ADMTOOLS_API_TOKEN=...
```

`UKRAINE_COM_UA_API_TOKEN` is also accepted as a compatibility fallback.

Run locally:

```sh
npm run build
npm run dev
```

## MCP Client Config

```json
{
  "mcpServers": {
    "ukraine-com-ua": {
      "command": "node",
      "args": ["/absolute/path/to/ukraine.com.ua-mcp/dist/index.js"],
      "env": {
        "ADMTOOLS_API_TOKEN": "your-token"
      }
    }
  }
}
```

## Safety

- Provide tokens through environment variables only.
- Do not commit `.env` or local credentials.
- Prefer the read-only helper tools for inventory and discovery tasks.
