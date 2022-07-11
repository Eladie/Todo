import React from "react";
import "./Button.css";

const Button = (props) => {
 
  return (
    <button type="submit" className="primary-button" {...props}>
      {props.children}
    </button>
  );
  
};

export default Button;
