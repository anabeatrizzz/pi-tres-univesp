import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8081",
  headers: {"Access-Control-Allow-Origin": "*"},
  timeout: 1000,
})

export default api