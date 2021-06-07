import React,{useState} from "react";

function Navbar() {
  const[isDark,setIsDark]=useState(false)

  return (
    <div className="navbar">
  <h1 className="float-left">
      <img  src='/logo.png' height="50px" className="logo d-inline-block align-top"
        alt=""/>
 Weather App
        </h1> 
        <i
              class={
                isDark
                  ? "fa fa-sun float-right "
                  : "fas fa-moon float-right"
              }
              aria-hidden="true"
              onClick={() => setIsDark(!isDark)}
            ></i>
    </div>
  );
}

export default Navbar;
