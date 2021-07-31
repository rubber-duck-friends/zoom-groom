import {useParams} from "react-router-dom"

const UserProfile = () => {
  const { userId } = useParams()
  
  return(
    <>
      <h1>User Profile Page</h1>
      <p>This is the user profile for { userId }!</p>
    </>
  )
}

export default UserProfile