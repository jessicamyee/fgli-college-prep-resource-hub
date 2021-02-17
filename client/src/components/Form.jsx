import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form({ setToggleFetch, category }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("https://");

  const displaySubmitConfirmation = () => {
    console.log("Thanks for submitting!");
  };

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
    displaySubmitConfirmation();
    setTitle("");
    setDescription("");
    setLink("https://");
  };

  return (
    <form>
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
          maxLength="150"
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
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <div>
        <button className="submit-btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
