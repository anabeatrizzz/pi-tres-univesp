import axios from "axios"

const baseURL = "http://www.clovisgarcia.com.br:8079";

const api = axios.create({
  baseURL,
  headers: { "Access-Control-Allow-Origin": "*" },
  timeout: 1000,
})

export default api