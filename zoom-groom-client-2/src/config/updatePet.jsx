import api from "./api";

const updatePet = (id, pet) => {
  api.put(`/dogs/${id}`, { pet });
}

export default updatePet;