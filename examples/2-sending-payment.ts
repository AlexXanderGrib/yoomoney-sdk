// Платежи куда угодно 101

// import { API, ymTypes } from "yoomoney-sdk";
import { API, ymTypes } from "..";

const api = new API(process.env.YM_TOKEN ?? "");

type PayoutMethod = "qiwi" | "yoomoney" | "card" | "mobile";

/**
 *
 * @param {PayoutMethod} method
 * @param {string} account Номер счёта. Только цифры. В случае телефона с кодом страны "79123456789"
 * @param {number} amount
 * @returns
 */
function getRequest(
  method: PayoutMethod,
  account: string,
  amount: number
): ymTypes.RequestPaymentParameters {
  switch (method) {
    case "yoomoney":
      return {
        amount,
        pattern_id: "p2p",
        to: account
      };

    case "qiwi":
      return {
        // Взято из доков и с https://yoomoney.ru/api/showcase/97186
        pattern_id: "97186",

        // Десять цифр после кода +7
        // Пополнить кошелёк можно только по российскому номеру
        rapida_param1: account.slice(1),

        // Сумма
        // Минимальная сумма платежа — 10 ₽. Максимум к оплате с учетом комиссии — 15 000 ₽
        // 10 - 14563.11 (3% комиссия)
        netSum: amount.toString(),

        // hidden_fields
        ShopID: "972463",
        ShopArticleID: "2030985",
        ShowCaseID: "44"
      };

    case "mobile":
      return {
        pattern_id: "phone-topup",
        "phone-number": account,
        amount
      };

    case "card":
      // Искал часа 2 как сделать перевод через API - ничего
      throw new Error("Метод недоступен");
  }
}

async function sendPayment(method: PayoutMethod, account: string, amount: number) {
  // Запрашиваем платёж
  const request = await api.requestPayment(getRequest(method, account, amount));

  // Где-то тут можно сохранить ID платежа в ДБ и оставить на потом

  // Подтверждаем платёж
  const response = await api.processPayment({
    money_source: "wallet",
    request_id: request.request_id
  });

  console.log(response);
}

// Донатим на разработку этой библиотеки :)
sendPayment("yoomoney", "410016348581848", 100);
