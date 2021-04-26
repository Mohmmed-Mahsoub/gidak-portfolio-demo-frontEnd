import { useEffect, useState, useContext } from "react";
import LangToggle from "./../../components/langToggle";
import { DataContext } from "./../../context/dataContext";
import PageHeading from "./../../components/headings/pageHeading";
import Logo from "./../../components/logo";
import Address from "./../../components/address";
import ContactWays from "./../../components/contactWays";
import Footer from "./../../components/footer";
import { ThemeContext } from "./../../context/themeContext";
import ThemeToggle from "./../../components/themeToggle";
const HomePage = () => {
  const { themeData, isThemeDataFetched } = useContext(ThemeContext);
  /* console.log("themeData", themeData); */
  const { pageData, isPageDataFetched } = useContext(DataContext);
  const [logo, setLogo] = useState();
  const [heading, setHeading] = useState();
  const [address, setAddress] = useState();
  const [socialContact, setSocialContact] = useState();
  const [copyRight, setCopyRight] = useState();

  useEffect(() => {
    pageData.forEach((componentData) => {
      let { __component } = componentData;
      /* console.log(__component); */
      if (__component === "languages.logo") {
        setLogo(componentData);
      } else if (__component === "languages.heading") {
        setHeading(componentData);
      } else if (__component === "languages.address") {
        setAddress(componentData);
      } else if (__component === "languages.social-contact") {
        setSocialContact(componentData);
      } else if (__component === "languages.copy-right") {
        setCopyRight(componentData);
      }
    });
  }, [pageData]);
  console.log(
    "isThemeDataFetched",
    isThemeDataFetched,
    "isPageDataFetched",
    isPageDataFetched
  );
  if (isThemeDataFetched && isPageDataFetched == false) {
    return (
      <>
        <h1>loading</h1>
      </>
    );
  } else {
    return (
      <section
        style={{
          backgroundColor: `${themeData[0].bg}`,
          color: `${themeData[0].text}`,
        }}
      >
        <div className="container">
          {logo && <Logo component={logo} />}
          {heading && <PageHeading component={heading} />}
          {address && <Address component={address} />}
          <div className="toContact">
            {socialContact && (
              <ContactWays
                component={socialContact}
                themeStyle={themeData[0]}
              />
            )}
          </div>
        </div>
        {copyRight && <Footer component={copyRight} />}
        <ThemeToggle themeStyle={themeData[0]} />
        <LangToggle themeStyle={themeData[0]} />
      </section>
    );
  }
};

export default HomePage;
