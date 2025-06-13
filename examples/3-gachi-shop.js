// ♂️Gachi♂️ магазинчик на Express

const express = require("express");

const app = express();
// const { YMPaymentFromBuilder, YMFormPaymentType, YMNotificationChecker, YMNotificationError } = require("yoomoney-sdk");
const {
  YMPaymentFromBuilder,
  YMFormPaymentType,
  YMNotificationChecker,
  YMNotificationError
} = require("..");

// YOOMONEY_SECRET - Секрет для проверки подлинности из настроек уведомлений
const notificationChecker = new YMNotificationChecker(process.env.YOOMONEY_SECRET);

const port = parseInt(process.env.PORT, 30);

app.get("/pay", (_req, res) => {
  const builder = new YMPaymentFromBuilder({
    // 300 баксов
    sum: (300 * 74.3).toFixed(2),

    // Номер кошелька получателя (ваш)
    receiver: "4100117723869225",

    // Добавляем метку, чтобы потом вычленить в уведомлении
    label: "payment-001",

    // Делаем перенаправление, чтобы пользователь вернулся в магазин
    // после покупки, обрабатываем на 48 строке
    successURL: `http://localhost:${port}/success`
  });

  res.writeHead(200, "OK", {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(builder.buildHtml(true)); // true = делаем полную страничку, а не только форму
});

app.get("/success", (_req, res) => {
  // Тут никакой логики особо быть не может, факт прихода платежа
  // надо обрабатывать слушая уведомления
  res.end("Спасибо за покупку!");
});

// УВЕДОМЛЕНИЯ

// Идём на https://yoomoney.ru/transfer/myservices/http-notification
// И вписываем туда этот URL на домене, чтобы получить уведомления.
// Секрет для проверки подлинности от туда делаем переменной окружения
// см. 14 строку

// Пример DEV: https://aboba.ngrok.io/yoomoney/secret-path/notification
// Пример PROD: https://myshop.ru/yoomoney/secret-path/notification
app.post(
  "/yoomoney/secret-path/notification",
  // Параметр `memo=false` отключает запоминание обработанных уведомлений
  // Он по умолчанию включён, но для тестирования на localhost'е
  // где вы можете кидать одно и то же уведомление несколько раз
  // лучше выключить
  notificationChecker.middleware({ memo: false }, (req, res) => {
    console.log(req.body.label);

    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.end("ok");
  })
);

app.use((error, _req, _res, next) => {
  if (error instanceof YMNotificationError) {
    // Кто-то попытался отправить фальшивое уведомление об оплате
    console.log(error);
  }

  return next();
});

app.listen(port);
