function ResourceCategoryDetails({ title, description, link }) {
  return (
    <div className="resource-set">
      <div className="resource-title">{title}</div>
      <div className="resource-description">{description}</div>
      <div className="resource-link">
        <button>
          <a href={link} className="button-text">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
}

export default ResourceCategoryDetails;
