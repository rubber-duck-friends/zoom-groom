import { useState } from "react"
import { useHistory } from "react-router-dom"
import api from "../../config/api"
import { BallTriangle } from 'svg-loaders-react'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  // For redirect
  const history = useHistory()

  const submitLogIn = async (event) => {
    event.preventDefault()
    setLoading(true)
    setErrorMessage("")

    try {
      const { data } = await api.post("/auth/sign_in", {
        email: email,
        password: password
      })
      console.log(data)
      localStorage.setItem("jwt", data.token)
      setUser(data.user)
      console.log(user)
      history.push("/")
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => {
        setErrorMessage("")
      }, 2000)
      setLoading(false)
    }
  }

  return(
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {loading && <BallTriangle stroke="#00C9A7"/>}
      <h1>Sign In Page</h1>
      <form onSubmit={submitLogIn}>
        <label htmlFor="email-input">
          <input 
            type="text" 
            value={email} 
            id="email-input" onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        
        <label htmlFor="password-input">
          <input 
            type="password"
            value={password}
            id="password-input" onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        <label htmlFor="submit-button"/>
          <input 
            type="submit" 
            value="Sign In"  
          />
        
      </form>
    </>
  )
}

export default SignIn