import api from "./api";

const getPetByUser =  async (userId) => {
  const {data} = await api.get(`/dogs/all/${userId}`);
  console.log(data)
  return data
}

export default getPetByUser;