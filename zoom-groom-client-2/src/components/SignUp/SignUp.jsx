import {useState} from "react"
import { useHistory } from "react-router-dom"
import api from "../../config/api"
import { BallTriangle } from 'svg-loaders-react'

const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // For redirecting
  const history = useHistory()

  // Sends new user details to the backend 
  const signUp = async (e) => {
    e.preventDefault()
    // Set loading state to true 
    setLoading(true)

    // Unset error message on new request
    setErrorMessage("")

    // Send the post request to the API
    try {
      const { data } = await api.post("/auth/sign_up", {
        first_name: firstName, 
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        password,
        password_confirmation: passwordConfirmation
      })
      console.log(data)
      // If success:
        // Save JWT to Local Storage
        localStorage.setItem("jwt", data.token)
        // Redirect to Home Page
        history.push("/")

    } catch (error) {
      // If fail:
      // Display the error message
      setErrorMessage(error.message)
      // Stop loading 
      setLoading(false)
    }
  }

  return(
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {loading && <BallTriangle stroke="#00C9A7"/>}
      
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

export default SignUp;