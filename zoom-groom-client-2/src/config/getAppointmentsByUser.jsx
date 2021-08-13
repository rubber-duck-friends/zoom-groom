import api from "./api";

const getAppointmentsByUser =  async (id) => {
  const { data } = await api.get(`/appointments/${id}`);  
  return data
}

export default getAppointmentsByUser;