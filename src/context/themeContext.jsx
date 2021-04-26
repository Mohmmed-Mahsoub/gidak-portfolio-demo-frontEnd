import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext(null);
const ThemeContextProvider = (props) => {
  const [themeData, setThemeData] = useState([{}]);
  const [pageThemeType, setPageThemeType] = useState("dark");
  const [isThemeDataFetched, setIsThemeDataFetched] = useState(false);
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://gidak-portfolio-demo.herokuapp.com/themes?themeType=${pageThemeType}`
      );
      setIsThemeDataFetched(true);
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
      value={{ themeData, pageThemeType, setPageThemeType, isThemeDataFetched }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
