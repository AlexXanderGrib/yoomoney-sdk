# YooMoney NodeJS SDK

[![license MIT](https://img.shields.io/npm/l/yoomoney-sdk?style=flat-square)](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/yoomoney-sdk?style=flat-square)](https://npmjs.com/package/yoomoney-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/yoomoney-sdk?style=flat-square)](https://github.com/AlexXanderGrib/yoomoney-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/yoomoney-sdk?style=flat-square)](https://github.com/AlexXanderGrib/yoomoney-sdk)

<center>
  <img src="docs/assets/logo.svg" alt="YooMoney SDK" />
</center>

## Содержание

- [YooMoney NodeJS SDK](#yoomoney-nodejs-sdk)
  - [Содержание](#содержание)
  - [Почему именно эта библиотека?](#почему-именно-эта-библиотека)
  - [📦 Установка](#-установка)
    - [NPM:](#npm)
    - [Yarn:](#yarn)
  - [✏️ Примеры](#️-примеры)
    - [🔎 Получение информации о владельце кошелька](#-получение-информации-о-владельце-кошелька)
    - [💸 Отправка перевода](#-отправка-перевода)
    - [Приём платежей](#приём-платежей)
    - [Небольшое НО](#небольшое-но)
  - [ℹ️ Доп. информация](#ℹ️-доп-информация)
    - [🧑‍⚖️ Лицензия](#️-лицензия)
    - [❤️ Контрибьютинг](#️-контрибьютинг)
    - [🙋 Поддержка](#-поддержка)
    - [Интересует приём и отправка P2P платежей по РФ на NodeJS?](#интересует-приём-и-отправка-p2p-платежей-по-рф-на-nodejs)

## Почему именно эта библиотека?

1. Есть поддержка TypeScript
2. Покрывает большую часть https://yoomoney.ru/docs/wallet
3. Документация прямо в коде
4. Всего 2 зависимости: `node-fetch` и `redirect-form-builder` (для генерации html форм)
5. Есть API генерации frontend форм перенаправления для [Авторизации](https://yoomoney.ru/docs/wallet/using-api/authorization/basics) и [Оплаты](https://yoomoney.ru/docs/payment-buttons/using-api/forms)

## 📦 Установка

### NPM:

```shell
npm i -S yoomoney-sdk
```

### Yarn:

```shell
yarn add yoomoney-sdk
```

## ✏️ Примеры

### 🔎 Получение информации о владельце кошелька

```typescript
import { YMApi } from "yoomoney-sdk";

const token = "..."; // Где-то здесь берём oauth токен кошелька

const api = new YMApi(token);

api.accountInfo().then(console.log);
```

Который в консоль выведет

```javascript
{
  account: '41xxxxxxxxxx848',
  balance: 34.18,
  currency: '643',
  account_type: 'personal',
  identified: true,
  account_status: 'identified',
  balance_details: { total: 34.18, available: 34.18 }
}
```

### 💸 Отправка перевода

```typescript
// Платежи куда угодно 101

import { YMApi, ymTypes } from "yoomoney-sdk";

const api = new YMApi(process.env.YM_TOKEN);

type PayoutMethod = "qiwi" | "yoomoney" | "card" | "mobile";

function getRequest(
  method: PayoutMethod,
  account: string,
  amount: number
): ymTypes.RequestPaymentParams {
  switch (method) {
    case "yoomoney":
      return {
        amount,
        pattern_id: "p2p",
        to: account
      };

    case "qiwi":
      // Взято из доков и с https://yoomoney.ru/api/showcase/97186
      return {
        rapida_param1: account.slice(1),
        netSum: amount.toString(),
        pattern_id: "97186",
        ShopID: "135960",
        ShowCaseID: "44",
        ShopArticleID: "434586"
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
```

### Приём платежей

```javascript
// ♂️Gachi♂️ магазинчик на Express
const express = require("express");
const app = express();
const { YMPaymentFromBuilder } = require("yoomoney-sdk");

const port = parseInt(process.env.PORT);

app.get("/pay", (_req, res) => {
  const builder = new YMPaymentFromBuilder()
    .setQuickPayForm("shop")
    .setAmount((300 * 74.3).toFixed(2)) // 300 баксов
    .requirePhone() // Требуем с плательщика ввести телефон
    .setSuccessURL(`http://localhost:${port}/success`)
    .setPaymentType("AC") // Просим деньги с карты
    .setReceiver("410016348581848") // Номер кошелька получателя (ваш)
    .setLabel("payment-001") // Чтобы потом вычленить в уведомлении
    .setComment("За ♂️Fisting♂️");

  res.whiteHead(200, "OK", {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(builder.buildHtml());
});

app.get("/success", (_req, res) => {
  res.end("Спасибо за покупку!");
});

app.listen(port);
```

### Небольшое НО

Если API возвращает ошибку (то-есть поле `error` в ответе), то библиотека кидает ошибку `YMApiError`, которая содержит поля:

- `code` - Значение поля `error` в ответе
- `response` - Ответ полностью

## ℹ️ Доп. информация

**🇬🇧: `Additional info`**

### 🧑‍⚖️ Лицензия

**🇬🇧: `License`**

[**MIT**](./LICENSE)

### ❤️ Контрибьютинг

**🇬🇧: `Contributing`**

_Что делаем?_:

1. ⁉️ Не стесняемся писать [Issue](https://github.com/AlexXanderGrib/yoomoney-sdk/issues/new)
2. 🛠️ Если хотите что-то поправить следуйте гайду [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Донатим 👉 https://sobe.ru/na/yoomoney_sdk
4. 🌟 Ставим [звёздочки](https://github.com/AlexXanderGrib/yoomoney-sdk/stargazers), если библиотека понравилась.

### 🙋 Поддержка

**🇬🇧: `Support`**

Библиотека - маленькая, я отвечаю быстро. Не стесняйтесь писать Issue, даже если кажется что они глупые. Если что, можете писать в

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

### Интересует приём и отправка P2P платежей по РФ на NodeJS?

У нас есть точно такое-же типизированное SDK для QIWI 👉 [github.com/AlexXanderGrib/node-qiwi-sdk](https://github.com/AlexXanderGrib/node-qiwi-sdk)
