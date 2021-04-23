import React from "react";
const Logo = ({ component }) => {
  /* console.log(component); */
  return (
    <div className="logo">
      <div className="bg-color">
        <img
          src={`https://gidak-portfolio-demo.herokuapp.com${component.logo.url}`}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Logo;
