[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / payment-form-builder

# payment-form-builder

## Classes

### PaymentFormBuilder

Defined in: [payment-form-builder.ts:161](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L161)

Генерирует HTML формы для переводов

#### Export

PaymentFormBuilder

#### Constructors

##### Constructor

> **new PaymentFormBuilder**(`config?`): [`PaymentFormBuilder`](#paymentformbuilder)

Defined in: [payment-form-builder.ts:174](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L174)

Creates an instance of PaymentFormBuilder.

###### Parameters

###### config?

[`FormConfig`](#formconfig) = `...`

Изначальные настройки формы

###### Returns

[`PaymentFormBuilder`](#paymentformbuilder)

###### Memberof

PaymentFormBuilder

#### Properties

##### config

> `readonly` **config**: [`FormConfig`](#formconfig)

Defined in: [payment-form-builder.ts:175](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L175)

Изначальные настройки формы

##### setComment()

> `readonly` **setComment**: (`value`) => `this`

Defined in: [payment-form-builder.ts:243](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L243)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setFormComment()

> `readonly` **setFormComment**: (`value`) => `this`

Defined in: [payment-form-builder.ts:240](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L240)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setLabel()

> `readonly` **setLabel**: (`value`) => `this`

Defined in: [payment-form-builder.ts:242](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L242)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setPaymentType()

> `readonly` **setPaymentType**: (`value`) => `this`

Defined in: [payment-form-builder.ts:237](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L237)

###### Parameters

###### value

`"AC"` | `"MC"` | `"PC"`

###### Returns

`this`

##### setQuickPayForm()

> `readonly` **setQuickPayForm**: (`value`) => `this`

Defined in: [payment-form-builder.ts:238](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L238)

###### Parameters

###### value

`"shop"` | `"small"` | `"donate"` | `"button"`

###### Returns

`this`

##### setShortDest()

> `readonly` **setShortDest**: (`value`) => `this`

Defined in: [payment-form-builder.ts:241](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L241)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setTargets()

> `readonly` **setTargets**: (`value`) => `this`

Defined in: [payment-form-builder.ts:236](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L236)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setType()

> `readonly` **setType**: (`value`) => `this`

Defined in: [payment-form-builder.ts:239](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L239)

###### Parameters

###### value

`"shop"` | `"small"` | `"donate"` | `"button"`

###### Returns

`this`

#### Methods

##### \_makeSetter()

> `private` **\_makeSetter**\<`T`\>(`field`): (`value`) => `this`

Defined in: [payment-form-builder.ts:191](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L191)

Генерирует стандартные сеттеры

###### Type Parameters

###### T

`T` *extends* keyof [`FormConfig`](#formconfig)

###### Parameters

###### field

`T`

###### Returns

> (`value`): `this`

###### Parameters

###### value

[`FormConfig`](#formconfig)\[`T`\]

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### buildHtml()

> **buildHtml**(`fullPage?`): `string`

Defined in: [payment-form-builder.ts:294](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L294)

Генерирует HTML на основе заданных параметров

###### Parameters

###### fullPage?

`boolean` = `false`

###### Returns

`string`

###### Memberof

PaymentFromBuilder

##### requireAddress()

> **requireAddress**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:262](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L262)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### requireEmail()

> **requireEmail**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:273](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L273)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### requireFio()

> **requireFio**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:251](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L251)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### requirePhone()

> **requirePhone**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:283](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L283)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### setAmount()

> **setAmount**(`amount`): `this`

Defined in: [payment-form-builder.ts:204](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L204)

Задаёт сумму платежа

###### Parameters

###### amount

Сумма

`string` | `number`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### setReceiver()

> **setReceiver**(`receiver`): `this`

Defined in: [payment-form-builder.ts:219](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L219)

Задаёт получателя платежа

###### Parameters

###### receiver

Получатель

`string` | `number`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### setSuccessURL()

> **setSuccessURL**(`url`): `this`

Defined in: [payment-form-builder.ts:231](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L231)

Задаёт URL перенаправления после успешного платежа

###### Parameters

###### url

URL

`string` | `URL`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

## Type Aliases

### FormConfig

> **FormConfig** = `object`

Defined in: [payment-form-builder.ts:10](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L10)

#### Properties

##### ~~comment?~~

> `optional` **comment**: `string`

Defined in: [payment-form-builder.ts:74](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L74)

Поле, в котором можно передать комментарий отправителя перевода. (До 200 символов)

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~formComment?~~

> `optional` **formComment**: `string`

Defined in: [payment-form-builder.ts:56](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L56)

Название перевода в истории отправителя (для переводов из кошелька или с привязанной карты). Отображается в кошельке отправителя.

Удобнее всего формировать его из названий магазина и товара. Например: `Мой магазин: валенки белые`

###### Deprecated

**Поле игнорируется YooMoney**

##### label?

> `optional` **label**: `string`

Defined in: [payment-form-builder.ts:66](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L66)

Метка, которую сайт или приложение присваивает конкретному переводу. Например, в качестве метки можно указывать код или идентификатор заказа. (До 64 символов)

##### ~~needAddress?~~

> `optional` **needAddress**: `boolean`

Defined in: [payment-form-builder.ts:109](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L109)

Нужен адрес отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~needEmail?~~

> `optional` **needEmail**: `boolean`

Defined in: [payment-form-builder.ts:93](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L93)

Нужна электронная почты отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~needFio?~~

> `optional` **needFio**: `boolean`

Defined in: [payment-form-builder.ts:85](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L85)

Нужны ФИО отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~needPhone?~~

> `optional` **needPhone**: `boolean`

Defined in: [payment-form-builder.ts:101](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L101)

Нужен телефон отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### paymentType

> **paymentType**: `"PC"` \| `"AC"` \| `"MC"`

Defined in: [payment-form-builder.ts:42](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L42)

Способ оплаты. Возможные значения:

`PC` — оплата из кошелька ЮMoney;

`AC` — с банковской карты;

`MC` — с баланса мобильного. (больше недоступна)

##### quickPayForm

> **quickPayForm**: `"shop"` \| `"small"` \| `"donate"` \| `"button"`

Defined in: [payment-form-builder.ts:24](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L24)

Возможные значения:

`button` — единственное валидной значение;

Остальные сохранены для обратной совместимости

##### receiver

> **receiver**: `string`

Defined in: [payment-form-builder.ts:14](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L14)

Номер кошелька ЮMoney, на который нужно зачислять деньги отправителей.

##### ~~shortDest?~~

> `optional` **shortDest**: `string`

Defined in: [payment-form-builder.ts:64](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L64)

Название перевода на странице подтверждения. Рекомендуем делать его таким же, как `formComment`.

###### Deprecated

**Поле игнорируется YooMoney**

##### successURL?

> `optional` **successURL**: `string`

Defined in: [payment-form-builder.ts:77](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L77)

URL-адрес для редиректа после совершения перевода.

##### sum

> **sum**: `number`

Defined in: [payment-form-builder.ts:47](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L47)

Сумма перевода (спишется с отправителя).

##### ~~targets?~~

> `optional` **targets**: `string`

Defined in: [payment-form-builder.ts:31](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L31)

Назначение платежа. (До 150 символов)

###### Deprecated

**Поле игнорируется YooMoney**

## Variables

### PaymentType

> `const` **PaymentType**: `object`

Defined in: [payment-form-builder.ts:4](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/payment-form-builder.ts#L4)

#### Type declaration

##### FromCard

> `readonly` **FromCard**: `"AC"` = `"AC"`

##### FromMobileBalance

> `readonly` **FromMobileBalance**: `"MC"` = `"MC"`

##### FromWallet

> `readonly` **FromWallet**: `"PC"` = `"PC"`
