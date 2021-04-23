import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
export const DataContext = createContext(null);
const DataContextProvider = (props) => {
  const [pageData, setPageData] = useState([]);
  const [pageLanguage, setPageLanguage] = useState("arabic");
  /* console.log("pageData", pageData); */
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://gidak-portfolio-demo.herokuapp.com/languages?lang=${pageLanguage}`
      );
      /* console.log("data", data); */
      const { content } = await data[0];
      /* console.log("content", content); */
      setPageData(content);
    } catch (error) {
      console.log(error);
    }
  }, [pageLanguage]);

  return (
    <DataContext.Provider
      value={{
        pageData,
        pageLanguage,
        setPageLanguage,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
