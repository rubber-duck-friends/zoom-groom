import api from "./api";

const addPet = async (name, age, sex, fixed, breed, size, userId) => {
  await api.post("/dogs", {
    name: name,
    age: age,
    sex: sex,
    fixed_status: fixed,
    breed: breed,
    size: size,
    groomer_notes: "",
    user_id: userId
  });
};

export default addPet;
