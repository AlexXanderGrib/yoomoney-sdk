yoomoney-sdk / [Exports](modules.md)

# YooMoney NodeJS SDK

[![license MIT](https://img.shields.io/npm/l/yoomoney-sdk?style=flat-square)](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/yoomoney-sdk?style=flat-square)](https://npmjs.com/package/yoomoney-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/yoomoney-sdk?style=flat-square)](https://github.com/AlexXanderGrib/yoomoney-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/yoomoney-sdk?style=flat-square)](https://github.com/AlexXanderGrib/yoomoney-sdk)

<center>
  <img src="docs/assets/logo.svg" alt="YooMoney SDK" />
</center>

## 🍬 Почему именно эта библиотека?

1. Есть поддержка TypeScript
2. Покрывает большую часть https://yoomoney.ru/docs/wallet
3. Документация прямо в коде (JSDoc)
4. Всего 2 зависимости: `axios` и `redirect-form-builder` (для генерации html форм)
5. Есть API генерации frontend форм перенаправления для [Авторизации](https://yoomoney.ru/docs/wallet/using-api/authorization/basics) и [Оплаты](https://yoomoney.ru/docs/payment-buttons/using-api/forms)
6. [Безопасная](./SECURITY.md) (Относительно)

## 📦 Установка

**Используя `NPM`**

```shell
npm i yoomoney-sdk
```

**Используя `Yarn`**

```shell
yarn add yoomoney-sdk
```

**Используя `pnpm`**

```shell
pnpm add yoomoney-sdk
```

## 🛠️ Использование

1. [⚙️ Список методов](./docs/api/modules.md)
2. [🦄 Примеры](./examples/README.md)
3. 🧑‍⚖️ Лицензия - [**MIT**](./LICENSE)

#### Небольшое НО

Если вызов метода API возвращает ошибку (то-есть есть поле `error` в ответе), то библиотека кидает ошибку `YMApiError`, которая содержит поля:

- `code` - Значение поля `error` в ответе
- `response` - Ответ полностью

## ❤️ Контрибьютинг

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
