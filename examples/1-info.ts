// import { YMApi } from "yoomoney-sdk";
import { YMApi } from "..";

const token = "..."; // Где-то здесь берём oauth токен кошелька

const api = new YMApi(token);

api.accountInfo().then(console.log);

// В консоль выведет
// {
//   account: '41xxxxxxxxxx848',
//   balance: 34.18,
//   currency: '643',
//   account_type: 'personal',
//   identified: true,
//   account_status: 'identified',
//   balance_details: { total: 34.18, available: 34.18 }
// }
