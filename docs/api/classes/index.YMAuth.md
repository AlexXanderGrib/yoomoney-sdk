[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / YMAuth

# Class: YMAuth

[index](../modules/index.md).YMAuth

Реализует всё необходимое для [авторизации через YooMoney](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

**`see`** [Описание протокола](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

**`export`**

## Table of contents

### Constructors

- [constructor](index.YMAuth.md#constructor)

### Properties

- [agent](index.YMAuth.md#agent)
- [clientId](index.YMAuth.md#clientid)
- [clientSecret](index.YMAuth.md#clientsecret)
- [endpoint](index.YMAuth.md#endpoint)
- [redirectUrl](index.YMAuth.md#redirecturl)

### Methods

- [exchangeCode2Token](index.YMAuth.md#exchangecode2token)
- [getAuthForm](index.YMAuth.md#getauthform)
- [getAuthUrl](index.YMAuth.md#getauthurl)

## Constructors

### constructor

• **new YMAuth**(`clientId`, `redirectUrl`, `clientSecret?`, `endpoint?`, `agent?`)

Creates an instance of Auth.

**`memberof`** Auth

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientId` | `string` | ID приложения |
| `redirectUrl` | `string` | URL-перенаправления |
| `clientSecret?` | `string` | - |
| `endpoint?` | `string` | - |
| `agent?` | `any` | - |

#### Defined in

dist/cjs/auth.d.ts:38

## Properties

### agent

• `Optional` **agent**: `any`

#### Defined in

dist/cjs/auth.d.ts:28

___

### clientId

• **clientId**: `string`

#### Defined in

dist/cjs/auth.d.ts:24

___

### clientSecret

• `Optional` **clientSecret**: `string`

#### Defined in

dist/cjs/auth.d.ts:26

___

### endpoint

• **endpoint**: `string`

#### Defined in

dist/cjs/auth.d.ts:27

___

### redirectUrl

• **redirectUrl**: `string`

#### Defined in

dist/cjs/auth.d.ts:25

## Methods

### exchangeCode2Token

▸ **exchangeCode2Token**(`code`): `Promise`<`string`\>

Обменивает временный токен на постоянный токен авторизации

**`memberof`** Auth

**`throws`** {YMAuthError}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Временный токен (authorization code) |

#### Returns

`Promise`<`string`\>

Токен авторизации

#### Defined in

dist/cjs/auth.d.ts:65

___

### getAuthForm

▸ **getAuthForm**(`scope`, `instanceName?`): `string`

Генерирует html-форму перенаправления пользователя на авторизацию

**`memberof`** Auth

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`AuthScope`](../modules/index.md#authscope-1)[] |
| `instanceName?` | `string` |

#### Returns

`string`

#### Defined in

dist/cjs/auth.d.ts:47

___

### getAuthUrl

▸ **getAuthUrl**(`scope`, `instanceName?`): `string`

Генерирует URL для перенаправления пользователя на авторизацию

**`memberof`** Auth

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`AuthScope`](../modules/index.md#authscope-1)[] |
| `instanceName?` | `string` |

#### Returns

`string`

#### Defined in

dist/cjs/auth.d.ts:56
