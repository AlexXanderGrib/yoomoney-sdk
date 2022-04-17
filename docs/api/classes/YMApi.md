[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMApi

# Class: YMApi

Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)

**`see`** [Описание](https://yoomoney.ru/docs/wallet)

**`export`**

## Table of contents

### Constructors

- [constructor](YMApi.md#constructor)

### Properties

- [agent](YMApi.md#agent)
- [endpoint](YMApi.md#endpoint)
- [token](YMApi.md#token)

### Methods

- [accountInfo](YMApi.md#accountinfo)
- [call](YMApi.md#call)
- [incomingTransferAccept](YMApi.md#incomingtransferaccept)
- [incomingTransferReject](YMApi.md#incomingtransferreject)
- [operationDetails](YMApi.md#operationdetails)
- [operationHistory](YMApi.md#operationhistory)
- [processPayment](YMApi.md#processpayment)
- [requestPayment](YMApi.md#requestpayment)

## Constructors

### constructor

• **new YMApi**(`token`, `endpoint?`, `agent?`)

Creates an instance of API.

**`memberof`** API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `token` | `string` | `undefined` | Токен авторизации пользователя |
| `endpoint` | `string` | `"https://yoomoney.ru/api"` | - |
| `agent?` | `any` | `undefined` | - |

#### Defined in

[src/api.ts:44](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L44)

## Properties

### agent

• `Optional` **agent**: `any`

___

### endpoint

• **endpoint**: `string` = `"https://yoomoney.ru/api"`

___

### token

• **token**: `string`

## Methods

### accountInfo

▸ **accountInfo**(): `Promise`<[`AccountInfoResponse`](../modules/ymTypes.md#accountinforesponse)\>

Получение информации о состоянии счета пользователя.

Требуемые права токена: `account-info`.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Returns

`Promise`<[`AccountInfoResponse`](../modules/ymTypes.md#accountinforesponse)\>

#### Defined in

[src/api.ts:91](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L91)

___

### call

▸ **call**<`T`\>(`method`, `parameters`): `Promise`<`T`\>

Позволяет совершить вызов произвольного метода API

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | Название метода |
| `parameters` | `QueryStringifiable` | Параметры метода |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/api.ts:62](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L62)

___

### incomingTransferAccept

▸ **incomingTransferAccept**(`parameters`): `Promise`<[`IncomingTransferAcceptResponse`](../modules/ymTypes.md#incomingtransferacceptresponse)\>

Прием входящих переводов, защищенных кодом протекции, и
переводов до востребования.

Количество попыток приема входящего перевода с кодом протекции
ограничено. При исчерпании количества попыток, перевод
автоматически отвергается (перевод возвращается отправителю).

Требуемые права токена: `incoming-transfers`

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`IncomingTransferAcceptParameters`](../modules/ymTypes.md#incomingtransferacceptparameters) | Параметры вызова |

#### Returns

`Promise`<[`IncomingTransferAcceptResponse`](../modules/ymTypes.md#incomingtransferacceptresponse)\>

#### Defined in

[src/api.ts:187](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L187)

___

### incomingTransferReject

▸ **incomingTransferReject**(`parameters`): `Promise`<[`IncomingTransferRejectResponse`](../modules/ymTypes.md#incomingtransferrejectresponse)\>

Отмена входящих переводов, защищенных кодом протекции, и
переводов до востребования. При отмене перевода он возвращается
отправителю.

Требуемые права токена: `incoming-transfers`

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`IncomingTransferRejectParameters`](../modules/ymTypes.md#incomingtransferrejectparameters) | Параметры вызова |

#### Returns

`Promise`<[`IncomingTransferRejectResponse`](../modules/ymTypes.md#incomingtransferrejectresponse)\>

#### Defined in

[src/api.ts:206](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L206)

___

### operationDetails

▸ **operationDetails**(`parameters`): `Promise`<[`Operation`](../modules/ymTypes.md#operation)\>

Позволяет получить детальную информацию об операции из истории.

Требуемые права токена: `operation-details`.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`OperationDetailsParameters`](../modules/ymTypes.md#operationdetailsparameters) | Параметры вызова |

#### Returns

`Promise`<[`Operation`](../modules/ymTypes.md#operation)\>

#### Defined in

[src/api.ts:123](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L123)

___

### operationHistory

▸ **operationHistory**(`parameters?`): `Promise`<[`OperationHistoryResponse`](../modules/ymTypes.md#operationhistoryresponse)\>

Метод позволяет просматривать историю операций (полностью или частично) в постраничном режиме. Записи истории выдаются в обратном хронологическом порядке: от последних к более ранним.

Требуемые права токена: `operation-history`.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`OperationHistoryParameters`](../modules/ymTypes.md#operationhistoryparameters) |

#### Returns

`Promise`<[`OperationHistoryResponse`](../modules/ymTypes.md#operationhistoryresponse)\>

#### Defined in

[src/api.ts:106](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L106)

___

### processPayment

▸ **processPayment**(`parameters`): `Promise`<[`ProcessPaymentResponse`](../modules/ymTypes.md#processpaymentresponse)\>

Подтверждение платежа, ранее созданного методом
[request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment).
Указание метода проведения платежа.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`ProcessPaymentParameters`](../modules/ymTypes.md#processpaymentparameters) | Параметры вызова |

#### Returns

`Promise`<[`ProcessPaymentResponse`](../modules/ymTypes.md#processpaymentresponse)\>

#### Defined in

[src/api.ts:165](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L165)

___

### requestPayment

▸ **requestPayment**(`parameters`): `Promise`<[`RequestPaymentResponse`](../modules/ymTypes.md#requestpaymentresponse)\>

Создание платежа, проверка параметров и возможности приема
платежа магазином или перевода средств на счет пользователя
ЮMoney.

Требуемые права токена:
- для платежа в магазин: `payment.to-pattern`
(«шаблон платежа») или `payment-shop`.

- для перевода средств на счета других пользователей:
 `payment.to-account` («идентификатор получателя»,
«тип идентификатора») или `payment-p2p`.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`RequestPaymentParameters`](../modules/ymTypes.md#requestpaymentparameters) | Параметры вызова |

#### Returns

`Promise`<[`RequestPaymentResponse`](../modules/ymTypes.md#requestpaymentresponse)\>

#### Defined in

[src/api.ts:148](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/api.ts#L148)
