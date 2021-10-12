[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMNotificationChecker

# Class: YMNotificationChecker

Класс, который реализует [механизм проверки уведомлений от YooMoney](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)

**`see`** [Описание механизма](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)

## Table of contents

### Constructors

- [constructor](YMNotificationChecker.md#constructor)

### Methods

- [check](YMNotificationChecker.md#check)

## Constructors

### constructor

• **new YMNotificationChecker**(`secret`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secret` | `string` | Секретное слово |

#### Defined in

[src/notifications.ts:46](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/notifications.ts#L46)

## Methods

### check

▸ **check**(`notification`): [`YMNotificationDTO`](../modules.md#ymnotificationdto)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | `Record`<keyof [`YMNotificationDTO`](../modules.md#ymnotificationdto), `string`\> | Объект уведомления |

#### Returns

[`YMNotificationDTO`](../modules.md#ymnotificationdto)

#### Defined in

[src/notifications.ts:53](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/notifications.ts#L53)
