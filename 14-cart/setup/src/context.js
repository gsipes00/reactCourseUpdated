import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

// intial state object passed into useReducer
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
  quantity: 0,
  name: ["Gene", "Charles", "Robby", "Thurston"],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // clear cart function in CartContainer.js
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  // remove single item function in CartItems.js
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  // increase quantitiy
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  // decrease quantitiy
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
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
