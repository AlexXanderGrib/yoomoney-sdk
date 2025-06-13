import { FormBuilder } from "redirect-form-builder";
import type { URL } from "url";
import type { AutoComplete } from "./autocomplete";

export const PaymentType = {
  FromCard: "AC",
  FromWallet: "PC",

  /** @deprecated **Вариант игнорируется ЮMoney**. Используйте {@link PaymentType.FromCard} (`"AC"`) */
  FromMobileBalance: "MC"
} as const;

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType];

export const QuickPayForm = {
  Button: "button"
} as const;

export type QuickPayForm = (typeof QuickPayForm)[keyof typeof QuickPayForm];

export type FormConfig = {
  /**
   * Номер кошелька ЮMoney, на который нужно зачислять деньги отправителей.
   */
  receiver: string;
  /**
   * Возможные значения:
   *
   * `button` — единственное валидной значение;
   *
   * Остальные сохранены для обратной совместимости
   *
   *
   */
  quickPayForm?: AutoComplete<QuickPayForm>;

  /**
   * Назначение платежа. (До 150 символов)
   *
   * @deprecated **Поле игнорируется ЮMoney**
   */
  targets?: string;

  /**
   * Способ оплаты. Возможные значения:
   *
   * `PC` — оплата из кошелька ЮMoney;
   *
   * `AC` — с банковской карты;
   *
   */
  paymentType?: AutoComplete<PaymentType>;

  /**
   * Сумма перевода (спишется с отправителя).
   */
  sum: number;

  /**
   * Название перевода в истории отправителя (для переводов из кошелька или с привязанной карты). Отображается в кошельке отправителя.
   *
   * Удобнее всего формировать его из названий магазина и товара. Например: `Мой магазин: валенки белые`
   *
   * @deprecated **Поле игнорируется ЮMoney**
   */
  formComment?: string;

  /**
   * Название перевода на странице подтверждения. Рекомендуем делать его таким же, как `formComment`.
   *
   * @deprecated **Поле игнорируется ЮMoney**
   *
   */
  shortDest?: string;
  /** Метка, которую сайт или приложение присваивает конкретному переводу. Например, в качестве метки можно указывать код или идентификатор заказа. (До 64 символов) */
  label?: string;

  /**
   * Поле, в котором можно передать комментарий отправителя перевода. (До 200 символов)
   *
   * @deprecated **Поле игнорируется ЮMoney**
   *
   */
  comment?: string;

  /** URL-адрес для редиректа после совершения перевода. */
  successURL?: string;

  /**
   * Нужны ФИО отправителя.
   *
   * @deprecated **Поле игнорируется ЮMoney**
   *
   * */
  needFio?: boolean;

  /**
   *  Нужна электронная почты отправителя.
   *
   * @deprecated **Поле игнорируется ЮMoney**
   *
   **/
  needEmail?: boolean;

  /**
   * Нужен телефон отправителя.
   *
   * @deprecated **Поле игнорируется ЮMoney**
   *
   * */
  needPhone?: boolean;

  /**
   * Нужен адрес отправителя.
   *
   * @deprecated **Поле игнорируется ЮMoney**
   *
   * */
  needAddress?: boolean;
};

type FormQueryObject = Record<
  "receiver" | "quickpay-form" | "paymentType" | "sum",
  string
> &
  Partial<
    Record<
      | "formcomment"
      | "short-dest"
      | "label"
      | "comment"
      | "successURL"
      | "need-fio"
      | "need-email"
      | "need-phone"
      | "need-address"
      | "targets",
      string
    >
  >;

/**
 *
 * @param {FormConfig} config
 * @return {FormQueryObject}
 */
function convert(config: FormConfig): FormQueryObject {
  return {
    "quickpay-form": config.quickPayForm ?? "button",
    paymentType: config.paymentType ?? PaymentType.FromCard,
    receiver: config.receiver,
    sum: config.sum.toString(),
    targets: config.targets,
    "need-address": String(!!config.needAddress),
    "need-email": String(!!config.needEmail),
    "need-fio": String(!!config.needFio),
    "need-phone": String(!!config.needPhone),
    "short-dest": config.shortDest,
    comment: config.comment,
    formcomment: config.formComment,
    label: config.label,
    successURL: config.successURL
  };
}

const FORM_ACTION_URL = "https://yoomoney.ru/quickpay/confirm.xml";

/**
 * Генерирует HTML формы для переводов
 * @class PaymentFormBuilder
 */
export class PaymentFormBuilder {
  static readonly FORM_ACTION_URL = FORM_ACTION_URL;

  /**
   *
   * Creates an instance of PaymentFormBuilder.
   * @param {FormConfig} [config={
   *   receiver: "",
   *   sum: 10,
   * }] Изначальные настройки формы
   */
  constructor(public readonly config: FormConfig = { receiver: "", sum: 10 }) {}

  /**
   * Генерирует стандартные сеттеры
   *
   * @param {string} field
   * @return {Function}
   * @private
   */
  private _makeSetter<T extends keyof FormConfig>(
    field: T
  ): (value: FormConfig[T]) => this {
    return (value: FormConfig[T]) => Object.defineProperty(this, field, { value });
  }

  /**
   * Задаёт сумму платежа
   *
   * @alias {@link setSum}
   * @param {string | number} amount Сумма
   * @return {this}
   */
  setAmount(amount: number | string): this {
    this.config.sum = Number.parseFloat(
      Number.parseFloat(amount.toString()).toFixed(2)
    );

    return this;
  }

  /**
   * Задаёт сумму платежа
   *
   * @alias {@link setAmount}
   * @param {string | number} amount Сумма
   * @return {this}
   */
  setSum(amount: number | string): this {
    this.config.sum = Number.parseFloat(
      Number.parseFloat(amount.toString()).toFixed(2)
    );

    return this;
  }

  /**
   * Задаёт получателя платежа
   *
   * @param {string | number} receiver Получатель
   * @return {this}
   */
  setReceiver(receiver: number | string): this {
    this.config.receiver = receiver.toString();
    return this;
  }

  /**
   * Задаёт URL перенаправления после успешного платежа
   *
   * @param {string | URL} url URL
   * @return {this}
   */
  setSuccessURL(url: string | URL): this {
    this.config.successURL = url.toString();
    return this;
  }

  readonly setQuickPayForm = this._makeSetter("quickPayForm");
  readonly setPaymentType = this._makeSetter("paymentType");
  readonly setLabel = this._makeSetter("label");

  /** @deprecated **Поле игнорируется ЮMoney** */
  readonly setTargets = this._makeSetter("targets");
  /** @deprecated **Поле игнорируется ЮMoney** */
  readonly setFormComment = this._makeSetter("formComment");
  /** @deprecated **Поле игнорируется ЮMoney** */
  readonly setShortDest = this._makeSetter("shortDest");
  /** @deprecated **Поле игнорируется ЮMoney** */
  readonly setComment = this._makeSetter("comment");

  /**
   * @deprecated **Поле игнорируется ЮMoney**
   *
   * @param {boolean} [doRequire=true]
   * @return {this}
   */
  requireFio(doRequire = true): this {
    this.config.needFio = doRequire;
    return this;
  }

  /**
   * @deprecated **Поле игнорируется ЮMoney**
   *
   * @param {boolean} [doRequire=true]
   * @return {this}
   */
  requireAddress(doRequire = true): this {
    this.config.needAddress = doRequire;
    return this;
  }

  /**
   * @deprecated **Поле игнорируется ЮMoney**
   *
   * @param {boolean} [doRequire=true]
   * @return {this}
   */
  requireEmail(doRequire = true): this {
    this.config.needEmail = doRequire;
    return this;
  }

  /**
   * @deprecated **Поле игнорируется ЮMoney**
   *
   * @param {boolean} [doRequire=true]
   * @return {this}
   */
  requirePhone(doRequire = true): this {
    this.config.needPhone = doRequire;
    return this;
  }

  /**
   * Генерирует HTML на основе заданных параметров
   * @param {boolean} [fullPage=false]
   * @return {string}
   */
  buildHtml(fullPage = false): string {
    const fields = convert(this.config);
    return new FormBuilder(FORM_ACTION_URL, "POST", fields).buildHtml(fullPage);
  }
}
