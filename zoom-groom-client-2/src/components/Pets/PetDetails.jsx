import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "../BackButton/BackButton";
import PlaceholderDogImage from "../../assets/placeholder-images/default-dog.png";
import getPet from "../../config/getPet";
import deletePet from "../../config/deletePet";

const PetDetails = ({dog, user}) => {
  const [pet, setPet] = useState({});
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    getPet(dog).then(i => {
      setPet(
        {
          name: i.name,
          sex: i.sex,
          age: i.age,
          breed: i.breed,
          fixed: i.fixed,
        }
      )
    })
  }, [dog]);

  const removePet = () => {
    deletePet(user.id, setError, history)
  }

  return (
    <>
      <BackButton></BackButton>
      {error && <p>{error}</p>}
      <h1>About Pet</h1>
      <div>
        <p>NAME: {pet && pet.name}</p>
        <p>SEX: {pet && pet.sex}</p>
        <p>BREED: {pet && pet.breed}</p>
        <p>AGE: {pet && pet.age}</p>
        <p>FIXED: {pet && pet.fixed ? "True" : "False"}</p>
      </div>
      <div>
        <Link to={`/pet/edit`}>Edit Pet</Link>
        <button 
          onClick={removePet}
        >Remove Pet</button>
      </div>
    </>
  );
};

export default PetDetails;
