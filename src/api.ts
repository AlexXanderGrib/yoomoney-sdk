import type * as t from "./api.types";
import { fetch, QueryStringifiable } from "./fetch";

export class YMApiError extends Error {
  public code: string;

  constructor(public response: any) {
    super(`API returned error code: ${response.error}`);
    this.code = response.error;
  }
}

export class API {
  constructor(
    public readonly token: string,
    public readonly endpoint = "https://yoomoney.ru/api"
  ) {}

  async call(method: string, params: QueryStringifiable) {
    const response = await fetch(`${this.endpoint}/${method}`, params, {
      Authorization: `Bearer ${this.token}`,
    });

    const data = await response.json();

    if (data.error) throw new YMApiError(data);

    return data;
  }

  /**
   * Получение информации о состоянии счета пользователя.
   *
   * Требуемые права токена: `account-info`.
   */
  async accountInfo(): Promise<t.AccountInfoResponse> {
    return await this.call("account-info", {});
  }

  /**
   * Метод позволяет просматривать историю операций (полностью или частично) в постраничном режиме. Записи истории выдаются в обратном хронологическом порядке: от последних к более ранним.
   *
   * Требуемые права токена: `operation-history`.
   */
  async operationHistory(
    params: t.OperationHistoryParams = {}
  ): Promise<t.OperationHistoryResponse> {
    return await this.call("operation-history", params);
  }

  /**
   * Позволяет получить детальную информацию об операции из истории.
   *
   * Требуемые права токена: `operation-details`.
   */
  async operationDetails(
    params: t.OperationDetailsParams
  ): Promise<t.Operation> {
    return await this.call("operation-history", params);
  }

  /**
   * Создание платежа, проверка параметров и возможности приема платежа магазином или перевода средств на счет пользователя ЮMoney.
   *
   * Требуемые права токена:
   * - для платежа в магазин: `payment.to-pattern` («шаблон платежа») или `payment-shop`.
   * - для перевода средств на счета других пользователей: `payment.to-account` («идентификатор получателя», «тип идентификатора») или `payment-p2p`.
   */
  async requestPayment(
    params: t.RequestPaymentParams
  ): Promise<t.RequestPaymentResponse> {
    return await this.call("request-payment", params);
  }

  /**
   * Подтверждение платежа, ранее созданного методом [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment). Указание метода проведения платежа.
   */
  async processPayment(
    params: t.ProcessPaymentParams
  ): Promise<t.ProcessPaymentResponse> {
    return await this.call("process-payment", params);
  }

  /**
   * Прием входящих переводов, защищенных кодом протекции, и переводов до востребования.
   *
   * Количество попыток приема входящего перевода с кодом протекции ограничено. При исчерпании количества попыток, перевод автоматически отвергается (перевод возвращается отправителю).
   *
   * Требуемые права токена: `incoming-transfers`
   */
  async incomingTransferAccept(
    params: t.IncomingTransferAcceptParams
  ): Promise<t.IncomingTransferAcceptResponse> {
    return await this.call("incoming-transfer-accept", params);
  }

  /**
   * Отмена входящих переводов, защищенных кодом протекции, и переводов до востребования. При отмене перевода он возвращается отправителю.
   *
   * Требуемые права токена: `incoming-transfers`
   */
  async incomingTransferReject(
    params: t.IncomingTransferRejectParams
  ): Promise<t.IncomingTransferRejectResponse> {
    return await this.call("incoming-transfer-accept", params);
  }
}
