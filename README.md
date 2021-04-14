# YooMoney NodeJS SDK

## Почему именно эта библиотека?

1. Есть поддержка TypeScript
2. Покрывает большую часть https://yoomoney.ru/docs/wallet
3. Документация прямо в коде
4. Всего 2 зависимости: `node-fetch` и `redirect-form-builder` (для генерации html форм)
5. Есть API генерации frontend форм перенаправления для [Авторизации](https://yoomoney.ru/docs/wallet/using-api/authorization/basics) и [Оплаты](https://yoomoney.ru/docs/payment-buttons/using-api/forms)

## Работа с API

Простой пример

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

### Небольшое НО

Если API возвращает ошибку (то-есть поле `error` в ответе), то библиотека кидает ошибку `YMApiError`, которая содержит поля:

- `code` - Значение поля `error` в ответе
- `response` - Ответ полностью
