import axios from "axios";

const api = axios.create({
  baseURL: 'https://628965bbe5e5a9ad3218d8f0.mockapi.io/' ,
});

export default api;
