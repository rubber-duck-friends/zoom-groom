const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return(
    <>
      <Navbar></Navbar>
      <h1>Sign In Page</h1>
      <form onSubmit={signIn}>
      <label htmlFor="email">Email</label>
      <input type="text" value={email} id="email" onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="password">Password</label>
      <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>
      </form>  
    </>
  )
}

export default SignIn