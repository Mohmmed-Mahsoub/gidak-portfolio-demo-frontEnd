import React, { useContext } from "react";
import { DataContext } from "./../context/dataContext";

const LangToggle = ({ themeStyle }) => {
  const { pageLanguage, setPageLanguage } = useContext(DataContext);
  const { ui, text } = themeStyle;
  /* console.log("lang", pageLanguage); */
  const changePageLang = () => {
    if (pageLanguage === "arabic") {
      /* console.log("pageLanguage", pageLanguage); */
      setPageLanguage("english");
    } else {
      /* console.log("pageLanguage", pageLanguage); */
      setPageLanguage("arabic");
    }
  };
  return (
    <div
      onClick={changePageLang}
      className="langToggle"
      style={{
        color: `${text}`,
        backgroundColor: `${ui}`,
      }}
    >
      {pageLanguage === "arabic" && <span>english</span>}
      {pageLanguage === "english" && <span>عربي</span>}
    </div>
  );
};

export default LangToggle;
