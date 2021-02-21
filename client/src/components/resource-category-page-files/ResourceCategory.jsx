import { useParams } from "react-router-dom";
import ResourceCategoryDetails from "./ResourceCategoryDetails";
import Form from "./Form";
import CategoryNav from "../nav-files/CategoryNav";
import { useState } from "react";
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

//Function that populates the Category page when you select a category
function ResourceCategory({ resources, setToggleFetch }) {
  const params = useParams();
  const [showConfirmationStatus, setShowConfirmationStatus] = useState(false);
  const [searchString, setSearchString] = useState("");
  const filteredResources = resources.filter((resource) => {
    return resource.fields.category === categoryUrlToTitle(params.category);
  });

  const searchFilteredResources = filteredResources.filter((resource) => {
    return resource.fields.description
      .toLowerCase()
      .includes(searchString.toLowerCase());
  });

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
      <Button className="contribute-btn" variant="outline-success">
        <a href="#form-location">Contribute</a>
      </Button>

      {/* Search section of category page */}
      <div>
        Search:{" "}
        <input
          className="search-input"
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>

      {/* Statement will be triggered when user successfully submits a resource to the page. */}
      {showConfirmationStatus && (
        <div className="confirmation-statement">
          Thank you for contributing! If you need to update/delete your
          resource, please email us at fgli-resource-hub@googlegroups.com.
        </div>
      )}
      {/* Filters through entire data table to only populate data from the selected category */}
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

      {/* Form to submit a new resource to the page */}
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
