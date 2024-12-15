import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);
  const count = cartProducts.length;

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary bg-primary bg-dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Redux
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Products</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart({count})</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
