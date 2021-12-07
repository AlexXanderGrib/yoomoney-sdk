[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMAuth

# Class: YMAuth

Реализует всё необходимое для [авторизации через YooMoney](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

**`see`** [Описание протокола](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

**`export`**

## Table of contents

### Constructors

- [constructor](YMAuth.md#constructor)

### Properties

- [agent](YMAuth.md#agent)
- [clientId](YMAuth.md#clientid)
- [clientSecret](YMAuth.md#clientsecret)
- [endpoint](YMAuth.md#endpoint)
- [redirectUrl](YMAuth.md#redirecturl)

### Methods

- [exchangeCode2Token](YMAuth.md#exchangecode2token)
- [getAuthForm](YMAuth.md#getauthform)

## Constructors

### constructor

• **new YMAuth**(`clientId`, `redirectUrl`, `clientSecret?`, `endpoint?`, `agent?`)

Creates an instance of Auth.

**`memberof`** Auth

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `clientId` | `string` | `undefined` | ID приложения |
| `redirectUrl` | `string` | `undefined` | URL-перенаправления |
| `clientSecret?` | `string` | `undefined` | - |
| `endpoint` | `string` | `"https://yoomoney.ru/oauth"` | - |
| `agent?` | `Agent` \| (`parsedUrl`: `URL`) => `Agent` | `undefined` | - |

#### Defined in

[src/auth.ts:46](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/auth.ts#L46)

## Properties

### agent

• `Optional` **agent**: `Agent` \| (`parsedUrl`: `URL`) => `Agent`

___

### clientId

• **clientId**: `string`

___

### clientSecret

• `Optional` **clientSecret**: `string`

___

### endpoint

• **endpoint**: `string` = `"https://yoomoney.ru/oauth"`

___

### redirectUrl

• **redirectUrl**: `string`

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

[src/auth.ts:85](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/auth.ts#L85)

___

### getAuthForm

▸ **getAuthForm**(`scopes`, `instanceName?`): `string`

Генерирует html-форму перенаправления пользователя на авторизацию

**`memberof`** Auth

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | `AuthScope`[] |
| `instanceName?` | `string` |

#### Returns

`string`

#### Defined in

[src/auth.ts:62](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/auth.ts#L62)
