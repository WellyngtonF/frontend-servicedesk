import React from "react";
import { Link } from "react-router-dom";

export const DropdownItem = (props) => {
  return (
    <li>
      <Link to={props.link} className="dropdown-item">
        {props.nome}
      </Link>
    </li>
  );
};
