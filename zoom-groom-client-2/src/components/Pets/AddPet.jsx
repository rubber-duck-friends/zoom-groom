import {useParams} from "react-router-dom"

const AddPet = () => {
  const { userId } = useParams()
  return(
    <>
      <h1>Add Pet Page</h1>
      <p>This page allows {userId} to add a new pet</p>
    </>
  )
}

export default AddPet