import { useParams } from "react-router-dom";
import { useState } from "react";
import ResourceCategoryDetails from "./ResourceCategoryDetails";
import Form from "./Form";
import CategoryNav from "../nav-files/CategoryNav";
import "./ResourceInfo.css";
import Button from "react-bootstrap/Button";

//Independent function that links the Airtable category name to this app's category name
function categoryUrlToTitle(categoryUrl) {
  switch (categoryUrl) {
    case "sat-act-resources":
      return "SAT/ACT";

    case "summer-programs-extracurriculars":
      return "Summer Programs/ Extracurriculars";

    case "scholarships-fin-aid":
      return "Scholarships/ Financial Aid";

    case "choosing-college":
      return "Choosing the Right College";
  }
}

//Main component function that populates the Category page when user selects a category
function ResourceCategory({ resources, setToggleFetch }) {
  const params = useParams();
  const [showConfirmationStatus, setShowConfirmationStatus] = useState(false);
  const [searchString, setSearchString] = useState("");
  const filteredResources = resources.filter((resource) => {
    return resource.fields.category === categoryUrlToTitle(params.category);
  });

  //Specific/filtered results that populate as user is typing in the Search bar
  const searchFilteredResources = filteredResources.filter((resource) => {
    return resource.fields.description
      .toLowerCase()
      .includes(searchString.toLowerCase());
  });

  //Determines which array of resources to display in the category page
  const displayResources =
    searchString === "" ? filteredResources : searchFilteredResources;

  return (
    <div>
      <header className="category-header-section">
        <h1 className="category-header">
          {categoryUrlToTitle(params.category)}
        </h1>
      </header>
      <CategoryNav />

      <Button
        className="contribute-btn"
        variant="outline-success"
        href="#form-location"
      >
        Contribute
      </Button>

      <div>
        Search:{" "}
        <input
          className="search-input"
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>

      {showConfirmationStatus && (
        <div className="confirmation-statement">
          Thank you for contributing! If you need to update/delete your
          resource, please email us at fgli-resource-hub@googlegroups.com.
        </div>
      )}

      <div className="resource-list-container">
        {displayResources.length === 0 && (
          <div className="no-search-results">
            <div>
              Sorry, no results found. We're working hard to add more resources.
            </div>
            <div>Thank you for your patience!</div>
          </div>
        )}
        {displayResources.map((filteredResource) => (
          <ResourceCategoryDetails
            key={filteredResource.id}
            title={filteredResource.fields.title}
            description={filteredResource.fields.description}
            link={filteredResource.fields.link}
          />
        ))}
      </div>
      <div id="form-location">
        <Form
          setToggleFetch={setToggleFetch}
          category={categoryUrlToTitle(params.category)}
          setShowConfirmationStatus={setShowConfirmationStatus}
        />
      </div>
    </div>
  );
}

export default ResourceCategory;
