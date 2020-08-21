import React from "react";

export const MenuDropdown = (props) => {
  return (
    <li className="nav-item dropdown">
      <a
        id={props.id}
        href="/#"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        className="nav-link dropdown-toggle"
      >
        {props.titulo}
      </a>
      <ul aria-labelledby={props.id} className="dropdown-menu border-0 shadow">
        {props.children}
      </ul>
    </li>
  );
};
