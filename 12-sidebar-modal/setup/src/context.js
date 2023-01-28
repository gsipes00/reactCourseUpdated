import React, { useState, useContext } from "react";

const AppContext = React.createContext("bye  bye");
console.log(AppContext);

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

// custom hook for global import of useContext and AppContext
// allows for easier import between descendant components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
