import React from "react";
const Footer = ({ component }) => {
  return (
    <footer>
      <div className="container">
        <div className="forceTouchesLogo">
          <a href="https://forcetouches.com/" rel="noreferrer" target="_blank">
            <img
              src={`https://gidak-portfolio-demo.herokuapp.com/${component.companyLogo.url}`}
              alt=""
            />
          </a>
        </div>
        <div className="copyRights">
          <span>جميع الحقوق محفوظة ل</span>
          <span className="companyName">
            <a
              href="https://forcetouches.com/"
              rel="noreferrer"
              target="_blank"
            >
              {component.companyName}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
