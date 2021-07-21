import { useEffect } from "react";
import api from "./config/api";

function App() {
  useEffect(() => {
    api.get("/dogs").then((res) => console.log(res));
  }, []);

  return <div className="App"></div>;
}

export default App;
