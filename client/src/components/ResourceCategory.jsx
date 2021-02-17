import { useParams } from "react-router-dom";
import ResourceCategoryDetails from "./ResourceCategoryDetails";
import Form from "./Form";
import CategoryNav from "./CategoryNav";
import { useState } from "react";

function ResourceCategory({ resources, setToggleFetch }) {
  const params = useParams();
  const filteredResources = resources.filter((resource) => {
    return resource.fields.category === categoryUrlToTitle(params.category);
  });
  const [showConfirmationStatus, setShowConfirmationStatus] = useState(false);

  return (
    <div>
      <CategoryNav />
      <h1>{categoryUrlToTitle(params.category)}</h1>

      <p>{showConfirmationStatus ? "Thank you for contributing! If you need to update or delete your resource, please email us at fgli-resource-hub@googlegroups.com." : ""}</p>

      {filteredResources.map((filteredResource) => (
        <ResourceCategoryDetails
          key={filteredResource.id}
          title={filteredResource.fields.title}
          description={filteredResource.fields.description}
          link={filteredResource.fields.link}
        />
      ))}
      <Form
        setToggleFetch={setToggleFetch}
        category={categoryUrlToTitle(params.category)}
        setShowConfirmationStatus={setShowConfirmationStatus}
      />
    </div>
  );
}

function categoryUrlToTitle(categoryUrl) {
  switch (categoryUrl) {
    case "sat-act-resources":
      return "SAT/ACT";

    case "summer-programs-extracurriculars":
      return "Summer Programs/Extracurriculars";

    case "scholarships-fin-aid":
      return "Scholarships/Financial Aid";

    case "choosing-college":
      return "Choosing the Right College";
  }
}

export default ResourceCategory;
