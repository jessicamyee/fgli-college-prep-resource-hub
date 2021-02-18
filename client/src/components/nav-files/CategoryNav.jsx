import { Link } from "react-router-dom"; 
import "./CategoryNav.css";

function CategoryNav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sat-act-resources">SAT/ACT</Link>
      <Link to="/summer-programs-extracurriculars">Summer Programs/Extracurriculars</Link>
      <Link to="/scholarships-fin-aid">Scholarships/Financial Aid</Link>
      <Link to="/choosing-college">Choosing the Right College</Link>
    </nav>
  );
}

export default CategoryNav;