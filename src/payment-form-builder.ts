import type { URL } from "url";
import { FormBuilder } from "./form-builder";

/* eslint-disable no-useless-constructor */
export type FormConfig = {
  /**
   * Номер кошелька ЮMoney, на который нужно зачислять деньги отправителей.
   */
  receiver: string;
  /**
   * Возможные значения:
   *
   * `shop` — для универсальной формы;
   *
   * `small` — для кнопки;
   *
   * `donate` — для «благотворительной» формы.
   */
  quickPayForm: "shop" | "small" | "donate";

  /**
   * Назначение платежа. (До 150 символов)
   */
  targets: string;

  /**
   * Способ оплаты. Возможные значения:
   *
   * `PC` — оплата из кошелька ЮMoney;
   *
   * `AC` — с банковской карты;
   *
   * `MC` — с баланса мобильного.
   */
  paymentType: "PC" | "AC" | "MC";

  /**
   * Сумма перевода (спишется с отправителя).
   */
  sum: number;

  /**
   * Название перевода в истории отправителя (для переводов из кошелька или с привязанной карты). Отображается в кошельке отправителя.
   *
   * Удобнее всего формировать его из названий магазина и товара. Например: `Мой магазин: валенки белые`
   */
  formComment?: string;
  /** Название перевода на странице подтверждения. Рекомендуем делать его таким же, как `formComment`. */
  shortDest?: string;
  /** Метка, которую сайт или приложение присваивает конкретному переводу. Например, в качестве метки можно указывать код или идентификатор заказа. (До 64 символов) */
  label?: string;
  /** Поле, в котором можно передать комментарий отправителя перевода. (До 200 символов) */
  comment?: string;
  /** URL-адрес для редиректа после совершения перевода. */
  successURL?: string;
  /** Нужны ФИО отправителя. */
  needFio?: boolean;
  /** Нужна электронная почты отправителя. */
  needEmail?: boolean;
  /** Нужен телефон отправителя. */
  needPhone?: boolean;
  /** Нужен адрес отправителя. */
  needAddress?: boolean;
};

type FormQueryObject = Record<
  "receiver" | "quickpay-form" | "targets" | "paymentType" | "sum",
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
      | "need-address",
      string
    >
  >;

function convert(config: FormConfig): FormQueryObject {
  return {
    "quickpay-form": config.quickPayForm,
    paymentType: config.paymentType,
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
    successURL: config.successURL,
  };
}
export class PaymentFromBuilder {
  constructor(
    public readonly config: FormConfig = {
      paymentType: "PC",
      receiver: "",
      sum: 100,
      quickPayForm: "shop",
      targets: "",
    }
  ) {}

  private _makeSetter<T extends keyof FormConfig>(field: T) {
    return (value: FormConfig[T]) => {
      this.config[field] = value;
      return this;
    };
  }

  setAmount(amount: number | string) {
    this.config.sum = parseFloat(amount.toString());
    return this;
  }

  setReceiver(receiver: number | string) {
    this.config.receiver = receiver.toString();
    return this;
  }

  setSuccessURL(url: string | URL) {
    this.config.successURL = url.toString();
    return this;
  }

  readonly setTargets = this._makeSetter("targets");
  readonly setPaymentType = this._makeSetter("paymentType");
  readonly setQuickPayForm = this._makeSetter("quickPayForm");
  readonly setType = this._makeSetter("quickPayForm");
  readonly setFormComment = this._makeSetter("formComment");
  readonly setShortDest = this._makeSetter("shortDest");
  readonly setLabel = this._makeSetter("label");
  readonly setComment = this._makeSetter("comment");

  requireFio(doRequire = true) {
    this.config.needFio = doRequire;
    return this;
  }

  requireAddress(doRequire = true) {
    this.config.needAddress = doRequire;
    return this;
  }

  requireEmail(doRequire = true) {
    this.config.needEmail = doRequire;
    return this;
  }

  requirePhone(doRequire = true) {
    this.config.needPhone = doRequire;
    return this;
  }

  buildHtml() {
    return new FormBuilder(
      "https://yoomoney.ru/quickpay/confirm.xml",
      "POST",
      convert(this.config)
    ).buildHtml();
  }
}
