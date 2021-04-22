import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext(null);
const ThemeContextProvider = (props) => {
  const [themeData, setThemeData] = useState([{}]);
  const [pageThemeType, setPageThemeType] = useState("dark");
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:1337/themes?themeType=${pageThemeType}`
      );
      /* console.log("data", data); */

      const { themeCont } = data[0];
      /* console.log("themeCont", themeCont); */

      setThemeData(themeCont);
      /* console.log("themeData", themeData); */
    } catch (error) {
      console.log(error);
    }
  }, [pageThemeType]);
  return (
    <ThemeContext.Provider
      value={{ themeData, pageThemeType, setPageThemeType }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
