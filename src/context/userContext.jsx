import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
export const Context = createContext(null);
const ContextProvider = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
