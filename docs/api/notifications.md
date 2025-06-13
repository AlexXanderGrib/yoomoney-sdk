[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / notifications

# notifications

## Classes

### NotificationChecker

Defined in: [notifications.ts:181](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L181)

Класс, который реализует [механизм проверки уведомлений от YooMoney](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)

#### See

[механизма](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security|Описание)

#### Constructors

##### Constructor

> **new NotificationChecker**(`secret`): [`NotificationChecker`](#notificationchecker)

Defined in: [notifications.ts:186](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L186)

Creates an instance of NotificationChecker.

###### Parameters

###### secret

`string`

Секретное слово

###### Returns

[`NotificationChecker`](#notificationchecker)

#### Properties

##### secret

> `private` `readonly` **secret**: `string`

Defined in: [notifications.ts:186](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L186)

Секретное слово

#### Methods

##### check()

> **check**(`notification`): [`NotificationDTO`](#notificationdto)

Defined in: [notifications.ts:195](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L195)

Проверяет полученное уведомление и возвращает типизированную версию

###### Parameters

###### notification

`Record`\<keyof [`NotificationDTO`](#notificationdto), `string`\>

Объект уведомления

###### Returns

[`NotificationDTO`](#notificationdto)

###### Throws

Если хеш уведомления не совпадает

##### ~~middleware()~~

> **middleware**(`options?`, `actualHandler?`): `RequestHandler`

Defined in: [notifications.ts:269](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L269)

Упрощает интеграцию с `express`

###### Parameters

###### options?

Параметры обработки запроса

###### memo?

`boolean`

Флаг для включения/отключения пропуска повторяющихся запросов, если один из них был успешно обработан

###### actualHandler?

`RequestHandler`\<`Record`\<`string`, `string`\>, `any`, [`NotificationDTO`](#notificationdto)\> = `...`

###### Returns

`RequestHandler`

##### Пример:
**В начале файла**
```js
const nc = new YMNotificationChecker(process.env.YM_SECRET);

```
*`Вариант 1 - Классический`*

```js
app.post('/webhook/yoomoney', nc.middleware(), (req, res) => {
 req.body // Это `NotificationDTO`
})
```

*`Вариант 2 - Если нужны подсказки типов`*

```js
app.post('/webhook/yoomoney', nc.middleware({}, (req, res) => {
 req.body // Это `NotificationDTO`
}))
```

 **Обработка ошибок**
```js
app.use((error, request, response, next) => {
 console.log(error); // [YMNotificationError: Notification hash mismatch]
})
```

###### Deprecated

**Экспресс морально устарел - вызывайте [check](#check) самостоятельно**

- Это middleware кидает ошибки, позаботьтесь об их обработке

***

### YMNotificationError

Defined in: [notifications.ts:140](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L140)

Ошибка проверки уведомления от YooMoney

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new YMNotificationError**(`message`): [`YMNotificationError`](#ymnotificationerror)

Defined in: [notifications.ts:141](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L141)

###### Parameters

###### message

`string`

###### Returns

[`YMNotificationError`](#ymnotificationerror)

###### Overrides

`Error.constructor`

## Type Aliases

### NotificationDTO

> **NotificationDTO** = `object`

Defined in: [notifications.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L5)

#### Properties

##### amount

> **amount**: `number`

Defined in: [notifications.ts:17](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L17)

Сумма, которая зачислена на счет получателя.

##### ~~building?~~

> `optional` **building**: `string`

Defined in: [notifications.ts:113](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L113)

Дом.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### ~~city?~~

> `optional` **city**: `string`

Defined in: [notifications.ts:99](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L99)

Город.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### codepro

> **codepro**: `boolean`

Defined in: [notifications.ts:39](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L39)

Признак того, что перевод защищен кодом протекции. В ЮMoney больше нельзя делать переводы с кодом протекции, поэтому параметр всегда имеет значение `false`.

##### currency

> **currency**: `"643"`

Defined in: [notifications.ts:23](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L23)

Код валюты — всегда `643` (рубль РФ согласно ISO 4217).

##### datetime

> **datetime**: `string`

Defined in: [notifications.ts:26](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L26)

Дата и время совершения перевода.

##### ~~email?~~

> `optional` **email**: `string`

Defined in: [notifications.ts:84](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L84)

Адрес электронной почты отправителя перевода. Если почта не
запрашивалась, параметр содержит пустую строку.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### ~~fathersname?~~

> `optional` **fathersname**: `string`

Defined in: [notifications.ts:76](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L76)

Отчество.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### ~~firstname?~~

> `optional` **firstname**: `string`

Defined in: [notifications.ts:69](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L69)

Имя.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### ~~flat?~~

> `optional` **flat**: `string`

Defined in: [notifications.ts:127](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L127)

Квартира.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### label

> **label**: `string`

Defined in: [notifications.ts:44](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L44)

Метка платежа. Если ее нет, параметр содержит пустую строку.

##### ~~lastname?~~

> `optional` **lastname**: `string`

Defined in: [notifications.ts:62](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L62)

Фамилия.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### notification\_type

> **notification\_type**: `"p2p-incoming"` \| `"card-incoming"`

Defined in: [notifications.ts:11](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L11)

Для переводов из кошелька — `p2p-incoming`.

Для переводов с произвольной карты — `card-incoming`.

##### operation\_id

> **operation\_id**: `string`

Defined in: [notifications.ts:14](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L14)

Идентификатор операции в истории счета получателя.

##### ~~phone?~~

> `optional` **phone**: `string`

Defined in: [notifications.ts:92](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L92)

Телефон отправителя перевода. Если телефон не запрашивался,
параметр содержит пустую строку.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### sender

> **sender**: `string`

Defined in: [notifications.ts:34](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L34)

Для переводов из кошелька — номер кошелька отправителя.

Для переводов с произвольной карты — параметр содержит пустую
строку.

##### sha1\_hash

> **sha1\_hash**: `string`

Defined in: [notifications.ts:47](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L47)

SHA-1 hash параметров уведомления.

##### ~~street?~~

> `optional` **street**: `string`

Defined in: [notifications.ts:106](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L106)

Улица.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### ~~suite?~~

> `optional` **suite**: `string`

Defined in: [notifications.ts:120](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L120)

Корпус.

###### Deprecated

**Больше не предоставляется ЮMoney**

##### test\_notification

> **test\_notification**: `boolean`

Defined in: [notifications.ts:49](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L49)

##### unaccepted

> **unaccepted**: `boolean`

Defined in: [notifications.ts:55](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L55)

Перевод еще не зачислен. Получателю нужно освободить место
в кошельке или использовать код протекции (если `codepro=true`).

##### withdraw\_amount

> **withdraw\_amount**: `number`

Defined in: [notifications.ts:20](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L20)

Сумма, которая списана со счета отправителя.

##### ~~zip?~~

> `optional` **zip**: `string`

Defined in: [notifications.ts:134](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/notifications.ts#L134)

Индекс.

###### Deprecated

**Больше не предоставляется ЮMoney**
