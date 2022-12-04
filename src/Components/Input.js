import React from "react";
const Input = (props) => {
  console.log("Input Running");
  return <input onChange={props.onChange} type="number" />;
};
export default Input;
