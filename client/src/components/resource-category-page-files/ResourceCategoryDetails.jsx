import "./ResourceInfo.css";
import Button from 'react-bootstrap/Button';

function ResourceCategoryDetails({ title, description, link }) {
  return (
    <div className="resource-set">
      <div className="resource-title">{title}</div>
      <div className="resource-description">{description}</div>
      <div>
        <Button className="resource-link" variant="warning">
          <a target="_blank" href={link} className="button-text">
            Read More
          </a>
        </Button>
      </div>
    </div>
  );
}
export default ResourceCategoryDetails;
