[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMApiVoidResponseError

# Class: YMApiVoidResponseError

Ошибка, если API возвращает пустую строку ответе
Скорее всего это связано с отсутствием прав токена

**`see`** https://github.com/AlexXanderGrib/yoomoney-sdk/issues/4

## Hierarchy

- `Error`

  ↳ **`YMApiVoidResponseError`**

## Table of contents

### Constructors

- [constructor](YMApiVoidResponseError.md#constructor)

### Properties

- [message](YMApiVoidResponseError.md#message)
- [name](YMApiVoidResponseError.md#name)
- [stack](YMApiVoidResponseError.md#stack)
- [prepareStackTrace](YMApiVoidResponseError.md#preparestacktrace)
- [stackTraceLimit](YMApiVoidResponseError.md#stacktracelimit)

### Methods

- [captureStackTrace](YMApiVoidResponseError.md#capturestacktrace)

## Constructors

### constructor

• **new YMApiVoidResponseError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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
