import { useState } from "react"
import api from "../../config/api"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitLogIn = async (event) => {
    event.preventDefault()

    setErrorMessage("")

    try {
      const { data } = await api.post("/auth/sign_in", {
        email: email,
        password: password
      })
      localStorage.setItem("jwt", data.jwt)
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => {
        setErrorMessage("")
      }, 2000);
    }
  }

  return(
    <>
      {errorMessage && <p>{errorMessage}</p>}
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
            id="email-input" onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        <label htmlFor="submit-button"/>
          <input 
            type="submit" 
            value="Sign In"  
          />
        </label>
      </form>
    </>
  )
}

export default SignIn