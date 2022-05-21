[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Namespace: <internal\>

[index](index.md).<internal>

## Table of contents

### Type aliases

- [AccountBalanceDetails](index._internal_.md#accountbalancedetails)
- [AccountLinkedCard](index._internal_.md#accountlinkedcard)
- [AnyRecord](index._internal_.md#anyrecord)
- [BaseApiErrors](index._internal_.md#baseapierrors)
- [CardType](index._internal_.md#cardtype)
- [DigitalGood](index._internal_.md#digitalgood)
- [DigitalGoodsDescription](index._internal_.md#digitalgoodsdescription)
- [QueryStringifiable](index._internal_.md#querystringifiable)

## Type aliases

### AccountBalanceDetails

Ƭ **AccountBalanceDetails**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `available` | `number` | Сумма доступная для расходных операций. |
| `blocked?` | `number` | Сумма заблокированных средств по решению исполнительных органов. Если заблокированных средств нет то параметр отсутствует. |
| `debt?` | `number` | Сумма задолженности (отрицательного остатка на счете). Если задолженности нет, то параметр отсутствует. |
| `deposition_pending?` | `number` | Сумма стоящих в очереди пополнений. Если зачислений в очереди нет, то параметр отсутствует. |
| `hold?` | `number` | Сумма замороженных средств. Если замороженных средств нет, то параметр отсутствует. |
| `total` | `number` | Общий баланс счета. |

#### Defined in

dist/cjs/api.types.d.ts:2

___

### AccountLinkedCard

Ƭ **AccountLinkedCard**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pan_fragment` | `string` | Маскированный номер карты. |
| `type` | [`CardType`](index._internal_.md#cardtype) | Тип карты. Может отсутствовать, если неизвестен. Возможные значения: - `VISA` - `MasterCard` - `AmericanExpress` - `JCB` |

#### Defined in

dist/cjs/api.types.d.ts:28

___

### AnyRecord

Ƭ **AnyRecord**: `Record`<`string`, `any`\>

#### Defined in

dist/cjs/shared.types.d.ts:1

___

### BaseApiErrors

Ƭ **BaseApiErrors**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `string` | **Фактически: `never`. Читайте описание поля `status`** |
| `status` | ``"success"`` \| ``"refused"`` | Код результата выполнения операции. Возможные значения: - `success` — успешное выполнение; - `refused` — отказ в проведении платежа, объяснение причины отказа содержится в поле `error`. Это конечное состояние платежа.  **В случае ошибки, клиент API кидает ошибку `YMApiError`, которая содержит `code` - код ошибки из поля `error` и ответ целиком в поле `response`** |

#### Defined in

dist/cjs/api.types.d.ts:331

___

### CardType

Ƭ **CardType**: ``"VISA"`` \| ``"Mastercard"`` \| ``"AmericanExpress"`` \| ``"JCB"`` \| ``"Mir"`` \| ``"UnionPay"`` \| ``"DinersClub"`` \| ``"Unknown"``

#### Defined in

dist/cjs/shared.types.d.ts:2

___

### DigitalGood

Ƭ **DigitalGood**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `merchantArticleId` | `string` | Идентификатор товара в системе продавца. Присутствует только для товаров. |
| `secret` | `string` | Секрет цифрового товара (закрытая часть пин-кода, кода активации, пароль или ссылка на скачивание). |
| `serial` | `string` | Серийный номер товара (открытая часть пин-кода, кода активации или логин). |

#### Defined in

dist/cjs/api.types.d.ts:121

___

### DigitalGoodsDescription

Ƭ **DigitalGoodsDescription**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `article` | [`DigitalGood`](index._internal_.md#digitalgood)[] |

#### Defined in

dist/cjs/api.types.d.ts:135

___

### QueryStringifiable

Ƭ **QueryStringifiable**: `Record`<`string`, `string` \| `number` \| `boolean` \| `ReadonlyArray`<`string`\> \| `ReadonlyArray`<`number`\> \| `ReadonlyArray`<`boolean`\> \| ``null`` \| `undefined`\>

#### Defined in

dist/cjs/fetch.d.ts:1
