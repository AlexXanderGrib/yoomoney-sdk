import type * as t from "./api.types";
import { Agent, fetch, QueryStringifiable } from "./fetch";
import type { AnyRecord } from "./shared.types";

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
    super(`API returned error code: ${response.error}`);
    this.code = response.error;
  }
}

/**
 * Ошибка, если API возвращает пустую строку ответе
 * Скорее всего это связано с отсутствием прав токена
 *
 * @see https://github.com/AlexXanderGrib/yoomoney-sdk/issues/4
 */
export class YMApiVoidResponseError extends Error {}

/**
 * Имплементирует [основное API YooMoney](https://yoomoney.ru/docs/wallet)
 *
 * @see {@link https://yoomoney.ru/docs/wallet|Описание}
 * @export
 * @class API
 */
export class API {
  /**
   * Creates an instance of API.
   * @param {string} token Токен авторизации пользователя
   * @param {string=} [endpoint="https://yoomoney.ru/api"] По умолчанию `https://yoomoney.ru/api`
   * @param {Agent=} [agent]
   * @memberof API
   */
  constructor(
    public token: string,
    public endpoint: string = "https://yoomoney.ru/api",
    public agent?: Agent
  ) {}

  /**
   * Позволяет совершить вызов произвольного метода API
   *
   * @template T
   * @param {string} method Название метода
   * @param {QueryStringifiable} parameters Параметры метода
   *
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
   *
   * @return {Promise<T>}
   */
  async call<T = any>(method: string, parameters: QueryStringifiable): Promise<T> {
    const data = await fetch(
      `${this.endpoint}/${method}`,
      parameters,
      {
        Authorization: `Bearer ${this.token}`
      },
      this.agent
    );

    if (data.error) throw new YMApiError(data);

    /* istanbul ignore next */
    if (typeof data === "string" && data.trim() === "") {
      /* istanbul ignore next */
      throw new YMApiVoidResponseError();
    }

    return data;
  }

  /**
   * Получение информации о состоянии счета пользователя.
   *
   * Требуемые права токена: `account-info`.
   *
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
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
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
   *
   * @param {t.OperationHistoryParameters=} [parameters={}] Параметры вызова
   * @return {Promise<t.OperationHistoryResponse>}
   */
  async operationHistory(
    parameters: t.OperationHistoryParameters = {}
  ): Promise<t.OperationHistoryResponse> {
    return await this.call("operation-history", parameters);
  }

  /**
   * Позволяет получить детальную информацию об операции из истории.
   *
   * Требуемые права токена: `operation-details`.
   *
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
   *
   * @param {t.OperationDetailsParameters} parameters Параметры вызова
   * @return {Promise<t.Operation>}
   */
  async operationDetails(
    parameters: t.OperationDetailsParameters
  ): Promise<t.Operation> {
    return await this.call("operation-details", parameters);
  }

  /**
   * Создание платежа, проверка параметров и возможности приема
   * платежа магазином или перевода средств на счет пользователя
   * ЮMoney.
   *
   * Требуемые права токена:
   * - для платежа в магазин: `payment.to-pattern`
   * («шаблон платежа») или `payment-shop`.
   *
   * - для перевода средств на счета других пользователей:
   *  `payment.to-account` («идентификатор получателя»,
   * «тип идентификатора») или `payment-p2p`.
   *
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
   *
   * @param {t.RequestPaymentParameters} parameters Параметры вызова
   * @return {Promise<t.RequestPaymentResponse>}
   */
  async requestPayment(
    parameters: t.RequestPaymentParameters
  ): Promise<t.RequestPaymentResponse> {
    /* istanbul ignore next */
    return await this.call("request-payment", parameters);
  }

  /**
   * Подтверждение платежа, ранее созданного методом
   * [request-payment](https://yoomoney.ru/docs/wallet/process-payments/request-payment).
   * Указание метода проведения платежа.
   *
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
   *
   * @param {t.ProcessPaymentParameters} parameters Параметры вызова
   * @return {Promise<t.ProcessPaymentResponse>}
   */
  async processPayment(
    parameters: t.ProcessPaymentParameters
  ): Promise<t.ProcessPaymentResponse> {
    /* istanbul ignore next */
    return await this.call("process-payment", parameters);
  }

  /**
   * Прием входящих переводов, защищенных кодом протекции, и
   * переводов до востребования.
   *
   * Количество попыток приема входящего перевода с кодом протекции
   * ограничено. При исчерпании количества попыток, перевод
   * автоматически отвергается (перевод возвращается отправителю).
   *
   * Требуемые права токена: `incoming-transfers`
   *
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
   *
   * @param {t.IncomingTransferAcceptParameters} parameters Параметры вызова
   * @return {Promise<t.IncomingTransferAcceptResponse>}
   */
  async incomingTransferAccept(
    parameters: t.IncomingTransferAcceptParameters
  ): Promise<t.IncomingTransferAcceptResponse> {
    /* istanbul ignore next */
    return await this.call("incoming-transfer-accept", parameters);
  }

  /**
   * Отмена входящих переводов, защищенных кодом протекции, и
   * переводов до востребования. При отмене перевода он возвращается
   * отправителю.
   *
   * Требуемые права токена: `incoming-transfers`
   *
   * @throws {YMApiError}
   * @throws {YMApiVoidResponseError}
   *
   * @param {t.IncomingTransferRejectParameters} parameters Параметры вызова
   * @return {Promise<t.IncomingTransferRejectResponse>}
   */
  async incomingTransferReject(
    parameters: t.IncomingTransferRejectParameters
  ): Promise<t.IncomingTransferRejectResponse> {
    /* istanbul ignore next */
    return await this.call("incoming-transfer-accept", parameters);
  }
}
