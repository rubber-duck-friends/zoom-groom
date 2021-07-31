import {useParams} from "react-router-dom"

const Appointment = () => {
  const { id } = useParams()
  return(
    <>
      <h1>Appointment Page</h1>
      <p>This page shows appointment id: {id}</p>
    </>
  )
}

export default Appointment