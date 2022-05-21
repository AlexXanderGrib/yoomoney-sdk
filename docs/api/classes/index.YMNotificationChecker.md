[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / YMNotificationChecker

# Class: YMNotificationChecker

[index](../modules/index.md).YMNotificationChecker

Класс, который реализует [механизм проверки уведомлений от YooMoney](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)

**`see`** [Описание механизма](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)

**`export`**

## Table of contents

### Constructors

- [constructor](index.YMNotificationChecker.md#constructor)

### Properties

- [secret](index.YMNotificationChecker.md#secret)

### Methods

- [check](index.YMNotificationChecker.md#check)
- [middleware](index.YMNotificationChecker.md#middleware)

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

dist/cjs/notifications.d.ts:92

## Properties

### secret

• `Private` `Readonly` **secret**: `any`

#### Defined in

dist/cjs/notifications.d.ts:86

## Methods

### check

▸ **check**(`notification`): [`YMNotificationDTO`](../modules/index.md#ymnotificationdto)

Проверяет полученное уведомление и возвращает типизированную версию

**`throws`** {YMNotificationError} Если хеш уведомления не совпадает

**`memberof`** NotificationChecker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | `Record`<keyof [`YMNotificationDTO`](../modules/index.md#ymnotificationdto), `string`\> | Объект уведомления |

#### Returns

[`YMNotificationDTO`](../modules/index.md#ymnotificationdto)

#### Defined in

dist/cjs/notifications.d.ts:101

___

### middleware

▸ **middleware**(`options?`, `actualHandler?`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

#### Это middleware кидает ошибки, позаботьтесь об их обработке

**`memberof`** NotificationChecker

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.memo?` | `boolean` |
| `actualHandler?` | `RequestHandler`<`Record`<`string`, `string`\>, `any`, [`YMNotificationDTO`](../modules/index.md#ymnotificationdto), `ParsedQs`, `Record`<`string`, `any`\>\> |

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

dist/cjs/notifications.d.ts:143
