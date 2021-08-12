import { useState } from "react";
import TextInput from "../atom/TextInput";
import NumberInput from "../atom/NumberInput";
import editUser from "../../config/editUser";

const EditUserProfile = ({user, setUser}) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    editUser({
      id: user.id,
      firstName,
      lastName,
      email,
      phoneNumber
    }, setUser)
  }

  return (
    <>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextInput
            name="First Name"
            value={firstName}
            id="input-first-name"
            updateValue={setFirstName}
          />
          <TextInput
            name="Last Name"
            value={lastName}
            id="input-last-name"
            updateValue={setLastName}
          />
          <TextInput
            name="Email"
            value={email}
            id="input-email"
            updateValue={setEmail}
          />
          <NumberInput
            name="Phone Number"
            value={phoneNumber}
            id="input-phone-number"
            updateValue={setPhoneNumber}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default EditUserProfile;
