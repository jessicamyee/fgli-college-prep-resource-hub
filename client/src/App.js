import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ResourceCategoryDetails from "./components/ResourceCategoryDetails";
import ResourceCategory from "./components/ResourceCategory";
import Footer from "./components/Footer";

function App() {
  const [resources, setResources] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    const getResourceDetails = async () => {
      const resp = await axios.get(baseURL, config);
      setResources(resp.data.records);
    };
    getResourceDetails();
  }, [toggleFetch]);
  

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/:category">
        <ResourceCategory resources={resources} setToggleFetch={setToggleFetch}/>
      </Route>

      <Footer />
    </div>
  );
}

export default App;
