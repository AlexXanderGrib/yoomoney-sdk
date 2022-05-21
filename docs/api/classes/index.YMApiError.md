[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / YMApiError

# Class: YMApiError

[index](../modules/index.md).YMApiError

Ошибка, которую выбрасывает API при ошибочном ответе от сервера

## Hierarchy

- `Error`

  ↳ **`YMApiError`**

## Table of contents

### Constructors

- [constructor](index.YMApiError.md#constructor)

### Properties

- [code](index.YMApiError.md#code)
- [response](index.YMApiError.md#response)

## Constructors

### constructor

• **new YMApiError**(`response`)

Объект ответа

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`AnyRecord`](../modules/index._internal_.md#anyrecord) |

#### Overrides

Error.constructor

#### Defined in

dist/cjs/api.d.ts:14

## Properties

### code

• **code**: `string`

#### Defined in

dist/cjs/api.d.ts:9

___

### response

• **response**: [`AnyRecord`](../modules/index._internal_.md#anyrecord)

#### Defined in

dist/cjs/api.d.ts:8
