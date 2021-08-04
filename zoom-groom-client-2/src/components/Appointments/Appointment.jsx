import { useParams } from "react-router-dom";
import { useState } from "react";

const dateString = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [pet, setPet] = useState("PLACEHOLDER-PET");
  const [service, setService] = useState("PLACEHOLDER-SERVICE");
  const [appointmentTime, setAppointmentTime] = useState({
    start: "9:00am",
    end: "9:30am",
  });
  const [groomer, setGroomer] = useState("PLACEHOLDER-GROOMER");
  const { id } = useParams();

  const ddmmyyyy = dateString(appointmentDate);

  return (
    <>
      <h1>Appointment</h1>
      <h2>{ddmmyyyy}</h2>
      <div>
        <div>
          <p>
            Here's the appointment you booked for {pet} for {ddmmyyyy}.<br />
            See you there!
          </p>
        </div>
        <div>
          <div>
            <h4>Pet Name:</h4>
            <p>{pet}</p>
          </div>
          <div>
            <h4>Date:</h4>
            <p>{ddmmyyyy}</p>
          </div>
          <div>
            <h4>Service:</h4>
            <p>{service}</p>
          </div>
          <div>
            <h4>Time:</h4>
            <p>
              {appointmentTime.start} - {appointmentTime.end}
            </p>
          </div>
          <div>
            <h4>Groomer:</h4>
            <p>{groomer}</p>
          </div>
        </div>
      </div>
      <div>
        <button>Edit Appointment</button>
        <button>Cancel Appointment</button>
      </div>
    </>
  );
};

export default Appointment;
