import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";

function Form({setToggleFetch, category}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      description,
      link,
      category,
    };
    await axios.post(baseURL, { fields }, config);
    setToggleFetch((curr) => !curr);
    setTitle("")
    setDescription("")
    setLink("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Resource!</h2>
      <div>
        <p>Title:</p>
        <label htmlFor="title"></label>
        <input
          id="title"
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <p>Description:</p>
        <label htmlFor="description"></label>
        <textarea
          id="description"
          type="text"
          value={description}
          placeholder="Short Description about the Resource"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
      <label htmlFor="link"></label>
        <p>Link:</p>
        <input
          id="link"
          type="text"
          value={link}
          placeholder="Link to Resource"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      {/* <div>
      <label htmlFor="category"></label>
        <p>Category:</p>
        <input
          id="category"
          type="text"
          value={category}
          placeholder="Select your category"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div> */}
      <div><button className="submit-btn" type="submit">Add</button></div>
    </form>
  );
}

export default Form;
