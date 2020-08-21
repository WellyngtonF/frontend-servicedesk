import React from "react";

export const Card = (props) => {
  return (
    <div className={`card card-${props.card} ${props.tab}`}>
      {props.children}
    </div>
  );
};
