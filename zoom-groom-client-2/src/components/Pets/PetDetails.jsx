import {useParams, Link} from "react-router-dom"
import BackButton from "../BackButton/BackButton"
import PlaceholderDogImage from "../../assets/placeholder-images/default-dog.png"

const PetDetails = () => {
  const { userId, id } = useParams()
  return(
    <>
      <BackButton></BackButton>
      <h1>About Pet</h1>
      <img src={PlaceholderDogImage} width="200px"></img>
      <div>
        <p>NAME: Name</p>
        <p>SEX: M</p>
        <p>BREED: Breed</p>
        <p>AGE: Age</p>
        <p>NOTES: Notes notes notes</p>
        <p>OWNER: <Link to="/users/:id">Owner</Link></p>
      </div>
      <div>
        <Link to="/user/:userId/pet/:id/edit">Edit Pet</Link>
        {/* TODO: Remove pet modal */}
        <Link to="">Remove Pet</Link>
      </div>
    </>
  )
}

export default PetDetails