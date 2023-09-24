import React from "react";
import Searchbar from "../components/Searchbar";
import "./Navbar.css";
import Logo from "../Logo.png";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="logo-container">
        <img src={Logo} alt="" />
        <h1>Geopedia</h1>
      </div>
      <Searchbar />
    </div>
  );
};

export default Navbar;
