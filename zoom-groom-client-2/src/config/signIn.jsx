import jwt_decode from "jwt-decode";
import api from "./api";
import getUser from "./getUser";

const signIn =  async (email, password, setUser) => {
  const { data } = await api.post("/auth/sign_in", {
    email: email,
    password: password
  })
  localStorage.setItem("jwt", data.token)
  const userId = await (jwt_decode(data.token).user_id)
  getUser(userId, setUser);
}


export default signIn;
