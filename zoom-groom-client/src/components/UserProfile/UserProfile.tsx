import {useParams} from "react-router-dom"

const UserProfile = () => {
  const { username } = useParams()
  
  return(
    <>
      <h1>User Profile Page</h1>
      <p>This is the user profile for { username }!</p>
    </>
  )
}

export default UserProfile