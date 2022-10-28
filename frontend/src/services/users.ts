import api from "./api";

const getUsers = api.get("/users")
  .then((data) => {
    return data.data
  })

export { getUsers }