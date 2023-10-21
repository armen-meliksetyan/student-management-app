import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaList } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <Navbar bg="primary" expand="md" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{ width: 150 }}
              src="https://tumo.org/wp-content/uploads/2018/02/ENG003_Stroke-Black-H55px-2.png"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="mr-auto">
                <NavLink to="/" className="nav-link">
                  <FaList style={{ marginBottom: 3 }} /> List
                </NavLink>
                <NavLink to="/add" className="nav-link">
                  Add Student <AiOutlineUserAdd style={{ marginBottom: 3 }} />
                </NavLink>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default NavBar;
