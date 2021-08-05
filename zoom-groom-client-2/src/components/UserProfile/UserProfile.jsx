import {useParams} from "react-router-dom"
import { useState } from "react"

const initialUserState = {
  name: "Jared",
  img: "http://image.link/",
  description: "I love cheese, especially chalk and cheese babybel. Emmental goat gouda edam cheddar caerphilly st. agur blue cheese feta. Everyone loves feta macaroni cheese parmesan macaroni cheese cauliflower cheese chalk and cheese manchego. Macaroni cheese port-salut cheesy grin.",
  id: 1,
  pets: [{
    id: 1,
    name: "Marshall",
    img: "http://image.link/"
  }]
}

const UserProfile = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(initialUserState)
  
  const {name, description, pets, img} = user;

  return(
    <>
      <div>
        <p>{img}</p>
        <button>My Pets</button>
        <button>My Appointments</button>
        <button>Edit Profile</button>
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <div>
          <h5>{name}{pets.length > 1 && "'s"} Pet{pets.length > 1 && "s"}</h5>
          {pets.map(pet => (
            <div>
              <p>{pet.img}</p>
              <p>{pet.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default UserProfile