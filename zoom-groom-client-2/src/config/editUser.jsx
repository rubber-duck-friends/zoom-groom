import api from "./api";
import getUser from "./getUser";

const editUser = async ({id, firstName, lastName, email, phoneNumber}, setUser) => {
  await api.put(`/users/${id}`, {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone_number: phoneNumber,
  });
  getUser(id, setUser);
};

export default editUser;
