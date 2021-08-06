import { useParams } from "react-router-dom";
import { useState } from "react";
import TextInput from "../atom/TextInput";
import PasswordInput from "../atom/PasswordInput";

const initialUserState = {
  name: "Jared",
  email: "email@address.com",
  img: "http://image.link",
};

const EditUserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(initialUserState);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [img, setImg] = useState(user.img);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(password === confPassword){
      setUser({
        name,
        email,
        img,
        password,
      })
    } else {
      setUser({
        name,
        email,
        img,
      })
    }
    
  }

  return (
    <>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>{img}</p>
          <button>Change Photo</button>
        </div>
        <div>
          <TextInput
            name="Name"
            value={name}
            id="input-name"
            updateValue={setName}
          />
          <TextInput
            name="Email"
            value={email}
            id="input-email"
            updateValue={setEmail}
          />
          <PasswordInput
            name="Password"
            value={password}
            id="input-password"
            updateValue={setPassword}
          />
          <PasswordInput
            name="Confirm Password"
            value={confPassword}
            id="input-confirm-password"
            updateValue={setConfPassword}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default EditUserProfile;
