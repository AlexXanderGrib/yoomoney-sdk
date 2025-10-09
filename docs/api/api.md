[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / api

# api

## Classes

### API

Defined in: [api.ts:52](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L52)

Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)

#### See

[https://yoomoney.ru/docs/wallet\|Описание](https://yoomoney.ru/docs/wallet|Описание)
 API

#### Constructors

##### Constructor

> **new API**(`token`, `endpoint?`, `agent?`): [`API`](#api)

Defined in: [api.ts:59](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L59)

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

Defined in: [api.ts:62](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L62)

##### endpoint

> **endpoint**: `string` = `"https://yoomoney.ru/api"`

Defined in: [api.ts:61](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L61)

По умолчанию `https://yoomoney.ru/api`

##### token

> **token**: `string`

Defined in: [api.ts:60](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L60)

Токен авторизации пользователя

#### Methods

##### accountInfo()

> **accountInfo**(): `Promise`\<[`AccountInfoResponse`](api.types.md#accountinforesponse)\>

Defined in: [api.ts:106](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L106)

Получение информации о состоянии счета пользователя.

Требуемые права токена: `account-info`.

###### Returns

`Promise`\<[`AccountInfoResponse`](api.types.md#accountinforesponse)\>

###### Throws

###### Throws

##### call()

> **call**\<`T`\>(`method`, `parameters`): `Promise`\<`T`\>

Defined in: [api.ts:77](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L77)

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

Defined in: [api.ts:204](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L204)

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

Defined in: [api.ts:224](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L224)

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

Defined in: [api.ts:138](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L138)

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

Defined in: [api.ts:121](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L121)

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

Defined in: [api.ts:181](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L181)

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

Defined in: [api.ts:163](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L163)

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

Defined in: [api.ts:19](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L19)

Ошибка, которую выбрасывает API при ошибочном ответе от сервера

#### Extends

- [`YMError`](#ymerror)

#### Constructors

##### Constructor

> **new YMApiError**(`response`): [`YMApiError`](#ymapierror)

Defined in: [api.ts:26](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L26)

Объект ответа

###### Parameters

###### response

`AnyRecord`

###### Returns

[`YMApiError`](#ymapierror)

###### Overrides

[`YMError`](#ymerror).[`constructor`](#constructor-3)

#### Properties

##### code

> **code**: `string`

Defined in: [api.ts:20](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L20)

##### response

> **response**: `AnyRecord`

Defined in: [api.ts:26](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L26)

***

### YMApiVoidResponseError

Defined in: [api.ts:39](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L39)

Ошибка, если API возвращает пустую строку ответе
Скорее всего это связано с отсутствием прав токена

#### See

https://github.com/AlexXanderGrib/yoomoney-sdk/issues/4

#### Extends

- [`YMError`](#ymerror)

#### Constructors

##### Constructor

> **new YMApiVoidResponseError**(): [`YMApiVoidResponseError`](#ymapivoidresponseerror)

Defined in: [api.ts:40](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L40)

###### Returns

[`YMApiVoidResponseError`](#ymapivoidresponseerror)

###### Overrides

[`YMError`](#ymerror).[`constructor`](#constructor-3)

***

### YMError

Defined in: [api.ts:9](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L9)

Базовый класс для ошибок API
Напрямую не инстанциируется, но может использоваться для проверки instanceof

#### Extends

- `Error`

#### Extended by

- [`YMApiError`](#ymapierror)
- [`YMApiVoidResponseError`](#ymapivoidresponseerror)

#### Constructors

##### Constructor

> **new YMError**(`message`, `options?`): [`YMError`](#ymerror)

Defined in: [api.ts:10](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/049b243fdd91785dd7b9fa1bc08b18c18c979425/src/api.ts#L10)

###### Parameters

###### message

`string`

###### options?

`ErrorOptions`

###### Returns

[`YMError`](#ymerror)

###### Overrides

`Error.constructor`
