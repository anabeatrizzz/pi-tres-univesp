import api from "./api";

const getNews = api.get("/novidades")
  .then((data) => {
    return data.data
  })

function postNews(data: any){
  api.post("/novidade/create", { data }).then((data) => { console.log(data)}).catch((error) => console.log(error))
}

export {
  getNews,
  postNews
}