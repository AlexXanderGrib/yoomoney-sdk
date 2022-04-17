[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMPaymentFromBuilder

# Class: YMPaymentFromBuilder

Генерирует HTML формы для переводов

**`export`**

## Table of contents

### Constructors

- [constructor](YMPaymentFromBuilder.md#constructor)

### Properties

- [config](YMPaymentFromBuilder.md#config)
- [setComment](YMPaymentFromBuilder.md#setcomment)
- [setFormComment](YMPaymentFromBuilder.md#setformcomment)
- [setLabel](YMPaymentFromBuilder.md#setlabel)
- [setPaymentType](YMPaymentFromBuilder.md#setpaymenttype)
- [setQuickPayForm](YMPaymentFromBuilder.md#setquickpayform)
- [setShortDest](YMPaymentFromBuilder.md#setshortdest)
- [setTargets](YMPaymentFromBuilder.md#settargets)
- [setType](YMPaymentFromBuilder.md#settype)

### Methods

- [\_makeSetter](YMPaymentFromBuilder.md#_makesetter)
- [buildHtml](YMPaymentFromBuilder.md#buildhtml)
- [requireAddress](YMPaymentFromBuilder.md#requireaddress)
- [requireEmail](YMPaymentFromBuilder.md#requireemail)
- [requireFio](YMPaymentFromBuilder.md#requirefio)
- [requirePhone](YMPaymentFromBuilder.md#requirephone)
- [setAmount](YMPaymentFromBuilder.md#setamount)
- [setReceiver](YMPaymentFromBuilder.md#setreceiver)
- [setSuccessURL](YMPaymentFromBuilder.md#setsuccessurl)

## Constructors

### constructor

• **new YMPaymentFromBuilder**(`config?`)

Creates an instance of PaymentFormBuilder.

**`memberof`** PaymentFormBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`YMFormConfig`](../modules.md#ymformconfig) |

#### Defined in

[src/payment-form-builder.ts:133](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L133)

## Properties

### config

• `Readonly` **config**: [`YMFormConfig`](../modules.md#ymformconfig)

___

### setComment

• `Readonly` **setComment**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:200](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L200)

___

### setFormComment

• `Readonly` **setFormComment**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:197](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L197)

___

### setLabel

• `Readonly` **setLabel**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:199](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L199)

___

### setPaymentType

• `Readonly` **setPaymentType**: (`value`: ``"AC"`` \| ``"PC"`` \| ``"MC"``) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"AC"`` \| ``"PC"`` \| ``"MC"`` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:194](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L194)

___

### setQuickPayForm

• `Readonly` **setQuickPayForm**: (`value`: ``"shop"`` \| ``"small"`` \| ``"donate"``) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"shop"`` \| ``"small"`` \| ``"donate"`` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:195](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L195)

___

### setShortDest

• `Readonly` **setShortDest**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:198](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L198)

___

### setTargets

• `Readonly` **setTargets**: (`value`: `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:193](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L193)

___

### setType

• `Readonly` **setType**: (`value`: ``"shop"`` \| ``"small"`` \| ``"donate"``) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"shop"`` \| ``"small"`` \| ``"donate"`` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:196](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L196)

## Methods

### \_makeSetter

▸ `Private` **_makeSetter**<`T`\>(`field`): (`value`: [`YMFormConfig`](../modules.md#ymformconfig)[`T`]) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`YMFormConfig`](../modules.md#ymformconfig) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `T` |

#### Returns

`fn`

▸ `Private` (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

**`memberof`** PaymentFromBuilder

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`YMFormConfig`](../modules.md#ymformconfig)[`T`] |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:151](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L151)

___

### buildHtml

▸ **buildHtml**(`fullPage?`): `string`

Генерирует HTML на основе заданных параметров

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fullPage` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[src/payment-form-builder.ts:251](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L251)

___

### requireAddress

▸ **requireAddress**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:219](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L219)

___

### requireEmail

▸ **requireEmail**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:230](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L230)

___

### requireFio

▸ **requireFio**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:208](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L208)

___

### requirePhone

▸ **requirePhone**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:240](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L240)

___

### setAmount

▸ **setAmount**(`amount`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Задаёт сумму платежа

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | Сумма |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:164](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L164)

___

### setReceiver

▸ **setReceiver**(`receiver`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Задаёт получателя платежа

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiver` | `string` \| `number` | Получатель |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:176](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L176)

___

### setSuccessURL

▸ **setSuccessURL**(`url`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Задаёт URL перенаправления после успешного платежа

**`memberof`** PaymentFromBuilder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | URL |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:188](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/payment-form-builder.ts#L188)
