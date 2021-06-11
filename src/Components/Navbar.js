import React from "react";

function Navbar(props) {

  return (
    <div className="navbar">
  <h1 className="float-left">
      <img  src='/logo.png' height="50px" className="logo d-inline-block align-top"
        alt=""/>
 Weather App
        </h1> 
        <i
              class={
                props.isDark
                  ? "fa fa-sun float-right "
                  : "fas fa-moon float-right"
              }
              aria-hidden="true"
              onClick={props.clicked}
            ></i>
    </div>
  );
}

export default Navbar;
