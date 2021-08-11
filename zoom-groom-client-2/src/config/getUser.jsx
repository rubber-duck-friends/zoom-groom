import api from "./api";

const getUser = async (userID, setUser) => {
  try {
  const { data } = await api.get(`/user/${userID}`);
  setUser(data[0]);
  console.log(data[0])
  } catch(error) {
    console.log(error)
  }
};

export default getUser;
