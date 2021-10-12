[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMAuth

# Class: YMAuth

Реализует всё необходимое для [авторизации через YooMoney](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

**`see`** [Описание протокола](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `clientId` | `string` | `undefined` | ID приложения |
| `redirectUrl` | `string` | `undefined` | URL-перенаправления |
| `clientSecret?` | `string` | `undefined` | Секретное Слово |
| `endpoint` | `string` | `"https://yoomoney.ru/oauth"` | По умолчанию `https://yoomoney.ru/oauth` |
| `agent?` | `Agent` \| (`parsedUrl`: `URL`) => `Agent` | `undefined` | - |

#### Defined in

[src/auth.ts:40](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/auth.ts#L40)

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Временный токен (authorization code), подлежащий обмену на постоянный токен авторизации |

#### Returns

`Promise`<`string`\>

Токен авторизации

#### Defined in

[src/auth.ts:75](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/auth.ts#L75)

___

### getAuthForm

▸ **getAuthForm**(`scopes`, `instanceName?`): `string`

Генерирует html-форму перенаправления пользователя на авторизацию

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | `AuthScope`[] |
| `instanceName?` | `string` |

#### Returns

`string`

#### Defined in

[src/auth.ts:55](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/auth.ts#L55)
