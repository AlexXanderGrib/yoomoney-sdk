[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / api

# api

## Classes

### API

Defined in: [api.ts:41](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L41)

Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)

#### See

[https://yoomoney.ru/docs/wallet\|Описание](https://yoomoney.ru/docs/wallet|Описание)
 API

#### Constructors

##### Constructor

> **new API**(`token`, `endpoint?`, `agent?`): [`API`](#api)

Defined in: [api.ts:48](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L48)

Creates an instance of API.

###### Parameters

###### token

`string`

Токен авторизации пользователя

###### endpoint?

`string` = `"https://yoomoney.ru/api"`

По умолчанию `https://yoomoney.ru/api`

###### agent?

`any`

###### Returns

[`API`](#api)

#### Properties

##### agent?

> `optional` **agent**: `any`

Defined in: [api.ts:51](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L51)

##### endpoint

> **endpoint**: `string` = `"https://yoomoney.ru/api"`

Defined in: [api.ts:50](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L50)

По умолчанию `https://yoomoney.ru/api`

##### token

> **token**: `string`

Defined in: [api.ts:49](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L49)

Токен авторизации пользователя

#### Methods

##### accountInfo()

> **accountInfo**(): `Promise`\<[`AccountInfoResponse`](api.types.md#accountinforesponse)\>

Defined in: [api.ts:95](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L95)

Получение информации о состоянии счета пользователя.

Требуемые права токена: `account-info`.

###### Returns

`Promise`\<[`AccountInfoResponse`](api.types.md#accountinforesponse)\>

###### Throws

###### Throws

##### call()

> **call**\<`T`\>(`method`, `parameters`): `Promise`\<`T`\>

Defined in: [api.ts:66](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L66)

Позволяет совершить вызов произвольного метода API

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### method

`string`

Название метода

###### parameters

`QueryStringifiable`

Параметры метода

###### Returns

`Promise`\<`T`\>

###### Throws

###### Throws

##### incomingTransferAccept()

> **incomingTransferAccept**(`parameters`): `Promise`\<[`IncomingTransferAcceptResponse`](api.types.md#incomingtransferacceptresponse)\>

Defined in: [api.ts:193](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L193)

Прием входящих переводов, защищенных кодом протекции, и
переводов до востребования.

Количество попыток приема входящего перевода с кодом протекции
ограничено. При исчерпании количества попыток, перевод
автоматически отвергается (перевод возвращается отправителю).

Требуемые права токена: `incoming-transfers`

###### Parameters

###### parameters

[`IncomingTransferAcceptParameters`](api.types.md#incomingtransferacceptparameters)

Параметры вызова

###### Returns

`Promise`\<[`IncomingTransferAcceptResponse`](api.types.md#incomingtransferacceptresponse)\>

###### Throws

###### Throws

##### incomingTransferReject()

> **incomingTransferReject**(`parameters`): `Promise`\<[`IncomingTransferRejectResponse`](api.types.md#incomingtransferrejectresponse)\>

Defined in: [api.ts:213](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L213)

Отмена входящих переводов, защищенных кодом протекции, и
переводов до востребования. При отмене перевода он возвращается
отправителю.

Требуемые права токена: `incoming-transfers`

###### Parameters

###### parameters

[`IncomingTransferRejectParameters`](api.types.md#incomingtransferrejectparameters)

Параметры вызова

###### Returns

`Promise`\<[`IncomingTransferRejectResponse`](api.types.md#incomingtransferrejectresponse)\>

###### Throws

###### Throws

##### operationDetails()

> **operationDetails**(`parameters`): `Promise`\<[`Operation`](api.types.md#operation)\>

Defined in: [api.ts:127](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L127)

Позволяет получить детальную информацию об операции из истории.

Требуемые права токена: `operation-details`.

###### Parameters

###### parameters

[`OperationDetailsParameters`](api.types.md#operationdetailsparameters)

Параметры вызова

###### Returns

`Promise`\<[`Operation`](api.types.md#operation)\>

###### Throws

###### Throws

##### operationHistory()

> **operationHistory**(`parameters?`): `Promise`\<[`OperationHistoryResponse`](api.types.md#operationhistoryresponse)\>

Defined in: [api.ts:110](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L110)

Метод позволяет просматривать историю операций (полностью или частично) в постраничном режиме. Записи истории выдаются в обратном хронологическом порядке: от последних к более ранним.

Требуемые права токена: `operation-history`.

###### Parameters

###### parameters?

[`OperationHistoryParameters`](api.types.md#operationhistoryparameters) = `{}`

Параметры вызова

###### Returns

`Promise`\<[`OperationHistoryResponse`](api.types.md#operationhistoryresponse)\>

###### Throws

###### Throws

##### processPayment()

> **processPayment**(`parameters`): `Promise`\<[`ProcessPaymentResponse`](api.types.md#processpaymentresponse)\>

Defined in: [api.ts:170](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L170)

Подтверждение платежа, ранее созданного методом
[request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment).
Указание метода проведения платежа.

###### Parameters

###### parameters

[`ProcessPaymentParameters`](api.types.md#processpaymentparameters)

Параметры вызова

###### Returns

`Promise`\<[`ProcessPaymentResponse`](api.types.md#processpaymentresponse)\>

###### Throws

###### Throws

##### requestPayment()

> **requestPayment**(`parameters`): `Promise`\<[`RequestPaymentResponse`](api.types.md#requestpaymentresponse)\>

Defined in: [api.ts:152](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L152)

Создание платежа, проверка параметров и возможности приема
платежа магазином или перевода средств на счет пользователя
ЮMoney.

Требуемые права токена:
- для платежа в магазин: `payment.to-pattern`
(«шаблон платежа») или `payment-shop`.

- для перевода средств на счета других пользователей:
 `payment.to-account` («идентификатор получателя»,
«тип идентификатора») или `payment-p2p`.

###### Parameters

###### parameters

[`RequestPaymentParameters`](api.types.md#requestpaymentparameters)

Параметры вызова

###### Returns

`Promise`\<[`RequestPaymentResponse`](api.types.md#requestpaymentresponse)\>

###### Throws

###### Throws

***

### YMApiError

Defined in: [api.ts:8](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L8)

Ошибка, которую выбрасывает API при ошибочном ответе от сервера

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new YMApiError**(`response`): [`YMApiError`](#ymapierror)

Defined in: [api.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L15)

Объект ответа

###### Parameters

###### response

`AnyRecord`

###### Returns

[`YMApiError`](#ymapierror)

###### Overrides

`Error.constructor`

#### Properties

##### code

> **code**: `string`

Defined in: [api.ts:9](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L9)

##### response

> **response**: `AnyRecord`

Defined in: [api.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L15)

***

### YMApiVoidResponseError

Defined in: [api.ts:28](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L28)

Ошибка, если API возвращает пустую строку ответе
Скорее всего это связано с отсутствием прав токена

#### See

https://github.com/AlexXanderGrib/yoomoney-sdk/issues/4

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new YMApiVoidResponseError**(): [`YMApiVoidResponseError`](#ymapivoidresponseerror)

Defined in: [api.ts:29](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/api.ts#L29)

###### Returns

[`YMApiVoidResponseError`](#ymapivoidresponseerror)

###### Overrides

`Error.constructor`
