/* istanbul ignore file */
import type { CardType } from "./shared.types";

type AccountBalanceDetails = {
  /**
   * Общий баланс счета.
   */
  total: number;
  /**
   * Сумма доступная для расходных операций.
   */
  available: number;
  /**
   * Сумма стоящих в очереди пополнений. Если зачислений в очереди нет, то параметр отсутствует.
   */
  deposition_pending?: number;
  /**
   * Сумма заблокированных средств по решению исполнительных органов. Если заблокированных средств нет то параметр отсутствует.
   */
  blocked?: number;
  /**
   * Сумма задолженности (отрицательного остатка на счете). Если задолженности нет, то параметр отсутствует.
   */
  debt?: number;
  /**
   * Сумма замороженных средств. Если замороженных средств нет, то параметр отсутствует.
   */
  hold?: number;
};

type AccountLinkedCard = {
  /**
   * Маскированный номер карты.
   */
  pan_fragment: string;
  /**
   * Тип карты. Может отсутствовать, если неизвестен. Возможные значения:
   * - `VISA`
   * - `MasterCard`
   * - `AmericanExpress`
   * - `JCB`
   */
  type: CardType;
};

export type AccountInfoResponse = {
  /**
   * Номер счета пользователя.
   */
  account: string;
  /**
   * Баланс счета пользователя.
   */
  balance: number;
  /**
   * Код валюты счета пользователя. Всегда `643` (рубль РФ по стандарту ISO 4217).
   */
  currency: "643";
  /**
   * Статус пользователя. Возможные значения:
   * - `anonymous` — анонимный счет;
   * - `named` — именной счет;
   * - `identified` — идентифицированный счет.
   */
  account_status: "anonymous" | "named" | "identified";

  /**
   * Тип счета пользователя. Возможные значения:
   * - `personal` — счет пользователя в ЮMoney;
   * - `professional` — профессиональный счет в ЮMoney.
   */
  account_type: "personal" | "professional";

  /**
   * [Расширенная информация о балансе](https://yoomoney.ru/page?id=525218). По умолчанию этот блок отсутствует. Блок появляется, если сейчас или когда-либо ранее были зачисления в очереди, задолженности, блокировки средств.
   *
   * см. [Параметры объекта balance_details](https://yoomoney.ru/docs/wallet/user-account/account-info#response-nested-balance-details)
   */
  balance_details: AccountBalanceDetails;

  /**
   * Информация о привязанных банковских картах.
   *
   * Если к счету не привязано ни одной карты, параметр отсутствует. Если к счету привязана хотя бы одна карта, параметр содержит список данных о привязанных картах.
   *
   * см. [Параметры объекта cards_linked](https://yoomoney.ru/docs/wallet/user-account/account-info#response-nested-cards-linked)
   */
  cards_linked?: AccountLinkedCard[];

  [key: string]: any;
};

export type OperationHistoryParameters = {
  /**
   * Перечень типов операций, которые требуется отобразить. Возможные значения:
   *
   * - `deposition` — пополнение счета (приход);
   * - `payment` — платежи со счета (расход);
   * - `incoming-transfers-unaccepted` — непринятые входящие P2P-переводы любого типа.
   *
   * Типы операций перечисляются через пробел. Если параметр отсутствует, выводятся все операции.
   */
  type?: string;

  /**
   * Отбор платежей по значению метки. Выбираются платежи, у которых указано заданное значение параметра `label` вызова [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment).
   */
  label?: string;

  /**
   * Вывести операции от момента времени (операции, равные `from`, или более поздние). Если параметр отсутствует, выводятся все операции.
   */
  from?: string;

  /**
   * Вывести операции до момента времени (операции более ранние, чем `till`). Если параметр отсутствует, выводятся все операции.
   */
  till?: string;

  /**
   * Если параметр присутствует, то будут отображены операции, начиная с номера `start_record`. Операции нумеруются с 0. [Подробнее про постраничный вывод списка](https://yoomoney.ru/docs/wallet/user-account/operation-history#filtering-logic)
   */
  start_record?: string;

  /**
   * Количество запрашиваемых записей истории операций. Допустимые значения: от 1 до 100, по умолчанию — 30.
   */
  records?: number;

  /**
   * Показывать подробные детали операции. По умолчанию `false`. Для отображения деталей операции требуется наличие права `operation-details`.
   */
  details?: boolean;
  [key: string]: any;
};

type DigitalGood = {
  /**
   * Идентификатор товара в системе продавца. Присутствует только для товаров.
   */
  merchantArticleId: string;
  /**
   * Серийный номер товара (открытая часть пин-кода, кода активации или логин).
   */
  serial: string;
  /**
   * Секрет цифрового товара (закрытая часть пин-кода, кода активации, пароль или ссылка на скачивание).
   */
  secret: string;
};

type DigitalGoodsDescription = {
  article: DigitalGood[];
  [key: string]: any;
};

export type Operation = {
  /**
   * Идентификатор операции.
   */
  operation_id: string;
  /**
   * Статус платежа (перевода). Может принимать следующие значения:
   * - `success` — платеж завершен успешно;
   * - `refused` — платеж отвергнут получателем или отменен отправителем;
   * - `in_progress` — платеж не завершен, перевод не принят получателем или ожидает ввода кода протекции.
   */
  status: "success" | "refused" | "in_progress";
  /**
   * Идентификатор шаблона, по которому совершен платеж. Присутствует только для платежей.
   */
  pattern_id?: string;
  /**
   * Направление движения средств. Может принимать значения:
   * - `in` (приход);
   * - `out` (расход).
   */
  direction: "in" | "out";

  /**
   * Метка платежа. Присутствует для входящих и исходящих переводов другим пользователям ЮMoney, у которых был указан параметр `label` вызова [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment#request-transfer-label).
   */
  label: string;

  /**
   * Идентификатор получателя перевода. Присутствует для исходящих переводов другим пользователям.
   */
  recipient?: string;
  /**
   * Тип идентификатора получателя перевода. Возможные значения:
   * - `account` — номер счета получателя в сервисе ЮMoney;
   * - `phone` — номер привязанного мобильного телефона получателя;
   * - `email` — электронная почта получателя перевода.
   *
   * Присутствует для исходящих переводов другим пользователям.
   */
  recipient_type?: "account" | "phone" | "email";
  /**
   * Сообщение получателю перевода. Присутствует для переводов другим пользователям.
   */
  message?: string;
  /**
   * Комментарий к переводу или пополнению. Присутствует в истории отправителя перевода или получателя пополнения.
   */
  comment?: string;
  /**
   * Перевод защищен кодом протекции. Присутствует для переводов другим пользователям.
   */
  codepro?: boolean;
  /**
   * Код протекции. Присутствует для исходящих переводов, защищенных кодом протекции.
   */
  protection_code?: string;
  /**
   * Дата и время истечения срока действия кода протекции. Присутствует для входящих и исходящих переводов (от/другим) пользователям, защищенных кодом протекции.
   */
  expires?: string;
  /**
   * Дата и время приема или отмены перевода, защищенного кодом протекции. Присутствует для входящих и исходящих переводов, защищенных кодом протекции. Если перевод еще не принят или не отвергнут получателем, поле отсутствует.
   */
  answer_datetime?: string;
  /**
   * Номер счета отправителя перевода. Присутствует для входящих переводов от других пользователей.
   */
  sender?: string;
  /**
   * Сумма операции.
   */
  amount: number;
  /**
   * Сумма комиссии. Присутствует для исходящих переводов другим пользователям.
   */
  fee?: number;
  /**
   * Сумма к получению. Присутствует для исходящих переводов другим пользователям.
   */
  amount_due?: number;
  /**
   * Дата и время совершения операции.
   */
  datetime: string;
  /**
   * Данные о цифровом товаре (пин-коды и бонусы игр, iTunes, Xbox, etc.) Поле присутствует при успешном платеже в магазины цифровых товаров. Описание формата
   */
  digital_goods: DigitalGoodsDescription;
  /**
   * Краткое описание операции (название магазина или источник пополнения).
   */
  title: string;
  /**
   * Детальное описание платежа. Строка произвольного формата, может содержать любые символы и переводы строк. Необязательный параметр.
   */
  details?: string;
  /**
   * Тип операции. Возможные значения:
   * - `payment-shop` — исходящий платеж в магазин;
   * - `outgoing-transfer` — исходящий P2P-перевод любого типа;
   * - `deposition` — зачисление;
   * - `incoming-transfer` — входящий перевод или перевод [до востребования](https://yoomoney.ru/page?id=525218);
   * - `incoming-transfer-protected` — входящий перевод с [кодом протекции](https://yoomoney.ru/page?id=525218).
   */
  type:
    | "payment-shop"
    | "outgoing-transfer"
    | "deposition"
    | "incoming-transfer"
    | "incoming-transfer-protected";

  [key: string]: any;
};

export type OperationHistoryResponse = {
  next_record: string;
  operations: Operation[];
  [key: string]: any;
};

export type OperationDetailsParameters = {
  /**
   * Идентификатор операции. Значение параметра следует указывать как значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history#response) или значение поля `payment_id` ответа метода [process-payment](https://yoomoney.ru/docs/wallet/process-payments/process-payment#response), если запрашивается история счета плательщика.
   */
  operation_id: string;
  [key: string]: any;
};

/**
 * Перевод средств на счета других пользователей
 */
export type P2PPaymentRequest = Pick<
  Operation,
  "amount" | "amount_due" | "comment" | "message" | "codepro"
> & {
  /**
   * Идентификатор получателя перевода (номер счета, номер телефона или email).
   */
  to: string;

  /**
   * Фиксированное значение: `p2p`.
   */
  pattern_id: "p2p";

  /**
   * Число дней, в течении которых:
   * - получатель перевода может ввести код протекции и получить перевод на свой счет,
   * - получатель перевода до востребования может получить перевод.
   *
   * Значение параметра должно находиться в интервале от 1 до 365. Необязательный параметр. По умолчанию `1`.
   */
  expire_period?: number;

  /**
   * Метка платежа. Необязательный параметр.
   */
  label?: string;
  [key: string]: any;
};

/**
 * Платеж за сотовую связь
 */
export type PhoneProviderPaymentRequest = {
  /**
   * Фиксированное значение: `phone-topup`
   */
  pattern_id: "phone-topup";

  /**
   * Номер телефона в формате [ITU-T E.164](http://www.itu.int/rec/T-REC-E.164), полный номер, начиная с 7.
   *
   * Поддерживаются номера только российских сотовых операторов. Пример: `79219990099`
   */
  "phone-number": string;

  /**
   * Сумма платежа. С этой суммы может быть взята комиссия, размер комиссии зависит от оператора.
   */
  amount: number;
  [key: string]: any;
};
export type RequestPaymentParameters =
  | P2PPaymentRequest
  | PhoneProviderPaymentRequest
  | { pattern_id: string; [key: string]: string };

export type RequestPaymentMoneySource = {
  wallet: {
    /**
     * Признак того, что данный метод платежа разрешен пользователем.
     */
    allowed: boolean;
  };
  cards: {
    /**
     * Признак того, что данный метод платежа разрешен пользователем.
     */
    allowed: boolean;
    /**
     * Признак необходимости требования CVV2/CVC2 кода для авторизации оплаты по банковской карте.
     */
    csc_required: boolean;
    items: (AccountLinkedCard & {
      /**
       * Идентификатор привязанной к счету банковской карты. Его необходимо указать в методе `process-payment` для совершения платежа выбранной картой.
       */
      id: string;
    })[];
  };
};

type BaseApiErrors = {
  /**
   * Код результата выполнения операции. Возможные значения:
   * - `success` — успешное выполнение;
   * - `refused` — отказ в проведении платежа, объяснение причины отказа содержится в поле `error`. Это конечное состояние платежа.
   *
   * **В случае ошибки, клиент API кидает ошибку `YMApiError`, которая содержит `code` - код ошибки из поля `error` и ответ целиком в поле `response`**
   */
  status: "success" | "refused";

  /**
   * **Фактически: `never`. Читайте описание поля `status`**
   */
  error?: string;
};

export type RequestPaymentResponse = BaseApiErrors & {
  /**
   * Доступные для приложения методы проведения платежа, [см. Доступные методы платежа](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response-payment-methods). Присутствует только при успешном выполнении метода.
   */
  money_source: RequestPaymentMoneySource;

  /**
   * Идентификатор запроса платежа. Присутствует только при успешном выполнении метода.
   */
  request_id: string;

  /**
   * Сумма к списанию со счета в валюте счета плательщика (столько заплатит пользователь вместе с комиссией). Присутствует при успешном выполнении метода или ошибке `not_enough_funds`.
   */
  contract_amount: number;

  /**
   * Текущий баланс счета пользователя. Присутствует при выполнении следующих условий:
   * - метод выполнен успешно;
   * - токен авторизации обладает правом `account-info`.
   */
  balance?: number;

  /**
   * Статус пользователя. Возможные значения:
   * - `anonymous` — анонимный счет;
   * - `named` — именной счет;
   * - `identified` — идентифицированный счет
   */
  recipient_account_status: AccountInfoResponse["account_status"];

  /**
   * [Тип счета получателя](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response-recipient). Параметр присутствует при успешном выполнении метода в случае перевода средств на счет в ЮMoney другого пользователя.
   */
  recipient_account_type: AccountInfoResponse["account_type"];

  /**
   * Код протекции для данного перевода. Параметр присутствует, если был указан входной параметр `codepro=true`. Строка из 4-х десятичных цифр, может включать в себя ведущие нули. Параметр должен обрабатываться как строка.
   */
  protection_code?: string;

  /**
   * Адрес, на который необходимо отправить пользователя для разблокировки счета. Поле присутствует в случае ошибки `account_blocked`.
   */
  account_unblock_uri?: string;

  /**
   * Адрес, на который необходимо отправить пользователя для совершения необходимых действий в случае ошибки `ext_action_required`.
   */
  ext_action_uri?: string;
  [key: string]: any;
};

export type ProcessPaymentParameters = {
  /**
   * Идентификатор запроса, полученный из ответа метода [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response).
   */
  request_id: string;

  /**
   * Запрашиваемый метод проведения платежа:
   * - `wallet` — со счета пользователя
   * - идентификатор привязанной к счету карты (значение поля `id` описания [банковской карты](https://yoomoney.ru/docs/wallet/process-payments/request-payment#response-payment-methods))
   *
   * По умолчанию: `wallet`
   */
  money_source?: string;

  /**
   * Card Security Code, CVV2/CVC2-код привязанной банковской карты пользователя. Параметр следует указывать только при платеже с привязанной банковской карты.
   */
  csc?: string;

  /**
   * Адрес страницы возврата при успехе аутентификации платежа банковской картой по 3‑D Secure. Указывается, если приложение поддерживает аутентификацию по 3‑D Secure. Обязательный параметр для такой аутентификации.
   */
  ext_auth_success_uri?: string;

  /**
   * Адрес страницы возврата при отказе в аутентификации платежа банковской картой по 3‑D Secure. Указывается, если приложение поддерживает аутентификацию по 3‑D Secure. Обязательный параметр для такой аутентификации.
   */
  ext_auth_fail_uri?: string;

  [key: string]: any;
};

export type ProcessPaymentResponse = {
  /**
   * Код результата выполнения операции. Возможные значения:
   * - `success` — успешное выполнение (платеж проведен). Это конечное состояние платежа.
   * - `refused` — отказ в проведении платежа. Причина отказа возвращается в поле error. Это конечное состояние платежа.
   * - `in_progress` — авторизация платежа не завершена. Приложению следует повторить запрос с теми же параметрами спустя некоторое время.
   * - `ext_auth_required` — для завершения авторизации платежа с использованием банковской карты требуется аутентификация по технологии 3‑D Secure.
   * - все прочие значения — состояние платежа неизвестно. Приложению следует повторить запрос с теми же параметрами спустя некоторое время.
   */
  status: "success" | "refused" | "in_progress" | "ext_auth_required" | "*";

  /**
   * [Код ошибки](https://yoomoney.ru/docs/wallet/process-payments/request-payment#errors) при проведении платежа (пояснение к полю `status`). Присутствует только при ошибках.
   *
   * **Фактически: `never`. В случае ошибки, клиент API кидает ошибку `YMApiError`, которая содержит `code` - код ошибки из поля `error` и ответ целиком в поле `response`**
   */
  error?: string;

  /**
   * Идентификатор проведенного платежа. Присутствует только при успешном выполнении метода. Этот параметр соответствует параметру `operation_id` в методах [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history) и [operation-details](https://yoomoney.ru/docs/wallet/user-account/operation-details) истории плательщика.
   */
  payment_id: string;

  /**
   * Текущий баланс счета пользователя. Присутствует при выполнении следующих условий:
   * - метод выполнен успешно;
   * - токен авторизации обладает правом `account-info`.
   */
  balance?: number;

  /**
   * Номер транзакции магазина в ЮMoney. Присутствует при успешном выполнении платежа в магазин.
   */
  invoice_id?: string;

  /**
   * Номер счета плательщика. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney.
   */
  payer?: string;

  /**
   * Номер счета получателя. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney.
   */
  payee?: string;

  /**
   * Сумма, поступившая на счет получателя. Присутствует при успешном переводе средств на счет другого пользователя ЮMoney.
   */
  credit_amount?: number;

  /**
   * Адрес, на который необходимо отправить пользователя для разблокировки счета. Поле присутствует в случае ошибки `account_blocked`.
   */
  account_unblock_uri?: string;

  /**
   * Адрес страницы аутентификации банковской карты по 3‑D Secure на стороне банка-эмитента. Поле присутствует, если для завершения транзакции с использованием банковской карты требуется аутентификация по 3‑D Secure.
   */
  acs_uri?: string;
  /**
   * Параметры аутентификации карты по 3‑D Secure в формате коллекции «имя-значение». Поле присутствует, если для завершения транзакции с использованием банковской карты требуется аутентификация по 3‑D Secure.
   */
  acs_params?: Record<string, string>;

  /**
   * Рекомендуемое время, спустя которое следует повторить запрос, в миллисекундах. Поле присутствует при `status=in_progress`.
   */
  next_retry?: number;

  /**
   * Данные о цифровом товаре (пин-коды и бонусы игр, iTunes, Xbox etc). Поле присутствует при успешном платеже в магазины цифровых товаров.
   */
  digital_goods?: DigitalGoodsDescription;
  [key: string]: any;
};

export type IncomingTransferAcceptParameters = {
  /**
   * Идентификатор операции, значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history).
   */
  operation_id: string;
  /**
   * Код протекции. Строка из 4-х десятичных цифр. Указывается для входящего перевода, защищенного кодом протекции. Для переводов до востребования отсутствует.
   */
  protection_code?: string;
  [key: string]: any;
};

export type IncomingTransferAcceptResponse = BaseApiErrors & {
  /**
   * Количество оставшихся попыток принять входящий перевод защищенный кодом протекции. Присутствует только при неверно введенном коде протекции.
   */
  protection_code_attempts_available?: number;

  /**
   * Адрес, на который необходимо отправить пользователя для совершения необходимых действий в случае ошибки ext_action_required.
   */
  ext_action_uri?: string;
  [key: string]: any;
};

export type IncomingTransferRejectParameters = {
  /**
   * Идентификатор операции, значение параметра `operation_id` ответа метода [operation-history](https://yoomoney.ru/docs/wallet/user-account/operation-history).
   */
  operation_id: string;
  [key: string]: any;
};

export type IncomingTransferRejectResponse = BaseApiErrors & Record<string, any>;
