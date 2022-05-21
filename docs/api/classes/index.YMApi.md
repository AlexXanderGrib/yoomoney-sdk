[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / YMApi

# Class: YMApi

[index](../modules/index.md).YMApi

Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)

**`see`** [Описание](https://yoomoney.ru/docs/wallet)

**`export`**

## Table of contents

### Constructors

- [constructor](index.YMApi.md#constructor)

### Properties

- [agent](index.YMApi.md#agent)
- [endpoint](index.YMApi.md#endpoint)
- [token](index.YMApi.md#token)

### Methods

- [accountInfo](index.YMApi.md#accountinfo)
- [call](index.YMApi.md#call)
- [incomingTransferAccept](index.YMApi.md#incomingtransferaccept)
- [incomingTransferReject](index.YMApi.md#incomingtransferreject)
- [operationDetails](index.YMApi.md#operationdetails)
- [operationHistory](index.YMApi.md#operationhistory)
- [processPayment](index.YMApi.md#processpayment)
- [requestPayment](index.YMApi.md#requestpayment)

## Constructors

### constructor

• **new YMApi**(`token`, `endpoint?`, `agent?`)

Creates an instance of API.

**`memberof`** API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Токен авторизации пользователя |
| `endpoint?` | `string` | - |
| `agent?` | `any` | - |

#### Defined in

dist/cjs/api.d.ts:42

## Properties

### agent

• `Optional` **agent**: `any`

#### Defined in

dist/cjs/api.d.ts:34

___

### endpoint

• **endpoint**: `string`

#### Defined in

dist/cjs/api.d.ts:33

___

### token

• **token**: `string`

#### Defined in

dist/cjs/api.d.ts:32

## Methods

### accountInfo

▸ **accountInfo**(): `Promise`<[`AccountInfoResponse`](../modules/index.ymTypes.md#accountinforesponse)\>

Получение информации о состоянии счета пользователя.

Требуемые права токена: `account-info`.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Returns

`Promise`<[`AccountInfoResponse`](../modules/index.ymTypes.md#accountinforesponse)\>

#### Defined in

dist/cjs/api.d.ts:66

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
| `parameters` | [`QueryStringifiable`](../modules/index._internal_.md#querystringifiable) | Параметры метода |

#### Returns

`Promise`<`T`\>

#### Defined in

dist/cjs/api.d.ts:55

___

### incomingTransferAccept

▸ **incomingTransferAccept**(`parameters`): `Promise`<[`IncomingTransferAcceptResponse`](../modules/index.ymTypes.md#incomingtransferacceptresponse)\>

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
| `parameters` | [`IncomingTransferAcceptParameters`](../modules/index.ymTypes.md#incomingtransferacceptparameters) | Параметры вызова |

#### Returns

`Promise`<[`IncomingTransferAcceptResponse`](../modules/index.ymTypes.md#incomingtransferacceptresponse)\>

#### Defined in

dist/cjs/api.d.ts:139

___

### incomingTransferReject

▸ **incomingTransferReject**(`parameters`): `Promise`<[`IncomingTransferRejectResponse`](../modules/index.ymTypes.md#incomingtransferrejectresponse)\>

Отмена входящих переводов, защищенных кодом протекции, и
переводов до востребования. При отмене перевода он возвращается
отправителю.

Требуемые права токена: `incoming-transfers`

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`IncomingTransferRejectParameters`](../modules/index.ymTypes.md#incomingtransferrejectparameters) | Параметры вызова |

#### Returns

`Promise`<[`IncomingTransferRejectResponse`](../modules/index.ymTypes.md#incomingtransferrejectresponse)\>

#### Defined in

dist/cjs/api.d.ts:153

___

### operationDetails

▸ **operationDetails**(`parameters`): `Promise`<[`Operation`](../modules/index.ymTypes.md#operation)\>

Позволяет получить детальную информацию об операции из истории.

Требуемые права токена: `operation-details`.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`OperationDetailsParameters`](../modules/index.ymTypes.md#operationdetailsparameters) | Параметры вызова |

#### Returns

`Promise`<[`Operation`](../modules/index.ymTypes.md#operation)\>

#### Defined in

dist/cjs/api.d.ts:90

___

### operationHistory

▸ **operationHistory**(`parameters?`): `Promise`<[`OperationHistoryResponse`](../modules/index.ymTypes.md#operationhistoryresponse)\>

Метод позволяет просматривать историю операций (полностью или частично) в постраничном режиме. Записи истории выдаются в обратном хронологическом порядке: от последних к более ранним.

Требуемые права токена: `operation-history`.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | [`OperationHistoryParameters`](../modules/index.ymTypes.md#operationhistoryparameters) |

#### Returns

`Promise`<[`OperationHistoryResponse`](../modules/index.ymTypes.md#operationhistoryresponse)\>

#### Defined in

dist/cjs/api.d.ts:78

___

### processPayment

▸ **processPayment**(`parameters`): `Promise`<[`ProcessPaymentResponse`](../modules/index.ymTypes.md#processpaymentresponse)\>

Подтверждение платежа, ранее созданного методом
[request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment).
Указание метода проведения платежа.

**`throws`** {YMApiError}

**`throws`** {YMApiVoidResponseError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`ProcessPaymentParameters`](../modules/index.ymTypes.md#processpaymentparameters) | Параметры вызова |

#### Returns

`Promise`<[`ProcessPaymentResponse`](../modules/index.ymTypes.md#processpaymentresponse)\>

#### Defined in

dist/cjs/api.d.ts:122

___

### requestPayment

▸ **requestPayment**(`parameters`): `Promise`<[`RequestPaymentResponse`](../modules/index.ymTypes.md#requestpaymentresponse)\>

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
| `parameters` | [`RequestPaymentParameters`](../modules/index.ymTypes.md#requestpaymentparameters) | Параметры вызова |

#### Returns

`Promise`<[`RequestPaymentResponse`](../modules/index.ymTypes.md#requestpaymentresponse)\>

#### Defined in

dist/cjs/api.d.ts:110
