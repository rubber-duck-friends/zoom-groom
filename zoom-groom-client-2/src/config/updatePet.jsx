import api from "./api";

const updatePet = async(id, pet => {
  const { data } = await api.put(`/dogs/${id}`, {
    pet
  });
}

export default updatePet;