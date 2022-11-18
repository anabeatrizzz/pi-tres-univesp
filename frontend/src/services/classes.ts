import api from "./api";

function postClass(data: any){
  api.post("/classe", data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export {
  postClass
}