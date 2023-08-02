import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import axios from "axios";

function App() {
  const [backend, setBackend] = useState([{}]);

  useEffect(() => {
    axios
      .get("/")
      .then((response) => setBackend(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
