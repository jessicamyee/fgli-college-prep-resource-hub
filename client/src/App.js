import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import Home from "./components/homepage-files/Home";
import ResourceCategory from "./components/resource-category-page-files/ResourceCategory";
import Footer from "./components/footer-files/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <ResourceCategory
          resources={resources}
          setToggleFetch={setToggleFetch}
        />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
