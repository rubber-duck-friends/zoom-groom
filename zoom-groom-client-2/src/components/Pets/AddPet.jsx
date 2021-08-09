import { useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import addPet from "../../config/addPet";
import TextInput from "../atom/TextInput";
import DateInput from "../atom/DateInput";
import Dropdown from "../atom/Dropdown";
import CheckboxInput from "../atom/CheckboxInput";

const AddPet = ({ user }) => {
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petSex, setPetSex] = useState("F");
  const [fixedStatus, setFixedStatus] = useState(false);
  const [petBreed, setPetBreed] = useState("");
  const [petSize, setPetSize] = useState("XS");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  // Sends new user details to the backend
  const createDog = async (e) => {
    e.preventDefault();
    // reset error code
    setErrorMessage("");
    // Send the post request to the API
    try {
      addPet(petName, petAge, petSex, fixedStatus, petBreed, petSize, user.id);
      history.push("/");
    } catch (error) {
      // Display the error message
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <BackButton />

      <h1>Add a Pet</h1>

      <form onSubmit={createDog}>
        <TextInput
          name="Pet Name:"
          value={petName}
          id="pet-name-input"
          updateValue={setPetName}
        />

        <DateInput
          name="Age:"
          value={petAge}
          id="pet-age-input"
          updateValue={setPetAge}
        />

        <Dropdown
          name="Sex"
          id="pet-sex-dropdown"
          value={petSex}
          setValue={setPetSex}
          options={["M", "F"]}
        />

        <CheckboxInput
          name="Fixed:"
          value={fixedStatus}
          id="input-fixed-status"
          updateValue={setFixedStatus}
        />

        <TextInput
          name="Breed:"
          value={petBreed}
          id="pet-breed-input"
          updateValue={setPetBreed}
        />

        <Dropdown
          name="Size:"
          id="pet-size-dropdown"
          value={petSize}
          setValue={setPetSize}
          options={["XS", "S", "M", "L", "XL"]}
        />

        <button type="submit">Add Pet</button>
      </form>
    </>
  );
};

export default AddPet;
