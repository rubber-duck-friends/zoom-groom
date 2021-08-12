import api from "./api";

const getUser = async (userID, setUser = null) => {

  const { data } = await api.get(`/user/${userID}`);
  if (setUser === null) return data[0]
  setUser(data[0]);
};

export default getUser;
