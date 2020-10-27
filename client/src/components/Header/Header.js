import React, { Component } from "react";
import "./Header.scss";
import Logo from "./chefhero_logo_white.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="Logo" className="logo-chefhero" />
      </div>
    );
  }
}

export default Header;
