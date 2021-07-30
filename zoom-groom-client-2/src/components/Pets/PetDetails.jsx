import {useParams} from "react-router-dom"

const PetDetails = () => {
  const { userId, id } = useParams()
  return(
    <>
      <h1>Pet Details Page</h1>
      <p>This page shows {userId}'s pet at id: {id}</p>
    </>
  )
}

export default PetDetails