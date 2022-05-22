QIWI SDK / [Modules](modules.md)

# YooMoney SDK

> Типизированный SDK для API YooMoney для NodeJS

<center>
  <img src="docs/assets/logo.svg" alt="YooMoney SDK" />
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

## 🍬 Почему именно эта библиотека?

1. **Полная.** Покрывает следующие API:
   - [Авторизации приложения](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)
   - [API пользователя](https://yoomoney.ru/docs/wallet)
   - [Создание форм оплаты](https://yoomoney.ru/docs/payment-buttons/using-api/forms)
   - [Проверка уведомлений об оплате](https://yoomoney.ru/docs/payment-buttons/using-api/notifications)
2. **Простая.** на каждое API всего 1 класс
   - **Много [примеров](./examples/README.md)**.
3. **Надёжная.** Библиотека написана на **TypeScript** и покрыта тестами.
4. [**Безопасная.**](./SECURITY.md) У библиотеки всего 2 зависимости, и она постоянно сканируется Code QL и [Snyk](https://snyk.io/advisor/npm-package/yoomoney-sdk) на наличие уязвимостей.

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

1. [⚙️ Список методов](./docs/api/modules.md)
2. [🦄 Примеры](./examples/README.md)
3. 🧑‍⚖️ Лицензия - [**MIT**](./LICENSE)

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

## Лицензия

Проект распространяется под лицензией MIT. Смотрите [LICENSE.txt](./LICENSE.txt)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAlexXanderGrib%2Fyoomoney-sdk.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FAlexXanderGrib%2Fyoomoney-sdk?ref=badge_large)

## ❤️ Содействие (Contributing)

_Что делаем?_:

1. ⁉️ Не стесняемся писать [Issue](https://github.com/AlexXanderGrib/yoomoney-sdk/issues/new)
2. 🛠️ Если хотите что-то поправить следуйте гайду [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Донатим 👉 https://sobe.ru/na/yoomoney_sdk
4. 🌟 Ставим [звёздочки](https://github.com/AlexXanderGrib/yoomoney-sdk/stargazers), если библиотека понравилась.

## 🙋 Поддержка

Библиотека - маленькая, я отвечаю быстро. Не стесняйтесь писать Issue, даже если кажется что они глупые. Если что, можете писать в

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

## Интересует приём и отправка P2P платежей по РФ на NodeJS?

У нас есть точно такое-же типизированное SDK для QIWI 👉 [github.com/AlexXanderGrib/node-qiwi-sdk](https://github.com/AlexXanderGrib/node-qiwi-sdk)
