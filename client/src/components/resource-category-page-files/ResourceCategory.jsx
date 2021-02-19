import { useParams } from "react-router-dom";
import ResourceCategoryDetails from "./ResourceCategoryDetails";
import Form from "./Form";
import CategoryNav from "../nav-files/CategoryNav";
import { useState } from "react";
import "./ResourceInfo.css";

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

  const filteredResources = resources.filter((resource) => {
    return resource.fields.category === categoryUrlToTitle(params.category);
  });
  

  return (
    <div>
      <header className="category-header-section">
        <h1 className="category-header">
          {categoryUrlToTitle(params.category)}
        </h1>
      </header>
      <CategoryNav />
      <button className="contribute-btn">
        <a href="#form-location">Contribute</a>
      </button>

      {/* Statement will be triggered when user successfully submits a resource to the page. */}
      <p className="confirmation-statement">
        {showConfirmationStatus
          ? "Thank you for contributing! If you need to update/delete your resource, please email us at fgli-resource-hub@googlegroups.com."
          : ""}
      </p>

      {/* Filters through entire data table to only populate data from the selected category */}
      <div className="resource-list-container">
        {filteredResources.map((filteredResource) => (
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
