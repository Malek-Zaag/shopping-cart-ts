import { Badge, Drawer } from "@mui/material";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <NavbarBs className="shadow-sm bg-white fs-1 d-flex">
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
          Store
        </Nav.Link>
        <Nav.Link to="/about" as={NavLink}>
          About
        </Nav.Link>
      </Nav>
      <Badge
        badgeContent={1}
        color="primary"
        className="m-4"
        onClick={handleShow}
      >
        <ShoppingCartIcon />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Badge>
    </NavbarBs>
  );
}
