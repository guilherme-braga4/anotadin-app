import axios from "axios";

const token = localStorage.getItem("@AnotadinApp JWT");
console.log("token API", token);


// const api = axios.create({
//   baseURL: 'http://127.0.0.1:3333/api', headers: {
//       Authorization: `Bearer ${token}`
//   },
// });

const api = axios.create({
  baseURL: 'https://anotadin-api.herokuapp.com/api', headers: {
      Authorization: `Bearer ${token}`
  },
});

export const apiCoin = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/'
})

//coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


export default api;
