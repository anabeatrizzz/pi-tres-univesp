import api from "./api";

const getNews = api.get("/novidades")
  .then(data => { return data.data })

function postNews(data: any) {
  api.post("/novidades", data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function deleteNews(id: number) {
  api.delete(`/novidade/${id}`)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function putNews(data: any) {
  api.put(`/novidade/${data.id}`, data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export {
  getNews,
  postNews,
  deleteNews,
  putNews
}