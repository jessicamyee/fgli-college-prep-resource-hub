
import ResourceCategoryDetails from "./ResourceCategoryDetails";
import Form from "./Form"
import CategoryNav from "./CategoryNav"

function ResourceCategory() {
  return (
    <div>
      <CategoryNav />
      <h1>Category Name goes here</h1>
      <ResourceCategoryDetails />
      <Form />
    </div>
  );
}

export default ResourceCategory;