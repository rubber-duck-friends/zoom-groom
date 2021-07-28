import { useEffect, useState } from "react"
// import Loader from '../Utils/Loader'
// Sends new user details to the backend 
const signUp = () => {

}

const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  // const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  return(
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {/* {loading && <Loader></Loader>} */}
      <h1>Sign Up Page</h1>
      <form onSubmit={signUp}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" value={firstName} id="firstName" onChange={(e) => setFirstName(e.target.value)}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={lastName} id="lastName" onChange={(e) => setLastName(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} id="email" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" value={phoneNumber} id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input type="password" value={passwordConfirmation} id="passwordConfirmation" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default SignUp