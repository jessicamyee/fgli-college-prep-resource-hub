import { Link } from "react-router-dom";

function CategoryBox({title, linkto}) {


  return (
    <div>
      <h1>{title}</h1>
      <Link to={linkto}><button>See Resources!</button></Link>
    </div>
  );
}

export default CategoryBox;