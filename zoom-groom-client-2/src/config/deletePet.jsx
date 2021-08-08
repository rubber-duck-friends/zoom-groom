import api from "./api";

const deletePet =  async (id, callback, history) => {
  try {
    await api.delete(`/dogs/${id}`);
    history.push("/");
  } catch (error) {
    callback(error.message);
  }
}

export default deletePet;