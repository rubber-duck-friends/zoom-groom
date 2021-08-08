import api from "./api";

const getUser =  async (userID, setUser) => {
  const { data } = await api.get(`/user/${userID}`)
  setUser(data[0])
  console.log(data[0])
}


export default getUser;
