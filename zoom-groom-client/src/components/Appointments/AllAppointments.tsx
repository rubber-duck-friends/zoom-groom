import {useParams} from "react-router-dom"

const AllAppointments = () => {
  const { username } = useParams()
  
  return(
    <>
      <h1>All Appointmnets Page</h1>
      <p>This page is used to show all appointments for { username }</p>
    </>
  )
}

export default AllAppointments