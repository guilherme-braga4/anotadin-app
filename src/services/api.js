import axios from "axios";
//MockApi
// const api = axios.create({
//   baseURL: 'https://628965bbe5e5a9ad3218d8f0.mockapi.io/' ,
// });

//MockApi
const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/api' ,
});


export default api;
