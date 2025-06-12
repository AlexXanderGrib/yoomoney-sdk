[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / api

# api

## Classes

### API

Defined in: [src/api.ts:36](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L36)

Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)

#### See

[https://yoomoney.ru/docs/wallet\|Описание](https://yoomoney.ru/docs/wallet|Описание)

#### Export

API

#### Constructors

##### Constructor

> **new API**(`token`, `endpoint?`, `agent?`): [`API`](#api)

Defined in: [src/api.ts:44](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L44)

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

###### Memberof

API

#### Properties

##### agent?

> `optional` **agent**: `any`

Defined in: [src/api.ts:47](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L47)

##### endpoint

> **endpoint**: `string` = `"https://yoomoney.ru/api"`

Defined in: [src/api.ts:46](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L46)

По умолчанию `https://yoomoney.ru/api`

##### token

> **token**: `string`

Defined in: [src/api.ts:45](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L45)

Токен авторизации пользователя

#### Methods

##### accountInfo()

> **accountInfo**(): `Promise`\<[`AccountInfoResponse`](api.types.md#accountinforesponse)\>

Defined in: [src/api.ts:93](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L93)

Получение информации о состоянии счета пользователя.

Требуемые права токена: `account-info`.

###### Returns

`Promise`\<[`AccountInfoResponse`](api.types.md#accountinforesponse)\>

###### Throws

###### Throws

##### call()

> **call**\<`T`\>(`method`, `parameters`): `Promise`\<`T`\>

Defined in: [src/api.ts:62](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L62)

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

Defined in: [src/api.ts:191](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L191)

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

Defined in: [src/api.ts:211](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L211)

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

Defined in: [src/api.ts:125](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L125)

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

Defined in: [src/api.ts:108](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L108)

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

Defined in: [src/api.ts:168](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L168)

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

Defined in: [src/api.ts:150](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L150)

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

Defined in: [src/api.ts:8](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L8)

Ошибка, которую выбрасывает API при ошибочном ответе от сервера

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new YMApiError**(`response`): [`YMApiError`](#ymapierror)

Defined in: [src/api.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L15)

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

Defined in: [src/api.ts:9](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L9)

##### response

> **response**: `AnyRecord`

Defined in: [src/api.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L15)

***

### YMApiVoidResponseError

Defined in: [src/api.ts:27](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/api.ts#L27)

Ошибка, если API возвращает пустую строку ответе
Скорее всего это связано с отсутствием прав токена

#### See

https://github.com/AlexXanderGrib/yoomoney-sdk/issues/4

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new YMApiVoidResponseError**(`message?`): [`YMApiVoidResponseError`](#ymapivoidresponseerror)

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1082

###### Parameters

###### message?

`string`

###### Returns

[`YMApiVoidResponseError`](#ymapivoidresponseerror)

###### Inherited from

`Error.constructor`

##### Constructor

> **new YMApiVoidResponseError**(`message?`, `options?`): [`YMApiVoidResponseError`](#ymapivoidresponseerror)

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1082

###### Parameters

###### message?

`string`

###### options?

`ErrorOptions`

###### Returns

[`YMApiVoidResponseError`](#ymapivoidresponseerror)

###### Inherited from

`Error.constructor`
