import {useParams} from "react-router-dom"

const AllPets = () => {
  const { userId } = useParams()

  return(
    <>
      <h1>Show All Pets Page</h1>
      <p>This page shows all of { userId }'s pets.</p>
    </>
  )
}

export default AllPets