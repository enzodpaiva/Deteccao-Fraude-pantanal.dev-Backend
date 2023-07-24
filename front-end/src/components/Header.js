import React from "react";
import "./Header.css";
import NotificationIcon from "./BellIcon";
import logo from "../assets/data_wizard_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" width="100" height="100"/>
      </div>
      <div className="title" >
        Data Wizard
      </div>
      <div className="warnings">
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Header;
