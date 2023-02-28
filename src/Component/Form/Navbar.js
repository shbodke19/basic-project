import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <NavLink className="nav" to="/">
          Home
        </NavLink>
        <NavLink className="nav" to="/about">
          About
        </NavLink>
        <NavLink className="nav" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav" to="/login">
          Login Here
        </NavLink>
        <NavLink className="nav" to="/register">
          Register Here
        </NavLink>
      </header>
    </>
  );
};

export default Navbar;
