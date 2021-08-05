import { useState } from 'react'

const NewAppointment = () => {
  const [pets, setPets] = useState(["dog1","dog2","dog3"])
  const [chosenPet, setChosenPet] = useState('')
  const [availableDates, setAvailableDates] = useState('12pm', '1pm')

  const handleDropdownChange = (callback, event) => {
    callback(event.target.value)
  }

  return(
    <>
      <h1>New Appointment</h1>
      <form>
        <label htmlFor="pets-dropdown">
          Pet:
          <select 
            id="pets-dropdown"
            name="pets-dropdown"
            onChange={handleDropdownChange(setChosenPet)}
            value={chosenPet}
          >
            {pets.map((pet, index) => (
              <option key={index} value={pet}>{pet}</option>
            ))}
          </select>
        </label>
        
        <label htmlFor="date-dropdown">
          Date:
          <select 
            id="date-dropdown"
            name="date-dropdown"
            onChange={handleDropdownChange(setChosenPet)}
            value={chosenPet}
          >
            {pets.map((pet, index) => (
              <option key={index} value={pet}>{pet}</option>
            ))}
          </select>
        </label>


      </form>
    </>
  )
}

export default NewAppointment