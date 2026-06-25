# adm.tools API Catalog

This file contains normalized endpoint metadata used by the MCP server.

Total actions: 679.

## Groups

- `billing`: 31
- `clickhouse`: 23
- `cloud`: 8
- `dedicated`: 19
- `dns`: 40
- `domain`: 30
- `extra`: 40
- `get_plans`: 1
- `get_services`: 1
- `gov`: 3
- `hosting`: 222
- `mail`: 58
- `manticore`: 21
- `mysql`: 38
- `opensearch`: 10
- `postgresql`: 17
- `protection`: 22
- `rabbitmq`: 15
- `redis`: 13
- `service`: 2
- `storage`: 37
- `tools`: 1
- `vps`: 27

## Actions

| ID | Method | Path | Params | Title |
| --- | --- | --- | --- | --- |
| 1 | POST | `billing/anonym_payment` | service, service_type, egrpou, period | Анонімна оплата |
| 62070 | GET | `billing/autorenew/list/dedicated` |  | Отримання списку Dedicated з можливістю автопродовження |
| 62073 | GET | `billing/autorenew/list/domain` |  | Отримання списку доменів з можливістю автопродовження |
| 62242 | GET | `billing/autorenew/list/hosting` |  | Отримання списку хостинг-аккаунтів з можливістю автопродовження |
| 62068 | GET | `billing/autorenew/list/vps` |  | Отримання списку VPS з можливістю автопродовження |
| 62060 | POST | `billing/autorenew/pop` | service_id, service_type | Відключення автопродовження |
| 62061 | POST | `billing/autorenew/set` | service_id, service_type, source, card_id, period | Увімкнення автопродовження |
| 62069 | GET | `billing/autorenew/unblock` |  | Розблокування автоподовження |
| 2 | GET | `billing/balance_get` |  | Отримання поточного балансу облікового запису |
| 13493 | GET | `billing/balance_history` | page | Отримання історії використання балансу |
| 3 | POST | `billing/balance_invoice` | amount | Виписка рахунку для поповнення балансу |
| 4 | GET | `billing/get_invoices` | page | Отримання списку рахунків |
| 13399 | GET | `billing/get_rtu` | page | Отримання переліку актів виконаних робіт |
| 5 | POST | `billing/invoice_cancel` | invoice_id | Скасування рахунку |
| 7 | POST | `billing/invoice_pay_from_balance` | invoice_id | Оплата рахунку з балансу |
| 15173 | POST | `billing/print/email_invoice` | invoice_id, email | Відправлення рахунку на пошту |
| 15 | GET | `billing/print/invoice` | invoice_id, token | Завантаження рахунку у форматі PDF |
| 16 | GET | `billing/print/requisites` | invoice_id | Завантаження реквізитів в форматі PDF |
| 15174 | GET | `billing/print/rtu` | rtu_id | Завантаження акту виконаних робіт у форматі PDF |
| 17 | GET | `billing/print/swift` | invoice_id | Завантаження рахунку SWIFT у форматі PDF |
| 12210 | POST | `billing/rtu_info` | rtu_id | Отримання розшифровки акта виконаних робіт |
| 62243 | POST | `billing/servicecart/cart/add_dedicated` | dedicated_id, period | Додати Dedicated до кошика |
| 62244 | POST | `billing/servicecart/cart/add_domain` | domain_id, period | Додавання домену до кошика |
| 62231 | POST | `billing/servicecart/cart/add_hosting` | account_id, period | Додавання хостинг-акаунта в кошик |
| 62245 | POST | `billing/servicecart/cart/add_protection` | protection_id, period | Додавання захисту сайту в кошик |
| 62246 | POST | `billing/servicecart/cart/add_vps` | vps_id, period | Додавання VPS до кошика |
| 62232 | POST | `billing/servicecart/cart/get` | open_promocode | Отримання вмісту кошика |
| 62233 | GET | `billing/servicecart/cart/pay` |  | Виписка рахунку для оплати вмісту кошика |
| 62247 | POST | `billing/servicecart/cart/pop` | type, service_id | Видалення послуги з кошика |
| 62248 | POST | `billing/servicecart/cart/prolong` | type, service_id, period | Швидке виписування рахунку для оплати окремої послуги |
| 62249 | POST | `billing/servicecart/get_services` | type, page | Отримання переліку послуг з можливістю оплати |
| 62395 | POST | `clickhouse/access/page` | clickhouse_id | Отримання списку користувачів з делегованим доступом |
| 62399 | POST | `clickhouse/create/send` | login, plan_id | Замовлення нової інстансу |
| 62400 | POST | `clickhouse/database/create/save` | clickhouse_id, name, create_user | Створення бази даних |
| 62274 | POST | `clickhouse/database/delete` | clickhouse_id, database | Видалення бази даних |
| 62401 | POST | `clickhouse/database/list` | clickhouse_id, page | Отримання списку баз даних |
| 62402 | POST | `clickhouse/database/users/assign/save` | clickhouse_id, database, users, database_privileges | Прив’язка користувача до бази даних |
| 62403 | POST | `clickhouse/database/users/assign/update/save` | clickhouse_id, database, username, database_privileges | Зміна привілеїв доступу користувача до бази даних |
| 62275 | POST | `clickhouse/database/users/list` | clickhouse_id, database | Отримання списку користувачів бази даних |
| 62404 | POST | `clickhouse/database/users/revoke` | clickhouse_id, username, database | Відв’язка користувача від бази даних |
| 62278 | POST | `clickhouse/instance/activate` | clickhouse_id | Розблокування інстансу |
| 62405 | POST | `clickhouse/instance/delete` | clickhouse_id | Блокування та видалення інстансу |
| 62279 | POST | `clickhouse/instance/reload` | clickhouse_id | Перезапуск інстансу |
| 62406 | POST | `clickhouse/kill` | clickhouse_id, query_uid | Примусове завершення процесу |
| 62407 | POST | `clickhouse/plan/change` | clickhouse_id, plan_id | Зміна тарифу |
| 62408 | GET | `clickhouse/plan/list` |  | Отримання списку тарифів |
| 62409 | POST | `clickhouse/port/list` | clickhouse_id | Отримання списку портів |
| 62410 | POST | `clickhouse/port/save` | clickhouse_id, port_type_id | Налаштування портів |
| 62411 | POST | `clickhouse/processlist` | clickhouse_id | Отримання списку активних процесів |
| 62415 | POST | `clickhouse/tables` | clickhouse_id, database | Отримання списку таблиць бази даних |
| 62416 | POST | `clickhouse/user/create/save` | clickhouse_id, username, password, database_privileges, databases, server_privileges, roles | Створення користувача |
| 62315 | POST | `clickhouse/user/delete` | clickhouse_id, username | Видалення користувача |
| 62417 | POST | `clickhouse/user/list` | clickhouse_id, page | Отримання списку користувачів |
| 62418 | POST | `clickhouse/user/update/save` | clickhouse_id, username, password, server_privileges, roles | Зміна пароля користувача |
| 62350 | POST | `cloud/guard/create/save` | service_type, service_id, port_types_id, item_type, ip | Додавання запису до налаштувань безпеки інстансу |
| 62351 | POST | `cloud/guard/delete` | guard_id | Видалення запису з налаштувань безпеки інстансу |
| 62352 | POST | `cloud/guard/edit/save` | guard_id, port_types_id | Зміна запису в налаштуваннях безпеки інстансу |
| 62353 | POST | `cloud/guard/list` | service_type, service_id | Отримання налаштувань безпеки екземпляра |
| 62435 | POST | `cloud/guard/toggle` | service_type, service_id, enable | Увімкнення/вимкнення брандмауера інстансу |
| 62428 | POST | `cloud/settings/list` | service_type, service_id | Отримання налаштувань інстансу |
| 62429 | POST | `cloud/settings/save` | service_type, service_id | Зміна налаштувань інстансу |
| 62469 | POST | `cloud/stat/list` | service_type, service_id | Отримання статистики використання ресурсів екземпляра |
| 62077 | POST | `dedicated/control/firewall` | dedicated_id | Отримання правил Firewall |
| 62075 | POST | `dedicated/control/firewall_save` | dedicated_id, src_ip, dst_ip, src_port, dst_port, protocol, action, default_action | Зміна правил Firewall |
| 62130 | POST | `dedicated/control/firewall_toggle` | dedicated_id, toggle | Увімкнення/вимкнення Firewall |
| 3903 | POST | `dedicated/control/ipextra/ipv6_request` | dedicated_id | Замовлення нової виділеної IPv6 адреси для виділеного сервера з випискою рахунку |
| 15192 | POST | `dedicated/control/ipextra/list` | dedicated_id | Таблиця PTR записів |
| 15193 | POST | `dedicated/control/ipextra/ptr` | ip_id, hostname | Редагування PTR запису |
| 38 | POST | `dedicated/control/kvm/add` | dedicated_id | Заявка на підключення KVM |
| 39 | POST | `dedicated/control/kvm/cancel` | kvm_id, dedicated_id | Скасування заявки на підключення KVM до прийняття в роботу |
| 40 | POST | `dedicated/control/kvm/close` | kvm_id, dedicated_id | Закриття заявки на підключення KVM |
| 3904 | POST | `dedicated/control/rescue/check_status` | dedicated_id | Перевірка статусу запуску dedicated сервера в rescue-режим |
| 3905 | POST | `dedicated/control/rescue/start` | dedicated_id, reboot_type | Виведення форми запуску dedicated сервера в rescue-режим |
| 44 | POST | `dedicated/control/reset/reboot` | dedicated_id, type | Перезавантаження виділеного сервера |
| 45 | POST | `dedicated/control/reset/report` | dedicated_id | Звіт перезавантаження за останні 10 днів |
| 1313 | POST | `dedicated/control/title_edit` | dedicated_id, title | Перейменування Dedicated |
| 13061 | POST | `dedicated/credit` | dedicated_id | Продовження виділеного сервера в кредит |
| 23026 | POST | `dedicated/ipextra/ipv4` | dedicated_id | Замовлення IPv4-адреси для виділеного сервера з випискою рахунку |
| 23027 | POST | `dedicated/ipextra/ipv4_drop` | ip_id | Відмова від продовження виділеної IP-адреси для виділеного сервера |
| 62160 | POST | `dedicated/order` | assembly_id, ram_size, drives, os_id, network | Замовлення виділеного сервера |
| 21507 | POST | `dedicated/paid_traffic` | dedicated_id, active | Увімкнення/вимкнення платного трафіку для виділеного сервера |
| 53 | POST | `dns/add_foreign_domain` | domain_name, import_records | Додавання домену |
| 55 | POST | `dns/change_nameservers` | domain_id, stack, skip | Зміна NS |
| 56 | POST | `dns/child_ns/delete` | child_ns_id, domain_id | Видалення дочірнього NS |
| 57 | POST | `dns/child_ns/edit` | domain_id, ip, child_ns_id, hostname, ipv6 | Створення / зміна дочірнього NS |
| 58 | POST | `dns/child_ns/list` | domain_id | Список дочірніх NS |
| 59 | POST | `dns/config_export` | domain_id | Експорт налаштувань домену |
| 15194 | POST | `dns/contacts/request/cancel` | request_id | Скасування запиту на зміну контактних даних домену |
| 12795 | POST | `dns/contacts/request/email_code_resend` | request_id, email_index | Повторне надсилання коду підтвердження зміни контактів на Email |
| 12796 | GET | `dns/contacts/request/email_code_verify` | request_id, code | Підтвердження зміни контактів домену кодом із листа на Email |
| 62449 | POST | `dns/delete_domain` | domain_id | Видалення домену (обслуговується не у нас) |
| 62454 | POST | `dns/delete_domain_fake` | domain_id | Видалення домену (обслуговується у нас) |
| 62161 | GET | `dns/icann/confirm_email` | user_id, token | Підтвердження email для ICANN |
| 62162 | GET | `dns/icann/confirm_phone` | user_id, token | Підтвердження телефону для ICANN |
| 62163 | POST | `dns/icann/confirm_phone_send` | user_id, token, code | Підтвердження телефону для ICANN |
| 61 | POST | `dns/list` | sort, by, domains_search_request, p, tag_id, tag_free, page | Отримання списку доменів |
| 63 | POST | `dns/massupdate/update_domains` | domain_ids, config_file | Масова зміна налаштувань доменів |
| 64 | POST | `dns/nameservers_list` | domain_id | Отримання списку NS домену |
| 65 | POST | `dns/order/bill` | domains | Виписка рахунку на оплату замовлених доменів |
| 66 | GET | `dns/order/list` |  | Отримання списку нових замовлень на реєстрацію доменів |
| 67 | POST | `dns/order/remove_domain` | domain_id | Видалення замовлення на реєстрацію домену |
| 3906 | POST | `dns/parking_page/edit` | domain_id, content | Зміна HTML-коду паркувальної сторінки |
| 62250 | POST | `dns/parking_page/toggle` | domain_id, enabled, redirect_use_no_www | Налаштування сторінки паркування |
| 3843 | POST | `dns/record_add` | domain_id, type, record, data, priority | Додавання DNS-записи |
| 70 | POST | `dns/record_delete` | subdomain_id | Видалення DNS-запису |
| 3844 | POST | `dns/record_edit` | subdomain_id, data, priority | Зміна DNS-записи |
| 72 | POST | `dns/records_default` | domain_id | Відновлення записів за замовчуванням в домені |
| 15195 | POST | `dns/records_import` | domain_id, record | Імпорт записів домену |
| 74 | POST | `dns/records_list` | domain_id | Отримання списку DNS-записів домену |
| 75 | POST | `dns/remove_hold` | domain_id | Тимчасове увімкнення домену із закінченим терміном дії |
| 62455 | POST | `dns/restore_domain_fake` | domain_id | Відновлення видаленого домену |
| 62236 | POST | `dns/searchhistory/delete` | id | Видалення запису з історії пошуку доменів |
| 62237 | GET | `dns/searchhistory/delete_all` |  | Очищення історії пошуку доменів |
| 62238 | GET | `dns/searchhistory/list` | page | Отримання історії пошуку доменів |
| 76 | POST | `dns/set_mail_redirect` | domain_id, email_redirect, email_redirect_active | Налаштування поштового редиректу для домену |
| 77 | POST | `dns/set_web_redirect` | domain_id, redirect_url, redirect, redirect_code, redirect_persist_url, redirect_use_no_www | Налаштування веб-редиректу |
| 78 | POST | `dns/srv_add` | domain_id, service, subdomain, protocol, priority, weight, port, data | Додавання SRV-запису |
| 79 | POST | `dns/tag/bind` | domain_id, tag_id | Прив’язка / відв’язування мітки від домену |
| 81 | POST | `dns/tag/delete` | tag_ids | Видалення міток |
| 62131 | POST | `dns/tag/edit` | tag_id, name | Створення мітки |
| 82 | GET | `dns/tag/list` | page | Отримання списку міток |
| 62053 | POST | `domain/booking/auction/bet` | auction_id, pay_type, bet, pay_card_id | Ставка за аукціоном |
| 62251 | POST | `domain/booking/auction/domains` | query | Отримання списку активних аукціонів |
| 62054 | POST | `domain/booking/auction/list` | auction_id | Отримання поточної ставки |
| 62055 | POST | `domain/booking/book` | domain | Створення попереднього замовлення домену |
| 9741 | POST | `domain/booking/list` | show_valid_until, query, page | Отримання списку попередніх замовлень доменів |
| 84 | POST | `domain/booking/remove` | booking_id | Видалення попереднього замовлення домену |
| 85 | POST | `domain/check` | domain | Перевірка доступності домена |
| 62259 | POST | `domain/dnssec/add` | domain_id, key_tag, algorithm, digest_type, digest | Додавання запису DNSSEC |
| 62506 | POST | `domain/dnssec/delete` | domain_id, ds_id | Видалення запису DNSSEC |
| 62345 | POST | `domain/dnssec/list` | domain_id | Отримання списку записів DNSSEC |
| 86 | POST | `domain/expired/add` | expired_domain_id | Додавання звільненого домену до кошика |
| 3908 | POST | `domain/expired/check` | expired_id | Оновлення інформації про термін закінчення реєстрації домену |
| 87 | GET | `domain/expired/export` | domain, dates, sort, by | Завантаження списку звільнених доменів у форматі CSV |
| 88 | POST | `domain/expired/load` | single_row_id, domain, zone_id, sort, by, date_from, date_to | Отримання списку звільнених доменів |
| 3909 | POST | `domain/favourite/delete` | list_id | Видалення набору доменних зон |
| 3910 | GET | `domain/favourite/load` |  | Отримання списку наборів доменних зон |
| 3912 | POST | `domain/favourite/save` | list, name, list_id | Створення/зміна набору доменних зон |
| 62466 | GET | `domain/prices` |  | Отримання цін на домени у форматі JSON |
| 89 | POST | `domain/register` | domain, period | Перевірка доступності домену та формування рахунку на реєстрацію |
| 91 | POST | `domain/registration/process` | domain, tm_code, is_check, process_request_confirmed | Реєстрація домену .UA |
| 93 | POST | `domain/return` | domain_id, reason | Створення заявки на видалення домену |
| 62252 | POST | `domain/sale/delete` | domain | Зняття домену з продажу |
| 62253 | POST | `domain/sale/edit` | domain, contacts, price, currency_id, additional_info | Виставлення/налаштування домену на продаж |
| 95 | POST | `domain/sale/load` | domain, sort, by | Отримання списку доменів на продаж |
| 96 | GET | `domain/tracking/export` |  | Завантаження списку відстежуваних доменів |
| 97 | POST | `domain/tracking/get` | search, status, page | Отримання списку відслідковуються доменів |
| 98 | POST | `domain/tracking/remove` | id | Видалення домену з відстежуваних |
| 99 | POST | `domain/tracking/track` | domains | Додавання доменів до відстежуваних |
| 62460 | POST | `domain/transfer/confirm` | domain, auth_code, promocode | Замовлення трансферу домену до нас |
| 100 | GET | `domain/zones` |  | Отримання списку доменних зон |
| 14527 | POST | `extra/hosting_ip` | account_id | Замовлення виділеної IP-адреси |
| 12856 | POST | `extra/hosting_ip_drop` | ip_id | Відновлення продовження додаткової послуги |
| 15201 | POST | `extra/list` | account_id | Отримання списку додаткових послуг |
| 15203 | POST | `extra/memcache` | account_id, ram, list | Замовлення Memcache |
| 23028 | POST | `extra/memcache/drop` | order_id | Видалення замовлення Memcache |
| 21508 | POST | `extra/memcache/systemd_start` | account_id | Запускаємо процес systemd Memcached |
| 14203 | POST | `extra/opcache` | account_id, opcache | Замовлення OPCache |
| 53636 | POST | `extra/opcache/drop` | order_id | Відмова/видалення/відновлення opcache |
| 62164 | POST | `extra/opcache/jit` | host_id, jit_cpu, jit_allocation, jit_trigger, jit_level, jit_buffer_size_mb | Встановлюємо налаштування jit |
| 62165 | POST | `extra/opcache/order` | host_id, memory, revalidate_freq | Замовлення OPCache |
| 15208 | POST | `extra/redis` | account_id, ram | Замовлення Redis |
| 23518 | POST | `extra/redis/drop` | order_id | Видалення замовлення на Redis |
| 21509 | POST | `extra/redis/systemd_start` | account_id | Запускаємо процес systemd Redis |
| 53637 | POST | `extra/sphinx/apply` | account_id | Оновлює конфігурацію Sphinx на сервері |
| 53937 | POST | `extra/sphinx/attr` | sphinx_index_id, fields, type | Зберігає налаштування даних |
| 21510 | POST | `extra/sphinx/config` | account_id | Попередній перегляд конфігурації |
| 53787 | POST | `extra/sphinx/config_load` | account_id | Отримання конфіга Sphinx |
| 53638 | POST | `extra/sphinx/config_save` | account_id, config, socket_type, logging | Збереження конфігурації |
| 53938 | POST | `extra/sphinx/crontab` | index_id, crontab_id, minute, hour, day, week, month | Налаштування частоти оновлення індексу Sphinx |
| 53788 | POST | `extra/sphinx/db` | account_id, name, sql_host, sql_db, sql_user, sql_pass | Зберігаємо налаштування підключення до БД, яка є джерелом |
| 53789 | POST | `extra/sphinx/db_connection` | db_id | Перевірка підключення до БД |
| 53790 | POST | `extra/sphinx/db_delete` | sphinx_db_id | Видалення бази даних з якої беруться дані для sphinx |
| 53939 | POST | `extra/sphinx/db_edit` | sphinx_db_id, name, sql_host, sql_db, sql_user, sql_pass, sql_port | Зберігаємо налаштування підключення до БД, яка є джерелом |
| 23029 | POST | `extra/sphinx/drop` | account_id | Видалення послуги Sphinx |
| 23030 | POST | `extra/sphinx/index` | name, sphinx_db_id, sql_query | Збереження запиту в БД для формування індексу Sphinx |
| 53639 | POST | `extra/sphinx/index_delete` | sphinx_index_id | Видалення індексу |
| 21511 | POST | `extra/sphinx/index_edit` | sphinx_index_id, name, sphinx_db_id, sql_query | Зміна індексу |
| 62516 | POST | `extra/sphinx/index_settings` | sphinx_index_id, account_id | Отримання налаштувань індексу Sphinx |
| 53940 | POST | `extra/sphinx/index_update` | sphinx_index_id | Сформувати індекс sphinx |
| 62499 | POST | `extra/sphinx/index/delete` | crontab_id | Видалення періодичності формування індексу (редагування cron-завдання) |
| 62500 | POST | `extra/sphinx/index/list` | account_id | Отримання списку індексів |
| 53640 | POST | `extra/sphinx/log` | account_id | Перегляд лога Sphinx |
| 53941 | POST | `extra/sphinx/logs` | account_id | Лог Sphinx |
| 23390 | POST | `extra/sphinx/mode` | account_id, is_manual | Переключення між ручним та автоматичним режимом конфігурації |
| 21512 | POST | `extra/sphinx/params` | index_id, morphology, html_strip, index_exact_words, expand_keywords, min_word_len, min_infix_len, min_prefix_len, wordforms, charset_table, ignore_chars | Налаштування індексу Sphinx |
| 21513 | POST | `extra/sphinx/query` | sphinx_index_id, sql_query | Створення додаткового запиту SQL |
| 52768 | POST | `extra/sphinx/query_delete` | query_id | Видалення запиту |
| 21514 | POST | `extra/sphinx/query_edit` | query_id, sql_query | Зміна додаткового запиту SQL |
| 21515 | POST | `extra/sphinx/sort` | order | Змінює порядок виконання SQL запитів |
| 21517 | POST | `extra/sphinx/systemd_start` | account_id | Запуск процесу Sphinx |
| 62229 | POST | `get_plans` | type | Отримання списку тарифів послуги |
| 62187 | POST | `get_services` | type | Отримання списку послуг/хостів |
| 62166 | POST | `gov/company_update` | egrpou, is_client | Отримання даних про компанію з державного реєстру |
| 62507 | POST | `gov/court_document` | document_id, year | Отримання даних про рішення суду |
| 62281 | POST | `gov/court_search` | q | Пошук за реєстром судових рішень |
| 62432 | POST | `hosting/access/billing` | access_id, grant_billing | Налаштування доступу до зміни тарифу |
| 11330 | POST | `hosting/access/grant` | service_type, service_id, user_login, is_mailbox, grant_billing | Делегування доступу до послуги |
| 15217 | POST | `hosting/access/mailbox` | access_id, is_mailbox | Налаштування доступу до поштових скриньок хостинг-акаунта |
| 11769 | POST | `hosting/access/notification` | type, access_id, is_notification | Налаштування сповіщень для делегованої послуги |
| 15218 | POST | `hosting/access/refuse` | service_type, service_id | Відмова від делегованого доступу до послуги |
| 15219 | POST | `hosting/access/revoke` | access_id | Скасування делегованого доступу до послуги |
| 62457 | POST | `hosting/account/app/systemd/info` | host_id | Отримання інформації про веб-додаток |
| 62064 | POST | `hosting/account/app/systemd/pause` | systemd_id | Зупинка веб-додатку |
| 62065 | POST | `hosting/account/app/systemd/restart` | systemd_id | Перезапуск веб-додатка |
| 51498 | POST | `hosting/account/app/systemd/start` | systemd_id | Запуск веб-додатку |
| 62066 | POST | `hosting/account/app/systemd/update` | host_id, command, run_dir | Зміна налаштувань запуску веб-додатка |
| 106 | GET | `hosting/account/archive/list` |  | Виведення списку архівних акаунтів |
| 108 | POST | `hosting/account/archive/send` | account_id | Замовлення відновлення хостинг аккаунта з архіву і виписка рахунку |
| 62325 | POST | `hosting/account/charts/cpu` | account_id | Отримання графіка використання центрального процесора |
| 62326 | POST | `hosting/account/charts/db_requests` | account_id | Отримання графіка запитів до баз даних |
| 62327 | POST | `hosting/account/charts/ep` | account_id | Отримання графіка Entry processes |
| 62329 | POST | `hosting/account/charts/io` | account_id | Отримання графіка IO |
| 62331 | POST | `hosting/account/charts/nproc` | account_id | Отримання графіка Number of Processes |
| 62332 | POST | `hosting/account/charts/pmem` | account_id | Отримання графіка використання оперативної пам’яті |
| 62333 | POST | `hosting/account/charts/requests` | account_id | Отримання графіка запитів до веб-сервера |
| 62334 | POST | `hosting/account/charts/sa` | account_id | Отримання графіка використання процесорних хвилин |
| 62335 | POST | `hosting/account/charts/save` | account_id, chart | Налаштування графіків |
| 62481 | POST | `hosting/account/cms/builder/install/status` | host_id | Отримання інформації про поточну установку |
| 62482 | POST | `hosting/account/cms/builder/install/template` | template_id, host_id | Установка шаблона |
| 62483 | POST | `hosting/account/cms/builder/load_templates` | category_id, search, page, templates_per_page | Отримання списку шаблонів |
| 62484 | POST | `hosting/account/cms/builder/template` | template_id, host_id | Отримання інформації про шаблон |
| 62254 | POST | `hosting/account/cms/install/cancel` | request_id | Скасування запиту на автоінсталяцію CMS |
| 62255 | POST | `hosting/account/cms/install/request_settings` | host_id, request_id | Отримання параметрів запиту на автоінсталяцію CMS |
| 62256 | POST | `hosting/account/cms/install/requests` | host_id, page | Отримання списку запитів на автоінсталяцію CMS |
| 62257 | POST | `hosting/account/cms/install/select_version` | version_id, host_id | Вибір версії CMS для автоінсталяції та отримання її налаштувань |
| 62456 | POST | `hosting/account/cms/install/send` | host_id, version_id, db_id, mysql_database_id, mysql_user_id, mysql_user_password, document_root_suffix, lang, site_builder, template_id, param_admin, param_email, param_password, param_name, param_firstname, param_lastname, param_title, param_title_short, param_site_email, database_service, is_clear_database | Створення запиту на встановлення CMS |
| 62485 | POST | `hosting/account/cms/wordpress/plugins/delete` | host_id, plugin | Видалення плагіна |
| 62486 | POST | `hosting/account/cms/wordpress/plugins/list` | host_id | Отримання списку встановлених плагінів |
| 62479 | POST | `hosting/account/cms/wordpress/plugins/toggle` | host_id, plugin, activate | Увімкнення/вимкнення плагіна |
| 62487 | POST | `hosting/account/cms/wordpress/plugins/update` | host_id, plugin | Оновлення плагіна |
| 62488 | POST | `hosting/account/cms/wordpress/plugins/verify` | host_id | Перевірка файлів плагінів |
| 62317 | POST | `hosting/account/cms/wordpress/profiler/list` | host_id, url | Запуск профілювання |
| 62318 | POST | `hosting/account/cms/wordpress/profiler/stage` | host_id, stage, url | Отримання детальної інформації про етап профілювання |
| 62489 | POST | `hosting/account/cms/wordpress/restore` | host_id | Відновлення файлів ядра |
| 116 | POST | `hosting/account/delete` | account_id | Видалення хостинг-аккаунта |
| 117 | POST | `hosting/account/diskspace` | account_id | Споживання місце на диску |
| 14849 | POST | `hosting/account/goaccess` | host_id, date, period | Генерація та отримання звіту GoAccess для сайту |
| 14850 | POST | `hosting/account/ip_check` | account_id, ip | Перевірка блокування IP-адреси системою захисту від DDoS |
| 19194 | POST | `hosting/account/ip_unblock` | ip, account_id | Розблокування IP-адреси, заблокованої системою захисту від DDoS |
| 131 | GET | `hosting/account/list` |  | Отримання списку хостинг-акаунтів |
| 15228 | POST | `hosting/account/migration` | country_id, account_id, mysql_migration_lock | Зміна країни хостинг-акаунта |
| 132 | POST | `hosting/account/migration_cancel` | account_id | Скасування міграції аккаунта в іншу країну |
| 62358 | POST | `hosting/account/nodejs/params` | host_id, value | Налаштування додавання параметрів --host --port |
| 8433 | POST | `hosting/account/nodejs/reload` | host_id | Примусовий перезапуск програми |
| 6931 | POST | `hosting/account/nodejs/status` | host_id | Отримання статусу програми |
| 7057 | POST | `hosting/account/nodejs/stop` | host_id | Примусова зупинка програми |
| 3915 | POST | `hosting/account/order` | plan_id, login, promocode | Замовлення нового хостинг-акаунта |
| 134 | POST | `hosting/account/outgoing/block_add` | account_id, ip, port, protocol | Блокування вихідного з’єднання |
| 135 | POST | `hosting/account/outgoing/block_all` | account_id | Блокування всіх вихідних з’єднань |
| 136 | POST | `hosting/account/outgoing/block_delete` | account_id, ip_id, page | Розблокування вихідного з’єднання |
| 137 | POST | `hosting/account/outgoing/blocked` | account_id, page | Отримання списку заблокованих вихідних з’єднань |
| 62462 | POST | `hosting/account/outgoing/ip_set` | account_id, output_ip_id | Налаштування IP для вихідних з’єднань |
| 138 | POST | `hosting/account/outgoing/list` | account_id, ip, date, sort, by, page | Отримання списку вихідних з’єднань |
| 15229 | POST | `hosting/account/outgoing/unblock_all` | account_id | Розблокування всіх вихідних з’єднань |
| 15230 | POST | `hosting/account/plan/change` | account_id, new_plan_id | Зміна тарифу |
| 15231 | POST | `hosting/account/plan/change_list` | account_id | Отримання списку доступних тарифів |
| 62260 | POST | `hosting/account/plan/history` | account_id | Отримання історії змін тарифу |
| 15232 | POST | `hosting/account/plan/info` | account_id | Отримання інформації про поточний тариф |
| 141 | POST | `hosting/account/quota` | account_id | Інформація про використовуваних хостинг аккаунтом ресурсах |
| 142 | POST | `hosting/account/server_status` | account_id, date | Виведення інформації про стан серверів по датах |
| 62490 | POST | `hosting/account/settings/alias` | account_id, alias, command | Створення псевдоніма |
| 62491 | POST | `hosting/account/settings/cagefs_remount` | account_id | remount cagefs для облікового запису |
| 62492 | POST | `hosting/account/settings/check_tmp` | account_id | Перевірка tmp директорії tmp директорії cagefs |
| 62493 | POST | `hosting/account/settings/go` | account_id, go_version_id | Зміна версії Go |
| 62494 | POST | `hosting/account/settings/nodejs` | account_id, node_version_id | Зміна версії Node.js |
| 62495 | POST | `hosting/account/settings/php` | account_id, php_version | Зміна версії PHP |
| 62496 | POST | `hosting/account/settings/python` | account_id, python_version_id | Зміна версії Python |
| 143 | POST | `hosting/account/ssh/add_key` | account_id, key_id | Додавання SSH-ключа |
| 146 | POST | `hosting/account/ssh/delete_key` | account_id, key_id | Видалення SSH-ключа |
| 3917 | POST | `hosting/account/ssh/kill_processes` | account_id | Примусове завершення всіх процесів хостинг-облікового запису |
| 150 | POST | `hosting/account/ssh/passwd/send` | account_id, password | Зміна пароля SSH |
| 15233 | POST | `hosting/account/title` | account_id, account_title | Перейменування хостинг-аккаунта |
| 62113 | POST | `hosting/account/top_load_hosts` | account_id, date | Рейтинг сайтів за навантаженням на сервер |
| 13714 | POST | `hosting/credit` | account_id | Продовження хостинг-акаунта в кредит |
| 160 | POST | `hosting/crontab/edit` | account_id, task, admin_email, task_id, concurrent_kill, comment, minute, hour, day, week, month, disable_handle, send_run_report, send_kill_report | Додати / редагувати завдання cron |
| 161 | POST | `hosting/crontab/list` | account_id | Отримання списку завдань cron |
| 163 | POST | `hosting/crontab/task_delete` | task_id | Видалення завдання cron |
| 164 | POST | `hosting/crontab/task_test` | task_id | Тестовий запуск завдання cron |
| 165 | POST | `hosting/crontab/update_active` | task_id, active | Включення / відключення завдання cron |
| 15234 | GET | `hosting/db/acl_get` | i, t, a, h | Отримання списку дозволених для підключення IP облікового запису |
| 49629 | POST | `hosting/firewall/add` | account_id, ip, note | Додавання IP до білого списку Firewall |
| 62425 | POST | `hosting/firewall/delete` | account_id, ip | Видалення IP з білого списку Firewall |
| 49630 | POST | `hosting/firewall/list` | account_id, page | Отримання білого списку Firewall |
| 166 | POST | `hosting/ftp/access_list` | account_id | Отримання списку дозволених IP для доступу по FTP |
| 167 | POST | `hosting/ftp/add_account` | account_id, login, password, homedir, is_readonly | Додавання FTP-користувача |
| 168 | POST | `hosting/ftp/delete_access` | ip_id | Видалення дозволених IP зі списку доступу по FTP |
| 169 | POST | `hosting/ftp/delete_account` | ftp_id | Видалення FTP-користувача |
| 170 | POST | `hosting/ftp/edit_access` | account_id, ip, active | Зміна налаштувань безпеки FTP |
| 171 | POST | `hosting/ftp/edit_account` | ftp_id, login, password, homedir, is_readonly | Зміна налаштувань FTP-користувача |
| 172 | POST | `hosting/ftp/list` | account_id | Отримання списку FTP-користувачів |
| 15235 | GET | `hosting/inform` | name, lang, type | Кількість днів, що залишилися до кінця терміну домену |
| 15236 | POST | `hosting/log/cron` | account_id | Отримання лога cron |
| 15237 | POST | `hosting/log/ftp` | account_id, date | Отримання логу FTP |
| 62115 | POST | `hosting/log/nginx-online` | host_id | Показуємо логи для сайту в режимі реального часу |
| 15243 | POST | `hosting/log/php/fpm` | host_id, date | Отримання лога помилок сайту (PHP-FPM) |
| 15244 | POST | `hosting/log/php/log` | host_id, date | Отримання лога помилок PHP |
| 15245 | POST | `hosting/log/web/apache` | host_id, date | Отримання логів помилок сайту (Apache) |
| 24387 | POST | `hosting/log/web/litespeed` | host_id, date | Отримання логів помилок сайту (OpenLiteSpeed) |
| 15247 | POST | `hosting/log/web/nginx` | host_id, date | Отримання лога доступу до сайту (nginx) |
| 3736 | POST | `hosting/memcache/restart` | account_id | Перезавантаження процесу Memcache для очищення даних |
| 3868 | POST | `hosting/monitoring/add` | service_type, service_id, type_id, frequency, notify_ignore, param_url, param_domain_ip, param_word, param_port, param_host, param_username, param_password, param_max_process_count | Додавання нового правила моніторингу |
| 439 | POST | `hosting/monitoring/load_rules` | service_type, service_id | Отримання переліку правил моніторингу |
| 3920 | POST | `hosting/monitoring/remove` | rule_id | Видалення правила моніторингу |
| 833 | POST | `hosting/monitoring/update_active` | rule_id, active, delay_hours | Включення / відключення правила моніторингу |
| 14851 | POST | `hosting/mysql/dbinterface/clear` | db_id | Очищення бази даних |
| 62119 | POST | `hosting/mysql/dbinterface/copy_db` | db_id, name | Створення копії бази даних |
| 14204 | POST | `hosting/mysql/dbinterface/create` | account_id, name, collation_id, create_user | Створення бази даних |
| 15257 | POST | `hosting/mysql/dbinterface/dbsize` | db_id | Оновлення інформації про розмір бази даних |
| 15258 | POST | `hosting/mysql/dbinterface/delete` | db_id | Видалення бази даних |
| 62346 | GET | `hosting/mysql/dbinterface/get_collations` |  | Отримання списку доступних кодувань |
| 213 | POST | `hosting/mysql/dbinterface/ip_access_table` | account_id | Отримання списку IP, з яких дозволений доступ до MySQL |
| 62344 | POST | `hosting/mysql/dbinterface/kill_procs` | db_id | Примусове завершення процесів |
| 214 | POST | `hosting/mysql/dbinterface/load` | account_id | Отримання списку баз даних хостинг-акаунта |
| 13842 | POST | `hosting/mysql/dbinterface/optimize` | db_id | Оптимізація таблиць бази даних |
| 15261 | POST | `hosting/mysql/dbinterface/phpmyadmin/2fa_status` | account_id, reload | Перевіряємо, чи включена 2fa на акаунтах баз даних |
| 15262 | POST | `hosting/mysql/dbinterface/repair` | db_id | Запуск REPAIR TABLE для бази даних MySQL |
| 28584 | POST | `hosting/mysql/dbinterface/settings` | account_id, mysql_version_id, mysql_migration_lock, long_query_time | Зміна налаштувань MySQL |
| 217 | POST | `hosting/mysql/dbinterface/stat_account_top` | account_id, date | Отримання списку користувачів баз даних, які створюють найбільше навантаження на сервер |
| 15263 | POST | `hosting/mysql/dbinterface/user_create` | db_id, name, password, privileges | Створення користувача бази даних |
| 15264 | POST | `hosting/mysql/dbinterface/user_delete` | db_id, mysql_user_id | Видалення користувача бази даних |
| 15265 | POST | `hosting/mysql/dbinterface/user_password` | mysql_user_id, password | Зміна пароля користувача бази даних |
| 15266 | POST | `hosting/mysql/dbinterface/user_privileges` | db_id, mysql_user_id, privileges | Зміна привілеїв користувача бази даних |
| 15268 | POST | `hosting/mysql/dbinterface/wrap` | account_id, mysql_wrap_active, ip | Увімкнення/вимкнення доступу до MySQL за IP-адресою |
| 223 | POST | `hosting/mysql/dbinterface/wrap_delete` | wrap_id | Видалення дозволених IP-адрес доступу до MySQL |
| 62470 | POST | `hosting/mysql/errors` | account_id, page | Отримання списку помилок MySQL |
| 62283 | POST | `hosting/mysql/performance/general_log/flush_log` | account_id | Очищення журналу запитів до MySQL |
| 62192 | POST | `hosting/mysql/performance/general_log/settings` | account_id, mysql_general_log | Увімкнення/вимкнення журналу запитів до MySQL |
| 62512 | POST | `hosting/mysql/performance/performance_schema/processlist` | account_id, page | Отримання списку активних процесів MySQL |
| 62508 | POST | `hosting/mysql/performance/performance_schema/query` | account_id, sort_field, sort_order, db_name, page | Отримання журналу продуктивності MySQL |
| 62513 | POST | `hosting/mysql/performance/performance_schema/query_conn` | account_id, db_user, page | Отримання статистики з’єднань MySQL |
| 62514 | POST | `hosting/mysql/performance/performance_schema/query_ram` | account_id, db_user, page | Отримання інформації про використання пам’яті MySQL |
| 62515 | POST | `hosting/mysql/performance/performance_schema/settings` | account_id, mysql_performance_schema | Увімкнення/вимкнення журналу продуктивності MySQL |
| 51788 | POST | `hosting/mysql/show_processlist` | account_id | Список активних MySQL процесів/запитів хостинг-акаунта |
| 3922 | POST | `hosting/opcache/restart` | host_id | Очищення кеша |
| 3923 | POST | `hosting/opcache/restart_enabled` | account_id | Очищення кешу Opcache для всіх віртуальних хостів облікового запису, у яких включено Opcache |
| 227 | POST | `hosting/order/change_period` | item_id, period | Зміна періоду оплати послуги в кошику |
| 228 | POST | `hosting/order/domain` | domain, period | Додавання домен в кошик |
| 230 | POST | `hosting/order/hosting` | plan_id, login, period, country_id | Замовлення нового хостинг-акаунта |
| 233 | POST | `hosting/order/remove_item` | item_id | Видалення позиції з замовлення |
| 235 | POST | `hosting/order/vps` | plan_id, os_id, software_id | Замовлення нового VPS |
| 237 | POST | `hosting/redis/restart` | account_id | Перезавантаження процесу Redis для очистки даних |
| 238 | POST | `hosting/service/antivirus_protection` | account_id | Створення заявки на антивірусну перевірку |
| 3924 | POST | `hosting/service/awstats_update` | host_id | Обробка заявки на сервіс позачергового оновлення статистики AWStats |
| 239 | POST | `hosting/service/chmod` | account_id | Створення запиту на відновлення прав доступу до файлів |
| 834 | POST | `hosting/service/disk_space_refresh` | account_id | Оновлення інформації про дисковий простір |
| 240 | POST | `hosting/service/empty_trash` | account_id | Створення заявки на видалення тимчасових файлів |
| 242 | POST | `hosting/site/login_available` | login | Перевірка доступності назви хостинг-акаунта |
| 243 | POST | `hosting/site/punycode_decode` | q | Конвертація назви домену в Punycode |
| 244 | GET | `hosting/site/stats` |  | Отримання статистики завантаження каналів |
| 3926 | POST | `hosting/site/tools/dkim_lookup` | q, selector | Отримання інформації про DKIM |
| 3927 | POST | `hosting/site/tools/dmarc_lookup` | q | Отримання інформації про DMARC |
| 14205 | POST | `hosting/site/tools/htaccess_configurator` | redirect_ssl, redirect_slash, redirect_www_to_site, redirect_site_to_www, redirect_domain, redirect_index_php, redirect_del_php, redirect_del_slash, config_index_page, config_default_charset, config_default_download, config_download_size, config_admin_email, performance_gzip, error_401, error_403, error_404, error_500, security_deny_request, security_ban_ip, security_allow_ip, http_auth_password_htpasswd, http_auth_user_name, http_auth_password | Конфігуратор .htaccess |
| 3928 | POST | `hosting/site/tools/htaccess_validate` | htaccess_source | Валідатор htacess |
| 62343 | POST | `hosting/site/tools/ip-info` | q | Отримання інформації про IP-адресу |
| 3929 | POST | `hosting/site/tools/nmap` | check_field | nmap |
| 15274 | POST | `hosting/supervisor/edit` | account_id, command, task_id, numprocs, comment, disable_handle, active | Додавання/зміна процесу Supervisor |
| 15275 | POST | `hosting/supervisor/list` | account_id | Отримання списку процесів Supervisor |
| 13494 | POST | `hosting/supervisor/log` | task_id | Отримання лога процесу Supervisor |
| 15276 | POST | `hosting/supervisor/log_clear` | task_id | Очищення лога процесу Supervisor |
| 62118 | POST | `hosting/supervisor/restart` | task_id | Перезапуск процесу Supervisor |
| 15277 | POST | `hosting/supervisor/task_delete` | task_id | Видалення процесу Supervisor |
| 12481 | POST | `hosting/supervisor/update_active` | task_id, active | Увімкнення/вимкнення процесу Supervisor |
| 62347 | POST | `hosting/virtual/access/bots/account` | account_id, rules | Встановлення правил доступу для всіх сайтів хостинг-аккаунта |
| 62461 | POST | `hosting/virtual/access/bots/add_new` | name, description, site | Надсилання пропозиції щодо додавання нового бота |
| 62319 | POST | `hosting/virtual/access/bots/list` | host_id, stat_date | Отримання статистики, списку ботів та правил доступу до сайту |
| 62348 | POST | `hosting/virtual/access/bots/restore` | host_id | Відновлення стандартних правил доступу |
| 62349 | POST | `hosting/virtual/access/bots/update` | host_id, rules | Встановлення правил доступу для сайту |
| 62239 | POST | `hosting/virtual/access/country/list` | host_id, stat_date | Отримання статистичних даних, переліку країн та правил доступу до сайту |
| 62208 | POST | `hosting/virtual/access/country/update` | host_id, block_tor, rules, apply_to_account, default_rule | Зміна налаштувань обмеження доступу за країнами |
| 62196 | POST | `hosting/virtual/access/delete` | ip_ids, type | Видалення адрес зі списку режиму обмеженого доступу / чорного списку IP |
| 62240 | POST | `hosting/virtual/access/edit` | host_id, type, ips | Додавання адрес до режиму обмеженого доступу / чорного списку IP |
| 62241 | POST | `hosting/virtual/access/list` | host_id, type | Отримання списку адрес режиму обмеженого доступу / чорного списку IP |
| 62209 | POST | `hosting/virtual/access/switch` | host_id, type | Перемикання між режимом обмеженого доступу / чорним списком IP |
| 9655 | POST | `hosting/virtual/add_site` | account_id, name, virtual_domain_id, force_domain_add, call_source | Додавання сайту або піддомену |
| 252 | POST | `hosting/virtual/awstats/delete_ip` | ip_id, host_id | Видалення ігнорованих адрес AWStats |
| 15278 | POST | `hosting/virtual/awstats/ignore_list` | host_id, ip_list | Зміна списку ігнорованих IP-адрес при зборі статистики AWStats |
| 254 | POST | `hosting/virtual/awstats/ignore_table` | host_id | Отримання списку адрес, ігнорованих при зборі статистики AWStats |
| 255 | POST | `hosting/virtual/awstats/params` | host_id, enabled | Налаштування зберігання статистики AWStats |
| 256 | POST | `hosting/virtual/delete_domain` | virtual_domain_id | Видалення сайту |
| 257 | POST | `hosting/virtual/delete_host` | hosts_id, delete_files | Видалення піддоменів |
| 259 | POST | `hosting/virtual/list` | account_id, virtual_domain_id, page | Отримання списку сайтів і піддоменів |
| 266 | POST | `hosting/virtual/paramsother/hotlink` | host_id, hotlink_allow_direct_request, enable_hotlink, deny_remote_link, valid_referers | Налаштування захисту файлів сайту |
| 268 | POST | `hosting/virtual/paramsother/securelink/delete` | host_id, link_id | Видалення Secure Link |
| 270 | POST | `hosting/virtual/paramsother/securelink/list` | host_id, page | Отримання списку защещённих сторінок |
| 62167 | POST | `hosting/virtual/paramsphp/clear_php_log` | host_id | Очищення файлу журналу помилок PHP |
| 53346 | POST | `hosting/virtual/paramsphp/clone` | host_id, source_id | Налаштування копіювання налаштувань PHP з іншого сайту |
| 53059 | POST | `hosting/virtual/paramsphp/clone_cancel` | host_id, remove_host_id | Скасування копіювання налаштувань PHP на інший сайт |
| 62463 | POST | `hosting/virtual/paramsphp/custom/edit` | host_id, php_version, content | Зміна власного файлу php.ini |
| 62464 | POST | `hosting/virtual/paramsphp/custom/get` | host_id | Отримання вмісту власного файлу php.ini |
| 62465 | POST | `hosting/virtual/paramsphp/custom/to_auto` | host_id | Перехід на автоматичне створення файлу php.ini |
| 36088 | POST | `hosting/virtual/paramsphp/edit` | host_id, php_version, memory_limit, php_encoder, php_session_save_handler, php_open_basedir, php_modules, register_globals, magic_quotes_gpc, magic_quotes_runtime, php_allow_call_time_pass_reference, php_register_long_arrays, php_allow_url_include, php_serialize_precision, php_session_use_only_cookies, php_session_gc_maxlifetime, php_short_open_tag, php_output_buffering, display_errors, php_error_reporting, max_input_time, php_max_input_vars, php_max_execution_time, php_mb_func_overload, default_socket_timeout, php_cgi_fix_pathinfo, php_allow_url_fopen, php_disable_functions, php_mail_add_x_header, php_log_errors, php_mb_internal_encoding, php_timezone, post_max_size, php_phalcon_ver, browscap, default_charset | Зміна налаштувань PHP |
| 62052 | POST | `hosting/virtual/paramsphp/get` | host_id | Отримання налаштувань PHP |
| 15287 | POST | `hosting/virtual/paramsphp/user_reset` | host_id | Скидання налаштувань PHP |
| 62286 | POST | `hosting/virtual/paramssite/cache` | host_id, type, ttl | Зміна налаштувань серверного кешування |
| 62430 | POST | `hosting/virtual/paramssite/cache_purge` | host_id | Очищення серверного кешу |
| 62431 | POST | `hosting/virtual/paramssite/get/cache` | host_id | Отримання налаштувань серверного кешування |
| 61310 | POST | `hosting/virtual/paramssite/get/main` | host_id | Отримання основних налаштувань сайту |
| 61311 | POST | `hosting/virtual/paramssite/get/optimization` | host_id | Налаштування PageSpeed |
| 61312 | POST | `hosting/virtual/paramssite/get/security` | host_id | Отримання основних налаштувань захисту сайту |
| 279 | POST | `hosting/virtual/paramssite/optimization` | host_id, optimize, pagespeed_exceptions, url_valued_attributes | Зміна параметрів PageSpeed |
| 61460 | POST | `hosting/virtual/paramssite/optimization_cache_clear` | host_id | Очищення кешу PageSpeed |
| 15288 | POST | `hosting/virtual/paramssite/reset` | host_id | Скидання основних налаштувань сайту |
| 58924 | POST | `hosting/virtual/paramssite/security` | host_id, header_hsts, header_hsts_include_subdomains, ssl_protocols_set, referrer_policy, under_attack_mode, block_non_provider, sl_limit, blacklist_enabled | Зміна основних налаштувань захисту сайту |
| 61755 | POST | `hosting/virtual/paramssite/send` | host_id, static_cors, static_files_expire_default, static_files_expire_user, ssi, static_404_redirect, enable_service_url, default_ip, default_host, enable_perl, system_error_pages, cms_admin_link, site_error_404, ipv6_auto_configuration, ip, redirect_to, php_mail, alias, document_root_suffix, https_redirect, system_error_lang, web_server_backend, php_fpm_template, static_files, fcgi_php_files, nodejs_version_id, nodejs_proxy_type, websocket_enable | Зміна основних налаштувань сайту |
| 283 | POST | `hosting/virtual/paramssite/set_http_redirect` | host_id, https_redirect | Налаштування редиректу на HTTP/HTTPS |
| 284 | POST | `hosting/virtual/paramsssl/change_status` | host_id, status | Увімкнення/вимкнення SSL-сертифіката для сайту |
| 285 | POST | `hosting/virtual/paramsssl/crt_delete` | host_id | Видалення SSL-сертифіката |
| 286 | POST | `hosting/virtual/paramsssl/crt_letsencrypt` | host_id, aliases | Встановлення SSL-сертифіката від Let’s Encrypt |
| 287 | POST | `hosting/virtual/paramsssl/crt_letsencrypt_cancel` | host_id, source | Скасування запиту на встановлення SSL-сертифіката від Let’s Encrypt |
| 288 | POST | `hosting/virtual/paramsssl/crt_letsencrypt_renew` | host_id, aliases | Оновлення SSL-сертифіката від Let’s Encrypt |
| 8434 | POST | `hosting/virtual/paramsssl/load_existing` | host_id, ssl_user_text, ssl_user_key_text, ssl_user_key_pass, add_intermediate_certificates | Встановлення власного SSL-сертифіката |
| 289 | POST | `hosting/virtual/paramsssl/source_content` | host_id | Отримання інформації про SSL-сертифікат сайту |
| 15289 | POST | `hosting/virtual/profiling/access_edit` | host_id, access_list | Управління параметрами доступу для профілювання |
| 15290 | POST | `hosting/virtual/profiling/disable` | host_id | Вимкнення профільника |
| 15291 | POST | `hosting/virtual/profiling/enable` | host_id, profiling_length | Увімкнення профільника |
| 290 | POST | `hosting/virtual/vhost_dns_relation_update` | host_id | Оновлення данних домену для хоста |
| 15292 | POST | `hosting/whoisip` | ip | Виведення WhoIs [RDAP] |
| 62109 | POST | `mail/assign/save` | mail_id, account_id | Прив’язка поштового домену до хостинг-акаунту |
| 62287 | POST | `mail/backup/restore` | backup_id, mail_id | Подання запиту на відновлення листів у поштовій скриньці |
| 62200 | POST | `mail/box/alias/create` | mail_box_id, alias | Створення псевдоніма поштової скриньки |
| 62201 | POST | `mail/box/alias/delete` | mail_box_id, alias | Видалення псевдоніма поштової скриньки |
| 62202 | POST | `mail/box/alias/list` | mail_box_id | Отримання списку псевдонімів поштової скриньки |
| 62458 | POST | `mail/box/autoresponder/save` | mail_box_id, state, days, date_start, date_end, time_start, time_end, timezone, subject, text | Зміна налаштувань автовідповідача для поштової скриньки |
| 62085 | POST | `mail/box/clean` | mail_box_id | Очищення поштової скриньки |
| 62471 | POST | `mail/box/create/save` | mail_id, login, password, box_limit, box_quota, check_spam_level | Створення поштової скриньки |
| 62087 | POST | `mail/box/delete` | mail_box_id | Видалення поштової скриньки |
| 62472 | POST | `mail/box/edit/save` | mail_box_id, password, box_limit, box_quota, check_spam_level | Зміна налаштувань поштової скриньки |
| 62110 | POST | `mail/box/list` | mail_id, search, sort_size, page | Отримання списку поштових скриньок |
| 62478 | POST | `mail/box/otp_reset` | mail_box_id | Вимкнення 2FA для поштової скриньки |
| 62473 | POST | `mail/box/redirect/disable` | mail_box_id | Вимкнення переадресації для поштової скриньки |
| 62474 | POST | `mail/box/redirect/save` | mail_box_id, forward_to, copy | Зміна налаштувань переадресації для поштової скриньки |
| 62088 | POST | `mail/chart` | account_id | Статистика пошти |
| 62090 | POST | `mail/create/save` | domain, plan_id, plan_sendmail_id, type, account_id, check, mx_action | Додавання поштового домену |
| 62111 | POST | `mail/drop` | mail_id | Видалення поштового домену |
| 62091 | POST | `mail/export/list` | mail_id, page | Отримання списку заявок на експорт поштових скриньок |
| 62092 | POST | `mail/export/send` | mail_box_id, type | Експорт пошти |
| 62079 | POST | `mail/import_token` | mail_box_id, size, name, import_type | Токен для завантаження файлу імпорту пошти на сервер mail-storage |
| 62140 | POST | `mail/import/send_imap` | mail_box_id, server, login, password, port, ssl, ssl_disable_cert_check, import_limit, day_limit | Імпорт пошти через IMAP |
| 62081 | POST | `mail/incoming` | mail_box_id | Перевірка кількості вхідних листів |
| 62323 | POST | `mail/ip/delete` | mail_id | Видалення виділеного IP для пошти |
| 62141 | POST | `mail/ip/order/save` | mail_id | Замовлення виділеного IP для пошти |
| 62288 | POST | `mail/ip/unlock/save` | mail_id | Розблокування виділеного IP для пошти |
| 62105 | POST | `mail/limits/account` | account_id, mail_id | Ліміти пошти хостинг-акаунта |
| 62104 | POST | `mail/limits/mail` | mail_id | Ліміти корпоративної пошти |
| 62132 | POST | `mail/limits/unlock` | account_id | Дозволяємо розблокувати пошту на добу для хостинг-акаунта |
| 62094 | POST | `mail/list` | search, account_id, page | Отримання списку поштових доменів |
| 62143 | POST | `mail/log/account/host/php` | host_id, date, time_from, time_to, search, page, sort_order | Отримання логу пошти PHP сайту |
| 62193 | POST | `mail/log/account/php` | account_id, time_from, time_to, search, page, sort_order | Отримання логу пошти з сайтів хостинг-аккаунта |
| 62188 | POST | `mail/log/account/php_stat` | account_id, date | Перегляд статистики надсилання php пошти по сайтах |
| 62144 | POST | `mail/log/account/unsent` | account_id, date, time_from, time_to, search, page, sort_order | Отримання логу не відправлених листів |
| 62145 | POST | `mail/log/domain/auth` | mail_box_id, date, time_from, time_to, search, page, sort_order | Отримання логу підключень до поштової скриньки |
| 62289 | POST | `mail/log/domain/rejected` | service_type, service_id, date, time_from, time_to, search, sort_order, page | Отримання логу відхилених листів |
| 62152 | POST | `mail/plan/account/sendmail` | account_id, plan_id | Замовлення збільшених лімітів на надсилання листів на добу |
| 62150 | POST | `mail/plan/service/plan` | mail_id, plan_id | Зміна місця для пошти |
| 62151 | POST | `mail/plan/service/sendmail` | mail_id, plan_id | Зміна лімітів на надсилання листів на добу |
| 62097 | GET | `mail/reject_download` | service_type, service_id, date, mid, queue_uid | Завантаження відхиленого листа |
| 62099 | POST | `mail/restore/save` | mail_id | Розблокування поштового домену |
| 62100 | POST | `mail/rules/add` | list, action, mail_id | Додавання запису до білого/чорного списку |
| 62146 | POST | `mail/rules/delete/all` | action, mail_id | Очищення білого/чорного списку |
| 62158 | POST | `mail/rules/delete/rule` | rule_id | Видалення запису з білого/чорного списку |
| 62157 | POST | `mail/rules/list` | action, display, user_id, mail_id | Завантаження записів в правилах пошти (білі / чорні списки) |
| 62114 | POST | `mail/rules/message` | mail_id | Показуємо повідомлення про правила для домену |
| 62103 | POST | `mail/separate/save` | mail_id, plan_id, plan_sendmail_id | Відокремлення поштового домену від хостинг-акаунта |
| 62112 | POST | `mail/set_our_mx` | domain_id | Встановлення наших MX-записів для домену |
| 62083 | POST | `mail/settings` | mail_id, catch_non_exist, allow_custom_sender, auto_clean_trash | Зміна налаштувань поштового домену |
| 62475 | POST | `mail/sieve/copy` | mail_box_id, script, slave_mail_box_ids, set_active, overwrite | Копіювання фільтрів у поштові скриньки домену |
| 62147 | POST | `mail/stat/domain` | mail_id, yesterday | Статистика надсилання листів поштовими скриньками |
| 62433 | POST | `mail/status/load` | mail_id, date | Отримання інформації про стан поштових серверів |
| 62084 | POST | `mail/update_mx_cache` | mail_id | Оновлення кешу MX-записів домену |
| 62444 | POST | `mail/webhook/create/send` | mail_id, name, mail_box_ids, url, events, ssl_verification | Створення вебхука |
| 62445 | POST | `mail/webhook/delete` | webhook_id | Видалення вебхука |
| 62446 | POST | `mail/webhook/edit/send` | webhook_id, name, mail_box_ids, url, events, ssl_verification | Зміна вебхука |
| 62447 | POST | `mail/webhook/list` | mail_id | Отримання списку вебхуків |
| 62448 | POST | `mail/webhook/log` | webhook_id | Отримання логу останніх запитів вебхука |
| 62148 | POST | `mail/webmail/delete` | domain_id | Видалення персонального WebMail |
| 62362 | POST | `manticore/access/page` | manticore_id | Отримання списку користувачів з делегованим доступом |
| 62497 | POST | `manticore/config` | manticore_id | Отримання даних про конфігурацію |
| 62480 | POST | `manticore/config/config` | manticore_id, binlog, binlog_flush | Зміна налаштувань |
| 62364 | POST | `manticore/create/send` | login, plan_id | Замовлення нової інстансу |
| 62365 | POST | `manticore/dictionary/add/save` | manticore_id, name, type, file | Завантаження словника |
| 62420 | POST | `manticore/dictionary/delete` | dictionary_id | Видалення словника |
| 62366 | GET | `manticore/dictionary/download` | dictionary_id | Завантаження словника |
| 62421 | POST | `manticore/dictionary/list` | manticore_id | Отримання списку словників |
| 62439 | POST | `manticore/distributed/delete` | manticore_id, name | Видалення розподіленого індексу |
| 62440 | POST | `manticore/distributed/edit/save` | manticore_id, name, tables | Зміна розподіленого індексу |
| 62441 | POST | `manticore/distributed/list` | manticore_id | Отримання списку розподілених індексів |
| 62195 | POST | `manticore/instance/delete` | manticore_id | Блокування та видалення інстансу |
| 62261 | POST | `manticore/plan/change` | manticore_id, plan_id | Зміна тарифу |
| 62263 | GET | `manticore/plan/list` |  | Отримання списку тарифів |
| 62368 | POST | `manticore/stat/clear_query_log` | manticore_id | Очищення логу запитів |
| 62442 | POST | `manticore/table` | manticore_id | Отримання інформації про таблиці |
| 62476 | POST | `manticore/table/add` | manticore_id, table_name, type, fields, property, morphology, blend_chars, blend_mode, index_exact_words, min_word_len, min_prefix_len, min_infix_len, html_strip, expand_keywords, charset_table, ignore_chars, wordforms_id, exceptions_id, stopwords_id, _confirm_action | Створення нової таблиці |
| 62443 | POST | `manticore/table/import` | manticore_id, table_name | Автоматичний імпорт даних з БД MySQL |
| 62294 | POST | `manticore/table/query_edit` | query_id, sql_query | Зміна SQL-запиту, який виконується до або після основного запиту |
| 62295 | POST | `manticore/table/query_sort` | order | Зміна порядку виконання SQL-запитів |
| 62509 | POST | `manticore/table/timetable` | manticore_id, table_name, minute, hour, day, week, month, time | Налаштування розкладу оновлення таблиці |
| 62106 | POST | `mysql/access/page` | mysql_id | Отримання списку користувачів з делегованим доступом |
| 62369 | POST | `mysql/clone/send` | mysql_id, date, login, plan_id | Створення нового інстанасу з резервної копії |
| 43844 | POST | `mysql/create/save` | login, plan_id | Замовлення нової інстансу |
| 43845 | POST | `mysql/database/create/save` | mysql_id, name, charset_id, create_user | Створення бази даних |
| 51349 | POST | `mysql/database/delete` | mysql_database_id | Видалення бази даних |
| 43709 | POST | `mysql/database/list` | mysql_id, page | Отримання списку баз даних інстансу |
| 43710 | POST | `mysql/dump/download` | mysql_dump_id | Завантаження створеної резервної копії бази даних |
| 48232 | POST | `mysql/dump/list` | mysql_id | Отримання списку створених резервних копій баз даних |
| 62121 | POST | `mysql/dump/page` | mysql_id | Сторінка перегляду та створення дампів зі снапшотів |
| 62501 | POST | `mysql/dump/settings/save` | mysql_id, frequency, count | Зміна налаштувань резервного копіювання |
| 57450 | POST | `mysql/guard/bad_password` | mysql_id, page | Перегляд списку невдалих авторизацій |
| 43711 | POST | `mysql/instance/active/save` | mysql_id | Розблокування інстансу |
| 51499 | POST | `mysql/instance/delete` | mysql_id | Блокування та видалення інстансу |
| 62133 | POST | `mysql/instance/phpmyadmin` | mysql_id | Відображення форми входу phpmyadmin |
| 62056 | POST | `mysql/instance/space` | mysql_id | Перегляд розмірів директорій інстансу |
| 62298 | POST | `mysql/log/slow/download` | mysql_id | Завантаження лога повільних запитів |
| 62370 | POST | `mysql/performance/flush` | mysql_id | Очищення статистики Performance Schema |
| 62299 | POST | `mysql/performance/objects` | mysql_id, db_name | Отримання списку популярних таблиць |
| 62510 | POST | `mysql/performance/triggers` | mysql_id, db_name | Отримання списку найбільш завантажених тригерів у базі даних |
| 62434 | POST | `mysql/plan/change` | mysql_id, plan_id | Зміна тарифу |
| 51356 | GET | `mysql/plan/list` |  | Отримання списку тарифів |
| 62057 | POST | `mysql/reload` | mysql_id | Перезапуск інстансу |
| 51500 | POST | `mysql/replication/save` | mysql_id, master_id, delay | Налаштування реплікації |
| 45041 | POST | `mysql/replication/start` | mysql_id | Відновлення реплікації |
| 51358 | POST | `mysql/replication/stop` | mysql_id | Зупинення реплікації |
| 62371 | POST | `mysql/stat/kill_query` | mysql_id, process_id | Примусове завершення процесу |
| 62422 | POST | `mysql/stat/page` | mysql_id | Отримання статистики використання ресурсів |
| 62122 | POST | `mysql/title` | mysql_id, mysql_title | Перейменування інстансу |
| 48507 | POST | `mysql/user/assign/list` | mysql_database_id | Отримання списку прив’язок користувачів бази даних |
| 51502 | POST | `mysql/user/assign/save` | mysql_database_id, users, privileges | Прив’язка користувачів до бази даних |
| 51503 | POST | `mysql/user/assign/update/save` | assign_id, privileges | Зміна привілеїв користувача бази даних |
| 51504 | POST | `mysql/user/create/save` | mysql_database_id, name, password, privileges, auth_mode | Створення користувача бази даних |
| 51505 | POST | `mysql/user/delete` | mysql_user_id, mysql_database_id | Відв’язування або видалення користувача бази даних |
| 62127 | POST | `mysql/user/form_user_delete` | mysql_user_id | Форма видалення користувача |
| 51506 | POST | `mysql/user/list` | mysql_database_id | Отримання списку користувачів бази даних |
| 62135 | POST | `mysql/user/page` | mysql_id, page | Список користувачів баз даних |
| 51507 | POST | `mysql/user/update/save` | mysql_user_id, password, auth_mode | Зміна пароля користувача бази даних |
| 62136 | POST | `mysql/user/user_delete` | mysql_user_id | Видалення користувача з усіх баз |
| 62372 | POST | `opensearch/access/page` | opensearch_id | Отримання списку користувачів з делегованим доступом |
| 62374 | POST | `opensearch/create/send` | login, plan_id | Замовлення нової інстансу |
| 62467 | POST | `opensearch/instance/activate` | opensearch_id | Розблокування інстансу |
| 62361 | POST | `opensearch/instance/delete` | opensearch_id | Блокування та видалення інстансу |
| 62468 | POST | `opensearch/instance/reload` | opensearch_id | Перезапуск інстансу |
| 62375 | POST | `opensearch/plan/change` | opensearch_id, plan_id | Зміна тарифу |
| 62301 | POST | `opensearch/users/create/save` | opensearch_id, login, password, role, privileges | Створення нового користувача |
| 62522 | POST | `opensearch/users/delete` | opensearch_id, login | Видалення користувача |
| 62302 | POST | `opensearch/users/page` | opensearch_id | Отримання списку користувачів |
| 62377 | POST | `opensearch/users/update/save` | opensearch_id, login, role, privileges, password | Зміна пароля користувача |
| 62378 | POST | `postgresql/access/page` | postgresql_id | Отримання списку користувачів з делегованим доступом |
| 62381 | POST | `postgresql/create/send` | login, version_id, plan_id | Замовлення нової інстансу |
| 62304 | POST | `postgresql/database/create/save` | postgresql_id, name, owner | Створення бази даних |
| 62503 | POST | `postgresql/database/delete` | postgresql_id, database_oid | Видалення бази даних |
| 62504 | POST | `postgresql/database/list` | postgresql_id | Отримання списку баз даних |
| 62505 | POST | `postgresql/database/users` | postgresql_id, database_oid | Отримання списку користувачів, які мають доступ до бази даних |
| 62305 | POST | `postgresql/extensions/page` | postgresql_id, database_oid | Отримання списку розширень бази даних |
| 62382 | POST | `postgresql/extensions/toggle` | postgresql_id, database_oid, extension_id, enable | Зміна підключених розширень |
| 62383 | POST | `postgresql/instance/delete` | postgresql_id | Блокування та видалення інстансу |
| 62306 | POST | `postgresql/instance/reload` | postgresql_id | Перезапуск інстансу |
| 62268 | POST | `postgresql/plan/change` | postgresql_id, plan_id | Зміна тарифу |
| 62269 | GET | `postgresql/plan/list` |  | Отримання списку тарифів |
| 62360 | POST | `postgresql/users/create/save` | postgresql_id, name, password, database_oid | Створення користувача |
| 62424 | POST | `postgresql/users/delete` | postgresql_id, user_oid | Видалення користувача |
| 62386 | POST | `postgresql/users/list` | postgresql_id | Отримання списку користувачів |
| 62387 | POST | `postgresql/users/privilege/security/save` | postgresql_id, database_oid, user_oid, privileges | Зміна привілеїв користувача |
| 62388 | POST | `postgresql/users/update/save` | postgresql_id, user_oid, password, database_oid | Зміна пароля користувача |
| 62218 | POST | `protection/cache/flush` | protection_id | Очищення кеша |
| 62217 | POST | `protection/create/save` | site, ip, aliases | Додавання сайту |
| 62219 | POST | `protection/ddos/block` | protection_id, ip, comment | Додавання IP до чорного списку |
| 62220 | POST | `protection/ddos/list` | protection_id, date, page | Отримання списку поганих IP |
| 62221 | POST | `protection/ddos/unblock` | protection_id, ip | Розблокування IP |
| 62159 | POST | `protection/delete` | protection_id | Видалення сайту |
| 62210 | POST | `protection/filters/blacklist/get` | protection_id, page | Список заблокованих ip |
| 62222 | POST | `protection/filters/country/get` | protection_id | Отримання налаштувань фільтрів за країнами |
| 62502 | POST | `protection/filters/country/save` | protection_id, country_allow, country_allow_bot, countries | Зміна налаштувань фільтрів за країнами |
| 62223 | POST | `protection/filters/header/get` | protection_id | Отримання налаштувань заголовків |
| 62224 | POST | `protection/filters/whitelist/add` | protection_id, ip, comment | Додавання IP в білий список |
| 62525 | POST | `protection/filters/whitelist/allow` | protection_id | Заборона/дозвіл на доступ лише з IP-адрес із білого списку |
| 62307 | POST | `protection/filters/whitelist/get` | protection_id, page | Отримання списку заблокованих IP |
| 62321 | POST | `protection/filters/whitelist/remove` | protection_id, ip | Видалення IP-адреси з білого списку |
| 62156 | GET | `protection/list` |  | Отримання списку сайтів |
| 62226 | POST | `protection/note/save` | protection_id, type, ip, note | Додавання примітки для IP у білому/чорному списку |
| 62498 | POST | `protection/settings/save/cache` | protection_id, cache_type, cache_enabled | Збереження основних налаштувань захисту |
| 62177 | POST | `protection/settings/save/global` | protection_id, proxy_mode, system_pages_lang, host_header, websockets_enable, header_country, aliases | Зміна основних налаштувань |
| 62178 | POST | `protection/settings/save/speed` | protection_id, gzip_level | Збереження налаштувань пов’язаних зі швидкістю |
| 62308 | POST | `protection/settings/save/ssl` | protection_id, ssl_protocols_set | Зміна налаштувань SSL захисту сайту |
| 62227 | POST | `protection/settings/ssl` | protection_id | Запит на видачу виписки з сертифіката |
| 62228 | POST | `protection/upstream/save` | protection_id, hostname, max_conns, max_fails, fail_timeout, weight, type | Зміна налаштувань |
| 62197 | POST | `rabbitmq/access/page` | rabbitmq_id | Отримання списку користувачів з делегованим доступом |
| 62155 | POST | `rabbitmq/create/send` | login, plan_id | Замовлення нової інстансу |
| 62171 | POST | `rabbitmq/instance/activate` | rabbitmq_id | Розблокування послуг |
| 62389 | POST | `rabbitmq/instance/delete` | rabbitmq_id | Блокування та видалення інстансу |
| 62264 | POST | `rabbitmq/plan/change` | rabbitmq_id, plan_id | Зміна тарифу |
| 62180 | GET | `rabbitmq/plan/list` |  | Отримання списку тарифів |
| 62310 | POST | `rabbitmq/plugins/page` | rabbitmq_id | Отримання списку плагінів |
| 62511 | POST | `rabbitmq/plugins/toggle` | rabbitmq_id, name, enable | Увімкнення/вимкнення плагіна RabbitMQ |
| 62391 | POST | `rabbitmq/users/create/save` | rabbitmq_id, login, password, roles | Створення користувача |
| 62523 | POST | `rabbitmq/users/delete` | rabbitmq_id, login | Видалення користувача |
| 62311 | POST | `rabbitmq/users/page` | rabbitmq_id | Отримання списку користувачів |
| 62213 | POST | `rabbitmq/users/permissions/delete` | rabbitmq_id, login, host | Видалення привілеїв користувача |
| 62214 | POST | `rabbitmq/users/permissions/list` | rabbitmq_id, login | Отримання списку привілеїв користувача |
| 62215 | POST | `rabbitmq/users/permissions/save` | rabbitmq_id, login, host, conf, write, read | Зміна привілеїв користувача |
| 62312 | POST | `rabbitmq/users/update/save` | rabbitmq_id, login, password, roles | Зміна користувача |
| 62392 | POST | `redis/access/page` | redis_id | Отримання списку користувачів з делегованим доступом |
| 62393 | POST | `redis/create/save` | login, plan_id | Замовлення нової інстансу |
| 52771 | POST | `redis/instance/active/save` | redis_id | Розблокування послуг |
| 52207 | POST | `redis/instance/delete` | redis_id | Блокування та видалення інстансу |
| 29310 | POST | `redis/log` | redis_id, date, time_from, time_to, search, page, sort_order | Отримання лога |
| 26566 | POST | `redis/memory/save` | redis_id, memory_policy | Зміна режиму очищення пам’яті |
| 53347 | GET | `redis/plan/list` |  | Отримання списку тарифів |
| 62273 | POST | `redis/stats` | redis_id | Отримання статистики Redis |
| 62123 | POST | `redis/title` | redis_id, redis_title | Перейменування інстансу |
| 37579 | POST | `redis/user/create/save` | redis_id, login, password, set_access, pubsub_access, raw_access | Створення користувача |
| 53492 | POST | `redis/user/delete` | redis_user_id | Видалення користувача |
| 36089 | POST | `redis/user/list` | redis_id | Отримання списку користувачів |
| 26068 | POST | `redis/user/update/save` | redis_id, redis_user_id, password, set_access, pubsub_access, raw_access | Зміна налаштувань користувача |
| 886 | GET | `service/delegate-in` |  | Отримання списку послуг, делегованих іншим користувачам |
| 887 | GET | `service/delegate-out` |  | Отримання списку послуг, делегованих поточній обліковій запису |
| 14587 | POST | `storage/activate` | storage_id | Розблокування сховища |
| 62153 | POST | `storage/change_plan` | storage_id, plan_id | Зміна обсягу сховища |
| 15301 | POST | `storage/delete_appearance_logo` | storage_id | Видалення логотипу веб-інтерфейсу |
| 15303 | POST | `storage/delete_storage` | storage_id | Блокування та видалення сховища |
| 43199 | POST | `storage/domain/assign` | storage_id, domain | Підключення свого домену до сховища |
| 62322 | POST | `storage/domain/check` | url | Перевірка можливості використання URL для сховища |
| 43327 | POST | `storage/domain/unassign` | storage_id | Відключення свого домену від сховища |
| 62265 | POST | `storage/ftp/create` | storage_id, login, password, homedir, is_readonly | Додавання FTP-користувача |
| 62426 | POST | `storage/ftp/delete` | storage_ftp_id | Видалення FTP-користувача |
| 62427 | POST | `storage/ftp/update` | storage_ftp_id, password, homedir, is_readonly | Зміна налаштувань FTP-користувача |
| 23396 | POST | `storage/generate_secure_link_example` | storage_id, path, type, ttl | Генерація посилання Secure Link |
| 13715 | GET | `storage/list` | page | Отримання списку сховищ |
| 62270 | POST | `storage/manage/cache` | storage_id, cache_ttl_min | Налаштування кешування браузера |
| 62058 | POST | `storage/manage/redirect` | storage_id, http_redirect | Налаштування переадресації HTTPS |
| 62266 | POST | `storage/manage/remove/add` | storage_id, days, path, empty_dir | Додавання правила автовидалення |
| 62271 | POST | `storage/manage/remove/delete` | storage_id, id | Видалення правила автовидалення |
| 62272 | POST | `storage/manage/remove/update` | storage_id, id, days, empty_dir | Зміна правила автовидалення |
| 62267 | POST | `storage/manage/web_index` | storage_id, web_index | Увімкнення/вимкнення заголовка X-Robots-Tag |
| 13716 | POST | `storage/order` | plan_id, url | Замовлення нового сховища |
| 62186 | POST | `storage/reload_quota` | storage_id | Оновлення статистики використання ресурсів сховища |
| 13717 | POST | `storage/rename` | storage_id, storage_name | Перейменування сховища |
| 62517 | POST | `storage/torrent/cancel` | storage_id, item_id | Припинення завантаження файлів через торрент |
| 62518 | POST | `storage/torrent/delete` | storage_id, item_id | Видалення завантажених файлів через торрент |
| 45047 | POST | `storage/torrent/list` | storage_id, opened_item_ids, page | Отримання списку завантажених файлів через торрент |
| 45048 | POST | `storage/torrent/select_files` | storage_id, torrent_file, torrent_magnet | Отримання списку файлів для завантаження через торрент |
| 59513 | POST | `storage/torrent/upload` | storage_id, hash, selected, download_dir | Початок завантаження файлів через торрент |
| 15308 | POST | `storage/update_appearance` | storage_id, custom_logo | Завантаження свого логотипу веб-інтерфейсу |
| 15309 | POST | `storage/update_default_mode` | storage_id, mode | Налаштування виду при відкритті веб-інтерфейсу |
| 24667 | POST | `storage/update_hide_listing` | storage_id, show | Налаштування доступу до вмісту для публічного користувача веб-інтерфейсу |
| 37580 | POST | `storage/update_secure_link_key` | storage_id | Оновлення секретного ключа Secure Link |
| 15312 | POST | `storage/update_user_access` | storage_id, user_id, write | Настроювання доступу до запису для користувача веб-інтерфейсу |
| 15313 | POST | `storage/user/add` | storage_id, login, password | Додавання користувача |
| 15314 | POST | `storage/user/change_password` | storage_id, user_id, password | Зміна пароля користувача |
| 15315 | POST | `storage/user/close_session` | storage_id, session_id, is_all | Завершення всіх сесій користувачів |
| 15316 | POST | `storage/user/delete` | storage_id, user_id | Видалення користувача |
| 15317 | POST | `storage/user/list` | storage_id | Отримання списку користувачів |
| 15318 | POST | `storage/user/session_list` | storage_id, page | Отримання списку сесій користувачів |
| 62521 | GET | `tools/screenshot` | url, width, height, is_mobile, theme, language, force, ext, load_delay_ms, display, quality | Створення скріншота сайту |
| 21189 | POST | `vps/cdrom/eject` | rom_id | Вилучення образу з дисководу |
| 19502 | POST | `vps/cdrom/mount` | iso_id, rom_id | Підключення образу до дисковода |
| 62477 | POST | `vps/control` | vps_id, force, control | Увімкнення/перезавантаження/вимкнення VPS |
| 13656 | POST | `vps/credit` | vps_id | Продовження VPS у кредит |
| 297 | POST | `vps/delete` | vps_id | Видалення VPS |
| 23038 | POST | `vps/deleted_download` | backup_id | Отримання посилання для завантаження резервної копії віддаленого VPS |
| 62128 | POST | `vps/firewall_save` | vps_id, src_ip, sport, dport, protocol, action, firewall_action | Зміна правил Firewall |
| 62129 | POST | `vps/firewall_toggle` | vps_id, toggle | Увімкнення/вимкнення Firewall |
| 62234 | GET | `vps/install/os_list` |  | Отримання списку ОС для VPS |
| 40315 | POST | `vps/ipextra/ipv4` | vps_id | Виділення додаткової IPv4-адреси VPS та виписка рахунку |
| 40316 | POST | `vps/ipextra/ipv4_drop` | ip_id | Відмова від продовження виділеної IP-адреси для VPS |
| 15320 | POST | `vps/ipextra/ipv6` | vps_id | Виділення IPv6 адреси VPS та виписка рахунку |
| 304 | POST | `vps/ipextra/list` | vps_id | Список IP адрес VPS |
| 15321 | POST | `vps/ipextra/ptr` | ip_id, hostname | Редагування PTR запису |
| 62175 | POST | `vps/iso/delete` | iso_id | Видалення образу vps |
| 62076 | POST | `vps/paid_traffic` | vps_id, active | Увімкнення/вимкнення платного трафіку для виділеного сервера |
| 15322 | POST | `vps/planchange` | vps_id, plan_id | Зміна тарифу |
| 306 | POST | `vps/reboot/planchange` | vps_id | Перезапуск сервера для застосування нового тарифу |
| 307 | POST | `vps/settings/password_change` | vps_id, root_passwd | Зміна пароля root-користувача |
| 311 | POST | `vps/tab/access` | vps_id | Виведення списку користувачів, що мають доступ до VPS |
| 312 | POST | `vps/tab/backup` | vps_id, page | Отримання списку резервних копій VPS |
| 21526 | POST | `vps/tab/cdrom` | vps_id | cdrom |
| 313 | POST | `vps/tab/console` | vps_id | Виведення даних для підключення VNC |
| 62137 | POST | `vps/tab/firewall` | vps_id | Отримання правил Firewall |
| 315 | POST | `vps/tab/ipextra` | vps_id, params | Отримання списку додаткових IP |
| 316 | POST | `vps/tab/report` | vps_id, page | Висновок історії операцій |
| 317 | POST | `vps/title_edit` | vps_id, vps_title | Перейменування VPS |
