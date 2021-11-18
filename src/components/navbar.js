import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
/*import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";*/
/*import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";*/

function Navigation() {
  return (
    <>
      <Navbar className="bg-light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <h3 className="Brandname_header">The YAY Company</h3>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Link className="nav_links" to="/">
                Home
              </Link>

              <Link className="nav_links" to="/news">
                News
              </Link>

              <Link className="nav_links" to="/contact">
                Contact
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" aria-label="Search" />
              <Button variant="outline-success" className="Searchfield-btn">
                GO
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
