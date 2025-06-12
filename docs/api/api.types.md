[**YooMoney SDK**](README.md)

***

[YooMoney SDK](modules.md) / api.types

# api.types

## Type Aliases

### AccountInfoResponse

> **AccountInfoResponse** = `object`

Defined in: [api.types.ts:46](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L46)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### account

> **account**: `string`

Defined in: [api.types.ts:50](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L50)

Номер счета пользователя.

##### account\_status

> **account\_status**: `"anonymous"` \| `"named"` \| `"identified"`

Defined in: [api.types.ts:65](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L65)

Статус пользователя. Возможные значения:
- `anonymous` — анонимный счет;
- `named` — именной счет;
- `identified` — идентифицированный счет.

##### account\_type

> **account\_type**: `"personal"` \| `"professional"`

Defined in: [api.types.ts:72](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L72)

Тип счета пользователя. Возможные значения:
- `personal` — счет пользователя в ЮMoney;
- `professional` — профессиональный счет в ЮMoney.

##### balance

> **balance**: `number`

Defined in: [api.types.ts:54](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L54)

Баланс счета пользователя.

##### balance\_details

> **balance\_details**: `AccountBalanceDetails`

Defined in: [api.types.ts:79](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L79)

[Расширенная информация о балансе](https://yoomoney.ru/page?id=525218). По умолчанию этот блок отсутствует. Блок появляется, если сейчас или когда-либо ранее были зачисления в очереди, задолженности, блокировки средств.

см. [Параметры объекта balance_details](https://yoomoney.ru/docs/wallet/user-account/account-info#response-nested-balance-details)

##### cards\_linked?

> `optional` **cards\_linked**: `AccountLinkedCard`[]

Defined in: [api.types.ts:88](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L88)

Информация о привязанных банковских картах.

Если к счету не привязано ни одной карты, параметр отсутствует. Если к счету привязана хотя бы одна карта, параметр содержит список данных о привязанных картах.

см. [Параметры объекта cards_linked](https://yoomoney.ru/docs/wallet/user-account/account-info#response-nested-cards-linked)

##### currency

> **currency**: `"643"`

Defined in: [api.types.ts:58](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L58)

Код валюты счета пользователя. Всегда `643` (рубль РФ по стандарту ISO 4217).

***

### IncomingTransferAcceptParameters

> **IncomingTransferAcceptParameters** = `object`

Defined in: [api.types.ts:549](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L549)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### operation\_id

> **operation\_id**: `string`

Defined in: [api.types.ts:553](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L553)

Идентификатор операции, значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history).

##### protection\_code?

> `optional` **protection\_code**: `string`

Defined in: [api.types.ts:557](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L557)

Код протекции. Строка из 4-х десятичных цифр. Указывается для входящего перевода, защищенного кодом протекции. Для переводов до востребования отсутствует.

***

### IncomingTransferAcceptResponse

> **IncomingTransferAcceptResponse** = `BaseApiErrors` & `object`

Defined in: [api.types.ts:561](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L561)

#### Type declaration

##### ext\_action\_uri?

> `optional` **ext\_action\_uri**: `string`

Адрес, на который необходимо отправить пользователя для совершения необходимых действий в случае ошибки ext_action_required.

##### protection\_code\_attempts\_available?

> `optional` **protection\_code\_attempts\_available**: `number`

Количество оставшихся попыток принять входящий перевод защищенный кодом протекции. Присутствует только при неверно введенном коде протекции.

***

### IncomingTransferRejectParameters

> **IncomingTransferRejectParameters** = `object`

Defined in: [api.types.ts:574](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L574)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### operation\_id

> **operation\_id**: `string`

Defined in: [api.types.ts:578](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L578)

Идентификатор операции, значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history).

***

### IncomingTransferRejectResponse

> **IncomingTransferRejectResponse** = `BaseApiErrors` & `Record`\<`string`, `any`\>

Defined in: [api.types.ts:582](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L582)

***

### Operation

> **Operation** = `object`

Defined in: [api.types.ts:157](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L157)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### amount

> **amount**: `number`

Defined in: [api.types.ts:229](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L229)

Сумма операции.

##### amount\_due?

> `optional` **amount\_due**: `number`

Defined in: [api.types.ts:237](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L237)

Сумма к получению. Присутствует для исходящих переводов другим пользователям.

##### answer\_datetime?

> `optional` **answer\_datetime**: `string`

Defined in: [api.types.ts:221](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L221)

Дата и время приема или отмены перевода, защищенного кодом протекции. Присутствует для входящих и исходящих переводов, защищенных кодом протекции. Если перевод еще не принят или не отвергнут получателем, поле отсутствует.

##### codepro?

> `optional` **codepro**: `boolean`

Defined in: [api.types.ts:209](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L209)

Перевод защищен кодом протекции. Присутствует для переводов другим пользователям.

##### comment?

> `optional` **comment**: `string`

Defined in: [api.types.ts:205](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L205)

Комментарий к переводу или пополнению. Присутствует в истории отправителя перевода или получателя пополнения.

##### datetime

> **datetime**: `string`

Defined in: [api.types.ts:241](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L241)

Дата и время совершения операции.

##### details?

> `optional` **details**: `string`

Defined in: [api.types.ts:253](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L253)

Детальное описание платежа. Строка произвольного формата, может содержать любые символы и переводы строк. Необязательный параметр.

##### digital\_goods

> **digital\_goods**: `DigitalGoodsDescription`

Defined in: [api.types.ts:245](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L245)

Данные о цифровом товаре (пин-коды и бонусы игр, iTunes, Xbox, etc.) Поле присутствует при успешном платеже в магазины цифровых товаров. Описание формата

##### direction

> **direction**: `"in"` \| `"out"`

Defined in: [api.types.ts:178](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L178)

Направление движения средств. Может принимать значения:
- `in` (приход);
- `out` (расход).

##### expires?

> `optional` **expires**: `string`

Defined in: [api.types.ts:217](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L217)

Дата и время истечения срока действия кода протекции. Присутствует для входящих и исходящих переводов (от/другим) пользователям, защищенных кодом протекции.

##### fee?

> `optional` **fee**: `number`

Defined in: [api.types.ts:233](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L233)

Сумма комиссии. Присутствует для исходящих переводов другим пользователям.

##### label

> **label**: `string`

Defined in: [api.types.ts:183](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L183)

Метка платежа. Присутствует для входящих и исходящих переводов другим пользователям ЮMoney, у которых был указан параметр `label` вызова [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment#request-transfer-label).

##### message?

> `optional` **message**: `string`

Defined in: [api.types.ts:201](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L201)

Сообщение получателю перевода. Присутствует для переводов другим пользователям.

##### operation\_id

> **operation\_id**: `string`

Defined in: [api.types.ts:161](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L161)

Идентификатор операции.

##### pattern\_id?

> `optional` **pattern\_id**: `string`

Defined in: [api.types.ts:172](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L172)

Идентификатор шаблона, по которому совершен платеж. Присутствует только для платежей.

##### protection\_code?

> `optional` **protection\_code**: `string`

Defined in: [api.types.ts:213](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L213)

Код протекции. Присутствует для исходящих переводов, защищенных кодом протекции.

##### recipient?

> `optional` **recipient**: `string`

Defined in: [api.types.ts:188](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L188)

Идентификатор получателя перевода. Присутствует для исходящих переводов другим пользователям.

##### recipient\_type?

> `optional` **recipient\_type**: `"account"` \| `"phone"` \| `"email"`

Defined in: [api.types.ts:197](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L197)

Тип идентификатора получателя перевода. Возможные значения:
- `account` — номер счета получателя в сервисе ЮMoney;
- `phone` — номер привязанного мобильного телефона получателя;
- `email` — электронная почта получателя перевода.

Присутствует для исходящих переводов другим пользователям.

##### sender?

> `optional` **sender**: `string`

Defined in: [api.types.ts:225](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L225)

Номер счета отправителя перевода. Присутствует для входящих переводов от других пользователей.

##### status

> **status**: `"success"` \| `"refused"` \| `"in_progress"`

Defined in: [api.types.ts:168](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L168)

Статус платежа (перевода). Может принимать следующие значения:
- `success` — платеж завершен успешно;
- `refused` — платеж отвергнут получателем или отменен отправителем;
- `in_progress` — платеж не завершен, перевод не принят получателем или ожидает ввода кода протекции.

##### title

> **title**: `string`

Defined in: [api.types.ts:249](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L249)

Краткое описание операции (название магазина или источник пополнения).

##### type

> **type**: `"payment-shop"` \| `"outgoing-transfer"` \| `"deposition"` \| `"incoming-transfer"` \| `"incoming-transfer-protected"`

Defined in: [api.types.ts:262](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L262)

Тип операции. Возможные значения:
- `payment-shop` — исходящий платеж в магазин;
- `outgoing-transfer` — исходящий P2P-перевод любого типа;
- `deposition` — зачисление;
- `incoming-transfer` — входящий перевод или перевод [до востребования](https://yoomoney.ru/page?id=525218);
- `incoming-transfer-protected` — входящий перевод с [кодом протекции](https://yoomoney.ru/page?id=525218).

***

### OperationDetailsParameters

> **OperationDetailsParameters** = `object`

Defined in: [api.types.ts:278](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L278)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### operation\_id

> **operation\_id**: `string`

Defined in: [api.types.ts:282](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L282)

Идентификатор операции. Значение параметра следует указывать как значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history#response) или значение поля `payment_id` ответа метода [process-payment](https://yoomoney.ru/docs/wallet/process-payments/process-payment#response), если запрашивается история счета плательщика.

***

### OperationHistoryParameters

> **OperationHistoryParameters** = `object`

Defined in: [api.types.ts:93](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L93)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### details?

> `optional` **details**: `boolean`

Defined in: [api.types.ts:133](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L133)

Показывать подробные детали операции. По умолчанию `false`. Для отображения деталей операции требуется наличие права `operation-details`.

##### from?

> `optional` **from**: `string`

Defined in: [api.types.ts:113](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L113)

Вывести операции от момента времени (операции, равные `from`, или более поздние). Если параметр отсутствует, выводятся все операции.

##### label?

> `optional` **label**: `string`

Defined in: [api.types.ts:108](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L108)

Отбор платежей по значению метки. Выбираются платежи, у которых указано заданное значение параметра `label` вызова [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment).

##### records?

> `optional` **records**: `number`

Defined in: [api.types.ts:128](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L128)

Количество запрашиваемых записей истории операций. Допустимые значения: от 1 до 100, по умолчанию — 30.

##### start\_record?

> `optional` **start\_record**: `string`

Defined in: [api.types.ts:123](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L123)

Если параметр присутствует, то будут отображены операции, начиная с номера `start_record`. Операции нумеруются с 0. [Подробнее про постраничный вывод списка](https://yoomoney.ru/docs/wallet/user-account/operation-history#filtering-logic)

##### till?

> `optional` **till**: `string`

Defined in: [api.types.ts:118](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L118)

Вывести операции до момента времени (операции более ранние, чем `till`). Если параметр отсутствует, выводятся все операции.

##### type?

> `optional` **type**: `string`

Defined in: [api.types.ts:103](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L103)

Перечень типов операций, которые требуется отобразить. Возможные значения:

- `deposition` — пополнение счета (приход);
- `payment` — платежи со счета (расход);
- `incoming-transfers-unaccepted` — непринятые входящие P2P-переводы любого типа.

Типы операций перечисляются через пробел. Если параметр отсутствует, выводятся все операции.

***

### OperationHistoryResponse

> **OperationHistoryResponse** = `object`

Defined in: [api.types.ts:272](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L272)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### next\_record

> **next\_record**: `string`

Defined in: [api.types.ts:273](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L273)

##### operations

> **operations**: [`Operation`](#operation)[]

Defined in: [api.types.ts:274](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L274)

***

### P2PPaymentRequest

> **P2PPaymentRequest** = `Pick`\<[`Operation`](#operation), `"amount"` \| `"amount_due"` \| `"comment"` \| `"message"` \| `"codepro"`\> & `object`

Defined in: [api.types.ts:289](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L289)

Перевод средств на счета других пользователей

#### Type declaration

##### expire\_period?

> `optional` **expire\_period**: `number`

Число дней, в течении которых:
- получатель перевода может ввести код протекции и получить перевод на свой счет,
- получатель перевода до востребования может получить перевод.

Значение параметра должно находиться в интервале от 1 до 365. Необязательный параметр. По умолчанию `1`.

##### label?

> `optional` **label**: `string`

Метка платежа. Необязательный параметр.

##### pattern\_id

> **pattern\_id**: `"p2p"`

Фиксированное значение: `p2p`.

##### to

> **to**: `string`

Идентификатор получателя перевода (номер счета, номер телефона или email).

***

### PhoneProviderPaymentRequest

> **PhoneProviderPaymentRequest** = `object`

Defined in: [api.types.ts:322](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L322)

Платеж за сотовую связь

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### amount

> **amount**: `number`

Defined in: [api.types.ts:338](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L338)

Сумма платежа. С этой суммы может быть взята комиссия, размер комиссии зависит от оператора.

##### pattern\_id

> **pattern\_id**: `"phone-topup"`

Defined in: [api.types.ts:326](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L326)

Фиксированное значение: `phone-topup`

##### phone-number

> **phone-number**: `string`

Defined in: [api.types.ts:333](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L333)

Номер телефона в формате [ITU-T E.164](http://www.itu.int/rec/T-REC-E.164), полный номер, начиная с 7.

Поддерживаются номера только российских сотовых операторов. Пример: `79219990099`

***

### ProcessPaymentParameters

> **ProcessPaymentParameters** = `object`

Defined in: [api.types.ts:440](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L440)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### csc?

> `optional` **csc**: `string`

Defined in: [api.types.ts:458](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L458)

Card Security Code, CVV2/CVC2-код привязанной банковской карты пользователя. Параметр следует указывать только при платеже с привязанной банковской карты.

##### ext\_auth\_fail\_uri?

> `optional` **ext\_auth\_fail\_uri**: `string`

Defined in: [api.types.ts:468](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L468)

Адрес страницы возврата при отказе в аутентификации платежа банковской картой по 3‑D Secure. Указывается, если приложение поддерживает аутентификацию по 3‑D Secure. Обязательный параметр для такой аутентификации.

##### ext\_auth\_success\_uri?

> `optional` **ext\_auth\_success\_uri**: `string`

Defined in: [api.types.ts:463](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L463)

Адрес страницы возврата при успехе аутентификации платежа банковской картой по 3‑D Secure. Указывается, если приложение поддерживает аутентификацию по 3‑D Secure. Обязательный параметр для такой аутентификации.

##### money\_source?

> `optional` **money\_source**: `string`

Defined in: [api.types.ts:453](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L453)

Запрашиваемый метод проведения платежа:
- `wallet` — со счета пользователя
- идентификатор привязанной к счету карты (значение поля `id` описания [банковской карты](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response-payment-methods))

По умолчанию: `wallet`

##### request\_id

> **request\_id**: `string`

Defined in: [api.types.ts:444](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L444)

Идентификатор запроса, полученный из ответа метода [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response).

***

### ProcessPaymentResponse

> **ProcessPaymentResponse** = `object`

Defined in: [api.types.ts:473](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L473)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

##### account\_unblock\_uri?

> `optional` **account\_unblock\_uri**: `string`

Defined in: [api.types.ts:526](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L526)

Адрес, на который необходимо отправить пользователя для разблокировки счета. Поле присутствует в случае ошибки `account_blocked`.

##### acs\_params?

> `optional` **acs\_params**: `Record`\<`string`, `string`\>

Defined in: [api.types.ts:535](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L535)

Параметры аутентификации карты по 3‑D Secure в формате коллекции «имя-значение». Поле присутствует, если для завершения транзакции с использованием банковской карты требуется аутентификация по 3‑D Secure.

##### acs\_uri?

> `optional` **acs\_uri**: `string`

Defined in: [api.types.ts:531](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L531)

Адрес страницы аутентификации банковской карты по 3‑D Secure на стороне банка-эмитента. Поле присутствует, если для завершения транзакции с использованием банковской карты требуется аутентификация по 3‑D Secure.

##### balance?

> `optional` **balance**: `number`

Defined in: [api.types.ts:501](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L501)

Текущий баланс счета пользователя. Присутствует при выполнении следующих условий:
- метод выполнен успешно;
- токен авторизации обладает правом `account-info`.

##### credit\_amount?

> `optional` **credit\_amount**: `number`

Defined in: [api.types.ts:521](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L521)

Сумма, поступившая на счет получателя. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney.

##### digital\_goods?

> `optional` **digital\_goods**: `DigitalGoodsDescription`

Defined in: [api.types.ts:545](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L545)

Данные о цифровом товаре (пин-коды и бонусы игр, iTunes, Xbox etc). Поле присутствует при успешном платеже в магазины цифровых товаров.

##### error?

> `optional` **error**: `string`

Defined in: [api.types.ts:489](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L489)

[Код ошибки](https://yoomoney.ru/docs/wallet/process-payments/request-payment#errors) при проведении платежа (пояснение к полю `status`). Присутствует только при ошибках.

**Фактически: `never`. В случае ошибки, клиент API кидает ошибку `YMApiError`, которая содержит `code` - код ошибки из поля `error` и ответ целиком в поле `response`**

##### invoice\_id?

> `optional` **invoice\_id**: `string`

Defined in: [api.types.ts:506](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L506)

Номер транзакции магазина в ЮMoney. Присутствует при успешном выполнении платежа в магазин.

##### next\_retry?

> `optional` **next\_retry**: `number`

Defined in: [api.types.ts:540](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L540)

Рекомендуемое время, спустя которое следует повторить запрос, в миллисекундах. Поле присутствует при `status=in_progress`.

##### payee?

> `optional` **payee**: `string`

Defined in: [api.types.ts:516](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L516)

Номер счета получателя. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney.

##### payer?

> `optional` **payer**: `string`

Defined in: [api.types.ts:511](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L511)

Номер счета плательщика. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney.

##### payment\_id

> **payment\_id**: `string`

Defined in: [api.types.ts:494](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L494)

Идентификатор проведенного платежа. Присутствует только при успешном выполнении метода. Этот параметр соответствует параметру `operation_id` в методах [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history) и [operation-details](https://yoomoney.ru/docs/wallet/user-account/operation-details) истории плательщика.

##### status

> **status**: `"success"` \| `"refused"` \| `"in_progress"` \| `"ext_auth_required"` \| `"*"`

Defined in: [api.types.ts:482](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L482)

Код результата выполнения операции. Возможные значения:
- `success` — успешное выполнение (платеж проведен). Это конечное состояние платежа.
- `refused` — отказ в проведении платежа. Причина отказа возвращается в поле error. Это конечное состояние платежа.
- `in_progress` — авторизация платежа не завершена. Приложению следует повторить запрос с теми же параметрами спустя некоторое время.
- `ext_auth_required` — для завершения авторизации платежа с использованием банковской карты требуется аутентификация по технологии 3‑D Secure.
- все прочие значения — состояние платежа неизвестно. Приложению следует повторить запрос с теми же параметрами спустя некоторое время.

***

### RequestPaymentMoneySource

> **RequestPaymentMoneySource** = `object`

Defined in: [api.types.ts:346](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L346)

#### Properties

##### cards

> **cards**: `object`

Defined in: [api.types.ts:353](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L353)

###### allowed

> **allowed**: `boolean`

Признак того, что данный метод платежа разрешен пользователем.

###### csc\_required

> **csc\_required**: `boolean`

Признак необходимости требования CVV2/CVC2 кода для авторизации оплаты по банковской карте.

###### items

> **items**: `AccountLinkedCard` & `object`[]

##### wallet

> **wallet**: `object`

Defined in: [api.types.ts:347](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L347)

###### allowed

> **allowed**: `boolean`

Признак того, что данный метод платежа разрешен пользователем.

***

### RequestPaymentParameters

> **RequestPaymentParameters** = [`P2PPaymentRequest`](#p2ppaymentrequest) \| [`PhoneProviderPaymentRequest`](#phoneproviderpaymentrequest) \| \{[`key`: `string`]: `string`; `pattern_id`: `string`; \}

Defined in: [api.types.ts:341](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L341)

***

### RequestPaymentResponse

> **RequestPaymentResponse** = `BaseApiErrors` & `object`

Defined in: [api.types.ts:387](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/3f22d01285ab94aa36ece60656a052b88824f975/src/api.types.ts#L387)

#### Type declaration

##### account\_unblock\_uri?

> `optional` **account\_unblock\_uri**: `string`

Адрес, на который необходимо отправить пользователя для разблокировки счета. Поле присутствует в случае ошибки `account_blocked`.

##### balance?

> `optional` **balance**: `number`

Текущий баланс счета пользователя. Присутствует при выполнении следующих условий:
- метод выполнен успешно;
- токен авторизации обладает правом `account-info`.

##### contract\_amount

> **contract\_amount**: `number`

Сумма к списанию со счета в валюте счета плательщика (столько заплатит пользователь вместе с комиссией). Присутствует при успешном выполнении метода или ошибке `not_enough_funds`.

##### ext\_action\_uri?

> `optional` **ext\_action\_uri**: `string`

Адрес, на который необходимо отправить пользователя для совершения необходимых действий в случае ошибки `ext_action_required`.

##### money\_source

> **money\_source**: [`RequestPaymentMoneySource`](#requestpaymentmoneysource)

Доступные для приложения методы проведения платежа, [см. Доступные методы платежа](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response-payment-methods). Присутствует только при успешном выполнении метода.

##### protection\_code?

> `optional` **protection\_code**: `string`

Код протекции для данного перевода. Параметр присутствует, если был указан входной параметр `codepro=true`. Строка из 4-х десятичных цифр, может включать в себя ведущие нули. Параметр должен обрабатываться как строка.

##### recipient\_account\_status

> **recipient\_account\_status**: [`AccountInfoResponse`](#accountinforesponse)\[`"account_status"`\]

Статус пользователя. Возможные значения:
- `anonymous` — анонимный счет;
- `named` — именной счет;
- `identified` — идентифицированный счет

##### recipient\_account\_type

> **recipient\_account\_type**: [`AccountInfoResponse`](#accountinforesponse)\[`"account_type"`\]

[Тип счета получателя](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response-recipient). Параметр присутствует при успешном выполнении метода в случае перевода средств на счет в ЮMoney другого пользователя.

##### request\_id

> **request\_id**: `string`

Идентификатор запроса платежа. Присутствует только при успешном выполнении метода.
