import { FILTER_ACTIONS } from "../../constants/FILTER_ACTIONS";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ACTIONS.RESET_ALL_FILTERS:
      return {
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

    case FILTER_ACTIONS.SET_FILTER_BY_MENS_CATEGORY:
      return {
        ...state,
        isMensCategory: !state.isMensCategory,
      };

    case FILTER_ACTIONS.SET_FILTER_BY_WOMENS_CATEGORY:
      return {
        ...state,
        isWomensCategory: !state.isWomensCategory,
      };

    case FILTER_ACTIONS.SET_FILTER_BY_KIDS_CATEGORY:
      return {
        ...state,
        isKidsCategory: !state.isKidsCategory,
      };

    case FILTER_ACTIONS.SET_FILTER_BY_OTHERS_CATEGORY:
      return {
        ...state,
        isOthersCategory: !state.isOthersCategory,
      };

    case FILTER_ACTIONS.SET_FILTER_BY_EXCLUDE_OUT_OF_STOCK:
      return {
        ...state,
        isExcludeOutOfStock: !state.isExcludeOutOfStock,
      };

    case FILTER_ACTIONS.SET_FILTER_BY_EXCLUDE_NORMAL_DELIVERY:
      return {
        ...state,
        isExcludeNormalDelivery: !state.isExcludeNormalDelivery,
      };

    case FILTER_ACTIONS.SET_FILTER_BY_MAX_PRICE:
      return {
        ...state,
        priceRangeValue: action.payload.valueProperty,
      };

    case FILTER_ACTIONS.SET_FILTER_BY_RATING:
      return {
        ...state,
        ratingValue: action.payload.valueProperty,
      };

    case FILTER_ACTIONS.SET_SORT_BY_PRICE_FROM_LOW_TO_HIGH:
      return { ...state, sortByPriceFrom: "LOW_TO_HIGH" };

    case FILTER_ACTIONS.SET_SORT_BY_PRICE_FROM_HIGH_TO_LOW:
      return { ...state, sortByPriceFrom: "HIGH_TO_LOW" };

    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};
