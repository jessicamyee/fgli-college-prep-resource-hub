import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function CategoryNav() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Resource Categories">
            <NavDropdown.Item href="/sat-act-resources">SAT/ACT</NavDropdown.Item>
            <NavDropdown.Item href="/summer-programs-extracurriculars">
            Summer Programs/Extracurriculars
            </NavDropdown.Item>
            <NavDropdown.Item href="/scholarships-fin-aid">Scholarships/Financial Aid</NavDropdown.Item>
            <NavDropdown.Item href="/choosing-college">Choosing the Right College</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default CategoryNav;
