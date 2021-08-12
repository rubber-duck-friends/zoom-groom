import api from "./api";

const editPet = async (id, name, age, sex, fixedStatus, breed) => {
  await api.put(`/dogs/${id}`, {
    name: name,
    age: age,
    sex: sex,
    fixed_status: fixedStatus,
    breed: breed,
  });
};

export default editPet;
