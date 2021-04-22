import React, { useContext } from "react";
import { ThemeContext } from "./../context/themeContext";

const ThemeToggle = ({ themeStyle }) => {
  const { pageThemeType, setPageThemeType } = useContext(ThemeContext);
  const { ui, text } = themeStyle;
  /* console.log("theme", pageThemeType); */
  const changePageLang = () => {
    if (pageThemeType === "dark") {
      /* console.log("pageThemeType", pageThemeType); */
      setPageThemeType("light");
    } else {
      /* console.log("pageLanguage", pageLanguage); */
      setPageThemeType("dark");
    }
  };
  return (
    <div
      onClick={changePageLang}
      className="themeToggle"
      style={{
        color: `${text}`,
        backgroundColor: `${ui}`,
      }}
    >
      {pageThemeType === "dark" && <span>light</span>}
      {pageThemeType === "light" && <span>dark</span>}
    </div>
  );
};

export default ThemeToggle;
