/* istanbul ignore file */
import type { CountryCode, Currency } from "./shared.types";

export type PaymentStatus =
  | "pending"
  | "waiting_for_capture"
  | "succeeded"
  | "canceled";

export type PaymentAmount = {
  /**
   * Сумма в выбранной валюте. Выражается в виде строки и пишется через точку, например `10.00`. Количество знаков после точки зависит от выбранной валюты.
   */
  amount: string;

  /**
   * Код валюты в формате [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html). Должен соответствовать валюте субаккаунта (`recipient.gateway_id`), если вы разделяете потоки платежей, и валюте аккаунта (shopId в [личном кабинете](https://yookassa.ru/my)), если не разделяете.
   */
  currency: Currency;
};

export type PaymentRecipient = {
  /**
   * Идентификатор магазина в ЮKassa.
   */
  account_id: string;
  /**
   * Идентификатор субаккаунта. Используется для разделения потоков платежей в рамках одного аккаунта.
   */
  gateway_id: string;
};

type BasePaymentMethod = {
  /**
   * Код способа оплаты.
   */
  type: string;

  /**
   * Идентификатор способа оплаты.
   */
  id: string;

  /**
   * С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payments/recurring-payments).
   */
  saved: boolean;

  /**
   * Название способа оплаты.
   */
  title?: string;
};

type AlfaClickPaymentMethod = BasePaymentMethod & {
  type: "alfabank";

  /**
   * Логин пользователя в Альфа-Клике (привязанный телефон или дополнительный логин).
   */
  login?: string;
};

type MobileBalancePaymentMethod = BasePaymentMethod & { type: "mobile_balance" };

type CardPaymentMethod = BasePaymentMethod & {
  type: "bank_card";
  /**
   * Данные банковской карты.
   */
  card?: {
    /**
     * Первые 6 цифр номера карты (BIN). При оплате картой, [сохраненной в ЮKassa](https://yookassa.ru/developers/payments/recurring-payments) и других сервисах, переданный BIN может не соответствовать значениям `last4`, `expiry_year`, `expiry_month`. При оплате картой, сохраненной в Apple Pay или Google Pay, в параметре передается Device Account Number.
     */
    first6?: string;

    /**
     * Последние 4 цифры номера карты.
     */
    last4: string;

    /**
     * Срок действия, год, `YYYY`.
     */
    expiry_year: string;

    /**
     * Срок действия, месяц, `MM`.
     */
    expiry_month: string;

    /**
     * Код страны, в которой выпущена карта. Передается в формате ISO-3166 alpha-2. Пример: `RU`.
     */
    issuer_country?: CountryCode;

    /**
     * Наименование банка, выпустившего карту.
     */
    issuer_name?: string;

    /**
     * Источник данных банковской карты. Возможные значения: `apple_pay`, `google_pay`. Присутствует, если пользователь при оплате выбрал карту, сохраненную в Apple Pay или Google Pay.
     */
    source?: "apple_pay" | "google_pay";
  };
};

type PayInPartsPaymentMethod = BasePaymentMethod & { type: "installments" };
type CashPaymentMethod = BasePaymentMethod & { type: "cash" };
type B2BSberbankPaymentMethod = BasePaymentMethod & {
  type: "b2b_sberbank";
  /**
   * Банковские реквизиты плательщика (юридического лица или ИП).
   */
  payer_bank_details: {
    /**
     * Полное наименование организации.
     */
    full_string: string;

    /**
     * Сокращенное наименование организации.
     */
    short_name: string;

    /**
     * Адрес организации.
     */
    address: string;

    /**
     * Индивидуальный налоговый номер (ИНН) организации.
     */
    inn: string;

    /**
     * Код причины постановки на учет (КПП) организации.
     */
    kpp: string;

    /**
     * Наименование банка организации.
     */
    bank_name: string;

    /**
     * Отделение банка организации.
     */
    bank_branch: string;

    /**
     * Банковский идентификационный код (БИК) банка организации.
     */
    bank_bik: string;

    /**
     * Номер счета организации.
     */
    account: string;
  };

  /**
   * Назначение платежа (не больше 210 символов).
   */
  payment_purpose: string;

  /**
   * Данные о налоге на добавленную стоимость (НДС). Платеж может облагаться и не облагаться НДС. Товары могут облагаться по одной ставке НДС или по разным.
   */
  vat_data:
    | { type: "untaxed" }
    | { type: "calculated"; amount: PaymentAmount; rate: "7" | "10" | "18" | "20" }
    | { type: "mixed"; amount: PaymentAmount };
};

type SberbankOnlinePaymentMethod = BasePaymentMethod & {
  type: "sberbank";
  /**
   * Телефон пользователя, на который зарегистрирован аккаунт в Сбербанке Онлайн. Необходим для подтверждения оплаты по смс (сценарий подтверждения `external`). Указывается в формате [ITU-T E.164](https://ru.wikipedia.org/wiki/E.164), например `79000000000`.
   */
  phone?: string;
};

type TinkoffPaymentMethod = BasePaymentMethod & { type: "tinkoff_bank" };

type YooMoneyPaymentMethod = BasePaymentMethod & {
  type: "yoo_money";
  /**
   * Номер кошелька ЮMoney, из которого заплатил пользователь.
   */
  account_number?: string;
};

type ApplePayPaymentMethod = BasePaymentMethod & { type: "apple_pay" };
type GooglePayPaymentMethod = BasePaymentMethod & { type: "google_pay" };
type QiwiPaymentMethod = BasePaymentMethod & { type: "qiwi" };
type WeChatPaymentMethod = BasePaymentMethod & { type: "wechat" };
type WebMoneyPaymentMethod = BasePaymentMethod & { type: "webmoney" };

type AnyPaymentMethod =
  | AlfaClickPaymentMethod
  | MobileBalancePaymentMethod
  | CardPaymentMethod
  | PayInPartsPaymentMethod
  | CashPaymentMethod
  | B2BSberbankPaymentMethod
  | SberbankOnlinePaymentMethod
  | TinkoffPaymentMethod
  | YooMoneyPaymentMethod
  | ApplePayPaymentMethod
  | GooglePayPaymentMethod
  | QiwiPaymentMethod
  | WeChatPaymentMethod
  | WebMoneyPaymentMethod;

type PaymentConfirmation =
  | {
      type: "embedded";
      /**
       * Токен для инициализации платежного [виджета ЮKassa](https://yookassa.ru/developers/payment-forms/web/widget).
       */
      confirmation_token: string;
    }
  | {
      type: "external";
    }
  | {
      type: "qr";
      /**
       * Данные для генерации QR-кода.
       */
      confirmation_data: string;
    }
  | {
      type: "redirect";
      /**
       * URL, на который необходимо перенаправить пользователя для подтверждения оплаты.
       */
      confirmation_url: string;

      /**
       * Запрос на проведение платежа с аутентификацией по 3-D Secure. Будет работать, если оплату банковской картой вы по умолчанию принимаете без подтверждения платежа пользователем. В остальных случаях аутентификацией по 3-D Secure будет управлять ЮKassa. Если хотите принимать платежи без дополнительного подтверждения пользователем, напишите вашему менеджеру ЮKassa.
       */
      enforce?: boolean;

      /**
       * URL, на который вернется пользователь после подтверждения или отмены платежа на веб-странице.
       */
      return_url?: string;
    };

/**
 * 
 * 
 * @example
 * {
    "id": "22e12f66-000f-5000-8000-18db351245c7",
    "status": "waiting_for_capture",
    "paid": true,
    "amount": {
      "value": "2.00",
      "currency": "RUB"
    },
    "created_at": "2018-07-18T10:51:18.139Z",
    "description": "Заказ №72",
    "expires_at": "2018-07-25T10:52:00.233Z",
    "metadata": {},
    "payment_method": {
      "type": "bank_card",
      "id": "22e12f66-000f-5000-8000-18db351245c7",
      "saved": false,
      "card": {
        "first6": "555555",
        "last4": "4444",
        "expiry_month": "07",
        "expiry_year": "2022",
        "card_type": "MasterCard",
        "issuer_country": "RU",
        "issuer_name": "Sberbank"
      },
      "title": "Bank card *4444"
    },
    "recipient": {
      "account_id": "100001",
      "gateway_id": "1000001"
    },
    "refundable": false,
    "test": false,
    "income_amount": {
      "value": "1.97",
      "currency": "RUB"
    }
  }
 * 
 * 
 */
export type Payment = {
  /**
   * Идентификатор платежа в ЮKassa.
   */
  id: string;

  /**
   * Статус платежа. Возможные значения: `pending`, `waiting_for_capture`, `succeeded` и `canceled`.
   *
   * Подробнее про [жизненный цикл платежа](https://yookassa.ru/developers/payments/payment-process#lifecycle)
   */
  status: PaymentStatus;

  /**
   * Сумма платежа. Иногда партнеры ЮKassa берут с пользователя дополнительную комиссию, которая не входит в эту сумму.
   */
  amount: PaymentAmount;

  /**
   * Сумма платежа, которую получит магазин, — значение `amount` за вычетом комиссии ЮKassa. Если вы [партнер](https://yookassa.ru/developers/partners-api/basics) и для аутентификации запросов используете OAuth-токен, [запросите у магазина право](https://yookassa.ru/developers/partners-api/oauth#set-up-register-app) на получение информации о комиссиях при платежах.
   */
  income_amount?: PaymentAmount;

  /**
   * Описание транзакции (не более 128 символов), которое вы увидите в личном кабинете ЮKassa, а пользователь — при оплате. Например: «Оплата заказа № 72 для user@yoomoney.ru».
   */
  description?: string;

  /**
   * Получатель платежа.
   */
  recipient: PaymentRecipient;

  /**
   * [Способ оплаты](https://yookassa.ru/developers/payment-methods/overview#all), который был использован для этого платежа.
   */
  payment_method?: AnyPaymentMethod;

  /**
   * Время подтверждения платежа. Указывается по `UTC` и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  captured_at?: string;

  /**
   * Время создания заказа. Указывается по `UTC` и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). Пример: `2017-11-03T11:52:31.827Z`
   */
  created_at: string;

  /**
   * Время, до которого вы можете бесплатно отменить или подтвердить платеж. В указанное время платеж в статусе `waiting_for_capture` будет автоматически отменен. Указывается по `UTC` и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). Пример: `2017-11-03T11:52:31.827Z`
   */
  expires_at?: string;

  /**
   * Выбранный способ подтверждения платежа. Присутствует, когда платеж ожидает подтверждения от пользователя.
   *
   * Подробнее о [сценариях подтверждения](https://yookassa.ru/developers/payments/payment-process#user-confirmation)
   */
  confirmation?: PaymentConfirmation;

  /**
   * Признак тестовой операции.
   */
  test: boolean;

  /**
   * Сумма, которая вернулась пользователю. Присутствует, если у этого платежа есть успешные возвраты.
   */
  refund_amount?: PaymentAmount;

  /**
   * Признак оплаты заказа.
   */
  paid: boolean;

  /**
   * Возможность провести возврат по API.
   */
  refundable: boolean;

  /**
   * Статус доставки данных для чека в онлайн-кассу (`pending`, `succeeded` или `canceled`).
   *
   * Присутствует, если вы используете [решение ЮKassa для работы по 54-ФЗ](https://yookassa.ru/developers/54fz/basics).
   */
  receipt_registration?: "pending" | "succeeded" | "cancelled";

  /**
   * Любые дополнительные данные, которые нужны вам для работы с платежами (например, номер заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8.
   */
  metadata?: Record<string, any>;

  /**
   * Комментарий к статусу `canceled`: кто отменил платеж и по какой причине.
   *
   * Подробнее про [неуспешные платежи](https://yookassa.ru/developers/payments/declined-payments)
   */
  cancellation_details?: {
    /**
     * Участник процесса платежа, который принял решение об отмене транзакции. Может принимать значения `yoo_money`, `payment_network` и `merchant`. Подробнее про [инициаторов отмены платежа](https://yookassa.ru/developers/payments/declined-payments#cancellation-details-party)
     */
    party: "yoo_money" | "payment_network" | "merchant";

    /**
     * Причина отмены платежа. [Перечень и описание возможных значений](https://yookassa.ru/developers/payments/declined-payments#cancellation-details-reason)
     */
    reason:
      | "3d_secure_failed"
      | "call_issuer"
      | "canceled_by_merchant"
      | "card_expired"
      | "country_forbidden"
      | "expired_on_capture"
      | "expired_on_confirmation"
      | "fraud_suspected"
      | "general_decline"
      | "identification_required"
      | "insufficient_funds"
      | "internal_timeout"
      | "invalid_card_number"
      | "invalid_csc"
      | "issuer_unavailable"
      | "payment_method_limit_exceeded"
      | "payment_method_restricted"
      | "permission_revoked"
      | "unsupported_mobile_operator";
  };

  /**
   * Данные об авторизации платежа.
   */
  authorization_details?: {
    /**
     * Retrieval Reference Number — уникальный идентификатор транзакции в системе эмитента. Используется при оплате банковской картой.
     */
    rrn?: string;

    /**
     * Код авторизации банковской карты. Выдается эмитентом и подтверждает проведение авторизации.
     */
    auth_code?: string;
  };

  /**
   * Данные о распределении денег — сколько и в какой магазин нужно перевести. Присутствует, если вы используете [решение ЮKassa для платформ](https://yookassa.ru/developers/special-solutions/checkout-for-platforms/basics).
   */
  transfers?: {
    /**
     * Идентификатор магазина, в пользу которого вы принимаете оплату. Выдается ЮKassa, отображается в разделе. [Продавцы](https://yookassa.ru/my/marketplace/sellers) личного кабинета (столбец **shopId**).
     */
    account_id: string;

    /**
     * Сумма, которую необходимо перечислить магазину.
     */
    amount: PaymentAmount;

    /**
     * Статус распределения денег между магазинами. Возможные значения: `pending`, `waiting_for_capture`, `succeeded`, `canceled`.
     */
    status: "pending" | "waiting_for_capture" | "succeeded" | "canceled";

    /**
     * Комиссия за проданные товары и услуги, которая удерживается с магазина в вашу пользу.
     */
    platform_fee_amount?: PaymentAmount;

    metadata?: Record<string, any>;
  };
};

/**
 * Код ставки НДС передается в параметре vat_code. Возможные значения — цифра от 1 до 6.
 */
export enum VatCode {
  /**
   * Без НДС
   */
  NO_VAT = 1,
  /**
   * НДС по ставке 0%
   */
  VAT_0 = 2,
  /**
   * НДС по ставке 10%
   */
  VAT_10 = 3,
  /**
   * НДС чека по ставке 20%
   */
  VAT_20 = 4,
  /**
   * 	НДС чека по расчетной ставке 10/110
   */
  VAT_10_110 = 5,
  /**
   * НДС чека по расчетной ставке 20/120
   */
  VAT_20_120 = 6
}

export type VatCodeType = 1 | 2 | 3 | 4 | 5 | 6;

export type ReceiptCustomer = {
  full_name?: string;
  inn?: string;
  email?: string;
  phone?: string;
};

export type ReceiptItem = {
  description?: string;
  quantity?: string;
  amount: PaymentAmount;
  vat_code: VatCode | VatCodeType;
};

export type PaymentCreationParameters = Pick<
  Payment,
  "amount" | "description" | "confirmation" | "metadata" | "transfers"
> & {
  recipient?: Pick<PaymentRecipient, "gateway_id">;
  receipt?: {
    customer?: {};
  };
};
