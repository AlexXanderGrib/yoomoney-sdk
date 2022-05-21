[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](index.md) / ymTypes

# Namespace: ymTypes

[index](index.md).ymTypes

## Table of contents

### Type aliases

- [AccountInfoResponse](index.ymTypes.md#accountinforesponse)
- [IncomingTransferAcceptParameters](index.ymTypes.md#incomingtransferacceptparameters)
- [IncomingTransferAcceptResponse](index.ymTypes.md#incomingtransferacceptresponse)
- [IncomingTransferRejectParameters](index.ymTypes.md#incomingtransferrejectparameters)
- [IncomingTransferRejectResponse](index.ymTypes.md#incomingtransferrejectresponse)
- [Operation](index.ymTypes.md#operation)
- [OperationDetailsParameters](index.ymTypes.md#operationdetailsparameters)
- [OperationHistoryParameters](index.ymTypes.md#operationhistoryparameters)
- [OperationHistoryResponse](index.ymTypes.md#operationhistoryresponse)
- [P2PPaymentRequest](index.ymTypes.md#p2ppaymentrequest)
- [PhoneProviderPaymentRequest](index.ymTypes.md#phoneproviderpaymentrequest)
- [ProcessPaymentParameters](index.ymTypes.md#processpaymentparameters)
- [ProcessPaymentResponse](index.ymTypes.md#processpaymentresponse)
- [RequestPaymentMoneySource](index.ymTypes.md#requestpaymentmoneysource)
- [RequestPaymentParameters](index.ymTypes.md#requestpaymentparameters)
- [RequestPaymentResponse](index.ymTypes.md#requestpaymentresponse)

## Type aliases

### AccountInfoResponse

Ƭ **AccountInfoResponse**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Номер счета пользователя. |
| `account_status` | ``"anonymous"`` \| ``"named"`` \| ``"identified"`` | Статус пользователя. Возможные значения: - `anonymous` — анонимный счет; - `named` — именной счет; - `identified` — идентифицированный счет. |
| `account_type` | ``"personal"`` \| ``"professional"`` | Тип счета пользователя. Возможные значения: - `personal` — счет пользователя в ЮMoney; - `professional` — профессиональный счет в ЮMoney. |
| `balance` | `number` | Баланс счета пользователя. |
| `balance_details` | [`AccountBalanceDetails`](index._internal_.md#accountbalancedetails) | [Расширенная информация о балансе](https://yoomoney.ru/page?id=525218). По умолчанию этот блок отсутствует. Блок появляется, если сейчас или когда-либо ранее были зачисления в очереди, задолженности, блокировки средств.  см. [Параметры объекта balance_details](https://yoomoney.ru/docs/wallet/user-account/account-info#response-nested-balance-details) |
| `cards_linked?` | [`AccountLinkedCard`](index._internal_.md#accountlinkedcard)[] | Информация о привязанных банковских картах.  Если к счету не привязано ни одной карты, параметр отсутствует. Если к счету привязана хотя бы одна карта, параметр содержит список данных о привязанных картах.  см. [Параметры объекта cards_linked](https://yoomoney.ru/docs/wallet/user-account/account-info#response-nested-cards-linked) |
| `currency` | ``"643"`` | Код валюты счета пользователя. Всегда `643` (рубль РФ по стандарту ISO 4217). |

#### Defined in

dist/cjs/api.types.d.ts:42

___

### IncomingTransferAcceptParameters

Ƭ **IncomingTransferAcceptParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation_id` | `string` | Идентификатор операции, значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history). |
| `protection_code?` | `string` | Код протекции. Строка из 4-х десятичных цифр. Указывается для входящего перевода, защищенного кодом протекции. Для переводов до востребования отсутствует. |

#### Defined in

dist/cjs/api.types.d.ts:480

___

### IncomingTransferAcceptResponse

Ƭ **IncomingTransferAcceptResponse**: [`BaseApiErrors`](index._internal_.md#baseapierrors) & { `[key: string]`: `any`; `ext_action_uri?`: `string` ; `protection_code_attempts_available?`: `number`  }

#### Defined in

dist/cjs/api.types.d.ts:491

___

### IncomingTransferRejectParameters

Ƭ **IncomingTransferRejectParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation_id` | `string` | Идентификатор операции, значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history). |

#### Defined in

dist/cjs/api.types.d.ts:502

___

### IncomingTransferRejectResponse

Ƭ **IncomingTransferRejectResponse**: [`BaseApiErrors`](index._internal_.md#baseapierrors) & { `[key: string]`: `any`;  }

#### Defined in

dist/cjs/api.types.d.ts:509

___

### Operation

Ƭ **Operation**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма операции. |
| `amount_due?` | `number` | Сумма к получению. Присутствует для исходящих переводов другим пользователям. |
| `answer_datetime?` | `string` | Дата и время приема или отмены перевода, защищенного кодом протекции. Присутствует для входящих и исходящих переводов, защищенных кодом протекции. Если перевод еще не принят или не отвергнут получателем, поле отсутствует. |
| `codepro?` | `boolean` | Перевод защищен кодом протекции. Присутствует для переводов другим пользователям. |
| `comment?` | `string` | Комментарий к переводу или пополнению. Присутствует в истории отправителя перевода или получателя пополнения. |
| `datetime` | `string` | Дата и время совершения операции. |
| `details?` | `string` | Детальное описание платежа. Строка произвольного формата, может содержать любые символы и переводы строк. Необязательный параметр. |
| `digital_goods` | [`DigitalGoodsDescription`](index._internal_.md#digitalgoodsdescription) | Данные о цифровом товаре (пин-коды и бонусы игр, iTunes, Xbox, etc.) Поле присутствует при успешном платеже в магазины цифровых товаров. Описание формата |
| `direction` | ``"in"`` \| ``"out"`` | Направление движения средств. Может принимать значения: - `in` (приход); - `out` (расход). |
| `expires?` | `string` | Дата и время истечения срока действия кода протекции. Присутствует для входящих и исходящих переводов (от/другим) пользователям, защищенных кодом протекции. |
| `fee?` | `number` | Сумма комиссии. Присутствует для исходящих переводов другим пользователям. |
| `label` | `string` | Метка платежа. Присутствует для входящих и исходящих переводов другим пользователям ЮMoney, у которых был указан параметр `label` вызова [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment#request-transfer-label). |
| `message?` | `string` | Сообщение получателю перевода. Присутствует для переводов другим пользователям. |
| `operation_id` | `string` | Идентификатор операции. |
| `pattern_id?` | `string` | Идентификатор шаблона, по которому совершен платеж. Присутствует только для платежей. |
| `protection_code?` | `string` | Код протекции. Присутствует для исходящих переводов, защищенных кодом протекции. |
| `recipient?` | `string` | Идентификатор получателя перевода. Присутствует для исходящих переводов другим пользователям. |
| `recipient_type?` | ``"account"`` \| ``"phone"`` \| ``"email"`` | Тип идентификатора получателя перевода. Возможные значения: - `account` — номер счета получателя в сервисе ЮMoney; - `phone` — номер привязанного мобильного телефона получателя; - `email` — электронная почта получателя перевода.  Присутствует для исходящих переводов другим пользователям. |
| `sender?` | `string` | Номер счета отправителя перевода. Присутствует для входящих переводов от других пользователей. |
| `status` | ``"success"`` \| ``"refused"`` \| ``"in_progress"`` | Статус платежа (перевода). Может принимать следующие значения: - `success` — платеж завершен успешно; - `refused` — платеж отвергнут получателем или отменен отправителем; - `in_progress` — платеж не завершен, перевод не принят получателем или ожидает ввода кода протекции. |
| `title` | `string` | Краткое описание операции (название магазина или источник пополнения). |
| `type` | ``"payment-shop"`` \| ``"outgoing-transfer"`` \| ``"deposition"`` \| ``"incoming-transfer"`` \| ``"incoming-transfer-protected"`` | Тип операции. Возможные значения: - `payment-shop` — исходящий платеж в магазин; - `outgoing-transfer` — исходящий P2P-перевод любого типа; - `deposition` — зачисление; - `incoming-transfer` — входящий перевод или перевод [до востребования](https://yoomoney.ru/page?id=525218); - `incoming-transfer-protected` — входящий перевод с [кодом протекции](https://yoomoney.ru/page?id=525218). |

#### Defined in

dist/cjs/api.types.d.ts:139

___

### OperationDetailsParameters

Ƭ **OperationDetailsParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation_id` | `string` | Идентификатор операции. Значение параметра следует указывать как значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history#response) или значение поля `payment_id` ответа метода [process-payment](https://yoomoney.ru/docs/wallet/process-payments/process-payment#response), если запрашивается история счета плательщика. |

#### Defined in

dist/cjs/api.types.d.ts:250

___

### OperationHistoryParameters

Ƭ **OperationHistoryParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `details?` | `boolean` | Показывать подробные детали операции. По умолчанию `false`. Для отображения деталей операции требуется наличие права `operation-details`. |
| `from?` | `string` | Вывести операции от момента времени (операции, равные `from`, или более поздние). Если параметр отсутствует, выводятся все операции. |
| `label?` | `string` | Отбор платежей по значению метки. Выбираются платежи, у которых указано заданное значение параметра `label` вызова [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment). |
| `records?` | `number` | Количество запрашиваемых записей истории операций. Допустимые значения: от 1 до 100, по умолчанию — 30. |
| `start_record?` | `string` | Если параметр присутствует, то будут отображены операции, начиная с номера `start_record`. Операции нумеруются с 0. [Подробнее про постраничный вывод списка](https://yoomoney.ru/docs/wallet/user-account/operation-history#filtering-logic) |
| `till?` | `string` | Вывести операции до момента времени (операции более ранние, чем `till`). Если параметр отсутствует, выводятся все операции. |
| `type?` | `string` | Перечень типов операций, которые требуется отобразить. Возможные значения:  - `deposition` — пополнение счета (приход); - `payment` — платежи со счета (расход); - `incoming-transfers-unaccepted` — непринятые входящие P2P-переводы любого типа.  Типы операций перечисляются через пробел. Если параметр отсутствует, выводятся все операции. |

#### Defined in

dist/cjs/api.types.d.ts:84

___

### OperationHistoryResponse

Ƭ **OperationHistoryResponse**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `next_record` | `string` |
| `operations` | [`Operation`](index.ymTypes.md#operation)[] |

#### Defined in

dist/cjs/api.types.d.ts:245

___

### P2PPaymentRequest

Ƭ **P2PPaymentRequest**: `Pick`<[`Operation`](index.ymTypes.md#operation), ``"amount"`` \| ``"amount_due"`` \| ``"comment"`` \| ``"message"`` \| ``"codepro"``\> & { `[key: string]`: `any`; `expire_period?`: `number` ; `label?`: `string` ; `pattern_id`: ``"p2p"`` ; `to`: `string`  }

Перевод средств на счета других пользователей

#### Defined in

dist/cjs/api.types.d.ts:260

___

### PhoneProviderPaymentRequest

Ƭ **PhoneProviderPaymentRequest**: `Object`

Платеж за сотовую связь

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма платежа. С этой суммы может быть взята комиссия, размер комиссии зависит от оператора. |
| `pattern_id` | ``"phone-topup"`` | Фиксированное значение: `phone-topup` |
| `phone-number` | `string` | Номер телефона в формате [ITU-T E.164](http://www.itu.int/rec/T-REC-E.164), полный номер, начиная с 7.  Поддерживаются номера только российских сотовых операторов. Пример: `79219990099` |

#### Defined in

dist/cjs/api.types.d.ts:286

___

### ProcessPaymentParameters

Ƭ **ProcessPaymentParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `csc?` | `string` | Card Security Code, CVV2/CVC2-код привязанной банковской карты пользователя. Параметр следует указывать только при платеже с привязанной банковской карты. |
| `ext_auth_fail_uri?` | `string` | Адрес страницы возврата при отказе в аутентификации платежа банковской картой по 3‑D Secure. Указывается, если приложение поддерживает аутентификацию по 3‑D Secure. Обязательный параметр для такой аутентификации. |
| `ext_auth_success_uri?` | `string` | Адрес страницы возврата при успехе аутентификации платежа банковской картой по 3‑D Secure. Указывается, если приложение поддерживает аутентификацию по 3‑D Secure. Обязательный параметр для такой аутентификации. |
| `money_source?` | `string` | Запрашиваемый метод проведения платежа: - `wallet` — со счета пользователя - идентификатор привязанной к счету карты (значение поля `id` описания [банковской карты](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response-payment-methods))  По умолчанию: `wallet` |
| `request_id` | `string` | Идентификатор запроса, полученный из ответа метода [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response). |

#### Defined in

dist/cjs/api.types.d.ts:389

___

### ProcessPaymentResponse

Ƭ **ProcessPaymentResponse**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account_unblock_uri?` | `string` | Адрес, на который необходимо отправить пользователя для разблокировки счета. Поле присутствует в случае ошибки `account_blocked`. |
| `acs_params?` | `Record`<`string`, `string`\> | Параметры аутентификации карты по 3‑D Secure в формате коллекции «имя-значение». Поле присутствует, если для завершения транзакции с использованием банковской карты требуется аутентификация по 3‑D Secure. |
| `acs_uri?` | `string` | Адрес страницы аутентификации банковской карты по 3‑D Secure на стороне банка-эмитента. Поле присутствует, если для завершения транзакции с использованием банковской карты требуется аутентификация по 3‑D Secure. |
| `balance?` | `number` | Текущий баланс счета пользователя. Присутствует при выполнении следующих условий: - метод выполнен успешно; - токен авторизации обладает правом `account-info`. |
| `credit_amount?` | `number` | Сумма, поступившая на счет получателя. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney. |
| `digital_goods?` | [`DigitalGoodsDescription`](index._internal_.md#digitalgoodsdescription) | Данные о цифровом товаре (пин-коды и бонусы игр, iTunes, Xbox etc). Поле присутствует при успешном платеже в магазины цифровых товаров. |
| `error?` | `string` | [Код ошибки](https://yoomoney.ru/docs/wallet/process-payments/request-payment#errors) при проведении платежа (пояснение к полю `status`). Присутствует только при ошибках.  **Фактически: `never`. В случае ошибки, клиент API кидает ошибку `YMApiError`, которая содержит `code` - код ошибки из поля `error` и ответ целиком в поле `response`** |
| `invoice_id?` | `string` | Номер транзакции магазина в ЮMoney. Присутствует при успешном выполнении платежа в магазин. |
| `next_retry?` | `number` | Рекомендуемое время, спустя которое следует повторить запрос, в миллисекундах. Поле присутствует при `status=in_progress`. |
| `payee?` | `string` | Номер счета получателя. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney. |
| `payer?` | `string` | Номер счета плательщика. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney. |
| `payment_id` | `string` | Идентификатор проведенного платежа. Присутствует только при успешном выполнении метода. Этот параметр соответствует параметру `operation_id` в методах [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history) и [operation-details](https://yoomoney.ru/docs/wallet/user-account/operation-details) истории плательщика. |
| `status` | ``"success"`` \| ``"refused"`` \| ``"in_progress"`` \| ``"ext_auth_required"`` \| ``"*"`` | Код результата выполнения операции. Возможные значения: - `success` — успешное выполнение (платеж проведен). Это конечное состояние платежа. - `refused` — отказ в проведении платежа. Причина отказа возвращается в поле error. Это конечное состояние платежа. - `in_progress` — авторизация платежа не завершена. Приложению следует повторить запрос с теми же параметрами спустя некоторое время. - `ext_auth_required` — для завершения авторизации платежа с использованием банковской карты требуется аутентификация по технологии 3‑D Secure. - все прочие значения — состояние платежа неизвестно. Приложению следует повторить запрос с теми же параметрами спустя некоторое время. |

#### Defined in

dist/cjs/api.types.d.ts:416

___

### RequestPaymentMoneySource

Ƭ **RequestPaymentMoneySource**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cards` | { `allowed`: `boolean` ; `csc_required`: `boolean` ; `items`: [`AccountLinkedCard`](index._internal_.md#accountlinkedcard) & { `id`: `string`  }[]  } |
| `cards.allowed` | `boolean` |
| `cards.csc_required` | `boolean` |
| `cards.items` | [`AccountLinkedCard`](index._internal_.md#accountlinkedcard) & { `id`: `string`  }[] |
| `wallet` | { `allowed`: `boolean`  } |
| `wallet.allowed` | `boolean` |

#### Defined in

dist/cjs/api.types.d.ts:307

___

### RequestPaymentParameters

Ƭ **RequestPaymentParameters**: [`P2PPaymentRequest`](index.ymTypes.md#p2ppaymentrequest) \| [`PhoneProviderPaymentRequest`](index.ymTypes.md#phoneproviderpaymentrequest) \| { `[key: string]`: `string`; `pattern_id`: `string`  }

#### Defined in

dist/cjs/api.types.d.ts:303

___

### RequestPaymentResponse

Ƭ **RequestPaymentResponse**: [`BaseApiErrors`](index._internal_.md#baseapierrors) & { `[key: string]`: `any`; `account_unblock_uri?`: `string` ; `balance?`: `number` ; `contract_amount`: `number` ; `ext_action_uri?`: `string` ; `money_source`: [`RequestPaymentMoneySource`](index.ymTypes.md#requestpaymentmoneysource) ; `protection_code?`: `string` ; `recipient_account_status`: [`AccountInfoResponse`](index.ymTypes.md#accountinforesponse)[``"account_status"``] ; `recipient_account_type`: [`AccountInfoResponse`](index.ymTypes.md#accountinforesponse)[``"account_type"``] ; `request_id`: `string`  }

#### Defined in

dist/cjs/api.types.d.ts:345
