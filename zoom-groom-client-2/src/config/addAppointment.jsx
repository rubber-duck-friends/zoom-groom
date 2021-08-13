import api from "./api";

const convertDateToString = (date) => {
  return `${date.getUTCFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
}


const addAppointment = async (startTime, dogId) => {
  const startDate = Date.parse(startTime)
  let endTime = new Date(startDate + 30*60000)
  endTime = convertDateToString(endTime)

  console.log(dogId)
  await api.post("/dogs", {
    start_time: startTime,
    end_time: endTime,
    dog_id: dogId
  });
};

export default addAppointment;
