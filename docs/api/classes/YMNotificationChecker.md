[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMNotificationChecker

# Class: YMNotificationChecker

Класс, который реализует [механизм проверки уведомлений от YooMoney](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)

**`see`** [Описание механизма](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)

**`export`**

## Table of contents

### Constructors

- [constructor](YMNotificationChecker.md#constructor)

### Methods

- [check](YMNotificationChecker.md#check)
- [middleware](YMNotificationChecker.md#middleware)

## Constructors

### constructor

• **new YMNotificationChecker**(`secret`)

Creates an instance of NotificationChecker.

**`memberof`** NotificationChecker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secret` | `string` | Секретное слово |

#### Defined in

[src/notifications.ts:141](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/notifications.ts#L141)

## Methods

### check

▸ **check**(`notification`): [`YMNotificationDTO`](../modules.md#ymnotificationdto)

Проверяет полученное уведомление и возвращает типизированную версию

**`throws`** {YMNotificationError} Если хеш уведомления не совпадает

**`memberof`** NotificationChecker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | `Record`<keyof [`YMNotificationDTO`](../modules.md#ymnotificationdto), `string`\> | Объект уведомления |

#### Returns

[`YMNotificationDTO`](../modules.md#ymnotificationdto)

#### Defined in

[src/notifications.ts:151](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/notifications.ts#L151)

___

### middleware

▸ **middleware**(`options?`, `actualHandler?`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

#### Это middleware кидает ошибки, позаботьтесь об их обработке

**`memberof`** NotificationChecker

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.memo?` | `boolean` |
| `actualHandler` | `RequestHandler`<`Record`<`string`, `string`\>, `any`, [`YMNotificationDTO`](../modules.md#ymnotificationdto), `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Returns

`RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

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

#### Defined in

[src/notifications.ts:226](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/notifications.ts#L226)
