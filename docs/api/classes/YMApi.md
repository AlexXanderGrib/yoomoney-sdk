[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMApi

# Class: YMApi

Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)

**`see`** [Описание](https://yoomoney.ru/docs/wallet)

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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `token` | `string` | `undefined` | Токен авторизации пользователя |
| `endpoint` | `string` | `"https://yoomoney.ru/api"` | По умолчанию `https://yoomoney.ru/api` |
| `agent?` | `Agent` \| (`parsedUrl`: `URL`) => `Agent` | `undefined` | - |

#### Defined in

[src/api.ts:32](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L32)

## Properties

### agent

• `Optional` **agent**: `Agent` \| (`parsedUrl`: `URL`) => `Agent`

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

#### Returns

`Promise`<[`AccountInfoResponse`](../modules/ymTypes.md#accountinforesponse)\>

#### Defined in

[src/api.ts:71](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L71)

___

### call

▸ **call**<`T`\>(`method`, `parameters`): `Promise`<`T`\>

Позволяет совершить вызов произвольного метода API

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

[src/api.ts:47](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L47)

___

### incomingTransferAccept

▸ **incomingTransferAccept**(`parameters`): `Promise`<[`IncomingTransferAcceptResponse`](../modules/ymTypes.md#incomingtransferacceptresponse)\>

Прием входящих переводов, защищенных кодом протекции, и переводов до востребования.

Количество попыток приема входящего перевода с кодом протекции ограничено. При исчерпании количества попыток, перевод автоматически отвергается (перевод возвращается отправителю).

Требуемые права токена: `incoming-transfers`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`IncomingTransferAcceptParams`](../modules/ymTypes.md#incomingtransferacceptparams) | Параметры вызова |

#### Returns

`Promise`<[`IncomingTransferAcceptResponse`](../modules/ymTypes.md#incomingtransferacceptresponse)\>

#### Defined in

[src/api.ts:141](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L141)

___

### incomingTransferReject

▸ **incomingTransferReject**(`parameters`): `Promise`<[`IncomingTransferRejectResponse`](../modules/ymTypes.md#incomingtransferrejectresponse)\>

Отмена входящих переводов, защищенных кодом протекции, и переводов до востребования. При отмене перевода он возвращается отправителю.

Требуемые права токена: `incoming-transfers`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`IncomingTransferRejectParams`](../modules/ymTypes.md#incomingtransferrejectparams) | Параметры вызова |

#### Returns

`Promise`<[`IncomingTransferRejectResponse`](../modules/ymTypes.md#incomingtransferrejectresponse)\>

#### Defined in

[src/api.ts:155](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L155)

___

### operationDetails

▸ **operationDetails**(`parameters`): `Promise`<[`Operation`](../modules/ymTypes.md#operation)\>

Позволяет получить детальную информацию об операции из истории.

Требуемые права токена: `operation-details`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`OperationDetailsParams`](../modules/ymTypes.md#operationdetailsparams) | Параметры вызова |

#### Returns

`Promise`<[`Operation`](../modules/ymTypes.md#operation)\>

#### Defined in

[src/api.ts:97](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L97)

___

### operationHistory

▸ **operationHistory**(`parameters?`): `Promise`<[`OperationHistoryResponse`](../modules/ymTypes.md#operationhistoryresponse)\>

Метод позволяет просматривать историю операций (полностью или частично) в постраничном режиме. Записи истории выдаются в обратном хронологическом порядке: от последних к более ранним.

Требуемые права токена: `operation-history`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`OperationHistoryParams`](../modules/ymTypes.md#operationhistoryparams) | Параметры вызова |

#### Returns

`Promise`<[`OperationHistoryResponse`](../modules/ymTypes.md#operationhistoryresponse)\>

#### Defined in

[src/api.ts:83](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L83)

___

### processPayment

▸ **processPayment**(`parameters`): `Promise`<[`ProcessPaymentResponse`](../modules/ymTypes.md#processpaymentresponse)\>

Подтверждение платежа, ранее созданного методом [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment). Указание метода проведения платежа.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`ProcessPaymentParams`](../modules/ymTypes.md#processpaymentparams) | Параметры вызова |

#### Returns

`Promise`<[`ProcessPaymentResponse`](../modules/ymTypes.md#processpaymentresponse)\>

#### Defined in

[src/api.ts:125](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L125)

___

### requestPayment

▸ **requestPayment**(`parameters`): `Promise`<[`RequestPaymentResponse`](../modules/ymTypes.md#requestpaymentresponse)\>

Создание платежа, проверка параметров и возможности приема платежа магазином или перевода средств на счет пользователя ЮMoney.

Требуемые права токена:
- для платежа в магазин: `payment.to-pattern` («шаблон платежа») или `payment-shop`.
- для перевода средств на счета других пользователей: `payment.to-account` («идентификатор получателя», «тип идентификатора») или `payment-p2p`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`RequestPaymentParams`](../modules/ymTypes.md#requestpaymentparams) | Параметры вызова |

#### Returns

`Promise`<[`RequestPaymentResponse`](../modules/ymTypes.md#requestpaymentresponse)\>

#### Defined in

[src/api.ts:113](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/c1a7b0f/src/api.ts#L113)
