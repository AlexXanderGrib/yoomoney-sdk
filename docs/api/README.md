**YooMoney SDK**

***

# YooMoney SDK

> Типизированный SDK для API YooMoney для NodeJS

<center>
  <img src="_media/logo.svg" alt="YooMoney SDK" />
</center>

[![Test Status](https://github.com/AlexXanderGrib/yoomoney-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/yoomoney-sdk)
[![Downloads](https://img.shields.io/npm/dt/yoomoney-sdk.svg)](https://npmjs.com/package/yoomoney-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/yoomoney-sdk.svg)](https://github.com/AlexXanderGrib/yoomoney-sdk)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/yoomoney-sdk/main.svg)](https://codecov.io/gh/AlexXanderGrib/yoomoney-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/yoomoney-sdk.svg)](https://github.com/AlexXanderGrib/yoomoney-sdk)
[![yoomoney-sdk](https://snyk.io/advisor/npm-package/yoomoney-sdk/badge.svg)](https://snyk.io/advisor/npm-package/yoomoney-sdk)
[![Known Vulnerabilities](https://snyk.io/test/npm/yoomoney-sdk/badge.svg)](https://snyk.io/test/npm/yoomoney-sdk)
[![Quality](https://img.shields.io/npms-io/quality-score/yoomoney-sdk.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=yoomoney-sdk)
[![npm](https://img.shields.io/npm/v/yoomoney-sdk.svg)](https://npmjs.com/package/yoomoney-sdk)
[![license MIT](https://img.shields.io/npm/l/yoomoney-sdk.svg)](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/yoomoney-sdk)](https://bundlephobia.com/package/yoomoney-sdk)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d8a97f34bcf24d809f31c2603df416a6)](https://www.codacy.com/gh/AlexXanderGrib/yoomoney-sdk/dashboard?utm_source=github.com&utm_medium=referral&utm_content=AlexXanderGrib/yoomoney-sdk&utm_campaign=Badge_Grade)

## 🍬 Почему именно эта библиотека?

1. **Полная.** Покрывает следующие API:
   - [Авторизации приложения](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)
   - [API пользователя](https://yoomoney.ru/docs/wallet)
   - [Создание форм оплаты](https://yoomoney.ru/docs/payment-buttons/using-api/forms)
   - [Проверка уведомлений об оплате](https://yoomoney.ru/docs/payment-buttons/using-api/notifications)
2. **Простая.** на каждое API всего 1 класс
   - **Много [примеров](_media/README.md)**.
3. **Надёжная.** Библиотека написана на **TypeScript** и покрыта тестами.
4. [**Безопасная.**](_media/SECURITY.md) У библиотеки всего 2 зависимости, и она постоянно сканируется Code QL и [Snyk](https://snyk.io/advisor/npm-package/yoomoney-sdk) на наличие уязвимостей.

## 📦 Установка

- **Используя `npm`**
  ```shell
  npm i yoomoney-sdk
  ```
- **Используя `Yarn`**
  ```shell
  yarn add yoomoney-sdk
  ```
- **Используя `pnpm`**
  ```shell
  pnpm add yoomoney-sdk
  ```

## 🛠️ Использование

1. [⚙️ Список методов](_media/modules.md)
2. [🦄 Примеры](_media/README.md)
3. 🧑‍⚖️ Лицензия - [**MIT**](_media/LICENSE.txt)

## 💸 Как принимать оплату на свой кошелёк и получать уведомления

[См пример магазина](_media/3-gachi-shop.js)

### Обработка ошибок

Если вызов метода API возвращает ошибку (то-есть есть поле `error` в ответе), то библиотека кидает ошибку `YMApiError`, которая содержит поля:

- `code` - Значение поля `error` в ответе
- `response` - Ответ полностью

### Получение личного токена

```bash
# Клонируем репозиторий
git clone https://github.com/AlexXanderGrib/yoomoney-sdk.git

# Заходим в папку
cd yoomoney-sdk

# Устанавливаем зависимости
npm install

# Собираем библиотеку
npm run build

# Запускаем скрипт
node examples/4-get-token.js
```

#### Использование

```bash
# .env
YOOMONEY_TOKEN=4100117723869225.C277E77...
```

```javascript
// index.js
const { API } = require("yoomoney-sdk");
const { config } = require("dotenv");

// Подгружаем файл .env
config();

const api = new API(process.env.YOOMONEY_TOKEN);

api.accountInfo().then((info) => console.log(info));
```

## Информация

- Лицензия: [MIT](_media/LICENSE.txt)
- Поддержка: [Telegram - @AlexXanderGrib](https://t.me/AlexXanderGrib)
