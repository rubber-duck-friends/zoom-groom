import { useEffect, useState } from "react"
import getAppointmentsByUser from "../../config/getAppointmentsByUser"

const AllAppointments = ({user}) => {
  const [appointments, setAppointments] = useState(null)

  // if(!user) return null
  useEffect(() => {
    getAppointmentsByUser(user.id).then(apps => setAppointments(apps)).then(console.log(appointments))
    
  }, [user]);

  console.log(user)

  return(
    <>
      <h1>{user.first_name}'s Appointments</h1>
      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
          {/* {appointments && appointments.map((app) => (
            
          ))} */}
        
      </table>
    </>
  )
}

export default AllAppointments