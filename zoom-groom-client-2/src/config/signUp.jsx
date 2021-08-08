import jwt_decode from "jwt-decode";
import api from "./api";
import getUser from "./getUser";

const signUp = async (firstName, lastName, email, phoneNumber, password, passwordConfirmation, setUser) => {
  const { data } = await api.post("/auth/sign_up", {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone_number: phoneNumber,
    password: password,
    password_confirmation: passwordConfirmation,
  });
  localStorage.setItem("jwt", data.token);
  const userId = await (jwt_decode(data.token).user_id)
  getUser(userId, setUser);
};

export default signUp;
