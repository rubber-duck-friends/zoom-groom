import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "../BackButton/BackButton";
import PlaceholderDogImage from "../../assets/placeholder-images/default-dog.png";
import getPet from "../../config/getPet";
import deletePet from "../../config/deletePet";

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const [error, setError] = useState("");
  const { id, userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    try {
      setPet(getPet(id));
    } catch (error) {
      setError(error.message);
    }
  }, [id]);

  return (
    <>
      <BackButton></BackButton>
      {error && <p>{error}</p>}
      <h1>About Pet</h1>
      <img src={PlaceholderDogImage} width="200px" alt="Placeholder-Dog"></img>
      <div>
        <p>NAME: {pet && pet.name}</p>
        <p>SEX: {pet && pet.sex}</p>
        <p>BREED: {pet && pet.breed}</p>
        <p>AGE: {pet && pet.age}</p>
        <p>FIXED: {pet && pet.fixed}</p>
      </div>
      <div>
        <Link to={`/user/${userId}/pet/${id}/edit`}>Edit Pet</Link>
        <button 
          onClick={deletePet(id, setError, history)}
        >Remove Pet</button>
      </div>
    </>
  );
};

export default PetDetails;
