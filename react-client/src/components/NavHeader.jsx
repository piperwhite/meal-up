import React from "react";
import { Navbar, NavDropdown, Image, Button } from 'react-bootstrap';

const NavHeader = (props) => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">MealUp</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-info" className="mr-3" onClick={props.handleAddRecipe}>Add Recipe</Button>
        <Image width={40} height={40} src={props.photoURL} roundedCircle/>
        <NavDropdown title={props.userName} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={props.handleSignOut} href="#action/1.1">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavHeader;









