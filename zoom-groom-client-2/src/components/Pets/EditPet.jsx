import {useState, useEffect} from "react"
import { useHistory } from 'react-router-dom'

import TextInput from "../atom/TextInput"
import CheckboxInput from "../atom/CheckboxInput"
import DateInput from "../atom/DateInput"
import getPet from "../../config/getPet"
import editPet from "../../config/editPet"

const EditPet = ({pet}) => {
  // const [pet, setPet] = useState(initialPetState)
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)
  const [breed, setBreed] = useState("")
  const [sex, setSex] = useState("")
  const [fixed, setFixed] = useState(null)

  const history = useHistory()

  useEffect(() => {
    getPet(pet).then(dog => {
      setName(dog.name)
      setAge(dog.age)
      setBreed(dog.breed)
      setSex(dog.sex)
      setFixed(dog.fixed)
    })
  }, [pet]);

  const handleSubmit = (event) => {
    event.preventDefault()
    editPet(pet, name, age, sex, fixed, breed)
      .then(history.push("/pets"))
      .catch(err => console.log("Error", err))
  }

  return(
    <>
      <h1>Edit {name}</h1>
      <form onSubmit={handleSubmit}>
        
          <TextInput 
            name="Name" 
            value={name}
            id="input-name"
            updateValue={setName}
          />
          <DateInput 
            name="Age" 
            value={age}
            id="input-age"
            updateValue={setAge}
          />
          <TextInput 
            name="Breed" 
            value={breed}
            id="input-breed"
            updateValue={setBreed}
          />
          <TextInput 
            name="Sex" 
            value={sex}
            id="input-sex"
            updateValue={setSex}
          />
          
          <CheckboxInput 
            name="Fixed" 
            value={fixed}
            id="input-fixed"
            updateValue={setFixed}
          />
          
          <input type="submit" />
      </form>
    </>
  )
}

export default EditPet