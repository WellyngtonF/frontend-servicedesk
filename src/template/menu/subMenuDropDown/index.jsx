import React from "react";

export const SubmenuDropdown = (props) => {
  return (
    <li className="dropdown-submenu dropdown-hover">
      <a
        id={props.id}
        href="/#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        className="dropdown-item dropdown-toggle"
      >
        {props.nome}
      </a>
      <ul aria-labelledby={props.id} className="dropdown-menu border-0 shadow">
        {props.children}
      </ul>
    </li>
  );
};
