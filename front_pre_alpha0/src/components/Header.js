import React from "react";
import "./Header.css";
import logo from "../assets/b3-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" width="100" height="100"/>
      </div>
      <div className="title" >
        Onça Pintada
      </div>
    </div>
  );
};

export default Header;
