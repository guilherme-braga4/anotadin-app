import axios from "axios";
//MockApi
// const api = axios.create({
//   baseURL: 'https://628965bbe5e5a9ad3218d8f0.mockapi.io/' ,
// });

//MockApi
const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/api' ,
});

export const apiCoin = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/'
})

//coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


export default api;
