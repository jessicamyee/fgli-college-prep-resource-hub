import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./CategoryNav.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function CategoryNav() {
  return (
      <Navbar className="nav-section" expand="md" collapseOnSelect>
        <Navbar.Brand id="home-nav" href="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown
              title="Resource Categories"
              id="resource-categories-title"
            >
              <NavDropdown.Item href="/sat-act-resources">
                SAT/ACT
              </NavDropdown.Item>
              <NavDropdown.Item href="/summer-programs-extracurriculars">
                Summer Programs/Extracurriculars
              </NavDropdown.Item>
              <NavDropdown.Item href="/scholarships-fin-aid">
                Scholarships/Financial Aid
              </NavDropdown.Item>
              <NavDropdown.Item href="/choosing-college">
                Choosing the Right College
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
}
export default CategoryNav;
