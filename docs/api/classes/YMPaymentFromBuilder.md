[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMPaymentFromBuilder

# Class: YMPaymentFromBuilder

Генерирует HTML формы для переводов

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`YMFormConfig`](../modules.md#ymformconfig) | Изначальные настройки формы |

#### Defined in

[src/payment-form-builder.ts:124](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L124)

## Properties

### config

• `Readonly` **config**: [`YMFormConfig`](../modules.md#ymformconfig)

___

### setComment

• `Readonly` **setComment**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:188](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L188)

___

### setFormComment

• `Readonly` **setFormComment**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:185](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L185)

___

### setLabel

• `Readonly` **setLabel**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:187](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L187)

___

### setPaymentType

• `Readonly` **setPaymentType**: (`value`: ``"AC"`` \| ``"PC"`` \| ``"MC"``) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"AC"`` \| ``"PC"`` \| ``"MC"`` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:182](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L182)

___

### setQuickPayForm

• `Readonly` **setQuickPayForm**: (`value`: ``"shop"`` \| ``"small"`` \| ``"donate"``) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"shop"`` \| ``"small"`` \| ``"donate"`` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:183](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L183)

___

### setShortDest

• `Readonly` **setShortDest**: (`value`: `undefined` \| `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:186](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L186)

___

### setTargets

• `Readonly` **setTargets**: (`value`: `string`) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:181](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L181)

___

### setType

• `Readonly` **setType**: (`value`: ``"shop"`` \| ``"small"`` \| ``"donate"``) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Type declaration

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"shop"`` \| ``"small"`` \| ``"donate"`` |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:184](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L184)

## Methods

### \_makeSetter

▸ `Private` **_makeSetter**<`T`\>(`field`): (`value`: [`YMFormConfig`](../modules.md#ymformconfig)[`T`]) => [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Генерирует стандартные сеттеры

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

▸ (`value`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`YMFormConfig`](../modules.md#ymformconfig)[`T`] |

##### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:140](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L140)

___

### buildHtml

▸ **buildHtml**(`fullPage?`): `string`

Генерирует HTML на основе заданных параметров

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fullPage` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[src/payment-form-builder.ts:235](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L235)

___

### requireAddress

▸ **requireAddress**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:205](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L205)

___

### requireEmail

▸ **requireEmail**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:215](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L215)

___

### requireFio

▸ **requireFio**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:195](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L195)

___

### requirePhone

▸ **requirePhone**(`doRequire?`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doRequire` | `boolean` | `true` |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:225](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L225)

___

### setAmount

▸ **setAmount**(`amount`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Задаёт сумму платежа

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | Сумма |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:154](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L154)

___

### setReceiver

▸ **setReceiver**(`receiver`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Задаёт получателя платежа

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiver` | `string` \| `number` | Получатель |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:165](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L165)

___

### setSuccessURL

▸ **setSuccessURL**(`url`): [`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

Задаёт URL перенаправления после успешного платежа

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | URL |

#### Returns

[`YMPaymentFromBuilder`](YMPaymentFromBuilder.md)

#### Defined in

[src/payment-form-builder.ts:176](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ca8499d/src/payment-form-builder.ts#L176)
