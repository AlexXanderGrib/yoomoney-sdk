[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / auth

# auth

## Classes

### Auth

Defined in: [auth.ts:50](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L50)

Реализует всё необходимое для [авторизации через YooMoney](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)

#### See

[протокола](https://yoomoney.ru/docs/wallet/using-api/authorization/basics|Описание)
 Auth

#### Constructors

##### Constructor

> **new Auth**(`clientId`, `redirectUrl`, `clientSecret?`, `endpoint?`, `agent?`): [`Auth`](#auth)

Defined in: [auth.ts:59](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L59)

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

#### Properties

##### agent?

> `optional` **agent**: `any`

Defined in: [auth.ts:64](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L64)

HTTP Agent для использования с Proxy

##### clientId

> **clientId**: `string`

Defined in: [auth.ts:60](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L60)

ID приложения

##### clientSecret?

> `optional` **clientSecret**: `string`

Defined in: [auth.ts:62](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L62)

Секретное Слово

##### endpoint

> **endpoint**: `string` = `"https://yoomoney.ru/oauth"`

Defined in: [auth.ts:63](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L63)

По умолчанию `https://yoomoney.ru/oauth`

##### redirectUrl

> **redirectUrl**: `string`

Defined in: [auth.ts:61](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L61)

URL-перенаправления

#### Methods

##### exchangeCode2Token()

> **exchangeCode2Token**(`code`): `Promise`\<`string`\>

Defined in: [auth.ts:118](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L118)

Обменивает временный токен на постоянный токен авторизации

###### Parameters

###### code

`string`

Временный токен (authorization code)

###### Returns

`Promise`\<`string`\>

Токен авторизации

###### Throws

##### getAuthForm()

> **getAuthForm**(`scope`, `instanceName?`): `string`

Defined in: [auth.ts:74](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L74)

Генерирует html-форму перенаправления пользователя на авторизацию

###### Parameters

###### scope

[`AuthScope`](#authscope)[]

###### instanceName?

`string`

###### Returns

`string`

##### getAuthUrl()

> **getAuthUrl**(`scope`, `instanceName?`): `string`

Defined in: [auth.ts:96](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L96)

Генерирует URL для перенаправления пользователя на авторизацию

###### Parameters

###### scope

[`AuthScope`](#authscope)[]

###### instanceName?

`string`

###### Returns

`string`

***

### YMAuthError

Defined in: [auth.ts:30](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L30)

Ошибка в процессе авторизации
 YMAuthError

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new YMAuthError**(`code`): [`YMAuthError`](#ymautherror)

Defined in: [auth.ts:35](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L35)

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

Defined in: [auth.ts:35](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L35)

Код ошибки

## Type Aliases

### AuthScope

> **AuthScope** = `"account-info"` \| `"operation-history"` \| `"operation-details"` \| `"incoming-transfers"` \| `"payment"` \| `"payment-shop"` \| `"payment-p2p"` \| `"money-source"` \| `string` & `object`

Defined in: [auth.ts:4](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L4)

## Variables

### AuthScope

> **AuthScope**: `Record`\<`string`, [`AuthScope`](#authscope)\>

Defined in: [auth.ts:4](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/auth.ts#L4)
