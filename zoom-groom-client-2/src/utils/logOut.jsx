const logOut =  async (history, setUser) => {
  localStorage.removeItem('jwt')
  setUser(null)
  history.push("/")
}

export default logOut;