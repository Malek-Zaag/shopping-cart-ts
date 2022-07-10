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
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
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
      {cartQuantity > 0 && (
        <Badge
          badgeContent={cartQuantity}
          color="primary"
          className="m-4"
          onClick={openCart}
        >
          <ShoppingCartIcon />
        </Badge>
      )}
    </NavbarBs>
  );
}
