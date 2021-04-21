import { createHash } from "crypto";

/* eslint-disable camelcase */

export type NotificationDTO = {
  notification_type: "p2p-incoming" | "card-incoming";
  operation_id: string;
  amount: number;
  withdraw_amount: number;
  currency: "643";
  datetime: string;
  sender: string;
  codepro: boolean;
  label: string;
  sha1_hash: string;
  test_notification: boolean;
  unaccepted: boolean;
  lastname?: string;
  firstname?: string;
  fathersname?: string;
  email?: string;
  phone?: string;
  city?: string;
  street?: string;
  building?: string;
  suite?: string;
  flat?: string;
  zip?: string;
};

/**
 * Ошибка проверки уведомления от YooMoney
 */
export class YMNotificationError extends Error {}

/**
 * Класс, который реализует [механизм проверки уведомлений от YooMoney](https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security)
 *
 * @see {@link https://yoomoney.ru/docs/wallet/using-api/notification-p2p-incoming#security|Описание механизма}
 */
export class NotificationChecker {
  /**
   *
   * @param {string} secret Секретное слово
   */
  constructor(private readonly secret: string) {}

  /**
   *
   * @param {*} notification Объект уведомления
   * @return {*}
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

    const hash = createHash("sha1").update(signature).digest("hex");

    // eslint-disable-next-line security/detect-possible-timing-attacks
    if (hash !== notification.sha1_hash) {
      throw new YMNotificationError(
        `Hash sum not matched: ${hash} !== ${notification.sha1_hash}`
      );
    }

    return {
      ...notification,
      amount: Number.parseFloat(notification.amount),
      notification_type: notification.notification_type as NotificationDTO["notification_type"],
      withdraw_amount: Number.parseFloat(notification.withdraw_amount) || 0,
      currency: notification.currency as NotificationDTO["currency"],
      codepro: Boolean(notification.codepro),
      test_notification: Boolean(notification.test_notification),
      unaccepted: Boolean(notification.unaccepted)
    };
  }
}
