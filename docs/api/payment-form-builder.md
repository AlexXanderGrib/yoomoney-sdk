[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / payment-form-builder

# payment-form-builder

## Classes

### PaymentFormBuilder

Defined in: [payment-form-builder.ts:172](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L172)

Генерирует HTML формы для переводов
 PaymentFormBuilder

#### Constructors

##### Constructor

> **new PaymentFormBuilder**(`config?`): [`PaymentFormBuilder`](#paymentformbuilder)

Defined in: [payment-form-builder.ts:183](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L183)

Creates an instance of PaymentFormBuilder.

###### Parameters

###### config?

[`FormConfig`](#formconfig) = `...`

Изначальные настройки формы

###### Returns

[`PaymentFormBuilder`](#paymentformbuilder)

#### Properties

##### config

> `readonly` **config**: [`FormConfig`](#formconfig)

Defined in: [payment-form-builder.ts:183](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L183)

Изначальные настройки формы

##### ~~setComment()~~

> `readonly` **setComment**: (`value`) => `this`

Defined in: [payment-form-builder.ts:261](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L261)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~setFormComment()~~

> `readonly` **setFormComment**: (`value`) => `this`

Defined in: [payment-form-builder.ts:257](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L257)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### setLabel()

> `readonly` **setLabel**: (`value`) => `this`

Defined in: [payment-form-builder.ts:252](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L252)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

##### setPaymentType()

> `readonly` **setPaymentType**: (`value`) => `this`

Defined in: [payment-form-builder.ts:251](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L251)

###### Parameters

###### value

`undefined` | `AutoComplete`\<[`PaymentType`](#paymenttype-1)\>

###### Returns

`this`

##### setQuickPayForm()

> `readonly` **setQuickPayForm**: (`value`) => `this`

Defined in: [payment-form-builder.ts:250](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L250)

###### Parameters

###### value

`undefined` | `AutoComplete`\<`"button"`\>

###### Returns

`this`

##### ~~setShortDest()~~

> `readonly` **setShortDest**: (`value`) => `this`

Defined in: [payment-form-builder.ts:259](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L259)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~setTargets()~~

> `readonly` **setTargets**: (`value`) => `this`

Defined in: [payment-form-builder.ts:255](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L255)

###### Parameters

###### value

`undefined` | `string`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### FORM\_ACTION\_URL

> `readonly` `static` **FORM\_ACTION\_URL**: `"https://yoomoney.ru/quickpay/confirm.xml"`

Defined in: [payment-form-builder.ts:173](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L173)

#### Methods

##### \_makeSetter()

> `private` **\_makeSetter**\<`T`\>(`field`): (`value`) => `this`

Defined in: [payment-form-builder.ts:192](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L192)

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

##### buildHtml()

> **buildHtml**(`fullPage?`): `string`

Defined in: [payment-form-builder.ts:312](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L312)

Генерирует HTML на основе заданных параметров

###### Parameters

###### fullPage?

`boolean` = `false`

###### Returns

`string`

##### ~~requireAddress()~~

> **requireAddress**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:280](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L280)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~requireEmail()~~

> **requireEmail**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:291](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L291)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~requireFio()~~

> **requireFio**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:269](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L269)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~requirePhone()~~

> **requirePhone**(`doRequire?`): `this`

Defined in: [payment-form-builder.ts:302](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L302)

###### Parameters

###### doRequire?

`boolean` = `true`

###### Returns

`this`

###### Deprecated

**Поле игнорируется ЮMoney**

##### setAmount()

> **setAmount**(`amount`): `this`

Defined in: [payment-form-builder.ts:205](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L205)

Задаёт сумму платежа

###### Parameters

###### amount

Сумма

`string` | `number`

###### Returns

`this`

###### Alias

[setSum](#setsum)

##### setReceiver()

> **setReceiver**(`receiver`): `this`

Defined in: [payment-form-builder.ts:234](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L234)

Задаёт получателя платежа

###### Parameters

###### receiver

Получатель

`string` | `number`

###### Returns

`this`

##### setSuccessURL()

> **setSuccessURL**(`url`): `this`

Defined in: [payment-form-builder.ts:245](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L245)

Задаёт URL перенаправления после успешного платежа

###### Parameters

###### url

URL

`string` | `URL`

###### Returns

`this`

##### setSum()

> **setSum**(`amount`): `this`

Defined in: [payment-form-builder.ts:220](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L220)

Задаёт сумму платежа

###### Parameters

###### amount

Сумма

`string` | `number`

###### Returns

`this`

###### Alias

[setAmount](#setamount)

## Type Aliases

### FormConfig

> **FormConfig** = `object`

Defined in: [payment-form-builder.ts:21](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L21)

#### Properties

##### ~~comment?~~

> `optional` **comment**: `string`

Defined in: [payment-form-builder.ts:84](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L84)

Поле, в котором можно передать комментарий отправителя перевода. (До 200 символов)

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~formComment?~~

> `optional` **formComment**: `string`

Defined in: [payment-form-builder.ts:66](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L66)

Название перевода в истории отправителя (для переводов из кошелька или с привязанной карты). Отображается в кошельке отправителя.

Удобнее всего формировать его из названий магазина и товара. Например: `Мой магазин: валенки белые`

###### Deprecated

**Поле игнорируется ЮMoney**

##### label?

> `optional` **label**: `string`

Defined in: [payment-form-builder.ts:76](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L76)

Метка, которую сайт или приложение присваивает конкретному переводу. Например, в качестве метки можно указывать код или идентификатор заказа. (До 64 символов)

##### ~~needAddress?~~

> `optional` **needAddress**: `boolean`

Defined in: [payment-form-builder.ts:119](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L119)

Нужен адрес отправителя.

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~needEmail?~~

> `optional` **needEmail**: `boolean`

Defined in: [payment-form-builder.ts:103](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L103)

Нужна электронная почты отправителя.

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~needFio?~~

> `optional` **needFio**: `boolean`

Defined in: [payment-form-builder.ts:95](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L95)

Нужны ФИО отправителя.

###### Deprecated

**Поле игнорируется ЮMoney**

##### ~~needPhone?~~

> `optional` **needPhone**: `boolean`

Defined in: [payment-form-builder.ts:111](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L111)

Нужен телефон отправителя.

###### Deprecated

**Поле игнорируется ЮMoney**

##### paymentType?

> `optional` **paymentType**: `AutoComplete`\<[`PaymentType`](#paymenttype-1)\>

Defined in: [payment-form-builder.ts:52](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L52)

Способ оплаты. Возможные значения:

`PC` — оплата из кошелька ЮMoney;

`AC` — с банковской карты;

##### quickPayForm?

> `optional` **quickPayForm**: `AutoComplete`\<[`QuickPayForm`](#quickpayform-1)\>

Defined in: [payment-form-builder.ts:35](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L35)

Возможные значения:

`button` — единственное валидной значение;

Остальные сохранены для обратной совместимости

##### receiver

> **receiver**: `string`

Defined in: [payment-form-builder.ts:25](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L25)

Номер кошелька ЮMoney, на который нужно зачислять деньги отправителей.

##### ~~shortDest?~~

> `optional` **shortDest**: `string`

Defined in: [payment-form-builder.ts:74](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L74)

Название перевода на странице подтверждения. Рекомендуем делать его таким же, как `formComment`.

###### Deprecated

**Поле игнорируется ЮMoney**

##### successURL?

> `optional` **successURL**: `string`

Defined in: [payment-form-builder.ts:87](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L87)

URL-адрес для редиректа после совершения перевода.

##### sum

> **sum**: `number`

Defined in: [payment-form-builder.ts:57](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L57)

Сумма перевода (спишется с отправителя).

##### ~~targets?~~

> `optional` **targets**: `string`

Defined in: [payment-form-builder.ts:42](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L42)

Назначение платежа. (До 150 символов)

###### Deprecated

**Поле игнорируется ЮMoney**

***

### PaymentType

> **PaymentType** = *typeof* [`PaymentType`](#paymenttype-2)\[keyof *typeof* [`PaymentType`](#paymenttype-2)\]

Defined in: [payment-form-builder.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L5)

***

### QuickPayForm

> **QuickPayForm** = *typeof* [`QuickPayForm`](#quickpayform-2)\[keyof *typeof* [`QuickPayForm`](#quickpayform-2)\]

Defined in: [payment-form-builder.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L15)

## Variables

### PaymentType

> `const` **PaymentType**: `object`

Defined in: [payment-form-builder.ts:5](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L5)

#### Type declaration

##### FromCard

> `readonly` **FromCard**: `"AC"` = `"AC"`

##### ~~FromMobileBalance~~

> `readonly` **FromMobileBalance**: `"MC"` = `"MC"`

###### Deprecated

**Вариант игнорируется ЮMoney**. Используйте [PaymentType.FromCard](#fromcard) (`"AC"`)

##### FromWallet

> `readonly` **FromWallet**: `"PC"` = `"PC"`

***

### QuickPayForm

> `const` **QuickPayForm**: `object`

Defined in: [payment-form-builder.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/ba9e8d4a8ea222b9b722685e2312990bdd73128a/src/payment-form-builder.ts#L15)

#### Type declaration

##### Button

> `readonly` **Button**: `"button"` = `"button"`
