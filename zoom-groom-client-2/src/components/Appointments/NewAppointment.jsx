import { useState } from "react";
import Dropdown from "../atom/Dropdown";

const NewAppointment = () => {
  const [pets, setPets] = useState(["dog1", "dog2", "dog3"]);
  const [chosenPet, setChosenPet] = useState("");
  const [availableDates, setAvailableDates] = useState(["01/01/2022", "02/01/2022", "03/01/2022"]);
  const [chosenDate, setChosenDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState(["11:30", "12:00", "12:30", "13:00", "13:30"])
  const [chosenTime, setChosenTime] = useState("")
  const [availableServices, setAvailableServices] = useState(["Full Groom", "Nail Clip", "Wash"])
  const [chosenService, setChosenService] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
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
          options={pets}
        />
        <Dropdown
          name="Date"
          id="date-dropdown"
          value={chosenDate}
          setValue={setChosenDate}
          options={availableDates}
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
