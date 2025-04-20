import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>{" "}
      |
      <Link to="/shop" className="nav-link">
        Shop
      </Link>{" "}
      |
      <Link to="/cart" className="nav-link">
        Cart ({cartItemCount})
      </Link>
      <h1 className="logo">🛒 Fake Store</h1>
    </nav>
  );
};

export default Navbar;
