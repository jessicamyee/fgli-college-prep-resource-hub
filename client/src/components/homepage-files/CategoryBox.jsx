import { Link } from "react-router-dom"; 
import "./HomePage.css";

function CategoryBox({title, linkto}) {


  return (
    <div className="category-box">
      <h1 className="category-title">{title}</h1>
      <Link to={linkto}><button className="resources-btn">See Resources!</button></Link>
    </div>
  );
}

export default CategoryBox;