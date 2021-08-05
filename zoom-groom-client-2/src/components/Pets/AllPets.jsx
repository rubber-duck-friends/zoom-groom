import { useParams } from "react-router-dom"
import { useState } from "react"

const initialPetState = [
  {
    name: "pet1",
    img: "http://image.link",
    id: 1
  },
  {
    name: "pet2",
    img: "http://image.link",
    id: 2
  }
]

const AllPets = () => {
  const { userId } = useParams()
  const [pets, setPets] = useState(initialPetState)

  return(
    <>
      <h1>{userId} Pet{pets.length > 1 && "'s"}</h1>
      <p>Click an image to view pet details</p>

      {pets.map(({img, id, name}) => (
        <div key={id}>
          <h4>Pet img here: {img}</h4>
          <h2>{name}</h2>
        </div>
      ))}
      <button>Add Pet</button>
    </>
  )
}

export default AllPets