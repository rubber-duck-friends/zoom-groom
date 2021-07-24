import {useParams} from "react-router-dom"

const EditPet = () => {
  const { username, id } = useParams()

  return(
    <>
      <h1>Edit Pet Page</h1>
      <p>This page allows { username } to edit their pet at id: { id }</p>
    </>
  )
}

export default EditPet