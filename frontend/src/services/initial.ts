import api from "./api";

const getNews = api.get("/novidades").then((data) => { return data.data })

export { getNews }