import api from "./api";

const getPet =  async (id) => {
  const { data } = await api.get(`/dogs/${id}`);
  return data
}

export default getPet;