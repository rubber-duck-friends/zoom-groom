import {useParams} from "react-router-dom"

const EditUserProfile = () => {
  const { userId } = useParams()

  return(
    <>
      <h1>Edit User Profile Page</h1>
      <p>This page is used to edit { userId }'s profile</p>
    </>
  )
}

export default EditUserProfile