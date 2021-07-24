import {useParams} from "react-router-dom"

const AllPets = () => {
  const { username } = useParams()

  return(
    <>
      <h1>Show All Pets Page</h1>
      <p>This page shows all of { username }'s pets.</p>
    </>
  )
}

export default AllPets