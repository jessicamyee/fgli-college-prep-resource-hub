import { useParams } from "react-router-dom";
import ResourceCategoryDetails from "./ResourceCategoryDetails";
import Form from "./Form";
import CategoryNav from "./CategoryNav";

function ResourceCategory({ resources }) {
  const params = useParams();

  // console.log(resources);

  // Filter resourceS so that you have the particular 1 resource type that you want
  const filteredResources = resources.filter((resource) => {
    return resource.fields.category === categoryUrlToTitle(params.category);
  });

  return (
    <div>
      <CategoryNav />
      <h1>{categoryUrlToTitle(params.category)}</h1>
      {filteredResources.map((filteredResource) => (
        <ResourceCategoryDetails
          key={filteredResource.id}
          title={filteredResource.fields.title}
          description={filteredResource.fields.description}
          link={filteredResource.fields.link}
        />
      ))}
      <Form />
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
