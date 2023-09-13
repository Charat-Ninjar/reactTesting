import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="home">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
      </div>
      <div className="owner">
      <Link to={"/owner"} className="nav-link">
          Owner
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
