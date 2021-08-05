import {useParams} from "react-router-dom"
import {useState} from "react"
import TextInput from "../atom/TextInput"
// import Dropdown from "../atom/Dropdown"

const initialPetState = {
  name: "pet1",
  age: 6,
  breed: "Shiba Inu",
  sex: "Male",
  fixed: false,
  img: "http://image.link",
  notes: ""
}

const EditPet = () => {
  const { userId, id } = useParams()
  const [pet, setPet] = useState(initialPetState)

  const [name, setName] = useState(pet.name)
  const [age, setAge] = useState(pet.age)
  const [breed, setBreed] = useState(pet.breed)
  const [sex, setSex] = useState(pet.sex)
  const [fixed, setFixed] = useState(pet.fixed)
  const [image, setImage] = useState(pet.img)
  const [notes, setNotes] = useState(pet.notes)

  const handleSubmit = () => {
    setPet({
      name,
      age,
      breed,
      sex,
      fixed,
      img: image,
      notes
    })
  }

  return(
    <>
      <h1>Edit {name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>image goes here: {image}</p>
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
          {/* Below needs to be boolean checkbox */}
          {/* <TextInput 
            name="Fixed" 
            value={fixed}
            id="input-fixed"
            updateValue={setFixed}
          /> */}
          <TextInput
            name="Notes"
            value={notes}
            id="input-notes"
            updateValue={setNotes}
          />
          <input type="submit" />
        </div>
      </form>
    </>
  )
}

export default EditPet