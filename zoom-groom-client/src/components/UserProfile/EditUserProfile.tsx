import {useParams} from "react-router-dom"

const EditUserProfile = () => {
  const { username } = useParams()

  return(
    <>
      <h1>Edit User Profile Page</h1>
      <p>This page is used to edit { username }'s profile</p>
    </>
  )
}

export default EditUserProfile