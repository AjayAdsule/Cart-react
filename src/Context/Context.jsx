/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from "react";
import { product } from "./Data"; // all product store in Data.jsx file
import { cartReducer } from "./Reducer";  // this is useReducer function
const Cart = createContext();

const Context = ({ children }) => {
  // creating reducer function for handling multiple state
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
