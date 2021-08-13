import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use((req) => {
  const jwt = localStorage.getItem('jwt')
  if (jwt) {
    req.headers["Authorization"] = `Bearer ${jwt}`
  }
  return req
})

export default api;