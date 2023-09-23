import React from "react";
import Searchbar from "../components/Searchbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <Searchbar />
      <button>Search</button>
    </div>
  );
};

export default Navbar;
