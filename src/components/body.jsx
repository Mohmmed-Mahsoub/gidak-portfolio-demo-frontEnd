import React, { useContext } from "react";
import { Context } from "./../contexts/context";
import Logo from "./logo";
import PageHeading from "./headings/pageHeading";
import Address from "./address";
import ContactWays from "./contactWays";
import Footer from "./footer";
const Body = () => {
  const {
    data: { bodyBg },
  } = useContext(Context);
  return (
    <section
      style={{ backgroundImage: `url(${bodyBg.img})`, color: bodyBg.textColor }}
    >
      <div style={{ backgroundColor: bodyBg.overlayColor }} className="overlay">
        <div className="container">
          <Logo />
          <PageHeading />
          <Address />
          <div className="toContact">
            <ContactWays />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Body;
