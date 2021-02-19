import { useState } from "react"; 
import axios from "axios";
import { baseURL, config } from "../../services";
import "./ResourceInfo.css";

function Form({ setToggleFetch, category, setShowConfirmationStatus }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("https://");

  

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
    setShowConfirmationStatus(true);
    setTitle("");
    setDescription("");
    setLink("https://");
  };

  return (
    <form>
      <h2 className="form-title">Add a Resource:</h2>
      <div>
        <p className="form-labels">Title:</p>
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
        <p className="form-labels">Description:</p>
        <label htmlFor="description"></label>
        <textarea
          id="description"
          type="text"
          value={description}
          placeholder="Short Description about the Resource (Limit: 150 characters)"
          maxLength="150"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="link"></label>
        <p className="form-labels">Link:</p>
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
