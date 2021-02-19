import "./ResourceInfo.css";

function ResourceCategoryDetails({ title, description, link }) {
  return (
    <div className="resource-set">
      <div className="resource-title">{title}</div>
      <div className="resource-description">{description}</div>
      <div>
        <button className="resource-link">
          <a target="_blank" href={link} className="button-text">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
}
export default ResourceCategoryDetails;
