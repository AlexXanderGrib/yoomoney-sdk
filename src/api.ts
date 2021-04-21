import type * as t from "./api.types";
import { Agent, fetch, QueryStringifiable } from "./fetch";
import { AnyRecord } from "./shared.types";

/**
 * Ошибка, которую выбрасывает API при ошибочном ответе от сервера
 */
export class YMApiError extends Error {
  public code: string;

  /**
   * Объект ответа
   * @param {AnyRecord} response
   */
  constructor(public response: AnyRecord) {
    super(`API returned error code: ${response["error"]}`);
    this.code = response["error"];
  }
}

/**
 * Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)
 *
 * @see {@link https://yoomoney.ru/docs/wallet|Описание}
 */
export class API {
  /**
   *
   * @param {string} token Токен авторизации пользователя
   * @param {string} endpoint По умолчанию `https://yoomoney.ru/api`
   */
  constructor(
    public token: string,
    public endpoint = "https://yoomoney.ru/api",
    public agent?: Agent
  ) {}

  /**
   * Позволяет совершить вызов произвольного метода API
   *
   * @template T
   * @param {string} method Название метода
   * @param {QueryStringifiable} parameters Параметры метода
   *
   * @return {Promise<T>}
   */
  async call<T = any>(method: string, parameters: QueryStringifiable): Promise<T> {
    const response = await fetch(
      `${this.endpoint}/${method}`,
      parameters,
      {
        Authorization: `Bearer ${this.token}`
      },
      this.agent
    );

    const data = await response.json();

    if (data.error) throw new YMApiError(data);

    return data;
  }

  /**
   * Получение информации о состоянии счета пользователя.
   *
   * Требуемые права токена: `account-info`.
   *
   * @return {t.AccountInfoResponse}
   */
  async accountInfo(): Promise<t.AccountInfoResponse> {
    return await this.call("account-info", {});
  }

  /**
   * Метод позволяет просматривать историю операций (полностью или частично) в постраничном режиме. Записи истории выдаются в обратном хронологическом порядке: от последних к более ранним.
   *
   * Требуемые права токена: `operation-history`.
   *
   * @param {t.OperationHistoryParams=} parameters Параметры вызова
   * @return {Promise<t.OperationHistoryResponse>}
   */
  async operationHistory(
    parameters: t.OperationHistoryParams = {}
  ): Promise<t.OperationHistoryResponse> {
    return await this.call("operation-history", parameters);
  }

  /**
   * Позволяет получить детальную информацию об операции из истории.
   *
   * Требуемые права токена: `operation-details`.
   *
   * @param {t.OperationDetailsParams=} parameters Параметры вызова
   * @return {Promise<t.Operation>}
   */
  async operationDetails(
    parameters: t.OperationDetailsParams
  ): Promise<t.Operation> {
    return await this.call("operation-history", parameters);
  }

  /**
   * Создание платежа, проверка параметров и возможности приема платежа магазином или перевода средств на счет пользователя ЮMoney.
   *
   * Требуемые права токена:
   * - для платежа в магазин: `payment.to-pattern` («шаблон платежа») или `payment-shop`.
   * - для перевода средств на счета других пользователей: `payment.to-account` («идентификатор получателя», «тип идентификатора») или `payment-p2p`.
   *
   * @param {t.RequestPaymentParams=} parameters Параметры вызова
   * @return {Promise<t.RequestPaymentResponse>}
   */
  async requestPayment(
    parameters: t.RequestPaymentParams
  ): Promise<t.RequestPaymentResponse> {
    return await this.call("request-payment", parameters);
  }

  /**
   * Подтверждение платежа, ранее созданного методом [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment). Указание метода проведения платежа.
   *
   * @param {t.ProcessPaymentParams=} parameters Параметры вызова
   * @return {Promise<t.ProcessPaymentResponse>}
   */
  async processPayment(
    parameters: t.ProcessPaymentParams
  ): Promise<t.ProcessPaymentResponse> {
    return await this.call("process-payment", parameters);
  }

  /**
   * Прием входящих переводов, защищенных кодом протекции, и переводов до востребования.
   *
   * Количество попыток приема входящего перевода с кодом протекции ограничено. При исчерпании количества попыток, перевод автоматически отвергается (перевод возвращается отправителю).
   *
   * Требуемые права токена: `incoming-transfers`
   *
   * @param {t.IncomingTransferAcceptParams=} parameters Параметры вызова
   * @return {Promise<t.IncomingTransferAcceptResponse>}
   */
  async incomingTransferAccept(
    parameters: t.IncomingTransferAcceptParams
  ): Promise<t.IncomingTransferAcceptResponse> {
    return await this.call("incoming-transfer-accept", parameters);
  }

  /**
   * Отмена входящих переводов, защищенных кодом протекции, и переводов до востребования. При отмене перевода он возвращается отправителю.
   *
   * Требуемые права токена: `incoming-transfers`
   *
   * @param {t.IncomingTransferRejectParams=} parameters Параметры вызова
   * @return {Promise<t.IncomingTransferRejectResponse>}
   */
  async incomingTransferReject(
    parameters: t.IncomingTransferRejectParams
  ): Promise<t.IncomingTransferRejectResponse> {
    return await this.call("incoming-transfer-accept", parameters);
  }
}
