import React, { createContext, useState } from "react";
export const Context = createContext(null);
const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <Context.Provider value={{ user, setUser }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
