import {useParams} from "react-router-dom"
import api from "../../config/api"
import BackButton from "../BackButton/BackButton"
import DefaultDogPhoto from "../../assets/placeholder-images/default-dog.png"
import { useState } from "react"

const AddPet = () => {
  const isFixed = true
  const isNotFixed = false
  const { userId } = useParams()
  const [petName, setPetName] = useState("")
  const [petAge, setPetAge] = useState("")
  const [petSex, setPetSex] = useState("F")
  const [fixedStatus, setFixedStatus] = useState(false)
  const [petBreed, setPetBreed] = useState("")
  const [petSize, setPetSize] = useState("XS")
  const [petNotes, setPetNotes] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const uploadPhoto = () => {
    // TODO: Integrate cloudinary
  }

    // Sends new user details to the backend 
    const createDog = async (e) => {
      e.preventDefault()
      // Set loading state to true 
      // setLoading(true)
  
      // Unset error message on new request
      setErrorMessage("")
  
      // Send the post request to the API
      try {
        const { data } = await api.post("/dogs", {
          name: petName, 
          age: petAge,
          sex: petSex,
          fixed_status: fixedStatus,
          breed: petBreed,
          size: petSize,
          groomer_notes: petNotes
        })
        console.log(data)
        // If success:
          // Redirect to Home Page
      } catch (error) {
        // If fail:
        // Display the error message
        setErrorMessage(error.message)
        // Stop loading 
        // setLoading(false)
      }
    }

  return(
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <BackButton></BackButton>
      
      <h1>Add a Pet</h1>
      <div>
        <img src={DefaultDogPhoto} alt="New dog"></img>
        <button onClick={uploadPhoto}>Add Photo</button>
      </div>

      <form onSubmit={createDog}>
        <label htmlFor="petName">PET NAME:</label>
        <input type="text" id="petName" value={petName} onChange={(e) => setPetName(e.target.value)}></input>

        <label htmlFor="petAge">AGE:</label>
        <input type="date" id="petAge" value={petAge} onChange={(e) => setPetAge(e.target.value)}></input>

        <label htmlFor="petSex">SEX:</label>
        <select id="petSex" value={petSex} onChange={(e) => setPetSex(e.target.value)}>
          <option value="F">F</option>
          <option value="M">M</option>
        </select>

        <label htmlFor="fixedStatus">FIXED?</label>
        <select id="fixedStatus" value={fixedStatus} onChange={(e) => setFixedStatus(e.target.value)}>
          <option value={isFixed}>Yes</option>
          <option value={isNotFixed}>No</option>
        </select>

        <label htmlFor="petBreed">BREED:</label>
        <input type="text" id="petBreed" value={petBreed} onChange={(e) => setPetBreed(e.target.value)}></input>

        <label htmlFor="petSize">SIZE:</label>
        <select id="petSize" value={petSize} onChange={(e) => setPetSize(e.target.value)}>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <label htmlFor="petNotes">NOTES:</label>
        <textarea col="30" row="5" value={petNotes} onChange={(e) => setPetNotes(e.target.value)}></textarea>

        <button type="submit">Add Pet</button>
      </form>
    </>
  )
}

export default AddPet