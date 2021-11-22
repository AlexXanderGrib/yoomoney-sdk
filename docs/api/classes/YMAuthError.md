[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMAuthError

# Class: YMAuthError

Ошибка в процессе авторизации

## Hierarchy

- `Error`

  ↳ **`YMAuthError`**

## Table of contents

### Constructors

- [constructor](YMAuthError.md#constructor)

### Properties

- [code](YMAuthError.md#code)
- [message](YMAuthError.md#message)
- [name](YMAuthError.md#name)
- [stack](YMAuthError.md#stack)
- [prepareStackTrace](YMAuthError.md#preparestacktrace)
- [stackTraceLimit](YMAuthError.md#stacktracelimit)

### Methods

- [captureStackTrace](YMAuthError.md#capturestacktrace)

## Constructors

### constructor

• **new YMAuthError**(`code`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Код ошибки |

#### Overrides

Error.constructor

#### Defined in

[src/auth.ts:22](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/e2ac32a/src/auth.ts#L22)

## Properties

### code

• **code**: `string`

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
