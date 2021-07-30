import {useParams} from "react-router-dom"

const EditPet = () => {
  const { userId, id } = useParams()

  return(
    <>
      <h1>Edit Pet Page</h1>
      <p>This page allows { userId } to edit their pet at id: { id }</p>
    </>
  )
}

export default EditPet