import { createContext, useContext, useReducer, useEffect } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const defaultObj = {};
const FilterContext = createContext(defaultObj);

const FilterProvider = ({ children }) => {
  // INITIAL FILTERS STATE
  const initialFilters = {
    isMensCategory: false,
    isWomensCategory: false,
    isKidsCategory: false,
    isOthersCategory: false,
    isExcludeOutOfStock: false,
    isExcludeNormalDelivery: false,
    priceRangeValue: "1000",
    ratingValue: "",
    sortByPriceFrom: "",
  };

  // USEREDUCER
  const [filtersState, dispatch] = useReducer(
    filterReducer,
    JSON.parse(localStorage.getItem("storedFilters")) ?? initialFilters
  );

  // USEEFFECT
  useEffect(() => {
    localStorage.setItem("storedFilters", JSON.stringify(filtersState));
  });

  const valueObj = { filtersState, dispatch };

  return (
    <FilterContext.Provider value={valueObj}>{children}</FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
