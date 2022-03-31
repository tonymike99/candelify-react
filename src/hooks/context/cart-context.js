import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const CartContext = createContext(defaultObj);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("storedCartProducts")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("storedCartProducts", JSON.stringify(cartProducts));
  });

  const valueObj = { cartProducts, setCartProducts };

  return (
    <CartContext.Provider value={valueObj}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
