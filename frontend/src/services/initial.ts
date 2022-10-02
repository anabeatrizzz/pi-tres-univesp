import api from "./api";

const getNews = api.get("/novidades")

export { getNews }