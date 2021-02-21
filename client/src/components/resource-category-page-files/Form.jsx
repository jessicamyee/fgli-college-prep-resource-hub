import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import "./ResourceInfo.css";
import Button from "react-bootstrap/Button";

function Form({ setToggleFetch, category, setShowConfirmationStatus }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [disable, setDisabled] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleFormValidation = () => {
    if (title === "") {
      setErrorMessage("Title cannot be blank");
      return true;
    } else if (description === "") {
      setErrorMessage("Description cannot be blank");
      return true;
    } else if (link === "") {
      setErrorMessage("Link cannot be blank");
      return true;
    } else if (!link.includes("https://")) {
      setErrorMessage("Link must start with https://");
      return true;
    } else {
      setErrorMessage(null);
      return false;
    }
  }

  useEffect(() => {
    if (!showError) {
      setShowError(true);
      return;
    }


    setDisabled(handleFormValidation())
  }, [title, description, link])

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
    setLink("");
    setErrorMessage(null);
    setShowError(false);
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
          placeholder="(Limit: 25 characters)"
          maxLength="25"
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
          placeholder="https://"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <div>
        {showError && errorMessage && <p id="form-error-message">{errorMessage}</p>}
        <Button className="submit-btn" variant="success" onClick={handleSubmit} disabled={disable}>
          Add
        </Button>
      </div>
    </form>
  );
}

export default Form;
