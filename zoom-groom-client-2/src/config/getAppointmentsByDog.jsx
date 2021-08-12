import api from "./api";

const getAppointmentsByDog =  async (id) => {
  const { data } = await api.get(`/appointments/dog/${id}`);  
  return data
}

export default getAppointmentsByDog;