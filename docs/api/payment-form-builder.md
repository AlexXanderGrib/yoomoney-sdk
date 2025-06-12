[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / payment-form-builder

# payment-form-builder

## Classes

### PaymentFormBuilder

Defined in: [src/payment-form-builder.ts:162](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L162)

Генерирует HTML формы для переводов

#### Export

PaymentFormBuilder

#### Constructors

##### Constructor

> **new PaymentFormBuilder**(`config?`): [`PaymentFormBuilder`](#paymentformbuilder)

Defined in: [src/payment-form-builder.ts:175](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L175)

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

Defined in: [src/payment-form-builder.ts:176](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L176)

Изначальные настройки формы

##### setComment()

> `readonly` **setComment**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:244](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L244)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setFormComment()

> `readonly` **setFormComment**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:241](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L241)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setLabel()

> `readonly` **setLabel**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:243](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L243)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setPaymentType()

> `readonly` **setPaymentType**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:238](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L238)

###### Parameters

###### value

`"AC"` | `"MC"` | `"PC"`

###### Returns

`this`

##### setQuickPayForm()

> `readonly` **setQuickPayForm**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:239](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L239)

###### Parameters

###### value

`"shop"` | `"small"` | `"donate"` | `"button"`

###### Returns

`this`

##### setShortDest()

> `readonly` **setShortDest**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:242](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L242)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setTargets()

> `readonly` **setTargets**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:237](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L237)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setType()

> `readonly` **setType**: (`value`) => `this`

Defined in: [src/payment-form-builder.ts:240](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L240)

###### Parameters

###### value

`"shop"` | `"small"` | `"donate"` | `"button"`

###### Returns

`this`

#### Methods

##### \_makeSetter()

> `private` **\_makeSetter**\<`T`\>(`field`): (`value`) => `this`

Defined in: [src/payment-form-builder.ts:192](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L192)

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

Defined in: [src/payment-form-builder.ts:295](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L295)

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

Defined in: [src/payment-form-builder.ts:263](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L263)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### requireEmail()

> **requireEmail**(`doRequire?`): `this`

Defined in: [src/payment-form-builder.ts:274](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L274)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### requireFio()

> **requireFio**(`doRequire?`): `this`

Defined in: [src/payment-form-builder.ts:252](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L252)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### requirePhone()

> **requirePhone**(`doRequire?`): `this`

Defined in: [src/payment-form-builder.ts:284](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L284)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Memberof

PaymentFromBuilder

##### setAmount()

> **setAmount**(`amount`): `this`

Defined in: [src/payment-form-builder.ts:205](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L205)

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

Defined in: [src/payment-form-builder.ts:220](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L220)

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

Defined in: [src/payment-form-builder.ts:232](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L232)

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

Defined in: [src/payment-form-builder.ts:11](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L11)

#### Properties

##### ~~comment?~~

> `optional` **comment**: `string`

Defined in: [src/payment-form-builder.ts:75](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L75)

Поле, в котором можно передать комментарий отправителя перевода. (До 200 символов)

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~formComment?~~

> `optional` **formComment**: `string`

Defined in: [src/payment-form-builder.ts:57](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L57)

Название перевода в истории отправителя (для переводов из кошелька или с привязанной карты). Отображается в кошельке отправителя.

Удобнее всего формировать его из названий магазина и товара. Например: `Мой магазин: валенки белые`

###### Deprecated

**Поле игнорируется YooMoney**

##### label?

> `optional` **label**: `string`

Defined in: [src/payment-form-builder.ts:67](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L67)

Метка, которую сайт или приложение присваивает конкретному переводу. Например, в качестве метки можно указывать код или идентификатор заказа. (До 64 символов)

##### ~~needAddress?~~

> `optional` **needAddress**: `boolean`

Defined in: [src/payment-form-builder.ts:110](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L110)

Нужен адрес отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~needEmail?~~

> `optional` **needEmail**: `boolean`

Defined in: [src/payment-form-builder.ts:94](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L94)

Нужна электронная почты отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~needFio?~~

> `optional` **needFio**: `boolean`

Defined in: [src/payment-form-builder.ts:86](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L86)

Нужны ФИО отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### ~~needPhone?~~

> `optional` **needPhone**: `boolean`

Defined in: [src/payment-form-builder.ts:102](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L102)

Нужен телефон отправителя.

###### Deprecated

**Поле игнорируется YooMoney**

##### paymentType

> **paymentType**: `"PC"` \| `"AC"` \| `"MC"`

Defined in: [src/payment-form-builder.ts:43](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L43)

Способ оплаты. Возможные значения:

`PC` — оплата из кошелька ЮMoney;

`AC` — с банковской карты;

`MC` — с баланса мобильного. (больше недоступна)

##### quickPayForm

> **quickPayForm**: `"shop"` \| `"small"` \| `"donate"` \| `"button"`

Defined in: [src/payment-form-builder.ts:25](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L25)

Возможные значения:

`button` — единственное валидной значение;

Остальные сохранены для обратной совместимости

##### receiver

> **receiver**: `string`

Defined in: [src/payment-form-builder.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L15)

Номер кошелька ЮMoney, на который нужно зачислять деньги отправителей.

##### ~~shortDest?~~

> `optional` **shortDest**: `string`

Defined in: [src/payment-form-builder.ts:65](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L65)

Название перевода на странице подтверждения. Рекомендуем делать его таким же, как `formComment`.

###### Deprecated

**Поле игнорируется YooMoney**

##### successURL?

> `optional` **successURL**: `string`

Defined in: [src/payment-form-builder.ts:78](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L78)

URL-адрес для редиректа после совершения перевода.

##### sum

> **sum**: `number`

Defined in: [src/payment-form-builder.ts:48](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L48)

Сумма перевода (спишется с отправителя).

##### ~~targets?~~

> `optional` **targets**: `string`

Defined in: [src/payment-form-builder.ts:32](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L32)

Назначение платежа. (До 150 символов)

###### Deprecated

**Поле игнорируется YooMoney**

## Variables

### PaymentType

> `const` **PaymentType**: `object`

Defined in: [src/payment-form-builder.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/2e55c01d51d7f7d38a32f3dfa278fe1803b2676d/src/payment-form-builder.ts#L5)

#### Type declaration

##### FromCard

> `readonly` **FromCard**: `"AC"` = `"AC"`

##### FromMobileBalance

> `readonly` **FromMobileBalance**: `"MC"` = `"MC"`

##### FromWallet

> `readonly` **FromWallet**: `"PC"` = `"PC"`
