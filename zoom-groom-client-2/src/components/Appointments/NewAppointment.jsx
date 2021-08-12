import { useState, useEffect } from "react";
import Dropdown from "../atom/Dropdown";
import getPetByUser from "../../config/getPetByUser";
import DateInput from "../atom/DateInput";
import addAppointment from "../../config/addAppointment";

const NewAppointment = ({user}) => {
  const [pets, setPets] = useState([]);
  const [chosenPet, setChosenPet] = useState(null);
  const [chosenPetId, setChosenPetId] = useState(null);
  const [chosenDate, setChosenDate] = useState(Date.now());
  const availableTimes = ["11:30", "12:00", "12:30", "13:00", "13:30"]
  const [chosenTime, setChosenTime] = useState("11:30")
  const availableServices = ["Full Groom", "Nail Clip", "Wash"]
  const [chosenService, setChosenService] = useState("")

  useEffect(() => {
    getPetByUser(user.id).then(dogs => setPets(dogs))
  }, [user]);

  useEffect(() => {
    pets.forEach(pet => {
      if(pet.name === chosenPet){
        setChosenPetId(pet.id)
      }
    })
  }, [chosenPet, pets]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(`${chosenDate} ${chosenTime}`, chosenPetId)
  }

  return (
    <>
      <h1>New Appointment</h1>
      <form onSubmit={handleSubmit}>
        <Dropdown
          name="Pet"
          id="pets-dropdown"
          value={chosenPet}
          setValue={setChosenPet}
          options={pets.map((pet) => pet.name)}
        />
        <DateInput
          name="Date"
          id="date-dropdown"
          value={chosenDate}
          updateValue={setChosenDate}
        />
        <Dropdown
          name="Time"
          id="time-dropdown"
          value={chosenTime}
          setValue={setChosenTime}
          options={availableTimes}
        />
        <Dropdown
          name="Service Type"
          id="service-dropdown"
          value={chosenService}
          setValue={setChosenService}
          options={availableServices}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default NewAppointment;
