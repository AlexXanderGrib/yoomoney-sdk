// import { API } from "yoomoney-sdk";
import { API } from "..";

const token = "..."; // Где-то здесь берём oauth токен кошелька

const api = new API(token);

api.accountInfo().then((info) => console.log(info));

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
