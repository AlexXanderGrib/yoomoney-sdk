import { createHash, timingSafeEqual } from "crypto";
import { parse } from "querystring";
import type { RequestHandler } from "express";

export type NotificationDTO = {
  /**
   * Для переводов из кошелька — `p2p-incoming`.
   *
   * Для переводов с произвольной карты — `card-incoming`.
   */
  notification_type: "p2p-incoming" | "card-incoming";

  /** Идентификатор операции в истории счета получателя. */
  operation_id: string;

  /** Сумма, которая зачислена на счет получателя. */
  amount: number;

  /** Сумма, которая списана со счета отправителя. */
  withdraw_amount: number;

  /** Код валюты — всегда `643` (рубль РФ согласно ISO 4217). */
  currency: "643";

  /** Дата и время совершения перевода. */
  datetime: string;

  /**
   * Для переводов из кошелька — номер кошелька отправителя.
   *
   * Для переводов с произвольной карты — параметр содержит пустую
   * строку.
   */
  sender: string;

  /**
   * Для переводов из кошелька — перевод защищен кодом протекции.
   *
   * Для переводов с произвольной карты — всегда `false`.
   */
  codepro: boolean;

  /**
   * Метка платежа. Если ее нет, параметр содержит пустую строку.
   */
  label: string;

  /** SHA-1 hash параметров уведомления. */
  sha1_hash: string;

  test_notification: boolean;

  /**
   * Перевод еще не зачислен. Получателю нужно освободить место
   * в кошельке или использовать код протекции (если `codepro=true`).
   */
  unaccepted: boolean;

  /** Фамилия. */
  lastname?: string;

  /** Имя. */
  firstname?: string;

  /** Отчество. */
  fathersname?: string;

  /**
   * Адрес электронной почты отправителя перевода. Если почта не
   * запрашивалась, параметр содержит пустую строку.
   */
  email?: string;

  /**
   * Телефон отправителя перевода. Если телефон не запрашивался,
   * параметр содержит пустую строку.
   */
  phone?: string;

  /** Город. */
  city?: string;

  /** Улица. */
  street?: string;

  /** Дом. */
  building?: string;

  /** Корпус. */
  suite?: string;

  /** Квартира. */
  flat?: string;

  /** Индекс. */
  zip?: string;
};

/**
 * Ошибка проверки уведомления от YooMoney
 */
export class YMNotificationError extends Error {}

/**
 * @template {CallableFunction} T
 *
 * @param {T} function_
 * @return {T}
 */
function promise<T extends (...parameters: any) => any>(function_: T) {
  const wrapper = (...parameters: any[]): any => {
    try {
      const result = function_(...parameters);

      if (result instanceof Promise) return result;

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return wrapper as (
    ...arguments_: Parameters<T>
  ) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;
}

/**
 * Класс, который реализует [механизм проверки уведомлений от YooMoney](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)
 *
 * @see {@link https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security|Описание механизма}
 * @export
 * @class NotificationChecker
 */
export class NotificationChecker {
  /**
   * Creates an instance of NotificationChecker.
   * @param {string} secret Секретное слово
   * @memberof NotificationChecker
   */
  constructor(private readonly secret: string) {}

  /**
   * Проверяет полученное уведомление и возвращает типизированную версию
   *
   * @throws {YMNotificationError} Если хеш уведомления не совпадает
   * @param {Object} notification Объект уведомления
   * @return {NotificationDTO}
   * @memberof NotificationChecker
   */
  check(notification: Record<keyof NotificationDTO, string>): NotificationDTO {
    const notificationWithSecret = {
      ...notification,
      notification_secret: this.secret
    };

    const pattern =
      "notification_type&operation_id&amount&currency&datetime&sender&codepro&notification_secret&label";
    const signature = pattern
      .split("&")
      .map(
        (key) => notificationWithSecret[key as keyof typeof notificationWithSecret]
      )
      .join("&");

    const hash = createHash("sha1").update(signature).digest();

    if (!timingSafeEqual(hash, Buffer.from(notification.sha1_hash, "hex"))) {
      throw new YMNotificationError(`Notification hash mismatch`);
    }

    return {
      ...notification,
      amount: Number.parseFloat(notification.amount),
      notification_type:
        notification.notification_type as NotificationDTO["notification_type"],
      withdraw_amount: Number.parseFloat(notification.withdraw_amount) || 0,
      currency: notification.currency as NotificationDTO["currency"],
      codepro: Boolean(notification.codepro),
      test_notification: Boolean(notification.test_notification),
      unaccepted: Boolean(notification.unaccepted)
    };
  }

  /**
   *
   * `[Экспериментально]` Упрощает интеграцию с `express`
   *
   * #### Это middleware кидает ошибки, позаботьтесь об их обработке
   *
   * @param {Object} [options={}] Параметры обработки запроса
   * @param {boolean} [options.memo=true] Флаг для включения/отключения пропуска повторяющихся запросов, если один из них был успешно обработан
   * @memberof NotificationChecker
   * @param {RequestHandler<Record<string, string>, any, NotificationDTO>=} actualHandler
   * @return {RequestHandler}
   *
   * ##### Пример:
   * **В начале файла**
   * ```js
   * const nc = new YMNotificationChecker(process.env.YM_SECRET);
   *
   * ```
   * *`Вариант 1 - Классический`*
   *
   * ```js
   * app.post('/webhook/yoomoney', nc.middleware(), (req, res) => {
   *  req.body // Это `NotificationDTO`
   * })
   * ```
   *
   * *`Вариант 2 - Если нужны подсказки типов`*
   *
   * ```js
   * app.post('/webhook/yoomoney', nc.middleware({}, (req, res) => {
   *  req.body // Это `NotificationDTO`
   * }))
   * ```
   *
   *  **Обработка ошибок**
   * ```js
   * app.use((error, request, response, next) => {
   *  console.log(error); // [YMNotificationError: Notification hash mismatch]
   * })
   * ```
   */
  middleware(
    options: { memo?: boolean } = {},
    actualHandler: RequestHandler<Record<string, string>, any, NotificationDTO> = (
      _request,
      _response,
      next
    ) => next()
  ): RequestHandler {
    const calls = new Set<string>();
    const { memo = true } = options;

    return async (request, response, next) => {
      let body: Record<keyof NotificationDTO, string> = {} as any;

      if (!request.body) {
        const text = await new Promise<string>((resolve, reject) => {
          let accumulated = "";

          request.on("error", (error) => reject(error));
          request.on("data", (data) => (accumulated += String(data)));
          request.on("end", () => resolve(accumulated));
        });

        body = parse(text) as any;
      }

      if (typeof request.body === "object") {
        body = request.body;
      }

      const key = body.sha1_hash;

      if (memo && calls.has(key)) return next();

      try {
        const notification = this.check(body);
        request.body = notification;
      } catch (error) {
        return next(error);
      }
      if (!memo) return actualHandler(request, response, next);
      await promise(actualHandler)(request, response, next);

      calls.add(key);
    };
  }
}
