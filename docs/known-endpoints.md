# Known adm.tools Endpoints

This file records confirmed endpoint behavior. Do not add guessed contracts.

## Service Inventory

```text
POST https://adm.tools/action/get_services/
Authorization: Bearer <token>
Content-Type: application/x-www-form-urlencoded
```

Parameters:

| Name | Type | Values |
| --- | --- | --- |
| `type` | string | `account`, `host`, `vps`, `dedicated`, `domain`, `storage`, `mail`, `mongo`, `redis`, `mysql`, `rabbitmq`, `manticore`, `postgresql` |

Behavior:

- For all types except `host`, returns service ID, name/login, and optional
  alias/title.
- For `host`, returns host ID, host name, virtual domain/site ID, and hosting
  account ID.
- For `account` and `host`, the list can include archived/deleted hosting
  accounts that may be restorable.
- The list can include delegated services available to the current account.

Confirmed by direct read-only calls on 2026-06-24.

## Hosting Account List

```text
GET https://adm.tools/action/hosting/account/list/
```

Parameters: none.

Returns hosting account inventory with account ID/name/alias, plan data, expiry,
country/IP data, site/virtual-host counts, and disk usage data.

## Hosting Site And Subdomain List

```text
POST https://adm.tools/action/hosting/virtual/list/
```

Parameters:

| Name | Type | Default |
| --- | --- | --- |
| `account_id` | `Int` | required |
| `virtual_domain_id` | `Int` | `0` |
| `page` | `Int` | `1` |

Returns sites and subdomains for the given hosting account. Supplying
`virtual_domain_id` narrows the response to one site.

## Hosting Web App Info

```text
POST https://adm.tools/action/hosting/account/app/systemd/info/
```

Parameters:

| Name | Type |
| --- | --- |
| `host_id` | `Int` |

Returns web-app ID, status, working directory, and start command for the given
site host ID.
