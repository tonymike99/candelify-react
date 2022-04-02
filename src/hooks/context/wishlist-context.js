import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const WishlistContext = createContext(defaultObj);

const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState(
    JSON.parse(localStorage.getItem("storedWishlistProducts")) ?? []
  );

  useEffect(() => {
    localStorage.setItem(
      "storedWishlistProducts",
      JSON.stringify(wishlistProducts)
    );
  });

  const valueObj = {
    wishlistProducts,
    setWishlistProducts,
  };

  return (
    <WishlistContext.Provider value={valueObj}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
