[yoomoney-sdk](../README.md) / [Exports](../modules.md) / [vendor](../modules/vendor.md) / MultiProcessor

# Class: MultiProcessor<T\>

[vendor](../modules/vendor.md).MultiProcessor

**`export`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

## Table of contents

### Constructors

- [constructor](vendor.MultiProcessor.md#constructor)

### Methods

- [process](vendor.MultiProcessor.md#process)

## Constructors

### constructor

• **new MultiProcessor**<`T`\>(`_resolveSecret`)

Creates an instance of MultiProcessor.

**`memberof`** MultiProcessor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_resolveSecret` | (`label`: `string`) => `Promise`<`T`\> |

#### Defined in

src/vendor.ts:16

## Methods

### process

▸ **process**(`notification`): `Promise`<[nf: YMNotificationDTO, receiver: T]\>

**`memberof`** MultiProcessor

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | `Record`<keyof [`YMNotificationDTO`](../modules.md#ymnotificationdto), `string`\> |

#### Returns

`Promise`<[nf: YMNotificationDTO, receiver: T]\>

#### Defined in

src/vendor.ts:25
