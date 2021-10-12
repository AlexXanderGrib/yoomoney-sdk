[yoomoney-sdk](README.md) / Exports

# yoomoney-sdk

## Table of contents

### Namespaces

- [ymTypes](modules/ymTypes.md)

### Classes

- [YMApi](classes/YMApi.md)
- [YMApiError](classes/YMApiError.md)
- [YMAuth](classes/YMAuth.md)
- [YMAuthError](classes/YMAuthError.md)
- [YMNotificationChecker](classes/YMNotificationChecker.md)
- [YMNotificationError](classes/YMNotificationError.md)
- [YMPaymentFromBuilder](classes/YMPaymentFromBuilder.md)

### Type aliases

- [YMFormConfig](modules.md#ymformconfig)
- [YMNotificationDTO](modules.md#ymnotificationdto)

### Variables

- [YMFormPaymentType](modules.md#ymformpaymenttype)

## Type aliases

### YMFormConfig

Ƭ **YMFormConfig**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | Поле, в котором можно передать комментарий отправителя перевода. (До 200 символов) |
| `formComment?` | `string` | Название перевода в истории отправителя (для переводов из кошелька или с привязанной карты). Отображается в кошельке отправителя.  Удобнее всего формировать его из названий магазина и товара. Например: `Мой магазин: валенки белые` |
| `label?` | `string` | Метка, которую сайт или приложение присваивает конкретному переводу. Например, в качестве метки можно указывать код или идентификатор заказа. (До 64 символов) |
| `needAddress?` | `boolean` | Нужен адрес отправителя. |
| `needEmail?` | `boolean` | Нужна электронная почты отправителя. |
| `needFio?` | `boolean` | Нужны ФИО отправителя. |
| `needPhone?` | `boolean` | Нужен телефон отправителя. |
| `paymentType` | ``"PC"`` \| ``"AC"`` \| ``"MC"`` | Способ оплаты. Возможные значения:  `PC` — оплата из кошелька ЮMoney;  `AC` — с банковской карты;  `MC` — с баланса мобильного. |
| `quickPayForm` | ``"shop"`` \| ``"small"`` \| ``"donate"`` | Возможные значения:  `shop` — для универсальной формы;  `small` — для кнопки;  `donate` — для «благотворительной» формы. |
| `receiver` | `string` | Номер кошелька ЮMoney, на который нужно зачислять деньги отправителей. |
| `shortDest?` | `string` | Название перевода на странице подтверждения. Рекомендуем делать его таким же, как `formComment`. |
| `successURL?` | `string` | URL-адрес для редиректа после совершения перевода. |
| `sum` | `number` | Сумма перевода (спишется с отправителя). |
| `targets` | `string` | Назначение платежа. (До 150 символов) |

#### Defined in

[src/payment-form-builder.ts:12](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/payment-form-builder.ts#L12)

___

### YMNotificationDTO

Ƭ **YMNotificationDTO**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `building?` | `string` |
| `city?` | `string` |
| `codepro` | `boolean` |
| `currency` | ``"643"`` |
| `datetime` | `string` |
| `email?` | `string` |
| `fathersname?` | `string` |
| `firstname?` | `string` |
| `flat?` | `string` |
| `label` | `string` |
| `lastname?` | `string` |
| `notification_type` | ``"p2p-incoming"`` \| ``"card-incoming"`` |
| `operation_id` | `string` |
| `phone?` | `string` |
| `sender` | `string` |
| `sha1_hash` | `string` |
| `street?` | `string` |
| `suite?` | `string` |
| `test_notification` | `boolean` |
| `unaccepted` | `boolean` |
| `withdraw_amount` | `number` |
| `zip?` | `string` |

#### Defined in

[src/notifications.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/notifications.ts#L5)

## Variables

### YMFormPaymentType

• **YMFormPaymentType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FromCard` | ``"AC"`` |
| `FromMobileBalance` | ``"MC"`` |
| `FromWallet` | ``"PC"`` |

#### Defined in

[src/payment-form-builder.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5dd1b63/src/payment-form-builder.ts#L5)
