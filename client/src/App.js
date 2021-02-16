import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import './App.css';

function App() {

  const [resourceDetails, setResourceDetails] = useState([]);

  useEffect(() => {
    const getResourceDetails = async () => {
      const resp = await axios.get(baseURL, config);
      setResourceDetails(resp.data.records);
      console.log(resp.data.records)
    };
    getResourceDetails();
  }, []);

  return (
    <div className="App">
      <h3>Something here!</h3>
    </div>
  );
}

export default App;
