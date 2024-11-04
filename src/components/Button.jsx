import React from "react";

const Button = ({ name, classname }) => {
  return <button className={classname}>{name}</button>;
};

export default Button;
