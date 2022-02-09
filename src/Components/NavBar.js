import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CreateCat from "./CreateCat";
import api from "../stores/api";

function NavBar() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Let's Get Cooking, User!</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Bring to the Table!"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/ingredients/addIngredient">
                  Add Ingredients
                </NavDropdown.Item>
                <NavDropdown.Item href="/categories/createcat">
                  Create Category
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/recipes/createRecipe">
                  Cook Recipe
                </NavDropdown.Item>
              </NavDropdown>
              <Button variant="light">Sign In/Up</Button>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
