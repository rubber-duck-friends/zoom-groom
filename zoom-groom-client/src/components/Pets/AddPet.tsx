import {useParams} from "react-router-dom"

const AddPet = () => {
  const { username } = useParams()
  return(
    <>
      <h1>Add Pet Page</h1>
      <p>This page allows {username} to add a new pet</p>
    </>
  )
}

export default AddPet