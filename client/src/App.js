import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ResourceCategoryDetails from "./components/ResourceCategoryDetails";
import ResourceCategory from "./components/ResourceCategory";
import Footer from "./components/Footer";

function App() {
  const [resourceDetails, setResourceDetails] = useState([]);
  //todo Add togglefetch useState

  useEffect(() => {
    const getResourceDetails = async () => {
      const resp = await axios.get(baseURL, config);
      setResourceDetails(resp.data.records);
    };
    getResourceDetails();
  }, []);
  //todo add togglefetch inside array

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/:category">
        <ResourceCategory />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
