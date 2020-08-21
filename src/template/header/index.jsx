import React from "react";

import Menu from "../menu";
import logo from "../logo2.png";

export const Header = () => (
  <nav className="main-header navbar navbar-expand navbar-light navbar-white">
    <div className="container">
      <a href="/#" className="navbar-brand">
        <img
          src={logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle bg-black text-center elevation-3"
        />
      </a>
      <Menu />
    </div>
  </nav>
);
