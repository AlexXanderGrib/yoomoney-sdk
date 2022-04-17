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
- [getAuthUrl](YMAuth.md#getauthurl)

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
| `agent?` | `any` | `undefined` | - |

#### Defined in

[src/auth.ts:49](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/auth.ts#L49)

## Properties

### agent

• `Optional` **agent**: `any`

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

[src/auth.ts:111](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/auth.ts#L111)

___

### getAuthForm

▸ **getAuthForm**(`scope`, `instanceName?`): `string`

Генерирует html-форму перенаправления пользователя на авторизацию

**`memberof`** Auth

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `AuthScope`[] |
| `instanceName?` | `string` |

#### Returns

`string`

#### Defined in

[src/auth.ts:65](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/auth.ts#L65)

___

### getAuthUrl

▸ **getAuthUrl**(`scope`, `instanceName?`): `string`

Генерирует URL для перенаправления пользователя на авторизацию

**`memberof`** Auth

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `AuthScope`[] |
| `instanceName?` | `string` |

#### Returns

`string`

#### Defined in

[src/auth.ts:88](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/1af3086/src/auth.ts#L88)
