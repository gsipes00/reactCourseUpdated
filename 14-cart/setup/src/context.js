import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

// intial state object passed into useReducer
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
  name: ["Gene", "Charles", "Robby", "Thurston"],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // clear cart function
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
