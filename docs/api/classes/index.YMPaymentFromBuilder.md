[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / YMPaymentFromBuilder

# Class: YMPaymentFromBuilder

[index](../modules/index.md).YMPaymentFromBuilder

Генерирует HTML формы для переводов

**`export`**

## Table of contents

### Constructors

- [constructor](index.YMPaymentFromBuilder.md#constructor)

### Properties

- [\_makeSetter](index.YMPaymentFromBuilder.md#_makesetter)
- [config](index.YMPaymentFromBuilder.md#config)
- [setComment](index.YMPaymentFromBuilder.md#setcomment)
- [setFormComment](index.YMPaymentFromBuilder.md#setformcomment)
- [setLabel](index.YMPaymentFromBuilder.md#setlabel)
- [setPaymentType](index.YMPaymentFromBuilder.md#setpaymenttype)
- [setQuickPayForm](index.YMPaymentFromBuilder.md#setquickpayform)
- [setShortDest](index.YMPaymentFromBuilder.md#setshortdest)
- [setTargets](index.YMPaymentFromBuilder.md#settargets)
- [setType](index.YMPaymentFromBuilder.md#settype)

### Methods

- [buildHtml](index.YMPaymentFromBuilder.md#buildhtml)
- [requireAddress](index.YMPaymentFromBuilder.md#requireaddress)
- [requireEmail](index.YMPaymentFromBuilder.md#requireemail)
- [requireFio](index.YMPaymentFromBuilder.md#requirefio)
- [requirePhone](index.YMPaymentFromBuilder.md#requirephone)
- [setAmount](index.YMPaymentFromBuilder.md#setamount)
- [setReceiver](index.YMPaymentFromBuilder.md#setreceiver)
- [setSuccessURL](index.YMPaymentFromBuilder.md#setsuccessurl)

## Constructors

### constructor

• **new YMPaymentFromBuilder**(`config?`)

Creates an instance of PaymentFormBuilder.

**`memberof`** PaymentFormBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`YMFormConfig`](../modules/index.md#ymformconfig) |

#### Defined in

dist/cjs/payment-form-builder.d.ts:83

## Properties

### \_makeSetter

• `Private` **\_makeSetter**: `any`

Генерирует стандартные сеттеры

**`param`**

**`returns`**

**`memberof`** PaymentFromBuilder

#### Defined in

dist/cjs/payment-form-builder.d.ts:92

___

### config

• `Readonly` **config**: [`YMFormConfig`](../modules/index.md#ymformconfig)

#### Defined in

dist/cjs/payment-form-builder.d.ts:70

___

### setComment

• `Readonly` **setComment**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:124

___

### setFormComment

• `Readonly` **setFormComment**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:121

___

### setLabel

• `Readonly` **setLabel**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:123

___

### setPaymentType

• `Readonly` **setPaymentType**: (`value`: ``"AC"`` \| ``"PC"`` \| ``"MC"``) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"AC"`` \| ``"PC"`` \| ``"MC"`` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:118

___

### setQuickPayForm

• `Readonly` **setQuickPayForm**: (`value`: ``"shop"`` \| ``"small"`` \| ``"donate"``) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"shop"`` \| ``"small"`` \| ``"donate"`` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:119

___

### setShortDest

• `Readonly` **setShortDest**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:122

___

### setTargets

• `Readonly` **setTargets**: (`value`: `string`) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:117

___

### setType

• `Readonly` **setType**: (`value`: ``"shop"`` \| ``"small"`` \| ``"donate"``) => [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"shop"`` \| ``"small"`` \| ``"donate"`` |

##### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:120

## Methods

### buildHtml

▸ **buildHtml**(`fullPage?`): `string`

Генерирует HTML на основе заданных параметров

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullPage?` | `boolean` |

#### Returns

`string`

#### Defined in

dist/cjs/payment-form-builder.d.ts:158

___

### requireAddress

▸ **requireAddress**(`doRequire?`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `doRequire?` | `boolean` |

#### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:138

___

### requireEmail

▸ **requireEmail**(`doRequire?`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `doRequire?` | `boolean` |

#### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:145

___

### requireFio

▸ **requireFio**(`doRequire?`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `doRequire?` | `boolean` |

#### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:131

___

### requirePhone

▸ **requirePhone**(`doRequire?`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `doRequire?` | `boolean` |

#### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:151

___

### setAmount

▸ **setAmount**(`amount`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

Задаёт сумму платежа

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | Сумма |

#### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:100

___

### setReceiver

▸ **setReceiver**(`receiver`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

Задаёт получателя платежа

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiver` | `string` \| `number` | Получатель |

#### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:108

___

### setSuccessURL

▸ **setSuccessURL**(`url`): [`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

Задаёт URL перенаправления после успешного платежа

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | URL |

#### Returns

[`YMPaymentFromBuilder`](index.YMPaymentFromBuilder.md)

#### Defined in

dist/cjs/payment-form-builder.d.ts:116
