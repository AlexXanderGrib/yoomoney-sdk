[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / auth

# auth

## Classes

### Auth

Defined in: [src/auth.ts:51](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L51)

Реализует всё необходимое для [авторизации через YooMoney](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

#### See

[протокола](https://yoomoney.ru/docs/wallet/using-api/authorization/basics|Описание)

#### Export

Auth

#### Constructors

##### Constructor

> **new Auth**(`clientId`, `redirectUrl`, `clientSecret?`, `endpoint?`, `agent?`): [`Auth`](#auth)

Defined in: [src/auth.ts:61](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L61)

Creates an instance of Auth.

###### Parameters

###### clientId

`string`

ID приложения

###### redirectUrl

`string`

URL-перенаправления

###### clientSecret?

`string`

Секретное Слово

###### endpoint?

`string` = `"https://yoomoney.ru/oauth"`

По умолчанию `https://yoomoney.ru/oauth`

###### agent?

`any`

HTTP Agent для использования с Proxy

###### Returns

[`Auth`](#auth)

###### Memberof

Auth

#### Properties

##### agent?

> `optional` **agent**: `any`

Defined in: [src/auth.ts:66](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L66)

HTTP Agent для использования с Proxy

##### clientId

> **clientId**: `string`

Defined in: [src/auth.ts:62](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L62)

ID приложения

##### clientSecret?

> `optional` **clientSecret**: `string`

Defined in: [src/auth.ts:64](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L64)

Секретное Слово

##### endpoint

> **endpoint**: `string` = `"https://yoomoney.ru/oauth"`

Defined in: [src/auth.ts:65](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L65)

По умолчанию `https://yoomoney.ru/oauth`

##### redirectUrl

> **redirectUrl**: `string`

Defined in: [src/auth.ts:63](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L63)

URL-перенаправления

#### Methods

##### exchangeCode2Token()

> **exchangeCode2Token**(`code`): `Promise`\<`string`\>

Defined in: [src/auth.ts:123](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L123)

Обменивает временный токен на постоянный токен авторизации

###### Parameters

###### code

`string`

Временный токен (authorization code)

###### Returns

`Promise`\<`string`\>

Токен авторизации

###### Memberof

Auth

###### Throws

##### getAuthForm()

> **getAuthForm**(`scope`, `instanceName?`): `string`

Defined in: [src/auth.ts:77](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L77)

Генерирует html-форму перенаправления пользователя на авторизацию

###### Parameters

###### scope

[`AuthScope`](#authscope)[]

###### instanceName?

`string`

###### Returns

`string`

###### Memberof

Auth

##### getAuthUrl()

> **getAuthUrl**(`scope`, `instanceName?`): `string`

Defined in: [src/auth.ts:100](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L100)

Генерирует URL для перенаправления пользователя на авторизацию

###### Parameters

###### scope

[`AuthScope`](#authscope)[]

###### instanceName?

`string`

###### Returns

`string`

###### Memberof

Auth

***

### YMAuthError

Defined in: [src/auth.ts:31](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L31)

Ошибка в процессе авторизации

#### Export

YMAuthError

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new YMAuthError**(`code`): [`YMAuthError`](#ymautherror)

Defined in: [src/auth.ts:36](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L36)

###### Parameters

###### code

`string`

Код ошибки

###### Returns

[`YMAuthError`](#ymautherror)

###### Overrides

`Error.constructor`

#### Properties

##### code

> **code**: `string`

Defined in: [src/auth.ts:36](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L36)

Код ошибки

## Type Aliases

### AuthScope

> **AuthScope** = `"account-info"` \| `"operation-history"` \| `"operation-details"` \| `"incoming-transfers"` \| `"payment"` \| `"payment-shop"` \| `"payment-p2p"` \| `"money-source"` \| `string` & `object`

Defined in: [src/auth.ts:4](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L4)

## Variables

### AuthScope

> **AuthScope**: `Record`\<`string`, [`AuthScope`](#authscope)\>

Defined in: [src/auth.ts:4](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/auth.ts#L4)
