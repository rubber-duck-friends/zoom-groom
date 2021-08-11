import api from "./api";
import getPet from "./getPet";

const editPet = async ({id, name, age, sex, fixedStatus, breed}, setPet) => {
  await api.put(`/dogs/${id}`, {
    name: name,
    age: age,
    sex: sex,
    fixed_status: fixedStatus,
    breed: breed,
  });
  getPet(id, setPet);
};

export default editPet;