[yoomoney-sdk](README.md) / Exports

# yoomoney-sdk

## Table of contents

### References

- [API](modules.md#api)
- [Auth](modules.md#auth)
- [FormConfig](modules.md#formconfig)
- [FormPaymentType](modules.md#formpaymenttype)
- [NotificationChecker](modules.md#notificationchecker)
- [NotificationDTO](modules.md#notificationdto)
- [PaymentFormBuilder](modules.md#paymentformbuilder)
- [PaymentType](modules.md#paymenttype)
- [YMPaymentFormBuilder](modules.md#ympaymentformbuilder)

### Namespaces

- [ymTypes](modules/ymTypes.md)

### Classes

- [YMApi](classes/YMApi.md)
- [YMApiError](classes/YMApiError.md)
- [YMApiVoidResponseError](classes/YMApiVoidResponseError.md)
- [YMAuth](classes/YMAuth.md)
- [YMAuthError](classes/YMAuthError.md)
- [YMNotificationChecker](classes/YMNotificationChecker.md)
- [YMNotificationError](classes/YMNotificationError.md)
- [YMPaymentFromBuilder](classes/YMPaymentFromBuilder.md)

### Type aliases

- [AuthScope](modules.md#authscope)
- [YMFormConfig](modules.md#ymformconfig)
- [YMNotificationDTO](modules.md#ymnotificationdto)

### Variables

- [AuthScope](modules.md#authscope)
- [YMFormPaymentType](modules.md#ymformpaymenttype)

## References

### API

Renames and re-exports [YMApi](classes/YMApi.md)

___

### Auth

Renames and re-exports [YMAuth](classes/YMAuth.md)

___

### FormConfig

Renames and re-exports [YMFormConfig](modules.md#ymformconfig)

___

### FormPaymentType

Renames and re-exports [YMFormPaymentType](modules.md#ymformpaymenttype)

___

### NotificationChecker

Renames and re-exports [YMNotificationChecker](classes/YMNotificationChecker.md)

___

### NotificationDTO

Renames and re-exports [YMNotificationDTO](modules.md#ymnotificationdto)

___

### PaymentFormBuilder

Renames and re-exports [YMPaymentFromBuilder](classes/YMPaymentFromBuilder.md)

___

### PaymentType

Renames and re-exports [YMFormPaymentType](modules.md#ymformpaymenttype)

___

### YMPaymentFormBuilder

Renames and re-exports [YMPaymentFromBuilder](classes/YMPaymentFromBuilder.md)

## Type aliases

### AuthScope

Ƭ **AuthScope**: ``"account-info"`` \| ``"operation-history"`` \| ``"operation-details"`` \| ``"incoming-transfers"`` \| ``"payment"`` \| ``"payment-shop"`` \| ``"payment-p2p"`` \| ``"money-source"``

#### Defined in

[src/auth.ts:4](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/auth.ts#L4)

___

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

[src/payment-form-builder.ts:11](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/payment-form-builder.ts#L11)

___

### YMNotificationDTO

Ƭ **YMNotificationDTO**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма, которая зачислена на счет получателя. |
| `building?` | `string` | Дом. |
| `city?` | `string` | Город. |
| `codepro` | `boolean` | Для переводов из кошелька — перевод защищен кодом протекции.  Для переводов с произвольной карты — всегда `false`. |
| `currency` | ``"643"`` | Код валюты — всегда `643` (рубль РФ согласно ISO 4217). |
| `datetime` | `string` | Дата и время совершения перевода. |
| `email?` | `string` | Адрес электронной почты отправителя перевода. Если почта не запрашивалась, параметр содержит пустую строку. |
| `fathersname?` | `string` | Отчество. |
| `firstname?` | `string` | Имя. |
| `flat?` | `string` | Квартира. |
| `label` | `string` | Метка платежа. Если ее нет, параметр содержит пустую строку. |
| `lastname?` | `string` | Фамилия. |
| `notification_type` | ``"p2p-incoming"`` \| ``"card-incoming"`` | Для переводов из кошелька — `p2p-incoming`.  Для переводов с произвольной карты — `card-incoming`. |
| `operation_id` | `string` | Идентификатор операции в истории счета получателя. |
| `phone?` | `string` | Телефон отправителя перевода. Если телефон не запрашивался, параметр содержит пустую строку. |
| `sender` | `string` | Для переводов из кошелька — номер кошелька отправителя.  Для переводов с произвольной карты — параметр содержит пустую строку. |
| `sha1_hash` | `string` | SHA-1 hash параметров уведомления. |
| `street?` | `string` | Улица. |
| `suite?` | `string` | Корпус. |
| `test_notification` | `boolean` | - |
| `unaccepted` | `boolean` | Перевод еще не зачислен. Получателю нужно освободить место в кошельке или использовать код протекции (если `codepro=true`). |
| `withdraw_amount` | `number` | Сумма, которая списана со счета отправителя. |
| `zip?` | `string` | Индекс. |

#### Defined in

[src/notifications.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/notifications.ts#L5)

## Variables

### AuthScope

• **AuthScope**: `Record`<`string`, [`AuthScope`](modules.md#authscope)\>

#### Defined in

[src/auth.ts:14](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/auth.ts#L14)

___

### YMFormPaymentType

• **YMFormPaymentType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FromCard` | ``"AC"`` |
| `FromMobileBalance` | ``"MC"`` |
| `FromWallet` | ``"PC"`` |

#### Defined in

[src/payment-form-builder.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3b33398/src/payment-form-builder.ts#L5)
