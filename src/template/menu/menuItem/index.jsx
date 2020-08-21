import React from "react";
import { Link } from "react-router-dom";

export const MenuItem = (props) => {
  return (
    <li className="nav-item">
      <Link to={props.link} className="nav-link">
        {props.nome}
      </Link>
    </li>
  );
};
