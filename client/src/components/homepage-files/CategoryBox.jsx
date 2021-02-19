import { Link } from "react-router-dom"; 
import "./HomePage.css";
import Button from 'react-bootstrap/Button';

function CategoryBox({title, linkto}) {


  return (
    <div className="category-box">
      <h1 className="category-title">{title}</h1>
      <Link to={linkto}><Button className="resources-btn"  variant="info">See Resources!</Button></Link>
    </div>
  );
}

export default CategoryBox;