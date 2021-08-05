// const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  // const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Sends new user details to the backend 
  const signUp = async (e) => {
    e.preventDefault()
    // Set loading state to true 
    // setLoading(true)

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
        localStorage.setItem("jwt", data.jwt)
        // Redirect to Home Page
    } catch (error) {
      // If fail:
      // Display the error message
      setErrorMessage(error.message)
      // Stop loading 
      // setLoading(false)
    }

    

    
  }

  return(<p>dummy text</p>)
}

export default SignUp