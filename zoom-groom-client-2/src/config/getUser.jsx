import api from "./api";

const getUser = async (userID, setUser = null) => {
  const { data } = await api.get(`/user/${userID}`);
  if (setUser) {
    setUser(data[0]);
  } else {
    return data[0];
  }
};

export default getUser;
