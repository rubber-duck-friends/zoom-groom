import { useEffect, useState } from "react";
import Home from "./components/Home";
import api from "./config/api";

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    api.get("/dogs").then((res) => setDogs(res.data));
  }, []);

  return(
    <>
      <Home dogs={dogs}/>
    </>
  )
}

export default App;
