import React from "react";

const Button = props => {
  console.log(props);
  return (
    <button onClick={props.method}>
      <b>{props.text}</b>
    </button>
  );
};

export default Button;
