// Generated API catalog metadata. Do not edit manually.

export interface AdmActionParam {
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  values?: string;
}

export interface AdmAction {
  id: number;
  path: string;
  root: string;
  title: string;
  method?: "GET" | "POST";
  endpoint?: string;
  params: AdmActionParam[];
}

export const ADM_ACTIONS: readonly AdmAction[] = [
  {
    "id": 1,
    "path": "billing/anonym_payment",
    "root": "billing",
    "title": "Анонімна оплата",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/anonym_payment/",
    "params": [
      {
        "name": "service",
        "type": "String",
        "required": true
      },
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": "'hosting', 'domain', 'vps', 'dedicated'"
      },
      {
        "name": "egrpou",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 3, 6, 12"
      }
    ]
  },
  {
    "id": 62070,
    "path": "billing/autorenew/list/dedicated",
    "root": "billing",
    "title": "Отримання списку Dedicated з можливістю автопродовження",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/autorenew/list/dedicated/",
    "params": []
  },
  {
    "id": 62073,
    "path": "billing/autorenew/list/domain",
    "root": "billing",
    "title": "Отримання списку доменів з можливістю автопродовження",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/autorenew/list/domain/",
    "params": []
  },
  {
    "id": 62242,
    "path": "billing/autorenew/list/hosting",
    "root": "billing",
    "title": "Отримання списку хостинг-аккаунтів з можливістю автопродовження",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/autorenew/list/hosting/",
    "params": []
  },
  {
    "id": 62068,
    "path": "billing/autorenew/list/vps",
    "root": "billing",
    "title": "Отримання списку VPS з можливістю автопродовження",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/autorenew/list/vps/",
    "params": []
  },
  {
    "id": 62060,
    "path": "billing/autorenew/pop",
    "root": "billing",
    "title": "Відключення автопродовження",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/autorenew/pop/",
    "params": [
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": "'hosting', 'domain', 'vps', 'dedicated'"
      }
    ]
  },
  {
    "id": 62061,
    "path": "billing/autorenew/set",
    "root": "billing",
    "title": "Увімкнення автопродовження",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/autorenew/set/",
    "params": [
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": "'hosting', 'domain', 'vps', 'dedicated'"
      },
      {
        "name": "source",
        "type": "String",
        "required": true,
        "values": "'balance', 'card'"
      },
      {
        "name": "card_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 3, 6, 12"
      }
    ]
  },
  {
    "id": 62069,
    "path": "billing/autorenew/unblock",
    "root": "billing",
    "title": "Розблокування автоподовження",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/autorenew/unblock/",
    "params": []
  },
  {
    "id": 2,
    "path": "billing/balance_get",
    "root": "billing",
    "title": "Отримання поточного балансу облікового запису",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/balance_get/",
    "params": []
  },
  {
    "id": 13493,
    "path": "billing/balance_history",
    "root": "billing",
    "title": "Отримання історії використання балансу",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/balance_history/",
    "params": [
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 3,
    "path": "billing/balance_invoice",
    "root": "billing",
    "title": "Виписка рахунку для поповнення балансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/balance_invoice/",
    "params": [
      {
        "name": "amount",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 4,
    "path": "billing/get_invoices",
    "root": "billing",
    "title": "Отримання списку рахунків",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/get_invoices/",
    "params": [
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 13399,
    "path": "billing/get_rtu",
    "root": "billing",
    "title": "Отримання переліку актів виконаних робіт",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/get_rtu/",
    "params": [
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 5,
    "path": "billing/invoice_cancel",
    "root": "billing",
    "title": "Скасування рахунку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/invoice_cancel/",
    "params": [
      {
        "name": "invoice_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 7,
    "path": "billing/invoice_pay_from_balance",
    "root": "billing",
    "title": "Оплата рахунку з балансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/invoice_pay_from_balance/",
    "params": [
      {
        "name": "invoice_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15173,
    "path": "billing/print/email_invoice",
    "root": "billing",
    "title": "Відправлення рахунку на пошту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/print/email_invoice/",
    "params": [
      {
        "name": "invoice_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "email",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 15,
    "path": "billing/print/invoice",
    "root": "billing",
    "title": "Завантаження рахунку у форматі PDF",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/print/invoice/",
    "params": [
      {
        "name": "invoice_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "token",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 16,
    "path": "billing/print/requisites",
    "root": "billing",
    "title": "Завантаження реквізитів в форматі PDF",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/print/requisites/",
    "params": [
      {
        "name": "invoice_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15174,
    "path": "billing/print/rtu",
    "root": "billing",
    "title": "Завантаження акту виконаних робіт у форматі PDF",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/print/rtu/",
    "params": [
      {
        "name": "rtu_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 17,
    "path": "billing/print/swift",
    "root": "billing",
    "title": "Завантаження рахунку SWIFT у форматі PDF",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/print/swift/",
    "params": [
      {
        "name": "invoice_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 12210,
    "path": "billing/rtu_info",
    "root": "billing",
    "title": "Отримання розшифровки акта виконаних робіт",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/rtu_info/",
    "params": [
      {
        "name": "rtu_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62243,
    "path": "billing/servicecart/cart/add_dedicated",
    "root": "billing",
    "title": "Додати Dedicated до кошика",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/add_dedicated/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 3, 6, 12"
      }
    ]
  },
  {
    "id": 62244,
    "path": "billing/servicecart/cart/add_domain",
    "root": "billing",
    "title": "Додавання домену до кошика",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/add_domain/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
      }
    ]
  },
  {
    "id": 62231,
    "path": "billing/servicecart/cart/add_hosting",
    "root": "billing",
    "title": "Додавання хостинг-акаунта в кошик",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/add_hosting/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 3, 6, 12, 24, 36"
      }
    ]
  },
  {
    "id": 62245,
    "path": "billing/servicecart/cart/add_protection",
    "root": "billing",
    "title": "Додавання захисту сайту в кошик",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/add_protection/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 2, 3"
      }
    ]
  },
  {
    "id": 62246,
    "path": "billing/servicecart/cart/add_vps",
    "root": "billing",
    "title": "Додавання VPS до кошика",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/add_vps/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 3, 6, 12"
      }
    ]
  },
  {
    "id": 62232,
    "path": "billing/servicecart/cart/get",
    "root": "billing",
    "title": "Отримання вмісту кошика",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/get/",
    "params": [
      {
        "name": "open_promocode",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62233,
    "path": "billing/servicecart/cart/pay",
    "root": "billing",
    "title": "Виписка рахунку для оплати вмісту кошика",
    "method": "GET",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/pay/",
    "params": []
  },
  {
    "id": 62247,
    "path": "billing/servicecart/cart/pop",
    "root": "billing",
    "title": "Видалення послуги з кошика",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/pop/",
    "params": [
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'hosting'",
        "values": "'dedicated', 'domain', 'hosting', 'vps', 'protection'"
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62248,
    "path": "billing/servicecart/cart/prolong",
    "root": "billing",
    "title": "Швидке виписування рахунку для оплати окремої послуги",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/cart/prolong/",
    "params": [
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'hosting'",
        "values": "'dedicated', 'domain', 'hosting', 'vps', 'protection'"
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62249,
    "path": "billing/servicecart/get_services",
    "root": "billing",
    "title": "Отримання переліку послуг з можливістю оплати",
    "method": "POST",
    "endpoint": "https://adm.tools/action/billing/servicecart/get_services/",
    "params": [
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'stack'",
        "values": ""
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62395,
    "path": "clickhouse/access/page",
    "root": "clickhouse",
    "title": "Отримання списку користувачів з делегованим доступом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/access/page/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62399,
    "path": "clickhouse/create/send",
    "root": "clickhouse",
    "title": "Замовлення нової інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/create/send/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62400,
    "path": "clickhouse/database/create/save",
    "root": "clickhouse",
    "title": "Створення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/database/create/save/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "create_user",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62274,
    "path": "clickhouse/database/delete",
    "root": "clickhouse",
    "title": "Видалення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/database/delete/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62401,
    "path": "clickhouse/database/list",
    "root": "clickhouse",
    "title": "Отримання списку баз даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/database/list/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62402,
    "path": "clickhouse/database/users/assign/save",
    "root": "clickhouse",
    "title": "Прив’язка користувача до бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/database/users/assign/save/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database",
        "type": "String",
        "required": true
      },
      {
        "name": "users",
        "type": "Array",
        "required": true
      },
      {
        "name": "database_privileges",
        "type": "Array",
        "required": true,
        "values": ""
      }
    ]
  },
  {
    "id": 62403,
    "path": "clickhouse/database/users/assign/update/save",
    "root": "clickhouse",
    "title": "Зміна привілеїв доступу користувача до бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/database/users/assign/update/save/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database",
        "type": "String",
        "required": true
      },
      {
        "name": "username",
        "type": "String",
        "required": true
      },
      {
        "name": "database_privileges",
        "type": "Array",
        "required": true,
        "values": ""
      }
    ]
  },
  {
    "id": 62275,
    "path": "clickhouse/database/users/list",
    "root": "clickhouse",
    "title": "Отримання списку користувачів бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/database/users/list/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62404,
    "path": "clickhouse/database/users/revoke",
    "root": "clickhouse",
    "title": "Відв’язка користувача від бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/database/users/revoke/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "username",
        "type": "String",
        "required": true
      },
      {
        "name": "database",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62278,
    "path": "clickhouse/instance/activate",
    "root": "clickhouse",
    "title": "Розблокування інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/instance/activate/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62405,
    "path": "clickhouse/instance/delete",
    "root": "clickhouse",
    "title": "Блокування та видалення інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/instance/delete/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62279,
    "path": "clickhouse/instance/reload",
    "root": "clickhouse",
    "title": "Перезапуск інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/instance/reload/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62406,
    "path": "clickhouse/kill",
    "root": "clickhouse",
    "title": "Примусове завершення процесу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/kill/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "query_uid",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62407,
    "path": "clickhouse/plan/change",
    "root": "clickhouse",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/plan/change/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62408,
    "path": "clickhouse/plan/list",
    "root": "clickhouse",
    "title": "Отримання списку тарифів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/clickhouse/plan/list/",
    "params": []
  },
  {
    "id": 62409,
    "path": "clickhouse/port/list",
    "root": "clickhouse",
    "title": "Отримання списку портів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/port/list/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62410,
    "path": "clickhouse/port/save",
    "root": "clickhouse",
    "title": "Налаштування портів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/port/save/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "port_type_id",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62411,
    "path": "clickhouse/processlist",
    "root": "clickhouse",
    "title": "Отримання списку активних процесів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/processlist/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62415,
    "path": "clickhouse/tables",
    "root": "clickhouse",
    "title": "Отримання списку таблиць бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/tables/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62416,
    "path": "clickhouse/user/create/save",
    "root": "clickhouse",
    "title": "Створення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/user/create/save/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "username",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "database_privileges",
        "type": "Array",
        "required": true,
        "values": ""
      },
      {
        "name": "databases",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "server_privileges",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      },
      {
        "name": "roles",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 62315,
    "path": "clickhouse/user/delete",
    "root": "clickhouse",
    "title": "Видалення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/user/delete/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "username",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62417,
    "path": "clickhouse/user/list",
    "root": "clickhouse",
    "title": "Отримання списку користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/user/list/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62418,
    "path": "clickhouse/user/update/save",
    "root": "clickhouse",
    "title": "Зміна пароля користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/clickhouse/user/update/save/",
    "params": [
      {
        "name": "clickhouse_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "username",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "server_privileges",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      },
      {
        "name": "roles",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 62350,
    "path": "cloud/guard/create/save",
    "root": "cloud",
    "title": "Додавання запису до налаштувань безпеки інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/guard/create/save/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "port_types_id",
        "type": "Array",
        "required": true
      },
      {
        "name": "item_type",
        "type": "String",
        "required": true,
        "values": "'ip', 'account', 'manticore'"
      },
      {
        "name": "ip",
        "type": "Check",
        "required": true
      }
    ]
  },
  {
    "id": 62351,
    "path": "cloud/guard/delete",
    "root": "cloud",
    "title": "Видалення запису з налаштувань безпеки інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/guard/delete/",
    "params": [
      {
        "name": "guard_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62352,
    "path": "cloud/guard/edit/save",
    "root": "cloud",
    "title": "Зміна запису в налаштуваннях безпеки інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/guard/edit/save/",
    "params": [
      {
        "name": "guard_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "port_types_id",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 62353,
    "path": "cloud/guard/list",
    "root": "cloud",
    "title": "Отримання налаштувань безпеки екземпляра",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/guard/list/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62435,
    "path": "cloud/guard/toggle",
    "root": "cloud",
    "title": "Увімкнення/вимкнення брандмауера інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/guard/toggle/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "enable",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62428,
    "path": "cloud/settings/list",
    "root": "cloud",
    "title": "Отримання налаштувань інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/settings/list/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62429,
    "path": "cloud/settings/save",
    "root": "cloud",
    "title": "Зміна налаштувань інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/settings/save/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62469,
    "path": "cloud/stat/list",
    "root": "cloud",
    "title": "Отримання статистики використання ресурсів екземпляра",
    "method": "POST",
    "endpoint": "https://adm.tools/action/cloud/stat/list/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62077,
    "path": "dedicated/control/firewall",
    "root": "dedicated",
    "title": "Отримання правил Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/firewall/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62075,
    "path": "dedicated/control/firewall_save",
    "root": "dedicated",
    "title": "Зміна правил Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/firewall_save/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "src_ip",
        "type": "Array",
        "required": true
      },
      {
        "name": "dst_ip",
        "type": "Array",
        "required": true
      },
      {
        "name": "src_port",
        "type": "Array",
        "required": true
      },
      {
        "name": "dst_port",
        "type": "Array",
        "required": true
      },
      {
        "name": "protocol",
        "type": "Array",
        "required": true,
        "values": "'any', 'tcp', 'udp', 'icmp'"
      },
      {
        "name": "action",
        "type": "Array",
        "required": true,
        "values": "'accept', 'discard'"
      },
      {
        "name": "default_action",
        "type": "String",
        "required": true,
        "values": "'accept', 'discard'"
      }
    ]
  },
  {
    "id": 62130,
    "path": "dedicated/control/firewall_toggle",
    "root": "dedicated",
    "title": "Увімкнення/вимкнення Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/firewall_toggle/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "toggle",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 3903,
    "path": "dedicated/control/ipextra/ipv6_request",
    "root": "dedicated",
    "title": "Замовлення нової виділеної IPv6 адреси для виділеного сервера з випискою рахунку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/ipextra/ipv6_request/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15192,
    "path": "dedicated/control/ipextra/list",
    "root": "dedicated",
    "title": "Таблиця PTR записів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/ipextra/list/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15193,
    "path": "dedicated/control/ipextra/ptr",
    "root": "dedicated",
    "title": "Редагування PTR запису",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/ipextra/ptr/",
    "params": [
      {
        "name": "ip_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "hostname",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 38,
    "path": "dedicated/control/kvm/add",
    "root": "dedicated",
    "title": "Заявка на підключення KVM",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/kvm/add/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 39,
    "path": "dedicated/control/kvm/cancel",
    "root": "dedicated",
    "title": "Скасування заявки на підключення KVM до прийняття в роботу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/kvm/cancel/",
    "params": [
      {
        "name": "kvm_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 40,
    "path": "dedicated/control/kvm/close",
    "root": "dedicated",
    "title": "Закриття заявки на підключення KVM",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/kvm/close/",
    "params": [
      {
        "name": "kvm_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3904,
    "path": "dedicated/control/rescue/check_status",
    "root": "dedicated",
    "title": "Перевірка статусу запуску dedicated сервера в rescue-режим",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/rescue/check_status/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3905,
    "path": "dedicated/control/rescue/start",
    "root": "dedicated",
    "title": "Виведення форми запуску dedicated сервера в rescue-режим",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/rescue/start/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "reboot_type",
        "type": "String",
        "required": false,
        "defaultValue": "'auto'",
        "values": "'auto', 'manual'"
      }
    ]
  },
  {
    "id": 44,
    "path": "dedicated/control/reset/reboot",
    "root": "dedicated",
    "title": "Перезавантаження виділеного сервера",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/reset/reboot/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'reset'",
        "values": "'reset', 'manual'"
      }
    ]
  },
  {
    "id": 45,
    "path": "dedicated/control/reset/report",
    "root": "dedicated",
    "title": "Звіт перезавантаження за останні 10 днів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/reset/report/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 1313,
    "path": "dedicated/control/title_edit",
    "root": "dedicated",
    "title": "Перейменування Dedicated",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/control/title_edit/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "title",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 13061,
    "path": "dedicated/credit",
    "root": "dedicated",
    "title": "Продовження виділеного сервера в кредит",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/credit/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 23026,
    "path": "dedicated/ipextra/ipv4",
    "root": "dedicated",
    "title": "Замовлення IPv4-адреси для виділеного сервера з випискою рахунку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/ipextra/ipv4/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 23027,
    "path": "dedicated/ipextra/ipv4_drop",
    "root": "dedicated",
    "title": "Відмова від продовження виділеної IP-адреси для виділеного сервера",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/ipextra/ipv4_drop/",
    "params": [
      {
        "name": "ip_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62160,
    "path": "dedicated/order",
    "root": "dedicated",
    "title": "Замовлення виділеного сервера",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/order/",
    "params": [
      {
        "name": "assembly_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ram_size",
        "type": "Int",
        "required": true
      },
      {
        "name": "drives",
        "type": "Array",
        "required": true
      },
      {
        "name": "os_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "network",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "1, 10"
      }
    ]
  },
  {
    "id": 21507,
    "path": "dedicated/paid_traffic",
    "root": "dedicated",
    "title": "Увімкнення/вимкнення платного трафіку для виділеного сервера",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dedicated/paid_traffic/",
    "params": [
      {
        "name": "dedicated_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 53,
    "path": "dns/add_foreign_domain",
    "root": "dns",
    "title": "Додавання домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/add_foreign_domain/",
    "params": [
      {
        "name": "domain_name",
        "type": "String",
        "required": true
      },
      {
        "name": "import_records",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 55,
    "path": "dns/change_nameservers",
    "root": "dns",
    "title": "Зміна NS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/change_nameservers/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "stack",
        "type": "Array",
        "required": true
      },
      {
        "name": "skip",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 56,
    "path": "dns/child_ns/delete",
    "root": "dns",
    "title": "Видалення дочірнього NS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/child_ns/delete/",
    "params": [
      {
        "name": "child_ns_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 57,
    "path": "dns/child_ns/edit",
    "root": "dns",
    "title": "Створення / зміна дочірнього NS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/child_ns/edit/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "child_ns_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "hostname",
        "type": "String",
        "required": false,
        "defaultValue": "$child_ns_id ? '' : null"
      },
      {
        "name": "ipv6",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 58,
    "path": "dns/child_ns/list",
    "root": "dns",
    "title": "Список дочірніх NS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/child_ns/list/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 59,
    "path": "dns/config_export",
    "root": "dns",
    "title": "Експорт налаштувань домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/config_export/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15194,
    "path": "dns/contacts/request/cancel",
    "root": "dns",
    "title": "Скасування запиту на зміну контактних даних домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/contacts/request/cancel/",
    "params": [
      {
        "name": "request_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 12795,
    "path": "dns/contacts/request/email_code_resend",
    "root": "dns",
    "title": "Повторне надсилання коду підтвердження зміни контактів на Email",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/contacts/request/email_code_resend/",
    "params": [
      {
        "name": "request_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "email_index",
        "type": "Int",
        "required": true,
        "values": "1, 2"
      }
    ]
  },
  {
    "id": 12796,
    "path": "dns/contacts/request/email_code_verify",
    "root": "dns",
    "title": "Підтвердження зміни контактів домену кодом із листа на Email",
    "method": "GET",
    "endpoint": "https://adm.tools/action/dns/contacts/request/email_code_verify/",
    "params": [
      {
        "name": "request_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "code",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62449,
    "path": "dns/delete_domain",
    "root": "dns",
    "title": "Видалення домену (обслуговується не у нас)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/delete_domain/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62454,
    "path": "dns/delete_domain_fake",
    "root": "dns",
    "title": "Видалення домену (обслуговується у нас)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/delete_domain_fake/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62161,
    "path": "dns/icann/confirm_email",
    "root": "dns",
    "title": "Підтвердження email для ICANN",
    "method": "GET",
    "endpoint": "https://adm.tools/action/dns/icann/confirm_email/",
    "params": [
      {
        "name": "user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "token",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62162,
    "path": "dns/icann/confirm_phone",
    "root": "dns",
    "title": "Підтвердження телефону для ICANN",
    "method": "GET",
    "endpoint": "https://adm.tools/action/dns/icann/confirm_phone/",
    "params": [
      {
        "name": "user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "token",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62163,
    "path": "dns/icann/confirm_phone_send",
    "root": "dns",
    "title": "Підтвердження телефону для ICANN",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/icann/confirm_phone_send/",
    "params": [
      {
        "name": "user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "token",
        "type": "String",
        "required": true
      },
      {
        "name": "code",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 61,
    "path": "dns/list",
    "root": "dns",
    "title": "Отримання списку доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/list/",
    "params": [
      {
        "name": "sort",
        "type": "String",
        "required": false,
        "defaultValue": "'name'",
        "values": "'name', 'valid_untill'"
      },
      {
        "name": "by",
        "type": "String",
        "required": false,
        "defaultValue": "'asc'",
        "values": "'asc', 'desc'"
      },
      {
        "name": "domains_search_request",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "p",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      },
      {
        "name": "tag_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "tag_free",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 63,
    "path": "dns/massupdate/update_domains",
    "root": "dns",
    "title": "Масова зміна налаштувань доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/massupdate/update_domains/",
    "params": [
      {
        "name": "domain_ids",
        "type": "Array",
        "required": true
      },
      {
        "name": "config_file",
        "type": "File",
        "required": true
      }
    ]
  },
  {
    "id": 64,
    "path": "dns/nameservers_list",
    "root": "dns",
    "title": "Отримання списку NS домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/nameservers_list/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 65,
    "path": "dns/order/bill",
    "root": "dns",
    "title": "Виписка рахунку на оплату замовлених доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/order/bill/",
    "params": [
      {
        "name": "domains",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 66,
    "path": "dns/order/list",
    "root": "dns",
    "title": "Отримання списку нових замовлень на реєстрацію доменів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/dns/order/list/",
    "params": []
  },
  {
    "id": 67,
    "path": "dns/order/remove_domain",
    "root": "dns",
    "title": "Видалення замовлення на реєстрацію домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/order/remove_domain/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3906,
    "path": "dns/parking_page/edit",
    "root": "dns",
    "title": "Зміна HTML-коду паркувальної сторінки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/parking_page/edit/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "content",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62250,
    "path": "dns/parking_page/toggle",
    "root": "dns",
    "title": "Налаштування сторінки паркування",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/parking_page/toggle/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "enabled",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_use_no_www",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 3843,
    "path": "dns/record_add",
    "root": "dns",
    "title": "Додавання DNS-записи",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/record_add/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'NS', 'TXT', 'NAPTR'"
      },
      {
        "name": "record",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "data",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "priority",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 70,
    "path": "dns/record_delete",
    "root": "dns",
    "title": "Видалення DNS-запису",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/record_delete/",
    "params": [
      {
        "name": "subdomain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3844,
    "path": "dns/record_edit",
    "root": "dns",
    "title": "Зміна DNS-записи",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/record_edit/",
    "params": [
      {
        "name": "subdomain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "data",
        "type": "String",
        "required": true
      },
      {
        "name": "priority",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 72,
    "path": "dns/records_default",
    "root": "dns",
    "title": "Відновлення записів за замовчуванням в домені",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/records_default/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15195,
    "path": "dns/records_import",
    "root": "dns",
    "title": "Імпорт записів домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/records_import/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "record",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 74,
    "path": "dns/records_list",
    "root": "dns",
    "title": "Отримання списку DNS-записів домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/records_list/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 75,
    "path": "dns/remove_hold",
    "root": "dns",
    "title": "Тимчасове увімкнення домену із закінченим терміном дії",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/remove_hold/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62455,
    "path": "dns/restore_domain_fake",
    "root": "dns",
    "title": "Відновлення видаленого домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/restore_domain_fake/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62236,
    "path": "dns/searchhistory/delete",
    "root": "dns",
    "title": "Видалення запису з історії пошуку доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/searchhistory/delete/",
    "params": [
      {
        "name": "id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62237,
    "path": "dns/searchhistory/delete_all",
    "root": "dns",
    "title": "Очищення історії пошуку доменів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/dns/searchhistory/delete_all/",
    "params": []
  },
  {
    "id": 62238,
    "path": "dns/searchhistory/list",
    "root": "dns",
    "title": "Отримання історії пошуку доменів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/dns/searchhistory/list/",
    "params": [
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 76,
    "path": "dns/set_mail_redirect",
    "root": "dns",
    "title": "Налаштування поштового редиректу для домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/set_mail_redirect/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "email_redirect",
        "type": "String",
        "required": true
      },
      {
        "name": "email_redirect_active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 77,
    "path": "dns/set_web_redirect",
    "root": "dns",
    "title": "Налаштування веб-редиректу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/set_web_redirect/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "redirect_url",
        "type": "String",
        "required": true
      },
      {
        "name": "redirect",
        "type": "String",
        "required": false,
        "defaultValue": "'off'",
        "values": "'direct', 'frames', 'off'"
      },
      {
        "name": "redirect_code",
        "type": "String",
        "required": false,
        "defaultValue": "'301'",
        "values": "'301', '302'"
      },
      {
        "name": "redirect_persist_url",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_use_no_www",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 78,
    "path": "dns/srv_add",
    "root": "dns",
    "title": "Додавання SRV-запису",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/srv_add/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "service",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "subdomain",
        "type": "String",
        "required": false,
        "defaultValue": "'@'"
      },
      {
        "name": "protocol",
        "type": "String",
        "required": false,
        "defaultValue": "'tcp'",
        "values": "'tcp', 'udp', 'tls'"
      },
      {
        "name": "priority",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "weight",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "port",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "data",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 79,
    "path": "dns/tag/bind",
    "root": "dns",
    "title": "Прив’язка / відв’язування мітки від домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/tag/bind/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "tag_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 81,
    "path": "dns/tag/delete",
    "root": "dns",
    "title": "Видалення міток",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/tag/delete/",
    "params": [
      {
        "name": "tag_ids",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 62131,
    "path": "dns/tag/edit",
    "root": "dns",
    "title": "Створення мітки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/dns/tag/edit/",
    "params": [
      {
        "name": "tag_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "name",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 82,
    "path": "dns/tag/list",
    "root": "dns",
    "title": "Отримання списку міток",
    "method": "GET",
    "endpoint": "https://adm.tools/action/dns/tag/list/",
    "params": [
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62053,
    "path": "domain/booking/auction/bet",
    "root": "domain",
    "title": "Ставка за аукціоном",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/booking/auction/bet/",
    "params": [
      {
        "name": "auction_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "pay_type",
        "type": "String",
        "required": true,
        "values": "'balance', 'card'"
      },
      {
        "name": "bet",
        "type": "Float",
        "required": true
      },
      {
        "name": "pay_card_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62251,
    "path": "domain/booking/auction/domains",
    "root": "domain",
    "title": "Отримання списку активних аукціонів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/booking/auction/domains/",
    "params": [
      {
        "name": "query",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62054,
    "path": "domain/booking/auction/list",
    "root": "domain",
    "title": "Отримання поточної ставки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/booking/auction/list/",
    "params": [
      {
        "name": "auction_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62055,
    "path": "domain/booking/book",
    "root": "domain",
    "title": "Створення попереднього замовлення домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/booking/book/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 9741,
    "path": "domain/booking/list",
    "root": "domain",
    "title": "Отримання списку попередніх замовлень доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/booking/list/",
    "params": [
      {
        "name": "show_valid_until",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'ASC', 'DESC', ''"
      },
      {
        "name": "query",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 84,
    "path": "domain/booking/remove",
    "root": "domain",
    "title": "Видалення попереднього замовлення домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/booking/remove/",
    "params": [
      {
        "name": "booking_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 85,
    "path": "domain/check",
    "root": "domain",
    "title": "Перевірка доступності домена",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/check/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62259,
    "path": "domain/dnssec/add",
    "root": "domain",
    "title": "Додавання запису DNSSEC",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/dnssec/add/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "key_tag",
        "type": "Int",
        "required": true
      },
      {
        "name": "algorithm",
        "type": "Int",
        "required": true
      },
      {
        "name": "digest_type",
        "type": "Int",
        "required": true
      },
      {
        "name": "digest",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62506,
    "path": "domain/dnssec/delete",
    "root": "domain",
    "title": "Видалення запису DNSSEC",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/dnssec/delete/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ds_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62345,
    "path": "domain/dnssec/list",
    "root": "domain",
    "title": "Отримання списку записів DNSSEC",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/dnssec/list/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 86,
    "path": "domain/expired/add",
    "root": "domain",
    "title": "Додавання звільненого домену до кошика",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/expired/add/",
    "params": [
      {
        "name": "expired_domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3908,
    "path": "domain/expired/check",
    "root": "domain",
    "title": "Оновлення інформації про термін закінчення реєстрації домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/expired/check/",
    "params": [
      {
        "name": "expired_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 87,
    "path": "domain/expired/export",
    "root": "domain",
    "title": "Завантаження списку звільнених доменів у форматі CSV",
    "method": "GET",
    "endpoint": "https://adm.tools/action/domain/expired/export/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "dates",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "sort",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'trust', 'spam', 'prcy', 'lp_index', 'lp_in', 'lp_out'"
      },
      {
        "name": "by",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'desc', 'asc'"
      }
    ]
  },
  {
    "id": 88,
    "path": "domain/expired/load",
    "root": "domain",
    "title": "Отримання списку звільнених доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/expired/load/",
    "params": [
      {
        "name": "single_row_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "domain",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "zone_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "sort",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": ""
      },
      {
        "name": "by",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'desc', 'asc'"
      },
      {
        "name": "date_from",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "date_to",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 3909,
    "path": "domain/favourite/delete",
    "root": "domain",
    "title": "Видалення набору доменних зон",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/favourite/delete/",
    "params": [
      {
        "name": "list_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3910,
    "path": "domain/favourite/load",
    "root": "domain",
    "title": "Отримання списку наборів доменних зон",
    "method": "GET",
    "endpoint": "https://adm.tools/action/domain/favourite/load/",
    "params": []
  },
  {
    "id": 3912,
    "path": "domain/favourite/save",
    "root": "domain",
    "title": "Створення/зміна набору доменних зон",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/favourite/save/",
    "params": [
      {
        "name": "list",
        "type": "Array",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "list_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62466,
    "path": "domain/prices",
    "root": "domain",
    "title": "Отримання цін на домени у форматі JSON",
    "method": "GET",
    "endpoint": "https://adm.tools/action/domain/prices/",
    "params": []
  },
  {
    "id": 89,
    "path": "domain/register",
    "root": "domain",
    "title": "Перевірка доступності домену та формування рахунку на реєстрацію",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/register/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 91,
    "path": "domain/registration/process",
    "root": "domain",
    "title": "Реєстрація домену .UA",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/registration/process/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      },
      {
        "name": "tm_code",
        "type": "String",
        "required": true
      },
      {
        "name": "is_check",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "process_request_confirmed",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 93,
    "path": "domain/return",
    "root": "domain",
    "title": "Створення заявки на видалення домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/return/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "reason",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62252,
    "path": "domain/sale/delete",
    "root": "domain",
    "title": "Зняття домену з продажу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/sale/delete/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62253,
    "path": "domain/sale/edit",
    "root": "domain",
    "title": "Виставлення/налаштування домену на продаж",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/sale/edit/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      },
      {
        "name": "contacts",
        "type": "String",
        "required": true
      },
      {
        "name": "price",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "currency_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": "980, 978, 840"
      },
      {
        "name": "additional_info",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 95,
    "path": "domain/sale/load",
    "root": "domain",
    "title": "Отримання списку доменів на продаж",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/sale/load/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "sort",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'trust', 'spam', 'prcy', 'lp_index', 'lp_in', 'lp_out'"
      },
      {
        "name": "by",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'desc', 'asc', 'delete'"
      }
    ]
  },
  {
    "id": 96,
    "path": "domain/tracking/export",
    "root": "domain",
    "title": "Завантаження списку відстежуваних доменів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/domain/tracking/export/",
    "params": []
  },
  {
    "id": 97,
    "path": "domain/tracking/get",
    "root": "domain",
    "title": "Отримання списку відслідковуються доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/tracking/get/",
    "params": [
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "status",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'checking', 'free_in_month', 'free_soon', 'occupied'"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 98,
    "path": "domain/tracking/remove",
    "root": "domain",
    "title": "Видалення домену з відстежуваних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/tracking/remove/",
    "params": [
      {
        "name": "id",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 99,
    "path": "domain/tracking/track",
    "root": "domain",
    "title": "Додавання доменів до відстежуваних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/tracking/track/",
    "params": [
      {
        "name": "domains",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 62460,
    "path": "domain/transfer/confirm",
    "root": "domain",
    "title": "Замовлення трансферу домену до нас",
    "method": "POST",
    "endpoint": "https://adm.tools/action/domain/transfer/confirm/",
    "params": [
      {
        "name": "domain",
        "type": "Array",
        "required": true
      },
      {
        "name": "auth_code",
        "type": "Array",
        "required": true
      },
      {
        "name": "promocode",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 100,
    "path": "domain/zones",
    "root": "domain",
    "title": "Отримання списку доменних зон",
    "method": "GET",
    "endpoint": "https://adm.tools/action/domain/zones/",
    "params": []
  },
  {
    "id": 14527,
    "path": "extra/hosting_ip",
    "root": "extra",
    "title": "Замовлення виділеної IP-адреси",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/hosting_ip/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 12856,
    "path": "extra/hosting_ip_drop",
    "root": "extra",
    "title": "Відновлення продовження додаткової послуги",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/hosting_ip_drop/",
    "params": [
      {
        "name": "ip_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15201,
    "path": "extra/list",
    "root": "extra",
    "title": "Отримання списку додаткових послуг",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15203,
    "path": "extra/memcache",
    "root": "extra",
    "title": "Замовлення Memcache",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/memcache/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ram",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "list",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 23028,
    "path": "extra/memcache/drop",
    "root": "extra",
    "title": "Видалення замовлення Memcache",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/memcache/drop/",
    "params": [
      {
        "name": "order_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 21508,
    "path": "extra/memcache/systemd_start",
    "root": "extra",
    "title": "Запускаємо процес systemd Memcached",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/memcache/systemd_start/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 14203,
    "path": "extra/opcache",
    "root": "extra",
    "title": "Замовлення OPCache",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/opcache/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "opcache",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 53636,
    "path": "extra/opcache/drop",
    "root": "extra",
    "title": "Відмова/видалення/відновлення opcache",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/opcache/drop/",
    "params": [
      {
        "name": "order_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62164,
    "path": "extra/opcache/jit",
    "root": "extra",
    "title": "Встановлюємо налаштування jit",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/opcache/jit/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "jit_cpu",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": "0, 1"
      },
      {
        "name": "jit_allocation",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": "0, 1, 2"
      },
      {
        "name": "jit_trigger",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": "0, 1, 2, 3, 4, 5"
      },
      {
        "name": "jit_level",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": "0, 1, 2, 3, 4, 5"
      },
      {
        "name": "jit_buffer_size_mb",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": ""
      }
    ]
  },
  {
    "id": 62165,
    "path": "extra/opcache/order",
    "root": "extra",
    "title": "Замовлення OPCache",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/opcache/order/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "memory",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": ""
      },
      {
        "name": "revalidate_freq",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 15208,
    "path": "extra/redis",
    "root": "extra",
    "title": "Замовлення Redis",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/redis/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ram",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 23518,
    "path": "extra/redis/drop",
    "root": "extra",
    "title": "Видалення замовлення на Redis",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/redis/drop/",
    "params": [
      {
        "name": "order_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 21509,
    "path": "extra/redis/systemd_start",
    "root": "extra",
    "title": "Запускаємо процес systemd Redis",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/redis/systemd_start/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53637,
    "path": "extra/sphinx/apply",
    "root": "extra",
    "title": "Оновлює конфігурацію Sphinx на сервері",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/apply/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53937,
    "path": "extra/sphinx/attr",
    "root": "extra",
    "title": "Зберігає налаштування даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/attr/",
    "params": [
      {
        "name": "sphinx_index_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "fields",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "type",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": "'uint', 'bool', 'bigint', 'timestamp', 'float', 'string', 'json', 'id', 'fulltext'"
      }
    ]
  },
  {
    "id": 21510,
    "path": "extra/sphinx/config",
    "root": "extra",
    "title": "Попередній перегляд конфігурації",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/config/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53787,
    "path": "extra/sphinx/config_load",
    "root": "extra",
    "title": "Отримання конфіга Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/config_load/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53638,
    "path": "extra/sphinx/config_save",
    "root": "extra",
    "title": "Збереження конфігурації",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/config_save/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "config",
        "type": "String",
        "required": true
      },
      {
        "name": "socket_type",
        "type": "String",
        "required": false,
        "defaultValue": "'mysql'",
        "values": "'mysql', 'sphinx'"
      },
      {
        "name": "logging",
        "type": "Bool",
        "required": false,
        "defaultValue": "1",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 53938,
    "path": "extra/sphinx/crontab",
    "root": "extra",
    "title": "Налаштування частоти оновлення індексу Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/crontab/",
    "params": [
      {
        "name": "index_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "crontab_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "minute",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "hour",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "day",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "week",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "month",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 53788,
    "path": "extra/sphinx/db",
    "root": "extra",
    "title": "Зберігаємо налаштування підключення до БД, яка є джерелом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/db/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_host",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_db",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_user",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_pass",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 53789,
    "path": "extra/sphinx/db_connection",
    "root": "extra",
    "title": "Перевірка підключення до БД",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/db_connection/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53790,
    "path": "extra/sphinx/db_delete",
    "root": "extra",
    "title": "Видалення бази даних з якої беруться дані для sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/db_delete/",
    "params": [
      {
        "name": "sphinx_db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53939,
    "path": "extra/sphinx/db_edit",
    "root": "extra",
    "title": "Зберігаємо налаштування підключення до БД, яка є джерелом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/db_edit/",
    "params": [
      {
        "name": "sphinx_db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_host",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_db",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_user",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_pass",
        "type": "String",
        "required": true
      },
      {
        "name": "sql_port",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 23029,
    "path": "extra/sphinx/drop",
    "root": "extra",
    "title": "Видалення послуги Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/drop/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 23030,
    "path": "extra/sphinx/index",
    "root": "extra",
    "title": "Збереження запиту в БД для формування індексу Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/index/",
    "params": [
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "sphinx_db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "sql_query",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 53639,
    "path": "extra/sphinx/index_delete",
    "root": "extra",
    "title": "Видалення індексу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/index_delete/",
    "params": [
      {
        "name": "sphinx_index_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 21511,
    "path": "extra/sphinx/index_edit",
    "root": "extra",
    "title": "Зміна індексу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/index_edit/",
    "params": [
      {
        "name": "sphinx_index_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "sphinx_db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "sql_query",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62516,
    "path": "extra/sphinx/index_settings",
    "root": "extra",
    "title": "Отримання налаштувань індексу Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/index_settings/",
    "params": [
      {
        "name": "sphinx_index_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53940,
    "path": "extra/sphinx/index_update",
    "root": "extra",
    "title": "Сформувати індекс sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/index_update/",
    "params": [
      {
        "name": "sphinx_index_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62499,
    "path": "extra/sphinx/index/delete",
    "root": "extra",
    "title": "Видалення періодичності формування індексу (редагування cron-завдання)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/index/delete/",
    "params": [
      {
        "name": "crontab_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62500,
    "path": "extra/sphinx/index/list",
    "root": "extra",
    "title": "Отримання списку індексів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/index/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53640,
    "path": "extra/sphinx/log",
    "root": "extra",
    "title": "Перегляд лога Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/log/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53941,
    "path": "extra/sphinx/logs",
    "root": "extra",
    "title": "Лог Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/logs/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 23390,
    "path": "extra/sphinx/mode",
    "root": "extra",
    "title": "Переключення між ручним та автоматичним режимом конфігурації",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/mode/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "is_manual",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 21512,
    "path": "extra/sphinx/params",
    "root": "extra",
    "title": "Налаштування індексу Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/params/",
    "params": [
      {
        "name": "index_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "morphology",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "html_strip",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "index_exact_words",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "expand_keywords",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "min_word_len",
        "type": "Int",
        "required": false,
        "defaultValue": "3"
      },
      {
        "name": "min_infix_len",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "min_prefix_len",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "wordforms",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "charset_table",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "ignore_chars",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 21513,
    "path": "extra/sphinx/query",
    "root": "extra",
    "title": "Створення додаткового запиту SQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/query/",
    "params": [
      {
        "name": "sphinx_index_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "sql_query",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 52768,
    "path": "extra/sphinx/query_delete",
    "root": "extra",
    "title": "Видалення запиту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/query_delete/",
    "params": [
      {
        "name": "query_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 21514,
    "path": "extra/sphinx/query_edit",
    "root": "extra",
    "title": "Зміна додаткового запиту SQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/query_edit/",
    "params": [
      {
        "name": "query_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "sql_query",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 21515,
    "path": "extra/sphinx/sort",
    "root": "extra",
    "title": "Змінює порядок виконання SQL запитів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/sort/",
    "params": [
      {
        "name": "order",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 21517,
    "path": "extra/sphinx/systemd_start",
    "root": "extra",
    "title": "Запуск процесу Sphinx",
    "method": "POST",
    "endpoint": "https://adm.tools/action/extra/sphinx/systemd_start/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62229,
    "path": "get_plans",
    "root": "get_plans",
    "title": "Отримання списку тарифів послуги",
    "method": "POST",
    "endpoint": "https://adm.tools/action/get_plans/",
    "params": [
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'account', 'vps', 'storage', 'mail', 'redis', 'mysql', 'rabbitmq', 'manticore', 'postgresql'"
      }
    ]
  },
  {
    "id": 62187,
    "path": "get_services",
    "root": "get_services",
    "title": "Отримання списку послуг/хостів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/get_services/",
    "params": [
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'account', 'host', 'vps', 'dedicated', 'domain', 'storage', 'mail', 'mongo', 'redis', 'mysql', 'rabbitmq', 'manticore', 'postgresql'"
      }
    ]
  },
  {
    "id": 62166,
    "path": "gov/company_update",
    "root": "gov",
    "title": "Отримання даних про компанію з державного реєстру",
    "method": "POST",
    "endpoint": "https://adm.tools/action/gov/company_update/",
    "params": [
      {
        "name": "egrpou",
        "type": "String",
        "required": true
      },
      {
        "name": "is_client",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62507,
    "path": "gov/court_document",
    "root": "gov",
    "title": "Отримання даних про рішення суду",
    "method": "POST",
    "endpoint": "https://adm.tools/action/gov/court_document/",
    "params": [
      {
        "name": "document_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "year",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62281,
    "path": "gov/court_search",
    "root": "gov",
    "title": "Пошук за реєстром судових рішень",
    "method": "POST",
    "endpoint": "https://adm.tools/action/gov/court_search/",
    "params": [
      {
        "name": "q",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62432,
    "path": "hosting/access/billing",
    "root": "hosting",
    "title": "Налаштування доступу до зміни тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/access/billing/",
    "params": [
      {
        "name": "access_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "grant_billing",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 11330,
    "path": "hosting/access/grant",
    "root": "hosting",
    "title": "Делегування доступу до послуги",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/access/grant/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "user_login",
        "type": "String",
        "required": true
      },
      {
        "name": "is_mailbox",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "grant_billing",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15217,
    "path": "hosting/access/mailbox",
    "root": "hosting",
    "title": "Налаштування доступу до поштових скриньок хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/access/mailbox/",
    "params": [
      {
        "name": "access_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "is_mailbox",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 11769,
    "path": "hosting/access/notification",
    "root": "hosting",
    "title": "Налаштування сповіщень для делегованої послуги",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/access/notification/",
    "params": [
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "access_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "is_notification",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15218,
    "path": "hosting/access/refuse",
    "root": "hosting",
    "title": "Відмова від делегованого доступу до послуги",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/access/refuse/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": ""
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15219,
    "path": "hosting/access/revoke",
    "root": "hosting",
    "title": "Скасування делегованого доступу до послуги",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/access/revoke/",
    "params": [
      {
        "name": "access_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62457,
    "path": "hosting/account/app/systemd/info",
    "root": "hosting",
    "title": "Отримання інформації про веб-додаток",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/app/systemd/info/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62064,
    "path": "hosting/account/app/systemd/pause",
    "root": "hosting",
    "title": "Зупинка веб-додатку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/app/systemd/pause/",
    "params": [
      {
        "name": "systemd_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62065,
    "path": "hosting/account/app/systemd/restart",
    "root": "hosting",
    "title": "Перезапуск веб-додатка",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/app/systemd/restart/",
    "params": [
      {
        "name": "systemd_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 51498,
    "path": "hosting/account/app/systemd/start",
    "root": "hosting",
    "title": "Запуск веб-додатку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/app/systemd/start/",
    "params": [
      {
        "name": "systemd_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62066,
    "path": "hosting/account/app/systemd/update",
    "root": "hosting",
    "title": "Зміна налаштувань запуску веб-додатка",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/app/systemd/update/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "command",
        "type": "String",
        "required": true
      },
      {
        "name": "run_dir",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 106,
    "path": "hosting/account/archive/list",
    "root": "hosting",
    "title": "Виведення списку архівних акаунтів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/hosting/account/archive/list/",
    "params": []
  },
  {
    "id": 108,
    "path": "hosting/account/archive/send",
    "root": "hosting",
    "title": "Замовлення відновлення хостинг аккаунта з архіву і виписка рахунку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/archive/send/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62325,
    "path": "hosting/account/charts/cpu",
    "root": "hosting",
    "title": "Отримання графіка використання центрального процесора",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/cpu/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62326,
    "path": "hosting/account/charts/db_requests",
    "root": "hosting",
    "title": "Отримання графіка запитів до баз даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/db_requests/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62327,
    "path": "hosting/account/charts/ep",
    "root": "hosting",
    "title": "Отримання графіка Entry processes",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/ep/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62329,
    "path": "hosting/account/charts/io",
    "root": "hosting",
    "title": "Отримання графіка IO",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/io/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62331,
    "path": "hosting/account/charts/nproc",
    "root": "hosting",
    "title": "Отримання графіка Number of Processes",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/nproc/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62332,
    "path": "hosting/account/charts/pmem",
    "root": "hosting",
    "title": "Отримання графіка використання оперативної пам’яті",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/pmem/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62333,
    "path": "hosting/account/charts/requests",
    "root": "hosting",
    "title": "Отримання графіка запитів до веб-сервера",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/requests/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62334,
    "path": "hosting/account/charts/sa",
    "root": "hosting",
    "title": "Отримання графіка використання процесорних хвилин",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/sa/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62335,
    "path": "hosting/account/charts/save",
    "root": "hosting",
    "title": "Налаштування графіків",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/charts/save/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "chart",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 62481,
    "path": "hosting/account/cms/builder/install/status",
    "root": "hosting",
    "title": "Отримання інформації про поточну установку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/builder/install/status/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62482,
    "path": "hosting/account/cms/builder/install/template",
    "root": "hosting",
    "title": "Установка шаблона",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/builder/install/template/",
    "params": [
      {
        "name": "template_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62483,
    "path": "hosting/account/cms/builder/load_templates",
    "root": "hosting",
    "title": "Отримання списку шаблонів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/builder/load_templates/",
    "params": [
      {
        "name": "category_id",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "templates_per_page",
        "type": "Int",
        "required": false,
        "defaultValue": "20"
      }
    ]
  },
  {
    "id": 62484,
    "path": "hosting/account/cms/builder/template",
    "root": "hosting",
    "title": "Отримання інформації про шаблон",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/builder/template/",
    "params": [
      {
        "name": "template_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "host_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62254,
    "path": "hosting/account/cms/install/cancel",
    "root": "hosting",
    "title": "Скасування запиту на автоінсталяцію CMS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/install/cancel/",
    "params": [
      {
        "name": "request_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62255,
    "path": "hosting/account/cms/install/request_settings",
    "root": "hosting",
    "title": "Отримання параметрів запиту на автоінсталяцію CMS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/install/request_settings/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "request_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62256,
    "path": "hosting/account/cms/install/requests",
    "root": "hosting",
    "title": "Отримання списку запитів на автоінсталяцію CMS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/install/requests/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62257,
    "path": "hosting/account/cms/install/select_version",
    "root": "hosting",
    "title": "Вибір версії CMS для автоінсталяції та отримання її налаштувань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/install/select_version/",
    "params": [
      {
        "name": "version_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62456,
    "path": "hosting/account/cms/install/send",
    "root": "hosting",
    "title": "Створення запиту на встановлення CMS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/install/send/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "version_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_database_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_user_password",
        "type": "String",
        "required": true
      },
      {
        "name": "document_root_suffix",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "lang",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'ru', 'en', 'uk'"
      },
      {
        "name": "site_builder",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "template_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "param_admin",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_email",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_name",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_firstname",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_lastname",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_title",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_title_short",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_site_email",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "database_service",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "is_clear_database",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62485,
    "path": "hosting/account/cms/wordpress/plugins/delete",
    "root": "hosting",
    "title": "Видалення плагіна",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/plugins/delete/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plugin",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62486,
    "path": "hosting/account/cms/wordpress/plugins/list",
    "root": "hosting",
    "title": "Отримання списку встановлених плагінів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/plugins/list/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62479,
    "path": "hosting/account/cms/wordpress/plugins/toggle",
    "root": "hosting",
    "title": "Увімкнення/вимкнення плагіна",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/plugins/toggle/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plugin",
        "type": "String",
        "required": true
      },
      {
        "name": "activate",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62487,
    "path": "hosting/account/cms/wordpress/plugins/update",
    "root": "hosting",
    "title": "Оновлення плагіна",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/plugins/update/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plugin",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62488,
    "path": "hosting/account/cms/wordpress/plugins/verify",
    "root": "hosting",
    "title": "Перевірка файлів плагінів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/plugins/verify/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62317,
    "path": "hosting/account/cms/wordpress/profiler/list",
    "root": "hosting",
    "title": "Запуск профілювання",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/profiler/list/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "url",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62318,
    "path": "hosting/account/cms/wordpress/profiler/stage",
    "root": "hosting",
    "title": "Отримання детальної інформації про етап профілювання",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/profiler/stage/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "stage",
        "type": "String",
        "required": true,
        "values": "'bootstrap', 'main_query', 'template'"
      },
      {
        "name": "url",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62489,
    "path": "hosting/account/cms/wordpress/restore",
    "root": "hosting",
    "title": "Відновлення файлів ядра",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/cms/wordpress/restore/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 116,
    "path": "hosting/account/delete",
    "root": "hosting",
    "title": "Видалення хостинг-аккаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/delete/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 117,
    "path": "hosting/account/diskspace",
    "root": "hosting",
    "title": "Споживання місце на диску",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/diskspace/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 14849,
    "path": "hosting/account/goaccess",
    "root": "hosting",
    "title": "Генерація та отримання звіту GoAccess для сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/goaccess/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'now'"
      },
      {
        "name": "period",
        "type": "String",
        "required": false,
        "defaultValue": "'date'",
        "values": "'date', 'month'"
      }
    ]
  },
  {
    "id": 14850,
    "path": "hosting/account/ip_check",
    "root": "hosting",
    "title": "Перевірка блокування IP-адреси системою захисту від DDoS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/ip_check/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 19194,
    "path": "hosting/account/ip_unblock",
    "root": "hosting",
    "title": "Розблокування IP-адреси, заблокованої системою захисту від DDoS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/ip_unblock/",
    "params": [
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 131,
    "path": "hosting/account/list",
    "root": "hosting",
    "title": "Отримання списку хостинг-акаунтів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/hosting/account/list/",
    "params": []
  },
  {
    "id": 15228,
    "path": "hosting/account/migration",
    "root": "hosting",
    "title": "Зміна країни хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/migration/",
    "params": [
      {
        "name": "country_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_migration_lock",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 132,
    "path": "hosting/account/migration_cancel",
    "root": "hosting",
    "title": "Скасування міграції аккаунта в іншу країну",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/migration_cancel/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62358,
    "path": "hosting/account/nodejs/params",
    "root": "hosting",
    "title": "Налаштування додавання параметрів --host --port",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/nodejs/params/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "value",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 8433,
    "path": "hosting/account/nodejs/reload",
    "root": "hosting",
    "title": "Примусовий перезапуск програми",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/nodejs/reload/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 6931,
    "path": "hosting/account/nodejs/status",
    "root": "hosting",
    "title": "Отримання статусу програми",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/nodejs/status/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 7057,
    "path": "hosting/account/nodejs/stop",
    "root": "hosting",
    "title": "Примусова зупинка програми",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/nodejs/stop/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3915,
    "path": "hosting/account/order",
    "root": "hosting",
    "title": "Замовлення нового хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/order/",
    "params": [
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "promocode",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 134,
    "path": "hosting/account/outgoing/block_add",
    "root": "hosting",
    "title": "Блокування вихідного з’єднання",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/outgoing/block_add/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "port",
        "type": "Int",
        "required": true
      },
      {
        "name": "protocol",
        "type": "String",
        "required": false,
        "defaultValue": "'TCP'",
        "values": "'TCP', 'UDP', 'ICMP'"
      }
    ]
  },
  {
    "id": 135,
    "path": "hosting/account/outgoing/block_all",
    "root": "hosting",
    "title": "Блокування всіх вихідних з’єднань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/outgoing/block_all/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 136,
    "path": "hosting/account/outgoing/block_delete",
    "root": "hosting",
    "title": "Розблокування вихідного з’єднання",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/outgoing/block_delete/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip_id",
        "type": "Array",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 137,
    "path": "hosting/account/outgoing/blocked",
    "root": "hosting",
    "title": "Отримання списку заблокованих вихідних з’єднань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/outgoing/blocked/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62462,
    "path": "hosting/account/outgoing/ip_set",
    "root": "hosting",
    "title": "Налаштування IP для вихідних з’єднань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/outgoing/ip_set/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "output_ip_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 138,
    "path": "hosting/account/outgoing/list",
    "root": "hosting",
    "title": "Отримання списку вихідних з’єднань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/outgoing/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'now'"
      },
      {
        "name": "sort",
        "type": "String",
        "required": false,
        "defaultValue": "'connections_count'",
        "values": "'connections_count', 'date'"
      },
      {
        "name": "by",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'desc', 'asc'"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 15229,
    "path": "hosting/account/outgoing/unblock_all",
    "root": "hosting",
    "title": "Розблокування всіх вихідних з’єднань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/outgoing/unblock_all/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15230,
    "path": "hosting/account/plan/change",
    "root": "hosting",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/plan/change/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "new_plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15231,
    "path": "hosting/account/plan/change_list",
    "root": "hosting",
    "title": "Отримання списку доступних тарифів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/plan/change_list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62260,
    "path": "hosting/account/plan/history",
    "root": "hosting",
    "title": "Отримання історії змін тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/plan/history/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15232,
    "path": "hosting/account/plan/info",
    "root": "hosting",
    "title": "Отримання інформації про поточний тариф",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/plan/info/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 141,
    "path": "hosting/account/quota",
    "root": "hosting",
    "title": "Інформація про використовуваних хостинг аккаунтом ресурсах",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/quota/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 142,
    "path": "hosting/account/server_status",
    "root": "hosting",
    "title": "Виведення інформації про стан серверів по датах",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/server_status/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'yesterday'"
      }
    ]
  },
  {
    "id": 62490,
    "path": "hosting/account/settings/alias",
    "root": "hosting",
    "title": "Створення псевдоніма",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/settings/alias/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "alias",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "command",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62491,
    "path": "hosting/account/settings/cagefs_remount",
    "root": "hosting",
    "title": "remount cagefs для облікового запису",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/settings/cagefs_remount/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62492,
    "path": "hosting/account/settings/check_tmp",
    "root": "hosting",
    "title": "Перевірка tmp директорії tmp директорії cagefs",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/settings/check_tmp/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62493,
    "path": "hosting/account/settings/go",
    "root": "hosting",
    "title": "Зміна версії Go",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/settings/go/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "go_version_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62494,
    "path": "hosting/account/settings/nodejs",
    "root": "hosting",
    "title": "Зміна версії Node.js",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/settings/nodejs/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "node_version_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62495,
    "path": "hosting/account/settings/php",
    "root": "hosting",
    "title": "Зміна версії PHP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/settings/php/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "php_version",
        "type": "String",
        "required": true,
        "values": "'php4', 'php52', 'php53', 'php54', 'php55', 'php56', 'php70', 'php71', 'php72', 'php73', 'php74', 'php80', 'php81', 'php82', 'php83', 'php84', 'php85'"
      }
    ]
  },
  {
    "id": 62496,
    "path": "hosting/account/settings/python",
    "root": "hosting",
    "title": "Зміна версії Python",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/settings/python/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "python_version_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 143,
    "path": "hosting/account/ssh/add_key",
    "root": "hosting",
    "title": "Додавання SSH-ключа",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/ssh/add_key/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "key_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 146,
    "path": "hosting/account/ssh/delete_key",
    "root": "hosting",
    "title": "Видалення SSH-ключа",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/ssh/delete_key/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "key_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3917,
    "path": "hosting/account/ssh/kill_processes",
    "root": "hosting",
    "title": "Примусове завершення всіх процесів хостинг-облікового запису",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/ssh/kill_processes/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 150,
    "path": "hosting/account/ssh/passwd/send",
    "root": "hosting",
    "title": "Зміна пароля SSH",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/ssh/passwd/send/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 15233,
    "path": "hosting/account/title",
    "root": "hosting",
    "title": "Перейменування хостинг-аккаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/title/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "account_title",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62113,
    "path": "hosting/account/top_load_hosts",
    "root": "hosting",
    "title": "Рейтинг сайтів за навантаженням на сервер",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/account/top_load_hosts/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 13714,
    "path": "hosting/credit",
    "root": "hosting",
    "title": "Продовження хостинг-акаунта в кредит",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/credit/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 160,
    "path": "hosting/crontab/edit",
    "root": "hosting",
    "title": "Додати / редагувати завдання cron",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/crontab/edit/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "task",
        "type": "String",
        "required": true
      },
      {
        "name": "admin_email",
        "type": "String",
        "required": true
      },
      {
        "name": "task_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "concurrent_kill",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "comment",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "minute",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "hour",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "day",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "week",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "month",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "disable_handle",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "send_run_report",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "send_kill_report",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 161,
    "path": "hosting/crontab/list",
    "root": "hosting",
    "title": "Отримання списку завдань cron",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/crontab/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 163,
    "path": "hosting/crontab/task_delete",
    "root": "hosting",
    "title": "Видалення завдання cron",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/crontab/task_delete/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 164,
    "path": "hosting/crontab/task_test",
    "root": "hosting",
    "title": "Тестовий запуск завдання cron",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/crontab/task_test/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 165,
    "path": "hosting/crontab/update_active",
    "root": "hosting",
    "title": "Включення / відключення завдання cron",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/crontab/update_active/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15234,
    "path": "hosting/db/acl_get",
    "root": "hosting",
    "title": "Отримання списку дозволених для підключення IP облікового запису",
    "method": "GET",
    "endpoint": "https://adm.tools/action/hosting/db/acl_get/",
    "params": [
      {
        "name": "i",
        "type": "String",
        "required": true
      },
      {
        "name": "t",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "a",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "h",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 49629,
    "path": "hosting/firewall/add",
    "root": "hosting",
    "title": "Додавання IP до білого списку Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/firewall/add/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "note",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62425,
    "path": "hosting/firewall/delete",
    "root": "hosting",
    "title": "Видалення IP з білого списку Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/firewall/delete/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 49630,
    "path": "hosting/firewall/list",
    "root": "hosting",
    "title": "Отримання білого списку Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/firewall/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 166,
    "path": "hosting/ftp/access_list",
    "root": "hosting",
    "title": "Отримання списку дозволених IP для доступу по FTP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/ftp/access_list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 167,
    "path": "hosting/ftp/add_account",
    "root": "hosting",
    "title": "Додавання FTP-користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/ftp/add_account/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "homedir",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "is_readonly",
        "type": "Int",
        "required": false,
        "defaultValue": "false"
      }
    ]
  },
  {
    "id": 168,
    "path": "hosting/ftp/delete_access",
    "root": "hosting",
    "title": "Видалення дозволених IP зі списку доступу по FTP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/ftp/delete_access/",
    "params": [
      {
        "name": "ip_id",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 169,
    "path": "hosting/ftp/delete_account",
    "root": "hosting",
    "title": "Видалення FTP-користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/ftp/delete_account/",
    "params": [
      {
        "name": "ftp_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 170,
    "path": "hosting/ftp/edit_access",
    "root": "hosting",
    "title": "Зміна налаштувань безпеки FTP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/ftp/edit_access/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 171,
    "path": "hosting/ftp/edit_account",
    "root": "hosting",
    "title": "Зміна налаштувань FTP-користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/ftp/edit_account/",
    "params": [
      {
        "name": "ftp_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "homedir",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "is_readonly",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 172,
    "path": "hosting/ftp/list",
    "root": "hosting",
    "title": "Отримання списку FTP-користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/ftp/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15235,
    "path": "hosting/inform",
    "root": "hosting",
    "title": "Кількість днів, що залишилися до кінця терміну домену",
    "method": "GET",
    "endpoint": "https://adm.tools/action/hosting/inform/",
    "params": [
      {
        "name": "name",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "lang",
        "type": "String",
        "required": false,
        "defaultValue": "'rus'",
        "values": "'rus', 'ukr'"
      },
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'logo'",
        "values": "'logo', 'number'"
      }
    ]
  },
  {
    "id": 15236,
    "path": "hosting/log/cron",
    "root": "hosting",
    "title": "Отримання лога cron",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/cron/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15237,
    "path": "hosting/log/ftp",
    "root": "hosting",
    "title": "Отримання логу FTP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/ftp/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 62115,
    "path": "hosting/log/nginx-online",
    "root": "hosting",
    "title": "Показуємо логи для сайту в режимі реального часу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/nginx-online/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15243,
    "path": "hosting/log/php/fpm",
    "root": "hosting",
    "title": "Отримання лога помилок сайту (PHP-FPM)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/php/fpm/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 15244,
    "path": "hosting/log/php/log",
    "root": "hosting",
    "title": "Отримання лога помилок PHP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/php/log/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 15245,
    "path": "hosting/log/web/apache",
    "root": "hosting",
    "title": "Отримання логів помилок сайту (Apache)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/web/apache/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 24387,
    "path": "hosting/log/web/litespeed",
    "root": "hosting",
    "title": "Отримання логів помилок сайту (OpenLiteSpeed)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/web/litespeed/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 15247,
    "path": "hosting/log/web/nginx",
    "root": "hosting",
    "title": "Отримання лога доступу до сайту (nginx)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/log/web/nginx/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 3736,
    "path": "hosting/memcache/restart",
    "root": "hosting",
    "title": "Перезавантаження процесу Memcache для очищення даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/memcache/restart/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3868,
    "path": "hosting/monitoring/add",
    "root": "hosting",
    "title": "Додавання нового правила моніторингу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/monitoring/add/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": "'vps', 'dedicated'"
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "frequency",
        "type": "Int",
        "required": true
      },
      {
        "name": "notify_ignore",
        "type": "Int",
        "required": false,
        "defaultValue": "60",
        "values": "30, 60, 120"
      },
      {
        "name": "param_url",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_domain_ip",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_word",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_port",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "param_host",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_username",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "param_max_process_count",
        "type": "Int",
        "required": false,
        "defaultValue": "2"
      }
    ]
  },
  {
    "id": 439,
    "path": "hosting/monitoring/load_rules",
    "root": "hosting",
    "title": "Отримання переліку правил моніторингу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/monitoring/load_rules/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": "'vps', 'dedicated'"
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3920,
    "path": "hosting/monitoring/remove",
    "root": "hosting",
    "title": "Видалення правила моніторингу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/monitoring/remove/",
    "params": [
      {
        "name": "rule_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 833,
    "path": "hosting/monitoring/update_active",
    "root": "hosting",
    "title": "Включення / відключення правила моніторингу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/monitoring/update_active/",
    "params": [
      {
        "name": "rule_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "delay_hours",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 14851,
    "path": "hosting/mysql/dbinterface/clear",
    "root": "hosting",
    "title": "Очищення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/clear/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62119,
    "path": "hosting/mysql/dbinterface/copy_db",
    "root": "hosting",
    "title": "Створення копії бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/copy_db/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 14204,
    "path": "hosting/mysql/dbinterface/create",
    "root": "hosting",
    "title": "Створення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/create/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "collation_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "create_user",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15257,
    "path": "hosting/mysql/dbinterface/dbsize",
    "root": "hosting",
    "title": "Оновлення інформації про розмір бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/dbsize/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15258,
    "path": "hosting/mysql/dbinterface/delete",
    "root": "hosting",
    "title": "Видалення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/delete/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62346,
    "path": "hosting/mysql/dbinterface/get_collations",
    "root": "hosting",
    "title": "Отримання списку доступних кодувань",
    "method": "GET",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/get_collations/",
    "params": []
  },
  {
    "id": 213,
    "path": "hosting/mysql/dbinterface/ip_access_table",
    "root": "hosting",
    "title": "Отримання списку IP, з яких дозволений доступ до MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/ip_access_table/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62344,
    "path": "hosting/mysql/dbinterface/kill_procs",
    "root": "hosting",
    "title": "Примусове завершення процесів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/kill_procs/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 214,
    "path": "hosting/mysql/dbinterface/load",
    "root": "hosting",
    "title": "Отримання списку баз даних хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/load/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 13842,
    "path": "hosting/mysql/dbinterface/optimize",
    "root": "hosting",
    "title": "Оптимізація таблиць бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/optimize/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15261,
    "path": "hosting/mysql/dbinterface/phpmyadmin/2fa_status",
    "root": "hosting",
    "title": "Перевіряємо, чи включена 2fa на акаунтах баз даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/phpmyadmin/2fa_status/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "reload",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15262,
    "path": "hosting/mysql/dbinterface/repair",
    "root": "hosting",
    "title": "Запуск REPAIR TABLE для бази даних MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/repair/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 28584,
    "path": "hosting/mysql/dbinterface/settings",
    "root": "hosting",
    "title": "Зміна налаштувань MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/settings/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_version_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_migration_lock",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "long_query_time",
        "type": "Float",
        "required": false,
        "defaultValue": "5"
      }
    ]
  },
  {
    "id": 217,
    "path": "hosting/mysql/dbinterface/stat_account_top",
    "root": "hosting",
    "title": "Отримання списку користувачів баз даних, які створюють найбільше навантаження на сервер",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/stat_account_top/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'now'"
      }
    ]
  },
  {
    "id": 15263,
    "path": "hosting/mysql/dbinterface/user_create",
    "root": "hosting",
    "title": "Створення користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/user_create/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 15264,
    "path": "hosting/mysql/dbinterface/user_delete",
    "root": "hosting",
    "title": "Видалення користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/user_delete/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15265,
    "path": "hosting/mysql/dbinterface/user_password",
    "root": "hosting",
    "title": "Зміна пароля користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/user_password/",
    "params": [
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 15266,
    "path": "hosting/mysql/dbinterface/user_privileges",
    "root": "hosting",
    "title": "Зміна привілеїв користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/user_privileges/",
    "params": [
      {
        "name": "db_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 15268,
    "path": "hosting/mysql/dbinterface/wrap",
    "root": "hosting",
    "title": "Увімкнення/вимкнення доступу до MySQL за IP-адресою",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/wrap/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_wrap_active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "ip",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 223,
    "path": "hosting/mysql/dbinterface/wrap_delete",
    "root": "hosting",
    "title": "Видалення дозволених IP-адрес доступу до MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/dbinterface/wrap_delete/",
    "params": [
      {
        "name": "wrap_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62470,
    "path": "hosting/mysql/errors",
    "root": "hosting",
    "title": "Отримання списку помилок MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/errors/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62283,
    "path": "hosting/mysql/performance/general_log/flush_log",
    "root": "hosting",
    "title": "Очищення журналу запитів до MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/performance/general_log/flush_log/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62192,
    "path": "hosting/mysql/performance/general_log/settings",
    "root": "hosting",
    "title": "Увімкнення/вимкнення журналу запитів до MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/performance/general_log/settings/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_general_log",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62512,
    "path": "hosting/mysql/performance/performance_schema/processlist",
    "root": "hosting",
    "title": "Отримання списку активних процесів MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/performance/performance_schema/processlist/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62508,
    "path": "hosting/mysql/performance/performance_schema/query",
    "root": "hosting",
    "title": "Отримання журналу продуктивності MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/performance/performance_schema/query/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "sort_field",
        "type": "String",
        "required": false,
        "defaultValue": "'max_timer_wait'",
        "values": "'', 'max_timer_wait', 'count_star', 'sum_rows_sent', 'min_timer_wait', 'avg_timer_wait'"
      },
      {
        "name": "sort_order",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'', 'asc', 'desc', 'initial'"
      },
      {
        "name": "db_name",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": ""
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62513,
    "path": "hosting/mysql/performance/performance_schema/query_conn",
    "root": "hosting",
    "title": "Отримання статистики з’єднань MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/performance/performance_schema/query_conn/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "db_user",
        "type": "String",
        "required": false,
        "defaultValue": "\"\""
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62514,
    "path": "hosting/mysql/performance/performance_schema/query_ram",
    "root": "hosting",
    "title": "Отримання інформації про використання пам’яті MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/performance/performance_schema/query_ram/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "db_user",
        "type": "String",
        "required": false,
        "defaultValue": "\"\""
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62515,
    "path": "hosting/mysql/performance/performance_schema/settings",
    "root": "hosting",
    "title": "Увімкнення/вимкнення журналу продуктивності MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/performance/performance_schema/settings/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_performance_schema",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 51788,
    "path": "hosting/mysql/show_processlist",
    "root": "hosting",
    "title": "Список активних MySQL процесів/запитів хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/mysql/show_processlist/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3922,
    "path": "hosting/opcache/restart",
    "root": "hosting",
    "title": "Очищення кеша",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/opcache/restart/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3923,
    "path": "hosting/opcache/restart_enabled",
    "root": "hosting",
    "title": "Очищення кешу Opcache для всіх віртуальних хостів облікового запису, у яких включено Opcache",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/opcache/restart_enabled/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 227,
    "path": "hosting/order/change_period",
    "root": "hosting",
    "title": "Зміна періоду оплати послуги в кошику",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/order/change_period/",
    "params": [
      {
        "name": "item_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 228,
    "path": "hosting/order/domain",
    "root": "hosting",
    "title": "Додавання домен в кошик",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/order/domain/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 230,
    "path": "hosting/order/hosting",
    "root": "hosting",
    "title": "Замовлення нового хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/order/hosting/",
    "params": [
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "period",
        "type": "Int",
        "required": false,
        "defaultValue": "12",
        "values": "12, 1, 3, 6, 24, 36"
      },
      {
        "name": "country_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 233,
    "path": "hosting/order/remove_item",
    "root": "hosting",
    "title": "Видалення позиції з замовлення",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/order/remove_item/",
    "params": [
      {
        "name": "item_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 235,
    "path": "hosting/order/vps",
    "root": "hosting",
    "title": "Замовлення нового VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/order/vps/",
    "params": [
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "os_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "software_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 237,
    "path": "hosting/redis/restart",
    "root": "hosting",
    "title": "Перезавантаження процесу Redis для очистки даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/redis/restart/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 238,
    "path": "hosting/service/antivirus_protection",
    "root": "hosting",
    "title": "Створення заявки на антивірусну перевірку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/service/antivirus_protection/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 3924,
    "path": "hosting/service/awstats_update",
    "root": "hosting",
    "title": "Обробка заявки на сервіс позачергового оновлення статистики AWStats",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/service/awstats_update/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 239,
    "path": "hosting/service/chmod",
    "root": "hosting",
    "title": "Створення запиту на відновлення прав доступу до файлів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/service/chmod/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 834,
    "path": "hosting/service/disk_space_refresh",
    "root": "hosting",
    "title": "Оновлення інформації про дисковий простір",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/service/disk_space_refresh/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 240,
    "path": "hosting/service/empty_trash",
    "root": "hosting",
    "title": "Створення заявки на видалення тимчасових файлів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/service/empty_trash/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 242,
    "path": "hosting/site/login_available",
    "root": "hosting",
    "title": "Перевірка доступності назви хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/login_available/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 243,
    "path": "hosting/site/punycode_decode",
    "root": "hosting",
    "title": "Конвертація назви домену в Punycode",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/punycode_decode/",
    "params": [
      {
        "name": "q",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 244,
    "path": "hosting/site/stats",
    "root": "hosting",
    "title": "Отримання статистики завантаження каналів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/hosting/site/stats/",
    "params": []
  },
  {
    "id": 3926,
    "path": "hosting/site/tools/dkim_lookup",
    "root": "hosting",
    "title": "Отримання інформації про DKIM",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/tools/dkim_lookup/",
    "params": [
      {
        "name": "q",
        "type": "String",
        "required": true
      },
      {
        "name": "selector",
        "type": "String",
        "required": false,
        "defaultValue": "'hosting'"
      }
    ]
  },
  {
    "id": 3927,
    "path": "hosting/site/tools/dmarc_lookup",
    "root": "hosting",
    "title": "Отримання інформації про DMARC",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/tools/dmarc_lookup/",
    "params": [
      {
        "name": "q",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 14205,
    "path": "hosting/site/tools/htaccess_configurator",
    "root": "hosting",
    "title": "Конфігуратор .htaccess",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/tools/htaccess_configurator/",
    "params": [
      {
        "name": "redirect_ssl",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_slash",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_www_to_site",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_site_to_www",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_domain",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "redirect_index_php",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_del_php",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "redirect_del_slash",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "config_index_page",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "config_default_charset",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "config_default_download",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "config_download_size",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "config_admin_email",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "performance_gzip",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "error_401",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "error_403",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "error_404",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "error_500",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "security_deny_request",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "security_ban_ip",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "security_allow_ip",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "http_auth_password_htpasswd",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "http_auth_user_name",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "http_auth_password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 3928,
    "path": "hosting/site/tools/htaccess_validate",
    "root": "hosting",
    "title": "Валідатор htacess",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/tools/htaccess_validate/",
    "params": [
      {
        "name": "htaccess_source",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62343,
    "path": "hosting/site/tools/ip-info",
    "root": "hosting",
    "title": "Отримання інформації про IP-адресу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/tools/ip-info/",
    "params": [
      {
        "name": "q",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 3929,
    "path": "hosting/site/tools/nmap",
    "root": "hosting",
    "title": "nmap",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/site/tools/nmap/",
    "params": [
      {
        "name": "check_field",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 15274,
    "path": "hosting/supervisor/edit",
    "root": "hosting",
    "title": "Додавання/зміна процесу Supervisor",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/supervisor/edit/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "command",
        "type": "String",
        "required": true
      },
      {
        "name": "task_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "numprocs",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      },
      {
        "name": "comment",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "disable_handle",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15275,
    "path": "hosting/supervisor/list",
    "root": "hosting",
    "title": "Отримання списку процесів Supervisor",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/supervisor/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 13494,
    "path": "hosting/supervisor/log",
    "root": "hosting",
    "title": "Отримання лога процесу Supervisor",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/supervisor/log/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15276,
    "path": "hosting/supervisor/log_clear",
    "root": "hosting",
    "title": "Очищення лога процесу Supervisor",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/supervisor/log_clear/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62118,
    "path": "hosting/supervisor/restart",
    "root": "hosting",
    "title": "Перезапуск процесу Supervisor",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/supervisor/restart/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15277,
    "path": "hosting/supervisor/task_delete",
    "root": "hosting",
    "title": "Видалення процесу Supervisor",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/supervisor/task_delete/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 12481,
    "path": "hosting/supervisor/update_active",
    "root": "hosting",
    "title": "Увімкнення/вимкнення процесу Supervisor",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/supervisor/update_active/",
    "params": [
      {
        "name": "task_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62347,
    "path": "hosting/virtual/access/bots/account",
    "root": "hosting",
    "title": "Встановлення правил доступу для всіх сайтів хостинг-аккаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/bots/account/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "rules",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 62461,
    "path": "hosting/virtual/access/bots/add_new",
    "root": "hosting",
    "title": "Надсилання пропозиції щодо додавання нового бота",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/bots/add_new/",
    "params": [
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "description",
        "type": "String",
        "required": true
      },
      {
        "name": "site",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62319,
    "path": "hosting/virtual/access/bots/list",
    "root": "hosting",
    "title": "Отримання статистики, списку ботів та правил доступу до сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/bots/list/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "stat_date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'now'"
      }
    ]
  },
  {
    "id": 62348,
    "path": "hosting/virtual/access/bots/restore",
    "root": "hosting",
    "title": "Відновлення стандартних правил доступу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/bots/restore/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62349,
    "path": "hosting/virtual/access/bots/update",
    "root": "hosting",
    "title": "Встановлення правил доступу для сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/bots/update/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "rules",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 62239,
    "path": "hosting/virtual/access/country/list",
    "root": "hosting",
    "title": "Отримання статистичних даних, переліку країн та правил доступу до сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/country/list/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "stat_date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'now'"
      }
    ]
  },
  {
    "id": 62208,
    "path": "hosting/virtual/access/country/update",
    "root": "hosting",
    "title": "Зміна налаштувань обмеження доступу за країнами",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/country/update/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "block_tor",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "rules",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      },
      {
        "name": "apply_to_account",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "default_rule",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'', ...$access_rules"
      }
    ]
  },
  {
    "id": 62196,
    "path": "hosting/virtual/access/delete",
    "root": "hosting",
    "title": "Видалення адрес зі списку режиму обмеженого доступу / чорного списку IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/delete/",
    "params": [
      {
        "name": "ip_ids",
        "type": "Array",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'', 'white', 'black'"
      }
    ]
  },
  {
    "id": 62240,
    "path": "hosting/virtual/access/edit",
    "root": "hosting",
    "title": "Додавання адрес до режиму обмеженого доступу / чорного списку IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/edit/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'white', 'black'"
      },
      {
        "name": "ips",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 62241,
    "path": "hosting/virtual/access/list",
    "root": "hosting",
    "title": "Отримання списку адрес режиму обмеженого доступу / чорного списку IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/list/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'white', 'black'"
      }
    ]
  },
  {
    "id": 62209,
    "path": "hosting/virtual/access/switch",
    "root": "hosting",
    "title": "Перемикання між режимом обмеженого доступу / чорним списком IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/access/switch/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'white', 'black'"
      }
    ]
  },
  {
    "id": 9655,
    "path": "hosting/virtual/add_site",
    "root": "hosting",
    "title": "Додавання сайту або піддомену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/add_site/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "virtual_domain_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "force_domain_add",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "call_source",
        "type": "String",
        "required": false,
        "defaultValue": "'virtual_hosts'",
        "values": "'virtual_hosts', 'mail_boxes', 'site_transfer_to_us'"
      }
    ]
  },
  {
    "id": 252,
    "path": "hosting/virtual/awstats/delete_ip",
    "root": "hosting",
    "title": "Видалення ігнорованих адрес AWStats",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/awstats/delete_ip/",
    "params": [
      {
        "name": "ip_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15278,
    "path": "hosting/virtual/awstats/ignore_list",
    "root": "hosting",
    "title": "Зміна списку ігнорованих IP-адрес при зборі статистики AWStats",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/awstats/ignore_list/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip_list",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 254,
    "path": "hosting/virtual/awstats/ignore_table",
    "root": "hosting",
    "title": "Отримання списку адрес, ігнорованих при зборі статистики AWStats",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/awstats/ignore_table/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 255,
    "path": "hosting/virtual/awstats/params",
    "root": "hosting",
    "title": "Налаштування зберігання статистики AWStats",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/awstats/params/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "enabled",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 256,
    "path": "hosting/virtual/delete_domain",
    "root": "hosting",
    "title": "Видалення сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/delete_domain/",
    "params": [
      {
        "name": "virtual_domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 257,
    "path": "hosting/virtual/delete_host",
    "root": "hosting",
    "title": "Видалення піддоменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/delete_host/",
    "params": [
      {
        "name": "hosts_id",
        "type": "Array",
        "required": true
      },
      {
        "name": "delete_files",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 259,
    "path": "hosting/virtual/list",
    "root": "hosting",
    "title": "Отримання списку сайтів і піддоменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/list/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "virtual_domain_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 266,
    "path": "hosting/virtual/paramsother/hotlink",
    "root": "hosting",
    "title": "Налаштування захисту файлів сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsother/hotlink/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "hotlink_allow_direct_request",
        "type": "String",
        "required": false,
        "defaultValue": "'0'",
        "values": "'0', '1'"
      },
      {
        "name": "enable_hotlink",
        "type": "String",
        "required": false,
        "defaultValue": "'0'",
        "values": "'0', '1'"
      },
      {
        "name": "deny_remote_link",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "valid_referers",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 268,
    "path": "hosting/virtual/paramsother/securelink/delete",
    "root": "hosting",
    "title": "Видалення Secure Link",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsother/securelink/delete/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "link_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 270,
    "path": "hosting/virtual/paramsother/securelink/list",
    "root": "hosting",
    "title": "Отримання списку защещённих сторінок",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsother/securelink/list/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62167,
    "path": "hosting/virtual/paramsphp/clear_php_log",
    "root": "hosting",
    "title": "Очищення файлу журналу помилок PHP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/clear_php_log/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 53346,
    "path": "hosting/virtual/paramsphp/clone",
    "root": "hosting",
    "title": "Налаштування копіювання налаштувань PHP з іншого сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/clone/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "source_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 53059,
    "path": "hosting/virtual/paramsphp/clone_cancel",
    "root": "hosting",
    "title": "Скасування копіювання налаштувань PHP на інший сайт",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/clone_cancel/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "remove_host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62463,
    "path": "hosting/virtual/paramsphp/custom/edit",
    "root": "hosting",
    "title": "Зміна власного файлу php.ini",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/custom/edit/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "php_version",
        "type": "String",
        "required": true,
        "values": "'php4', 'php5', 'php53', 'php54', 'php55', 'php56', 'php70', 'php71', 'php72', 'php73', 'php74', 'php80', 'php81', 'php82', 'php83', 'php84', 'php85'"
      },
      {
        "name": "content",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62464,
    "path": "hosting/virtual/paramsphp/custom/get",
    "root": "hosting",
    "title": "Отримання вмісту власного файлу php.ini",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/custom/get/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62465,
    "path": "hosting/virtual/paramsphp/custom/to_auto",
    "root": "hosting",
    "title": "Перехід на автоматичне створення файлу php.ini",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/custom/to_auto/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 36088,
    "path": "hosting/virtual/paramsphp/edit",
    "root": "hosting",
    "title": "Зміна налаштувань PHP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/edit/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "php_version",
        "type": "String",
        "required": false,
        "defaultValue": "'php53'",
        "values": "'php4' , 'php5' , 'php53' , 'php54' , 'php55' , 'php56' , 'php70' , 'php71' , 'php72' , 'php73' , 'php74' , 'php80' , 'php81' , 'php82' , 'php83' , 'php84' , 'php85'"
      },
      {
        "name": "memory_limit",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "php_encoder",
        "type": "String",
        "required": false,
        "defaultValue": "'none'",
        "values": "\"none\" , \"zend\" , \"ioncube11\" , \"ioncube12\" , \"ioncube13\" , \"ioncube14\" , \"ioncube15\""
      },
      {
        "name": "php_session_save_handler",
        "type": "String",
        "required": false,
        "defaultValue": "'files'",
        "values": "'files' , 'memcache' , 'redis'"
      },
      {
        "name": "php_open_basedir",
        "type": "String",
        "required": false,
        "defaultValue": "'host'",
        "values": "\"host\" , \"domain\" , \"account\" , \"none\""
      },
      {
        "name": "php_modules",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "register_globals",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "magic_quotes_gpc",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "magic_quotes_runtime",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_allow_call_time_pass_reference",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_register_long_arrays",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_allow_url_include",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_serialize_precision",
        "type": "Int",
        "required": false,
        "defaultValue": "100"
      },
      {
        "name": "php_session_use_only_cookies",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_session_gc_maxlifetime",
        "type": "Int",
        "required": false,
        "defaultValue": "1440"
      },
      {
        "name": "php_short_open_tag",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_output_buffering",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "display_errors",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_error_reporting",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "max_input_time",
        "type": "Int",
        "required": false,
        "defaultValue": "60"
      },
      {
        "name": "php_max_input_vars",
        "type": "Int",
        "required": false,
        "defaultValue": "1000"
      },
      {
        "name": "php_max_execution_time",
        "type": "Int",
        "required": false,
        "defaultValue": "30"
      },
      {
        "name": "php_mb_func_overload",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "default_socket_timeout",
        "type": "Int",
        "required": false,
        "defaultValue": "5"
      },
      {
        "name": "php_cgi_fix_pathinfo",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_allow_url_fopen",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_disable_functions",
        "type": "String",
        "required": false,
        "defaultValue": "порожній рядок"
      },
      {
        "name": "php_mail_add_x_header",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_log_errors",
        "type": "Bool",
        "required": false,
        "defaultValue": "false",
        "values": "0 , 1"
      },
      {
        "name": "php_mb_internal_encoding",
        "type": "String",
        "required": false,
        "defaultValue": "порожній рядок"
      },
      {
        "name": "php_timezone",
        "type": "String",
        "required": false,
        "defaultValue": "'375'"
      },
      {
        "name": "post_max_size",
        "type": "Int",
        "required": false,
        "defaultValue": "1000"
      },
      {
        "name": "php_phalcon_ver",
        "type": "String",
        "required": false,
        "defaultValue": "'none'"
      },
      {
        "name": "browscap",
        "type": "String",
        "required": false,
        "defaultValue": "'off'"
      },
      {
        "name": "default_charset",
        "type": "String",
        "required": false,
        "defaultValue": "'2'"
      }
    ]
  },
  {
    "id": 62052,
    "path": "hosting/virtual/paramsphp/get",
    "root": "hosting",
    "title": "Отримання налаштувань PHP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/get/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15287,
    "path": "hosting/virtual/paramsphp/user_reset",
    "root": "hosting",
    "title": "Скидання налаштувань PHP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsphp/user_reset/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62286,
    "path": "hosting/virtual/paramssite/cache",
    "root": "hosting",
    "title": "Зміна налаштувань серверного кешування",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/cache/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'disabled'",
        "values": "'disabled', 'enabled', 'ignore_params'"
      },
      {
        "name": "ttl",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62430,
    "path": "hosting/virtual/paramssite/cache_purge",
    "root": "hosting",
    "title": "Очищення серверного кешу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/cache_purge/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62431,
    "path": "hosting/virtual/paramssite/get/cache",
    "root": "hosting",
    "title": "Отримання налаштувань серверного кешування",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/get/cache/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 61310,
    "path": "hosting/virtual/paramssite/get/main",
    "root": "hosting",
    "title": "Отримання основних налаштувань сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/get/main/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 61311,
    "path": "hosting/virtual/paramssite/get/optimization",
    "root": "hosting",
    "title": "Налаштування PageSpeed",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/get/optimization/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 61312,
    "path": "hosting/virtual/paramssite/get/security",
    "root": "hosting",
    "title": "Отримання основних налаштувань захисту сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/get/security/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 279,
    "path": "hosting/virtual/paramssite/optimization",
    "root": "hosting",
    "title": "Зміна параметрів PageSpeed",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/optimization/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "optimize",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "pagespeed_exceptions",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "url_valued_attributes",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 61460,
    "path": "hosting/virtual/paramssite/optimization_cache_clear",
    "root": "hosting",
    "title": "Очищення кешу PageSpeed",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/optimization_cache_clear/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15288,
    "path": "hosting/virtual/paramssite/reset",
    "root": "hosting",
    "title": "Скидання основних налаштувань сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/reset/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 58924,
    "path": "hosting/virtual/paramssite/security",
    "root": "hosting",
    "title": "Зміна основних налаштувань захисту сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/security/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "header_hsts",
        "type": "Int",
        "required": false,
        "defaultValue": "-1"
      },
      {
        "name": "header_hsts_include_subdomains",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "ssl_protocols_set",
        "type": "String",
        "required": false,
        "defaultValue": "'compatible'",
        "values": "'compatible', 'modern'"
      },
      {
        "name": "referrer_policy",
        "type": "String",
        "required": false,
        "defaultValue": "'none'",
        "values": "'no-referrer', 'same-origin', 'origin', 'strict-origin', 'origin-when-cross-origin', 'strict-origin-when-cross-origin', 'no-referrer-when-downgrade', 'unsafe-url', 'none'"
      },
      {
        "name": "under_attack_mode",
        "type": "String",
        "required": false,
        "defaultValue": "'disabled'",
        "values": "'disabled', 'on', 'off'"
      },
      {
        "name": "block_non_provider",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "sl_limit",
        "type": "Int",
        "required": false,
        "defaultValue": "10"
      },
      {
        "name": "blacklist_enabled",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 61755,
    "path": "hosting/virtual/paramssite/send",
    "root": "hosting",
    "title": "Зміна основних налаштувань сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/send/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "static_cors",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "static_files_expire_default",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "static_files_expire_user",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "ssi",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "static_404_redirect",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "enable_service_url",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "default_ip",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "default_host",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "enable_perl",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "system_error_pages",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "cms_admin_link",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "site_error_404",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "ipv6_auto_configuration",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "ip",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "redirect_to",
        "type": "String",
        "required": false,
        "defaultValue": "'off'"
      },
      {
        "name": "php_mail",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "alias",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "document_root_suffix",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "https_redirect",
        "type": "String",
        "required": false,
        "defaultValue": "'disabled'",
        "values": "'disabled', 'to_http', 'to_https'"
      },
      {
        "name": "system_error_lang",
        "type": "String",
        "required": false,
        "defaultValue": "'default'",
        "values": "'ru', 'en', 'uk', 'default'"
      },
      {
        "name": "web_server_backend",
        "type": "String",
        "required": false,
        "defaultValue": "'apache'",
        "values": "'apache', 'litespeed', 'php-fpm', 'nodejs', 'proxy-local-ip'"
      },
      {
        "name": "php_fpm_template",
        "type": "String",
        "required": false,
        "defaultValue": "'default'",
        "values": "'default', 'wordpress', 'opencart', 'dokuwiki', 'modx', 'moodle', 'prestashop', 'roundcube', 'bitrix'"
      },
      {
        "name": "static_files",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "fcgi_php_files",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "nodejs_version_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "nodejs_proxy_type",
        "type": "String",
        "required": false,
        "defaultValue": "'ip'",
        "values": "'ip', 'socket'"
      },
      {
        "name": "websocket_enable",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 283,
    "path": "hosting/virtual/paramssite/set_http_redirect",
    "root": "hosting",
    "title": "Налаштування редиректу на HTTP/HTTPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramssite/set_http_redirect/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "https_redirect",
        "type": "String",
        "required": false,
        "defaultValue": "'disabled'",
        "values": "'disabled', 'to_http', 'to_https'"
      }
    ]
  },
  {
    "id": 284,
    "path": "hosting/virtual/paramsssl/change_status",
    "root": "hosting",
    "title": "Увімкнення/вимкнення SSL-сертифіката для сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsssl/change_status/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "status",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 285,
    "path": "hosting/virtual/paramsssl/crt_delete",
    "root": "hosting",
    "title": "Видалення SSL-сертифіката",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsssl/crt_delete/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 286,
    "path": "hosting/virtual/paramsssl/crt_letsencrypt",
    "root": "hosting",
    "title": "Встановлення SSL-сертифіката від Let’s Encrypt",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsssl/crt_letsencrypt/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "aliases",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 287,
    "path": "hosting/virtual/paramsssl/crt_letsencrypt_cancel",
    "root": "hosting",
    "title": "Скасування запиту на встановлення SSL-сертифіката від Let’s Encrypt",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsssl/crt_letsencrypt_cancel/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "source",
        "type": "String",
        "required": false,
        "defaultValue": "'load_existing'",
        "values": "'load_existing', 'lets_encrypt', 'lets_encrypt_renew', 'self_signed'"
      }
    ]
  },
  {
    "id": 288,
    "path": "hosting/virtual/paramsssl/crt_letsencrypt_renew",
    "root": "hosting",
    "title": "Оновлення SSL-сертифіката від Let’s Encrypt",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsssl/crt_letsencrypt_renew/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "aliases",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 8434,
    "path": "hosting/virtual/paramsssl/load_existing",
    "root": "hosting",
    "title": "Встановлення власного SSL-сертифіката",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsssl/load_existing/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ssl_user_text",
        "type": "String",
        "required": true
      },
      {
        "name": "ssl_user_key_text",
        "type": "String",
        "required": true
      },
      {
        "name": "ssl_user_key_pass",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "add_intermediate_certificates",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 289,
    "path": "hosting/virtual/paramsssl/source_content",
    "root": "hosting",
    "title": "Отримання інформації про SSL-сертифікат сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/paramsssl/source_content/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15289,
    "path": "hosting/virtual/profiling/access_edit",
    "root": "hosting",
    "title": "Управління параметрами доступу для профілювання",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/profiling/access_edit/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "access_list",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 15290,
    "path": "hosting/virtual/profiling/disable",
    "root": "hosting",
    "title": "Вимкнення профільника",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/profiling/disable/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15291,
    "path": "hosting/virtual/profiling/enable",
    "root": "hosting",
    "title": "Увімкнення профільника",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/profiling/enable/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "profiling_length",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 290,
    "path": "hosting/virtual/vhost_dns_relation_update",
    "root": "hosting",
    "title": "Оновлення данних домену для хоста",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/virtual/vhost_dns_relation_update/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15292,
    "path": "hosting/whoisip",
    "root": "hosting",
    "title": "Виведення WhoIs [RDAP]",
    "method": "POST",
    "endpoint": "https://adm.tools/action/hosting/whoisip/",
    "params": [
      {
        "name": "ip",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62109,
    "path": "mail/assign/save",
    "root": "mail",
    "title": "Прив’язка поштового домену до хостинг-акаунту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/assign/save/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62287,
    "path": "mail/backup/restore",
    "root": "mail",
    "title": "Подання запиту на відновлення листів у поштовій скриньці",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/backup/restore/",
    "params": [
      {
        "name": "backup_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mail_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62200,
    "path": "mail/box/alias/create",
    "root": "mail",
    "title": "Створення псевдоніма поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/alias/create/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "alias",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62201,
    "path": "mail/box/alias/delete",
    "root": "mail",
    "title": "Видалення псевдоніма поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/alias/delete/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "alias",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62202,
    "path": "mail/box/alias/list",
    "root": "mail",
    "title": "Отримання списку псевдонімів поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/alias/list/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62458,
    "path": "mail/box/autoresponder/save",
    "root": "mail",
    "title": "Зміна налаштувань автовідповідача для поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/autoresponder/save/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "state",
        "type": "String",
        "required": true,
        "values": "'disabled', 'enabled', 'fixed', 'days'"
      },
      {
        "name": "days",
        "type": "Array",
        "required": true,
        "values": "'mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'"
      },
      {
        "name": "date_start",
        "type": "DateTime",
        "required": true
      },
      {
        "name": "date_end",
        "type": "DateTime",
        "required": true
      },
      {
        "name": "time_start",
        "type": "String",
        "required": true
      },
      {
        "name": "time_end",
        "type": "String",
        "required": true
      },
      {
        "name": "timezone",
        "type": "String",
        "required": false,
        "defaultValue": "'Europe/Kyiv'"
      },
      {
        "name": "subject",
        "type": "String",
        "required": false,
        "defaultValue": "$state === 'disabled' ? '' : null"
      },
      {
        "name": "text",
        "type": "String",
        "required": false,
        "defaultValue": "$state === 'disabled' ? '' : null"
      }
    ]
  },
  {
    "id": 62085,
    "path": "mail/box/clean",
    "root": "mail",
    "title": "Очищення поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/clean/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62471,
    "path": "mail/box/create/save",
    "root": "mail",
    "title": "Створення поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/create/save/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "box_limit",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "box_quota",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "check_spam_level",
        "type": "String",
        "required": false,
        "defaultValue": "'medium'",
        "values": "'off', 'low', 'medium', 'high'"
      }
    ]
  },
  {
    "id": 62087,
    "path": "mail/box/delete",
    "root": "mail",
    "title": "Видалення поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/delete/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62472,
    "path": "mail/box/edit/save",
    "root": "mail",
    "title": "Зміна налаштувань поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/edit/save/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "box_limit",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "box_quota",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "check_spam_level",
        "type": "String",
        "required": false,
        "defaultValue": "'medium'",
        "values": "'off', 'low', 'medium', 'high'"
      }
    ]
  },
  {
    "id": 62110,
    "path": "mail/box/list",
    "root": "mail",
    "title": "Отримання списку поштових скриньок",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/list/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "\"\""
      },
      {
        "name": "sort_size",
        "type": "String",
        "required": false,
        "defaultValue": "'none'",
        "values": "'asc', 'desc', 'none'"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62478,
    "path": "mail/box/otp_reset",
    "root": "mail",
    "title": "Вимкнення 2FA для поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/otp_reset/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62473,
    "path": "mail/box/redirect/disable",
    "root": "mail",
    "title": "Вимкнення переадресації для поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/redirect/disable/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62474,
    "path": "mail/box/redirect/save",
    "root": "mail",
    "title": "Зміна налаштувань переадресації для поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/box/redirect/save/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "forward_to",
        "type": "Array",
        "required": true
      },
      {
        "name": "copy",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62088,
    "path": "mail/chart",
    "root": "mail",
    "title": "Статистика пошти",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/chart/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62090,
    "path": "mail/create/save",
    "root": "mail",
    "title": "Додавання поштового домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/create/save/",
    "params": [
      {
        "name": "domain",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "plan_sendmail_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'mail'",
        "values": "'mail', 'account'"
      },
      {
        "name": "account_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "check",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "mx_action",
        "type": "String",
        "required": false,
        "defaultValue": "''",
        "values": "'replace', 'skip'"
      }
    ]
  },
  {
    "id": 62111,
    "path": "mail/drop",
    "root": "mail",
    "title": "Видалення поштового домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/drop/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62091,
    "path": "mail/export/list",
    "root": "mail",
    "title": "Отримання списку заявок на експорт поштових скриньок",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/export/list/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62092,
    "path": "mail/export/send",
    "root": "mail",
    "title": "Експорт пошти",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/export/send/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'mbox', 'mdir'"
      }
    ]
  },
  {
    "id": 62079,
    "path": "mail/import_token",
    "root": "mail",
    "title": "Токен для завантаження файлу імпорту пошти на сервер mail-storage",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/import_token/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "size",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "import_type",
        "type": "String",
        "required": false,
        "defaultValue": "'inbox'",
        "values": "'inbox', 'folders'"
      }
    ]
  },
  {
    "id": 62140,
    "path": "mail/import/send_imap",
    "root": "mail",
    "title": "Імпорт пошти через IMAP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/import/send_imap/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "server",
        "type": "String",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "port",
        "type": "Int",
        "required": false,
        "defaultValue": "993"
      },
      {
        "name": "ssl",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "ssl_disable_cert_check",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "import_limit",
        "type": "String",
        "required": false,
        "defaultValue": "'all'",
        "values": "'all', 'day'"
      },
      {
        "name": "day_limit",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62081,
    "path": "mail/incoming",
    "root": "mail",
    "title": "Перевірка кількості вхідних листів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/incoming/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62323,
    "path": "mail/ip/delete",
    "root": "mail",
    "title": "Видалення виділеного IP для пошти",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/ip/delete/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62141,
    "path": "mail/ip/order/save",
    "root": "mail",
    "title": "Замовлення виділеного IP для пошти",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/ip/order/save/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62288,
    "path": "mail/ip/unlock/save",
    "root": "mail",
    "title": "Розблокування виділеного IP для пошти",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/ip/unlock/save/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62105,
    "path": "mail/limits/account",
    "root": "mail",
    "title": "Ліміти пошти хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/limits/account/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mail_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62104,
    "path": "mail/limits/mail",
    "root": "mail",
    "title": "Ліміти корпоративної пошти",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/limits/mail/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62132,
    "path": "mail/limits/unlock",
    "root": "mail",
    "title": "Дозволяємо розблокувати пошту на добу для хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/limits/unlock/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62094,
    "path": "mail/list",
    "root": "mail",
    "title": "Отримання списку поштових доменів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/list/",
    "params": [
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "account_id",
        "type": "Int",
        "required": false,
        "defaultValue": "-1"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62143,
    "path": "mail/log/account/host/php",
    "root": "mail",
    "title": "Отримання логу пошти PHP сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/log/account/host/php/",
    "params": [
      {
        "name": "host_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      },
      {
        "name": "time_from",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "time_to",
        "type": "Int",
        "required": false,
        "defaultValue": "144"
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      },
      {
        "name": "sort_order",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'asc', 'desc'"
      }
    ]
  },
  {
    "id": 62193,
    "path": "mail/log/account/php",
    "root": "mail",
    "title": "Отримання логу пошти з сайтів хостинг-аккаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/log/account/php/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "time_from",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "time_to",
        "type": "Int",
        "required": false,
        "defaultValue": "144"
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      },
      {
        "name": "sort_order",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'asc', 'desc'"
      }
    ]
  },
  {
    "id": 62188,
    "path": "mail/log/account/php_stat",
    "root": "mail",
    "title": "Перегляд статистики надсилання php пошти по сайтах",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/log/account/php_stat/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      }
    ]
  },
  {
    "id": 62144,
    "path": "mail/log/account/unsent",
    "root": "mail",
    "title": "Отримання логу не відправлених листів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/log/account/unsent/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      },
      {
        "name": "time_from",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "time_to",
        "type": "Int",
        "required": false,
        "defaultValue": "144"
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      },
      {
        "name": "sort_order",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'asc', 'desc'"
      }
    ]
  },
  {
    "id": 62145,
    "path": "mail/log/domain/auth",
    "root": "mail",
    "title": "Отримання логу підключень до поштової скриньки",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/log/domain/auth/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      },
      {
        "name": "time_from",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "time_to",
        "type": "Int",
        "required": false,
        "defaultValue": "144"
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      },
      {
        "name": "sort_order",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'asc', 'desc'"
      }
    ]
  },
  {
    "id": 62289,
    "path": "mail/log/domain/rejected",
    "root": "mail",
    "title": "Отримання логу відхилених листів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/log/domain/rejected/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": "'account', 'mail'"
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      },
      {
        "name": "time_from",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "time_to",
        "type": "Int",
        "required": false,
        "defaultValue": "144"
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "sort_order",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'asc', 'desc'"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62152,
    "path": "mail/plan/account/sendmail",
    "root": "mail",
    "title": "Замовлення збільшених лімітів на надсилання листів на добу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/plan/account/sendmail/",
    "params": [
      {
        "name": "account_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62150,
    "path": "mail/plan/service/plan",
    "root": "mail",
    "title": "Зміна місця для пошти",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/plan/service/plan/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62151,
    "path": "mail/plan/service/sendmail",
    "root": "mail",
    "title": "Зміна лімітів на надсилання листів на добу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/plan/service/sendmail/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62097,
    "path": "mail/reject_download",
    "root": "mail",
    "title": "Завантаження відхиленого листа",
    "method": "GET",
    "endpoint": "https://adm.tools/action/mail/reject_download/",
    "params": [
      {
        "name": "service_type",
        "type": "String",
        "required": true,
        "values": "'account', 'mail'"
      },
      {
        "name": "service_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      },
      {
        "name": "mid",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "queue_uid",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62099,
    "path": "mail/restore/save",
    "root": "mail",
    "title": "Розблокування поштового домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/restore/save/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62100,
    "path": "mail/rules/add",
    "root": "mail",
    "title": "Додавання запису до білого/чорного списку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/rules/add/",
    "params": [
      {
        "name": "list",
        "type": "Array",
        "required": true
      },
      {
        "name": "action",
        "type": "String",
        "required": false,
        "defaultValue": "'whitelist'",
        "values": "'whitelist', 'blacklist'"
      },
      {
        "name": "mail_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62146,
    "path": "mail/rules/delete/all",
    "root": "mail",
    "title": "Очищення білого/чорного списку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/rules/delete/all/",
    "params": [
      {
        "name": "action",
        "type": "String",
        "required": true,
        "values": "'whitelist', 'blacklist'"
      },
      {
        "name": "mail_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62158,
    "path": "mail/rules/delete/rule",
    "root": "mail",
    "title": "Видалення запису з білого/чорного списку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/rules/delete/rule/",
    "params": [
      {
        "name": "rule_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62157,
    "path": "mail/rules/list",
    "root": "mail",
    "title": "Завантаження записів в правилах пошти (білі / чорні списки)",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/rules/list/",
    "params": [
      {
        "name": "action",
        "type": "String",
        "required": true,
        "values": "'whitelist', 'blacklist'"
      },
      {
        "name": "display",
        "type": "String",
        "required": false,
        "defaultValue": "'inline'",
        "values": "'inline', 'popup'"
      },
      {
        "name": "user_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "mail_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62114,
    "path": "mail/rules/message",
    "root": "mail",
    "title": "Показуємо повідомлення про правила для домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/rules/message/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62103,
    "path": "mail/separate/save",
    "root": "mail",
    "title": "Відокремлення поштового домену від хостинг-акаунта",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/separate/save/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_sendmail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62112,
    "path": "mail/set_our_mx",
    "root": "mail",
    "title": "Встановлення наших MX-записів для домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/set_our_mx/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62083,
    "path": "mail/settings",
    "root": "mail",
    "title": "Зміна налаштувань поштового домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/settings/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "catch_non_exist",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "allow_custom_sender",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "auto_clean_trash",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62475,
    "path": "mail/sieve/copy",
    "root": "mail",
    "title": "Копіювання фільтрів у поштові скриньки домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/sieve/copy/",
    "params": [
      {
        "name": "mail_box_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "script",
        "type": "String",
        "required": true
      },
      {
        "name": "slave_mail_box_ids",
        "type": "Array",
        "required": true
      },
      {
        "name": "set_active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "overwrite",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62147,
    "path": "mail/stat/domain",
    "root": "mail",
    "title": "Статистика надсилання листів поштовими скриньками",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/stat/domain/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "yesterday",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62433,
    "path": "mail/status/load",
    "root": "mail",
    "title": "Отримання інформації про стан поштових серверів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/status/load/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'yesterday'"
      }
    ]
  },
  {
    "id": 62084,
    "path": "mail/update_mx_cache",
    "root": "mail",
    "title": "Оновлення кешу MX-записів домену",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/update_mx_cache/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62444,
    "path": "mail/webhook/create/send",
    "root": "mail",
    "title": "Створення вебхука",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/webhook/create/send/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "mail_box_ids",
        "type": "Array",
        "required": true
      },
      {
        "name": "url",
        "type": "String",
        "required": true
      },
      {
        "name": "events",
        "type": "Array",
        "required": true,
        "values": ""
      },
      {
        "name": "ssl_verification",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62445,
    "path": "mail/webhook/delete",
    "root": "mail",
    "title": "Видалення вебхука",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/webhook/delete/",
    "params": [
      {
        "name": "webhook_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62446,
    "path": "mail/webhook/edit/send",
    "root": "mail",
    "title": "Зміна вебхука",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/webhook/edit/send/",
    "params": [
      {
        "name": "webhook_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "mail_box_ids",
        "type": "Array",
        "required": true
      },
      {
        "name": "url",
        "type": "String",
        "required": true
      },
      {
        "name": "events",
        "type": "Array",
        "required": true,
        "values": ""
      },
      {
        "name": "ssl_verification",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62447,
    "path": "mail/webhook/list",
    "root": "mail",
    "title": "Отримання списку вебхуків",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/webhook/list/",
    "params": [
      {
        "name": "mail_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62448,
    "path": "mail/webhook/log",
    "root": "mail",
    "title": "Отримання логу останніх запитів вебхука",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/webhook/log/",
    "params": [
      {
        "name": "webhook_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62148,
    "path": "mail/webmail/delete",
    "root": "mail",
    "title": "Видалення персонального WebMail",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mail/webmail/delete/",
    "params": [
      {
        "name": "domain_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62362,
    "path": "manticore/access/page",
    "root": "manticore",
    "title": "Отримання списку користувачів з делегованим доступом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/access/page/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62497,
    "path": "manticore/config",
    "root": "manticore",
    "title": "Отримання даних про конфігурацію",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/config/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62480,
    "path": "manticore/config/config",
    "root": "manticore",
    "title": "Зміна налаштувань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/config/config/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "binlog",
        "type": "Int",
        "required": false,
        "defaultValue": "1",
        "values": "0, 1"
      },
      {
        "name": "binlog_flush",
        "type": "Int",
        "required": false,
        "defaultValue": "2",
        "values": "0, 1, 2"
      }
    ]
  },
  {
    "id": 62364,
    "path": "manticore/create/send",
    "root": "manticore",
    "title": "Замовлення нової інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/create/send/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62365,
    "path": "manticore/dictionary/add/save",
    "root": "manticore",
    "title": "Завантаження словника",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/dictionary/add/save/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'wordforms', 'exceptions', 'stopwords'"
      },
      {
        "name": "file",
        "type": "File",
        "required": true
      }
    ]
  },
  {
    "id": 62420,
    "path": "manticore/dictionary/delete",
    "root": "manticore",
    "title": "Видалення словника",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/dictionary/delete/",
    "params": [
      {
        "name": "dictionary_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62366,
    "path": "manticore/dictionary/download",
    "root": "manticore",
    "title": "Завантаження словника",
    "method": "GET",
    "endpoint": "https://adm.tools/action/manticore/dictionary/download/",
    "params": [
      {
        "name": "dictionary_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62421,
    "path": "manticore/dictionary/list",
    "root": "manticore",
    "title": "Отримання списку словників",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/dictionary/list/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62439,
    "path": "manticore/distributed/delete",
    "root": "manticore",
    "title": "Видалення розподіленого індексу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/distributed/delete/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62440,
    "path": "manticore/distributed/edit/save",
    "root": "manticore",
    "title": "Зміна розподіленого індексу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/distributed/edit/save/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "tables",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62441,
    "path": "manticore/distributed/list",
    "root": "manticore",
    "title": "Отримання списку розподілених індексів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/distributed/list/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62195,
    "path": "manticore/instance/delete",
    "root": "manticore",
    "title": "Блокування та видалення інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/instance/delete/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62261,
    "path": "manticore/plan/change",
    "root": "manticore",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/plan/change/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62263,
    "path": "manticore/plan/list",
    "root": "manticore",
    "title": "Отримання списку тарифів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/manticore/plan/list/",
    "params": []
  },
  {
    "id": 62368,
    "path": "manticore/stat/clear_query_log",
    "root": "manticore",
    "title": "Очищення логу запитів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/stat/clear_query_log/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62442,
    "path": "manticore/table",
    "root": "manticore",
    "title": "Отримання інформації про таблиці",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/table/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62476,
    "path": "manticore/table/add",
    "root": "manticore",
    "title": "Створення нової таблиці",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/table/add/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "table_name",
        "type": "String",
        "required": true
      },
      {
        "name": "type",
        "type": "Array",
        "required": true,
        "values": "'text', 'string', 'int', 'bigint', 'bool', 'float', 'timestamp', 'json', 'multi', 'multi64', 'float_vector'"
      },
      {
        "name": "fields",
        "type": "Array",
        "required": true
      },
      {
        "name": "property",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "morphology",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      },
      {
        "name": "blend_chars",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "blend_mode",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      },
      {
        "name": "index_exact_words",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "min_word_len",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "min_prefix_len",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "min_infix_len",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "html_strip",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "expand_keywords",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "charset_table",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "ignore_chars",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "wordforms_id",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "exceptions_id",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "stopwords_id",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "_confirm_action",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62443,
    "path": "manticore/table/import",
    "root": "manticore",
    "title": "Автоматичний імпорт даних з БД MySQL",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/table/import/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "table_name",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62294,
    "path": "manticore/table/query_edit",
    "root": "manticore",
    "title": "Зміна SQL-запиту, який виконується до або після основного запиту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/table/query_edit/",
    "params": [
      {
        "name": "query_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "sql_query",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62295,
    "path": "manticore/table/query_sort",
    "root": "manticore",
    "title": "Зміна порядку виконання SQL-запитів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/table/query_sort/",
    "params": [
      {
        "name": "order",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 62509,
    "path": "manticore/table/timetable",
    "root": "manticore",
    "title": "Налаштування розкладу оновлення таблиці",
    "method": "POST",
    "endpoint": "https://adm.tools/action/manticore/table/timetable/",
    "params": [
      {
        "name": "manticore_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "table_name",
        "type": "String",
        "required": true
      },
      {
        "name": "minute",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "hour",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "day",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "week",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "month",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "time",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62106,
    "path": "mysql/access/page",
    "root": "mysql",
    "title": "Отримання списку користувачів з делегованим доступом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/access/page/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62369,
    "path": "mysql/clone/send",
    "root": "mysql",
    "title": "Створення нового інстанасу з резервної копії",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/clone/send/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "String",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 43844,
    "path": "mysql/create/save",
    "root": "mysql",
    "title": "Замовлення нової інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/create/save/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 43845,
    "path": "mysql/database/create/save",
    "root": "mysql",
    "title": "Створення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/database/create/save/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "charset_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "create_user",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 51349,
    "path": "mysql/database/delete",
    "root": "mysql",
    "title": "Видалення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/database/delete/",
    "params": [
      {
        "name": "mysql_database_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 43709,
    "path": "mysql/database/list",
    "root": "mysql",
    "title": "Отримання списку баз даних інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/database/list/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 43710,
    "path": "mysql/dump/download",
    "root": "mysql",
    "title": "Завантаження створеної резервної копії бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/dump/download/",
    "params": [
      {
        "name": "mysql_dump_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 48232,
    "path": "mysql/dump/list",
    "root": "mysql",
    "title": "Отримання списку створених резервних копій баз даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/dump/list/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62121,
    "path": "mysql/dump/page",
    "root": "mysql",
    "title": "Сторінка перегляду та створення дампів зі снапшотів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/dump/page/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62501,
    "path": "mysql/dump/settings/save",
    "root": "mysql",
    "title": "Зміна налаштувань резервного копіювання",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/dump/settings/save/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "frequency",
        "type": "String",
        "required": true,
        "values": "'daily', 'weekly', 'monthly', 'disabled'"
      },
      {
        "name": "count",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 57450,
    "path": "mysql/guard/bad_password",
    "root": "mysql",
    "title": "Перегляд списку невдалих авторизацій",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/guard/bad_password/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 43711,
    "path": "mysql/instance/active/save",
    "root": "mysql",
    "title": "Розблокування інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/instance/active/save/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 51499,
    "path": "mysql/instance/delete",
    "root": "mysql",
    "title": "Блокування та видалення інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/instance/delete/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62133,
    "path": "mysql/instance/phpmyadmin",
    "root": "mysql",
    "title": "Відображення форми входу phpmyadmin",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/instance/phpmyadmin/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62056,
    "path": "mysql/instance/space",
    "root": "mysql",
    "title": "Перегляд розмірів директорій інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/instance/space/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62298,
    "path": "mysql/log/slow/download",
    "root": "mysql",
    "title": "Завантаження лога повільних запитів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/log/slow/download/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62370,
    "path": "mysql/performance/flush",
    "root": "mysql",
    "title": "Очищення статистики Performance Schema",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/performance/flush/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62299,
    "path": "mysql/performance/objects",
    "root": "mysql",
    "title": "Отримання списку популярних таблиць",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/performance/objects/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "db_name",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62510,
    "path": "mysql/performance/triggers",
    "root": "mysql",
    "title": "Отримання списку найбільш завантажених тригерів у базі даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/performance/triggers/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "db_name",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62434,
    "path": "mysql/plan/change",
    "root": "mysql",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/plan/change/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 51356,
    "path": "mysql/plan/list",
    "root": "mysql",
    "title": "Отримання списку тарифів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/mysql/plan/list/",
    "params": []
  },
  {
    "id": 62057,
    "path": "mysql/reload",
    "root": "mysql",
    "title": "Перезапуск інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/reload/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 51500,
    "path": "mysql/replication/save",
    "root": "mysql",
    "title": "Налаштування реплікації",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/replication/save/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "master_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "delay",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 45041,
    "path": "mysql/replication/start",
    "root": "mysql",
    "title": "Відновлення реплікації",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/replication/start/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 51358,
    "path": "mysql/replication/stop",
    "root": "mysql",
    "title": "Зупинення реплікації",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/replication/stop/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62371,
    "path": "mysql/stat/kill_query",
    "root": "mysql",
    "title": "Примусове завершення процесу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/stat/kill_query/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "process_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62422,
    "path": "mysql/stat/page",
    "root": "mysql",
    "title": "Отримання статистики використання ресурсів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/stat/page/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62122,
    "path": "mysql/title",
    "root": "mysql",
    "title": "Перейменування інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/title/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_title",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 48507,
    "path": "mysql/user/assign/list",
    "root": "mysql",
    "title": "Отримання списку прив’язок користувачів бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/assign/list/",
    "params": [
      {
        "name": "mysql_database_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 51502,
    "path": "mysql/user/assign/save",
    "root": "mysql",
    "title": "Прив’язка користувачів до бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/assign/save/",
    "params": [
      {
        "name": "mysql_database_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "users",
        "type": "Array",
        "required": true
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": true,
        "values": ""
      }
    ]
  },
  {
    "id": 51503,
    "path": "mysql/user/assign/update/save",
    "root": "mysql",
    "title": "Зміна привілеїв користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/assign/update/save/",
    "params": [
      {
        "name": "assign_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": true,
        "values": ""
      }
    ]
  },
  {
    "id": 51504,
    "path": "mysql/user/create/save",
    "root": "mysql",
    "title": "Створення користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/create/save/",
    "params": [
      {
        "name": "mysql_database_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": true,
        "values": ""
      },
      {
        "name": "auth_mode",
        "type": "String",
        "required": false,
        "defaultValue": "'sha2'",
        "values": "'sha2', 'native'"
      }
    ]
  },
  {
    "id": 51505,
    "path": "mysql/user/delete",
    "root": "mysql",
    "title": "Відв’язування або видалення користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/delete/",
    "params": [
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mysql_database_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62127,
    "path": "mysql/user/form_user_delete",
    "root": "mysql",
    "title": "Форма видалення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/form_user_delete/",
    "params": [
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 51506,
    "path": "mysql/user/list",
    "root": "mysql",
    "title": "Отримання списку користувачів бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/list/",
    "params": [
      {
        "name": "mysql_database_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62135,
    "path": "mysql/user/page",
    "root": "mysql",
    "title": "Список користувачів баз даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/page/",
    "params": [
      {
        "name": "mysql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 51507,
    "path": "mysql/user/update/save",
    "root": "mysql",
    "title": "Зміна пароля користувача бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/update/save/",
    "params": [
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "auth_mode",
        "type": "String",
        "required": false,
        "defaultValue": "'sha2'",
        "values": "'sha2', 'native'"
      }
    ]
  },
  {
    "id": 62136,
    "path": "mysql/user/user_delete",
    "root": "mysql",
    "title": "Видалення користувача з усіх баз",
    "method": "POST",
    "endpoint": "https://adm.tools/action/mysql/user/user_delete/",
    "params": [
      {
        "name": "mysql_user_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62372,
    "path": "opensearch/access/page",
    "root": "opensearch",
    "title": "Отримання списку користувачів з делегованим доступом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/access/page/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62374,
    "path": "opensearch/create/send",
    "root": "opensearch",
    "title": "Замовлення нової інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/create/send/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62467,
    "path": "opensearch/instance/activate",
    "root": "opensearch",
    "title": "Розблокування інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/instance/activate/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62361,
    "path": "opensearch/instance/delete",
    "root": "opensearch",
    "title": "Блокування та видалення інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/instance/delete/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62468,
    "path": "opensearch/instance/reload",
    "root": "opensearch",
    "title": "Перезапуск інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/instance/reload/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62375,
    "path": "opensearch/plan/change",
    "root": "opensearch",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/plan/change/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62301,
    "path": "opensearch/users/create/save",
    "root": "opensearch",
    "title": "Створення нового користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/users/create/save/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "role",
        "type": "String",
        "required": true,
        "values": "'custom', ...array_keys(OpenSearchService::PRESET_ROLES"
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": true
      }
    ]
  },
  {
    "id": 62522,
    "path": "opensearch/users/delete",
    "root": "opensearch",
    "title": "Видалення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/users/delete/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62302,
    "path": "opensearch/users/page",
    "root": "opensearch",
    "title": "Отримання списку користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/users/page/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62377,
    "path": "opensearch/users/update/save",
    "root": "opensearch",
    "title": "Зміна пароля користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/opensearch/users/update/save/",
    "params": [
      {
        "name": "opensearch_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "role",
        "type": "String",
        "required": true,
        "values": "'custom', ...array_keys(OpenSearchService::PRESET_ROLES"
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62378,
    "path": "postgresql/access/page",
    "root": "postgresql",
    "title": "Отримання списку користувачів з делегованим доступом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/access/page/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62381,
    "path": "postgresql/create/send",
    "root": "postgresql",
    "title": "Замовлення нової інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/create/send/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "version_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62304,
    "path": "postgresql/database/create/save",
    "root": "postgresql",
    "title": "Створення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/database/create/save/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "owner",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62503,
    "path": "postgresql/database/delete",
    "root": "postgresql",
    "title": "Видалення бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/database/delete/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database_oid",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62504,
    "path": "postgresql/database/list",
    "root": "postgresql",
    "title": "Отримання списку баз даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/database/list/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62505,
    "path": "postgresql/database/users",
    "root": "postgresql",
    "title": "Отримання списку користувачів, які мають доступ до бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/database/users/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database_oid",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62305,
    "path": "postgresql/extensions/page",
    "root": "postgresql",
    "title": "Отримання списку розширень бази даних",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/extensions/page/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database_oid",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62382,
    "path": "postgresql/extensions/toggle",
    "root": "postgresql",
    "title": "Зміна підключених розширень",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/extensions/toggle/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database_oid",
        "type": "Int",
        "required": true
      },
      {
        "name": "extension_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "enable",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62383,
    "path": "postgresql/instance/delete",
    "root": "postgresql",
    "title": "Блокування та видалення інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/instance/delete/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62306,
    "path": "postgresql/instance/reload",
    "root": "postgresql",
    "title": "Перезапуск інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/instance/reload/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62268,
    "path": "postgresql/plan/change",
    "root": "postgresql",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/plan/change/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62269,
    "path": "postgresql/plan/list",
    "root": "postgresql",
    "title": "Отримання списку тарифів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/postgresql/plan/list/",
    "params": []
  },
  {
    "id": 62360,
    "path": "postgresql/users/create/save",
    "root": "postgresql",
    "title": "Створення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/users/create/save/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "database_oid",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62424,
    "path": "postgresql/users/delete",
    "root": "postgresql",
    "title": "Видалення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/users/delete/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "user_oid",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62386,
    "path": "postgresql/users/list",
    "root": "postgresql",
    "title": "Отримання списку користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/users/list/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62387,
    "path": "postgresql/users/privilege/security/save",
    "root": "postgresql",
    "title": "Зміна привілеїв користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/users/privilege/security/save/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "database_oid",
        "type": "Int",
        "required": true
      },
      {
        "name": "user_oid",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "privileges",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": "'CREATE', 'TEMPORARY', 'CONNECT'"
      }
    ]
  },
  {
    "id": 62388,
    "path": "postgresql/users/update/save",
    "root": "postgresql",
    "title": "Зміна пароля користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/postgresql/users/update/save/",
    "params": [
      {
        "name": "postgresql_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "user_oid",
        "type": "Int",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "database_oid",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62218,
    "path": "protection/cache/flush",
    "root": "protection",
    "title": "Очищення кеша",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/cache/flush/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62217,
    "path": "protection/create/save",
    "root": "protection",
    "title": "Додавання сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/create/save/",
    "params": [
      {
        "name": "site",
        "type": "String",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "aliases",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62219,
    "path": "protection/ddos/block",
    "root": "protection",
    "title": "Додавання IP до чорного списку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/ddos/block/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "comment",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62220,
    "path": "protection/ddos/list",
    "root": "protection",
    "title": "Отримання списку поганих IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/ddos/list/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62221,
    "path": "protection/ddos/unblock",
    "root": "protection",
    "title": "Розблокування IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/ddos/unblock/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62159,
    "path": "protection/delete",
    "root": "protection",
    "title": "Видалення сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/delete/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62210,
    "path": "protection/filters/blacklist/get",
    "root": "protection",
    "title": "Список заблокованих ip",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/blacklist/get/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62222,
    "path": "protection/filters/country/get",
    "root": "protection",
    "title": "Отримання налаштувань фільтрів за країнами",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/country/get/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62502,
    "path": "protection/filters/country/save",
    "root": "protection",
    "title": "Зміна налаштувань фільтрів за країнами",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/country/save/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "country_allow",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "country_allow_bot",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "countries",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62223,
    "path": "protection/filters/header/get",
    "root": "protection",
    "title": "Отримання налаштувань заголовків",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/header/get/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62224,
    "path": "protection/filters/whitelist/add",
    "root": "protection",
    "title": "Додавання IP в білий список",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/whitelist/add/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "comment",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62525,
    "path": "protection/filters/whitelist/allow",
    "root": "protection",
    "title": "Заборона/дозвіл на доступ лише з IP-адрес із білого списку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/whitelist/allow/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62307,
    "path": "protection/filters/whitelist/get",
    "root": "protection",
    "title": "Отримання списку заблокованих IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/whitelist/get/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62321,
    "path": "protection/filters/whitelist/remove",
    "root": "protection",
    "title": "Видалення IP-адреси з білого списку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/filters/whitelist/remove/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62156,
    "path": "protection/list",
    "root": "protection",
    "title": "Отримання списку сайтів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/protection/list/",
    "params": []
  },
  {
    "id": 62226,
    "path": "protection/note/save",
    "root": "protection",
    "title": "Додавання примітки для IP у білому/чорному списку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/note/save/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": true,
        "values": "'whitelist', 'blacklist'"
      },
      {
        "name": "ip",
        "type": "String",
        "required": true
      },
      {
        "name": "note",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62498,
    "path": "protection/settings/save/cache",
    "root": "protection",
    "title": "Збереження основних налаштувань захисту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/settings/save/cache/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "cache_type",
        "type": "String",
        "required": true,
        "values": "'default', 'ignore_args'"
      },
      {
        "name": "cache_enabled",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62177,
    "path": "protection/settings/save/global",
    "root": "protection",
    "title": "Зміна основних налаштувань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/settings/save/global/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "proxy_mode",
        "type": "String",
        "required": true,
        "values": "'http', 'https', 'https_verify'"
      },
      {
        "name": "system_pages_lang",
        "type": "String",
        "required": true,
        "values": "'en', 'uk'"
      },
      {
        "name": "host_header",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "websockets_enable",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "header_country",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "aliases",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62178,
    "path": "protection/settings/save/speed",
    "root": "protection",
    "title": "Збереження налаштувань пов’язаних зі швидкістю",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/settings/save/speed/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "gzip_level",
        "type": "Int",
        "required": false,
        "defaultValue": "0",
        "values": "0, 3, 5, 9"
      }
    ]
  },
  {
    "id": 62308,
    "path": "protection/settings/save/ssl",
    "root": "protection",
    "title": "Зміна налаштувань SSL захисту сайту",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/settings/save/ssl/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "ssl_protocols_set",
        "type": "String",
        "required": true,
        "values": "'compatible', 'modern'"
      }
    ]
  },
  {
    "id": 62227,
    "path": "protection/settings/ssl",
    "root": "protection",
    "title": "Запит на видачу виписки з сертифіката",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/settings/ssl/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62228,
    "path": "protection/upstream/save",
    "root": "protection",
    "title": "Зміна налаштувань",
    "method": "POST",
    "endpoint": "https://adm.tools/action/protection/upstream/save/",
    "params": [
      {
        "name": "protection_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "hostname",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "max_conns",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "max_fails",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "fail_timeout",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "weight",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "type",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62197,
    "path": "rabbitmq/access/page",
    "root": "rabbitmq",
    "title": "Отримання списку користувачів з делегованим доступом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/access/page/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62155,
    "path": "rabbitmq/create/send",
    "root": "rabbitmq",
    "title": "Замовлення нової інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/create/send/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62171,
    "path": "rabbitmq/instance/activate",
    "root": "rabbitmq",
    "title": "Розблокування послуг",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/instance/activate/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62389,
    "path": "rabbitmq/instance/delete",
    "root": "rabbitmq",
    "title": "Блокування та видалення інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/instance/delete/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62264,
    "path": "rabbitmq/plan/change",
    "root": "rabbitmq",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/plan/change/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62180,
    "path": "rabbitmq/plan/list",
    "root": "rabbitmq",
    "title": "Отримання списку тарифів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/rabbitmq/plan/list/",
    "params": []
  },
  {
    "id": 62310,
    "path": "rabbitmq/plugins/page",
    "root": "rabbitmq",
    "title": "Отримання списку плагінів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/plugins/page/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62511,
    "path": "rabbitmq/plugins/toggle",
    "root": "rabbitmq",
    "title": "Увімкнення/вимкнення плагіна RabbitMQ",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/plugins/toggle/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "name",
        "type": "String",
        "required": true
      },
      {
        "name": "enable",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62391,
    "path": "rabbitmq/users/create/save",
    "root": "rabbitmq",
    "title": "Створення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/users/create/save/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "roles",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "values": ""
      }
    ]
  },
  {
    "id": 62523,
    "path": "rabbitmq/users/delete",
    "root": "rabbitmq",
    "title": "Видалення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/users/delete/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62311,
    "path": "rabbitmq/users/page",
    "root": "rabbitmq",
    "title": "Отримання списку користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/users/page/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62213,
    "path": "rabbitmq/users/permissions/delete",
    "root": "rabbitmq",
    "title": "Видалення привілеїв користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/users/permissions/delete/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "host",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62214,
    "path": "rabbitmq/users/permissions/list",
    "root": "rabbitmq",
    "title": "Отримання списку привілеїв користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/users/permissions/list/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62215,
    "path": "rabbitmq/users/permissions/save",
    "root": "rabbitmq",
    "title": "Зміна привілеїв користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/users/permissions/save/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "host",
        "type": "String",
        "required": true
      },
      {
        "name": "conf",
        "type": "String",
        "required": true
      },
      {
        "name": "write",
        "type": "String",
        "required": true
      },
      {
        "name": "read",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62312,
    "path": "rabbitmq/users/update/save",
    "root": "rabbitmq",
    "title": "Зміна користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/rabbitmq/users/update/save/",
    "params": [
      {
        "name": "rabbitmq_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "roles",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 62392,
    "path": "redis/access/page",
    "root": "redis",
    "title": "Отримання списку користувачів з делегованим доступом",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/access/page/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62393,
    "path": "redis/create/save",
    "root": "redis",
    "title": "Замовлення нової інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/create/save/",
    "params": [
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 52771,
    "path": "redis/instance/active/save",
    "root": "redis",
    "title": "Розблокування послуг",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/instance/active/save/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 52207,
    "path": "redis/instance/delete",
    "root": "redis",
    "title": "Блокування та видалення інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/instance/delete/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 29310,
    "path": "redis/log",
    "root": "redis",
    "title": "Отримання лога",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/log/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "date",
        "type": "DateTime",
        "required": false,
        "defaultValue": "'today'"
      },
      {
        "name": "time_from",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "time_to",
        "type": "Int",
        "required": false,
        "defaultValue": "144"
      },
      {
        "name": "search",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      },
      {
        "name": "sort_order",
        "type": "String",
        "required": false,
        "defaultValue": "'desc'",
        "values": "'asc', 'desc'"
      }
    ]
  },
  {
    "id": 26566,
    "path": "redis/memory/save",
    "root": "redis",
    "title": "Зміна режиму очищення пам’яті",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/memory/save/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "memory_policy",
        "type": "String",
        "required": true,
        "values": "'noeviction', 'allkeys-lru', 'allkeys-lfu', 'volatile-lru', 'volatile-lfu', 'allkeys-random', 'volatile-random', 'volatile-ttl'"
      }
    ]
  },
  {
    "id": 53347,
    "path": "redis/plan/list",
    "root": "redis",
    "title": "Отримання списку тарифів",
    "method": "GET",
    "endpoint": "https://adm.tools/action/redis/plan/list/",
    "params": []
  },
  {
    "id": 62273,
    "path": "redis/stats",
    "root": "redis",
    "title": "Отримання статистики Redis",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/stats/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62123,
    "path": "redis/title",
    "root": "redis",
    "title": "Перейменування інстансу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/title/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "redis_title",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 37579,
    "path": "redis/user/create/save",
    "root": "redis",
    "title": "Створення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/user/create/save/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "set_access",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "pubsub_access",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "raw_access",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 53492,
    "path": "redis/user/delete",
    "root": "redis",
    "title": "Видалення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/user/delete/",
    "params": [
      {
        "name": "redis_user_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 36089,
    "path": "redis/user/list",
    "root": "redis",
    "title": "Отримання списку користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/user/list/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 26068,
    "path": "redis/user/update/save",
    "root": "redis",
    "title": "Зміна налаштувань користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/redis/user/update/save/",
    "params": [
      {
        "name": "redis_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "redis_user_id",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "set_access",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "pubsub_access",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "raw_access",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 886,
    "path": "service/delegate-in",
    "root": "service",
    "title": "Отримання списку послуг, делегованих іншим користувачам",
    "method": "GET",
    "endpoint": "https://adm.tools/action/service/delegate-in/",
    "params": []
  },
  {
    "id": 887,
    "path": "service/delegate-out",
    "root": "service",
    "title": "Отримання списку послуг, делегованих поточній обліковій запису",
    "method": "GET",
    "endpoint": "https://adm.tools/action/service/delegate-out/",
    "params": []
  },
  {
    "id": 14587,
    "path": "storage/activate",
    "root": "storage",
    "title": "Розблокування сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/activate/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62153,
    "path": "storage/change_plan",
    "root": "storage",
    "title": "Зміна обсягу сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/change_plan/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15301,
    "path": "storage/delete_appearance_logo",
    "root": "storage",
    "title": "Видалення логотипу веб-інтерфейсу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/delete_appearance_logo/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15303,
    "path": "storage/delete_storage",
    "root": "storage",
    "title": "Блокування та видалення сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/delete_storage/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 43199,
    "path": "storage/domain/assign",
    "root": "storage",
    "title": "Підключення свого домену до сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/domain/assign/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "domain",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62322,
    "path": "storage/domain/check",
    "root": "storage",
    "title": "Перевірка можливості використання URL для сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/domain/check/",
    "params": [
      {
        "name": "url",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 43327,
    "path": "storage/domain/unassign",
    "root": "storage",
    "title": "Відключення свого домену від сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/domain/unassign/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62265,
    "path": "storage/ftp/create",
    "root": "storage",
    "title": "Додавання FTP-користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/ftp/create/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      },
      {
        "name": "homedir",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "is_readonly",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62426,
    "path": "storage/ftp/delete",
    "root": "storage",
    "title": "Видалення FTP-користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/ftp/delete/",
    "params": [
      {
        "name": "storage_ftp_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62427,
    "path": "storage/ftp/update",
    "root": "storage",
    "title": "Зміна налаштувань FTP-користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/ftp/update/",
    "params": [
      {
        "name": "storage_ftp_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "homedir",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "is_readonly",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 23396,
    "path": "storage/generate_secure_link_example",
    "root": "storage",
    "title": "Генерація посилання Secure Link",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/generate_secure_link_example/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "path",
        "type": "String",
        "required": true
      },
      {
        "name": "type",
        "type": "String",
        "required": false,
        "defaultValue": "'ip-ttl'",
        "values": "'ip-ttl', 'ip', 'ttl', 'static'"
      },
      {
        "name": "ttl",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 13715,
    "path": "storage/list",
    "root": "storage",
    "title": "Отримання списку сховищ",
    "method": "GET",
    "endpoint": "https://adm.tools/action/storage/list/",
    "params": [
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62270,
    "path": "storage/manage/cache",
    "root": "storage",
    "title": "Налаштування кешування браузера",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/manage/cache/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "cache_ttl_min",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      }
    ]
  },
  {
    "id": 62058,
    "path": "storage/manage/redirect",
    "root": "storage",
    "title": "Налаштування переадресації HTTPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/manage/redirect/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "http_redirect",
        "type": "String",
        "required": true,
        "values": "'none', 'https'"
      }
    ]
  },
  {
    "id": 62266,
    "path": "storage/manage/remove/add",
    "root": "storage",
    "title": "Додавання правила автовидалення",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/manage/remove/add/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "days",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "path",
        "type": "String",
        "required": false,
        "defaultValue": "'/'"
      },
      {
        "name": "empty_dir",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62271,
    "path": "storage/manage/remove/delete",
    "root": "storage",
    "title": "Видалення правила автовидалення",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/manage/remove/delete/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62272,
    "path": "storage/manage/remove/update",
    "root": "storage",
    "title": "Зміна правила автовидалення",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/manage/remove/update/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "id",
        "type": "Int",
        "required": true
      },
      {
        "name": "days",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "empty_dir",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62267,
    "path": "storage/manage/web_index",
    "root": "storage",
    "title": "Увімкнення/вимкнення заголовка X-Robots-Tag",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/manage/web_index/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "web_index",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 13716,
    "path": "storage/order",
    "root": "storage",
    "title": "Замовлення нового сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/order/",
    "params": [
      {
        "name": "plan_id",
        "type": "Int",
        "required": false,
        "defaultValue": "$plan_id_default"
      },
      {
        "name": "url",
        "type": "String",
        "required": false,
        "defaultValue": "$url_default"
      }
    ]
  },
  {
    "id": 62186,
    "path": "storage/reload_quota",
    "root": "storage",
    "title": "Оновлення статистики використання ресурсів сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/reload_quota/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 13717,
    "path": "storage/rename",
    "root": "storage",
    "title": "Перейменування сховища",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/rename/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "storage_name",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 62517,
    "path": "storage/torrent/cancel",
    "root": "storage",
    "title": "Припинення завантаження файлів через торрент",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/torrent/cancel/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "item_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62518,
    "path": "storage/torrent/delete",
    "root": "storage",
    "title": "Видалення завантажених файлів через торрент",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/torrent/delete/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "item_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 45047,
    "path": "storage/torrent/list",
    "root": "storage",
    "title": "Отримання списку завантажених файлів через торрент",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/torrent/list/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "opened_item_ids",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 45048,
    "path": "storage/torrent/select_files",
    "root": "storage",
    "title": "Отримання списку файлів для завантаження через торрент",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/torrent/select_files/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "torrent_file",
        "type": "File",
        "required": true
      },
      {
        "name": "torrent_magnet",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  },
  {
    "id": 59513,
    "path": "storage/torrent/upload",
    "root": "storage",
    "title": "Початок завантаження файлів через торрент",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/torrent/upload/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "hash",
        "type": "String",
        "required": true
      },
      {
        "name": "selected",
        "type": "Array",
        "required": true
      },
      {
        "name": "download_dir",
        "type": "String",
        "required": false,
        "defaultValue": "'/'"
      }
    ]
  },
  {
    "id": 15308,
    "path": "storage/update_appearance",
    "root": "storage",
    "title": "Завантаження свого логотипу веб-інтерфейсу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/update_appearance/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "custom_logo",
        "type": "File",
        "required": false
      }
    ]
  },
  {
    "id": 15309,
    "path": "storage/update_default_mode",
    "root": "storage",
    "title": "Налаштування виду при відкритті веб-інтерфейсу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/update_default_mode/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "mode",
        "type": "String",
        "required": false,
        "defaultValue": "'list'",
        "values": "'list', 'table'"
      }
    ]
  },
  {
    "id": 24667,
    "path": "storage/update_hide_listing",
    "root": "storage",
    "title": "Налаштування доступу до вмісту для публічного користувача веб-інтерфейсу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/update_hide_listing/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "show",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 37580,
    "path": "storage/update_secure_link_key",
    "root": "storage",
    "title": "Оновлення секретного ключа Secure Link",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/update_secure_link_key/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15312,
    "path": "storage/update_user_access",
    "root": "storage",
    "title": "Настроювання доступу до запису для користувача веб-інтерфейсу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/update_user_access/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "write",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15313,
    "path": "storage/user/add",
    "root": "storage",
    "title": "Додавання користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/user/add/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "login",
        "type": "String",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 15314,
    "path": "storage/user/change_password",
    "root": "storage",
    "title": "Зміна пароля користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/user/change_password/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "user_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "password",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 15315,
    "path": "storage/user/close_session",
    "root": "storage",
    "title": "Завершення всіх сесій користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/user/close_session/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "session_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "is_all",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15316,
    "path": "storage/user/delete",
    "root": "storage",
    "title": "Видалення користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/user/delete/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "user_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15317,
    "path": "storage/user/list",
    "root": "storage",
    "title": "Отримання списку користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/user/list/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15318,
    "path": "storage/user/session_list",
    "root": "storage",
    "title": "Отримання списку сесій користувачів",
    "method": "POST",
    "endpoint": "https://adm.tools/action/storage/user/session_list/",
    "params": [
      {
        "name": "storage_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 62521,
    "path": "tools/screenshot",
    "root": "tools",
    "title": "Створення скріншота сайту",
    "method": "GET",
    "endpoint": "https://adm.tools/action/tools/screenshot/",
    "params": [
      {
        "name": "url",
        "type": "String",
        "required": true
      },
      {
        "name": "width",
        "type": "Int",
        "required": false,
        "defaultValue": "1920"
      },
      {
        "name": "height",
        "type": "Int",
        "required": false,
        "defaultValue": "1080"
      },
      {
        "name": "is_mobile",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "theme",
        "type": "String",
        "required": false,
        "defaultValue": "'light'",
        "values": "'light', 'dark'"
      },
      {
        "name": "language",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      },
      {
        "name": "force",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "ext",
        "type": "String",
        "required": false,
        "defaultValue": "'png'",
        "values": "'png', 'jpeg', 'webp'"
      },
      {
        "name": "load_delay_ms",
        "type": "Int",
        "required": false,
        "defaultValue": "0"
      },
      {
        "name": "display",
        "type": "Bool",
        "required": false,
        "defaultValue": "1",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "quality",
        "type": "Int",
        "required": false,
        "defaultValue": "100"
      }
    ]
  },
  {
    "id": 21189,
    "path": "vps/cdrom/eject",
    "root": "vps",
    "title": "Вилучення образу з дисководу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/cdrom/eject/",
    "params": [
      {
        "name": "rom_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 19502,
    "path": "vps/cdrom/mount",
    "root": "vps",
    "title": "Підключення образу до дисковода",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/cdrom/mount/",
    "params": [
      {
        "name": "iso_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "rom_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62477,
    "path": "vps/control",
    "root": "vps",
    "title": "Увімкнення/перезавантаження/вимкнення VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/control/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "force",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      },
      {
        "name": "control",
        "type": "String",
        "required": false,
        "defaultValue": "'start'",
        "values": "'reboot', 'shutdown', 'start'"
      }
    ]
  },
  {
    "id": 13656,
    "path": "vps/credit",
    "root": "vps",
    "title": "Продовження VPS у кредит",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/credit/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 297,
    "path": "vps/delete",
    "root": "vps",
    "title": "Видалення VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/delete/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 23038,
    "path": "vps/deleted_download",
    "root": "vps",
    "title": "Отримання посилання для завантаження резервної копії віддаленого VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/deleted_download/",
    "params": [
      {
        "name": "backup_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62128,
    "path": "vps/firewall_save",
    "root": "vps",
    "title": "Зміна правил Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/firewall_save/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "src_ip",
        "type": "Array",
        "required": true
      },
      {
        "name": "sport",
        "type": "Array",
        "required": true
      },
      {
        "name": "dport",
        "type": "Array",
        "required": true
      },
      {
        "name": "protocol",
        "type": "Array",
        "required": true,
        "values": "'any', 'tcp', 'udp', 'icmp'"
      },
      {
        "name": "action",
        "type": "Array",
        "required": true,
        "values": "'accept', 'drop'"
      },
      {
        "name": "firewall_action",
        "type": "String",
        "required": true,
        "values": "'accept', 'drop'"
      }
    ]
  },
  {
    "id": 62129,
    "path": "vps/firewall_toggle",
    "root": "vps",
    "title": "Увімкнення/вимкнення Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/firewall_toggle/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "toggle",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 62234,
    "path": "vps/install/os_list",
    "root": "vps",
    "title": "Отримання списку ОС для VPS",
    "method": "GET",
    "endpoint": "https://adm.tools/action/vps/install/os_list/",
    "params": []
  },
  {
    "id": 40315,
    "path": "vps/ipextra/ipv4",
    "root": "vps",
    "title": "Виділення додаткової IPv4-адреси VPS та виписка рахунку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/ipextra/ipv4/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 40316,
    "path": "vps/ipextra/ipv4_drop",
    "root": "vps",
    "title": "Відмова від продовження виділеної IP-адреси для VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/ipextra/ipv4_drop/",
    "params": [
      {
        "name": "ip_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15320,
    "path": "vps/ipextra/ipv6",
    "root": "vps",
    "title": "Виділення IPv6 адреси VPS та виписка рахунку",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/ipextra/ipv6/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 304,
    "path": "vps/ipextra/list",
    "root": "vps",
    "title": "Список IP адрес VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/ipextra/list/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 15321,
    "path": "vps/ipextra/ptr",
    "root": "vps",
    "title": "Редагування PTR запису",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/ipextra/ptr/",
    "params": [
      {
        "name": "ip_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "hostname",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 62175,
    "path": "vps/iso/delete",
    "root": "vps",
    "title": "Видалення образу vps",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/iso/delete/",
    "params": [
      {
        "name": "iso_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62076,
    "path": "vps/paid_traffic",
    "root": "vps",
    "title": "Увімкнення/вимкнення платного трафіку для виділеного сервера",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/paid_traffic/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "active",
        "type": "Bool",
        "required": false,
        "defaultValue": "0",
        "values": "''%%0%%'', ''%%1%%''"
      }
    ]
  },
  {
    "id": 15322,
    "path": "vps/planchange",
    "root": "vps",
    "title": "Зміна тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/planchange/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "plan_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 306,
    "path": "vps/reboot/planchange",
    "root": "vps",
    "title": "Перезапуск сервера для застосування нового тарифу",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/reboot/planchange/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 307,
    "path": "vps/settings/password_change",
    "root": "vps",
    "title": "Зміна пароля root-користувача",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/settings/password_change/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "root_passwd",
        "type": "String",
        "required": true
      }
    ]
  },
  {
    "id": 311,
    "path": "vps/tab/access",
    "root": "vps",
    "title": "Виведення списку користувачів, що мають доступ до VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/tab/access/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 312,
    "path": "vps/tab/backup",
    "root": "vps",
    "title": "Отримання списку резервних копій VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/tab/backup/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 21526,
    "path": "vps/tab/cdrom",
    "root": "vps",
    "title": "cdrom",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/tab/cdrom/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 313,
    "path": "vps/tab/console",
    "root": "vps",
    "title": "Виведення даних для підключення VNC",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/tab/console/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 62137,
    "path": "vps/tab/firewall",
    "root": "vps",
    "title": "Отримання правил Firewall",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/tab/firewall/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      }
    ]
  },
  {
    "id": 315,
    "path": "vps/tab/ipextra",
    "root": "vps",
    "title": "Отримання списку додаткових IP",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/tab/ipextra/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "params",
        "type": "Array",
        "required": false,
        "defaultValue": "[]"
      }
    ]
  },
  {
    "id": 316,
    "path": "vps/tab/report",
    "root": "vps",
    "title": "Висновок історії операцій",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/tab/report/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "page",
        "type": "Int",
        "required": false,
        "defaultValue": "1"
      }
    ]
  },
  {
    "id": 317,
    "path": "vps/title_edit",
    "root": "vps",
    "title": "Перейменування VPS",
    "method": "POST",
    "endpoint": "https://adm.tools/action/vps/title_edit/",
    "params": [
      {
        "name": "vps_id",
        "type": "Int",
        "required": true
      },
      {
        "name": "vps_title",
        "type": "String",
        "required": false,
        "defaultValue": "''"
      }
    ]
  }
];

export function findAdmAction(locator: { id?: number; path?: string }) {
  if (locator.id != null) {
    return ADM_ACTIONS.find((action) => action.id === locator.id);
  }
  if (locator.path) {
    return ADM_ACTIONS.find((action) => action.path === locator.path);
  }
  return undefined;
}
