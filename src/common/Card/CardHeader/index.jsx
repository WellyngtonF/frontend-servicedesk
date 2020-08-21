import React from "react";
import If from "../operator/if";

export default (props) => (
  <div className={`card-header ${props.header}`}>
    <If test={props.title}>
      <h2 className="card-title">{props.title}</h2>
    </If>
    {props.children}
  </div>
);
