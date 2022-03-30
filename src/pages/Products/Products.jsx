import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import { FILTER_ACTIONS } from "../../constants/FILTER_ACTIONS";
import { filterProducts } from "../../helpers/filter-products";
import { CardPortrait } from "../../components/index";
import { useFilter } from "../../hooks/context/index";
import {
  useDocumentTitle,
  useScroll,
  useAxios,
} from "../../hooks/custom/index";

function Products() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Products");

  // RESET SCROLL POSITION
  useScroll();

  // PRODUCT FILTERS
  const { filtersState, dispatch } = useFilter();

  // ****************************************************************************************************

  // GET DATA

  const params = {
    method: "get",
    // baseURL: "http://localhost:3000",
    url: "/api/products",
  };

  const { response, loading, error } = useAxios(params);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setProducts(response.products);
    }
  }, [response]);

  // ****************************************************************************************************

  // EVENT HANDLERS

  const handlerResetFilters = () => {
    dispatch({ type: FILTER_ACTIONS.RESET_ALL_FILTERS });
  };

  const handlerMensCategory = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_MENS_CATEGORY,
      payload: { checkedProperty },
    });
  };

  const handlerWomensCategory = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_WOMENS_CATEGORY,
      payload: { checkedProperty },
    });
  };

  const handlerKidsCategory = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_KIDS_CATEGORY,
      payload: { checkedProperty },
    });
  };

  const handlerOthersCategory = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_OTHERS_CATEGORY,
      payload: { checkedProperty },
    });
  };

  const handlerExcludeOutOfStock = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_EXCLUDE_OUT_OF_STOCK,
      payload: { checkedProperty },
    });
  };

  const handlerExcludeNormalDelivery = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_EXCLUDE_NORMAL_DELIVERY,
      payload: { checkedProperty },
    });
  };

  const handlerPriceFilter = (e) => {
    const valueProperty = e.target.value;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_MAX_PRICE,
      payload: { valueProperty },
    });
  };

  const handlerRatingFilter = (e) => {
    const valueProperty = e.target.value;
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_BY_RATING,
      payload: { valueProperty },
    });
  };

  const handlerLowToHigh = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_SORT_BY_PRICE_FROM_LOW_TO_HIGH,
      payload: { checkedProperty },
    });
  };

  const handlerHighToLow = (e) => {
    const checkedProperty = e.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_SORT_BY_PRICE_FROM_HIGH_TO_LOW,
      payload: { checkedProperty },
    });
  };

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <aside className={styles.aside}>
        <div className="filter-header">
          <p className="text-bold">FILTERS</p>
          <button
            className="btn btn-danger"
            type="reset"
            onClick={handlerResetFilters}
          >
            Reset all
          </button>
        </div>

        <div className="filter-price">
          <label htmlFor="points" className="text-bold">
            Price
            <br />
            (Min Rs 0 and Max Rs 1000):
          </label>
          <br />
          <input
            type="range"
            id="points"
            list="filter-price-labels"
            name="points"
            min="0"
            max="1000"
            step="100"
            value={filtersState.priceRangeValue}
            onChange={(e) => handlerPriceFilter(e)}
          />
          <datalist id="filter-price-labels" className="price-range-labels">
            <option value="0" label="₹0"></option>
            <option value="100"></option>
            <option value="200"></option>
            <option value="300"></option>
            <option value="400"></option>
            <option value="500" label="₹500"></option>
            <option value="600"></option>
            <option value="700"></option>
            <option value="800"></option>
            <option value="900"></option>
            <option value="1000" label="₹1000"></option>
          </datalist>
        </div>

        <div className="filter-category">
          <p className="text-bold">Category</p>
          <div>
            <input
              type="checkbox"
              id="men"
              name="men"
              checked={filtersState.isMensCategory ? true : false}
              onChange={(e) => handlerMensCategory(e)}
            />
            <label htmlFor="men"> Men's Clothing </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="women"
              name="women"
              checked={filtersState.isWomensCategory ? true : false}
              onChange={(e) => handlerWomensCategory(e)}
            />
            <label htmlFor="women"> Women's Clothing </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="kids"
              name="kids"
              checked={filtersState.isKidsCategory ? true : false}
              onChange={(e) => handlerKidsCategory(e)}
            />
            <label htmlFor="kids"> Kid's Clothing </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="others"
              name="others"
              checked={filtersState.isOthersCategory ? true : false}
              onChange={(e) => handlerOthersCategory(e)}
            />
            <label htmlFor="others"> Others </label>
          </div>
        </div>

        <div className="filter-others">
          <p className="text-bold">Other filters</p>
          <div>
            <input
              type="checkbox"
              id="excludeOutOfStock"
              name="excludeOutOfStock"
              defaultValue="excludeOutOfStock"
              checked={filtersState.isExcludeOutOfStock ? true : false}
              onChange={(e) => handlerExcludeOutOfStock(e)}
            />
            <label htmlFor="excludeOutOfStock">
              {" "}
              Exclude out of stock products
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="excludeNormalDelivery"
              name="excludeNormalDelivery"
              value="excludeNormalDelivery"
              checked={filtersState.isExcludeNormalDelivery ? true : false}
              onChange={(e) => handlerExcludeNormalDelivery(e)}
            />
            <label htmlFor="excludeNormalDelivery">
              {" "}
              Exclude normal delivery
            </label>
          </div>
        </div>

        <div className="filter-rating">
          <p className="text-bold">Rating</p>
          <div>
            <input
              type="radio"
              id="fourStars"
              name="ratingFilter"
              defaultValue="4"
              checked={filtersState.ratingValue === "4" ? true : false}
              onChange={(e) => handlerRatingFilter(e)}
            />
            <label htmlFor="fourStars"> 4 stars and above</label>
          </div>
          <div>
            <input
              type="radio"
              id="threeStars"
              name="ratingFilter"
              defaultValue="3"
              checked={filtersState.ratingValue === "3" ? true : false}
              onChange={(e) => handlerRatingFilter(e)}
            />
            <label htmlFor="threeStars"> 3 stars and above</label>
          </div>
          <div>
            <input
              type="radio"
              id="twoStars"
              name="ratingFilter"
              defaultValue="2"
              checked={filtersState.ratingValue === "2" ? true : false}
              onChange={(e) => handlerRatingFilter(e)}
            />
            <label htmlFor="twoStars"> 2 stars and above</label>
          </div>
          <div>
            <input
              type="radio"
              id="oneStar"
              name="ratingFilter"
              defaultValue="1"
              checked={filtersState.ratingValue === "1" ? true : false}
              onChange={(e) => handlerRatingFilter(e)}
            />
            <label htmlFor="oneStar"> 1 star and above</label>
          </div>
        </div>

        <div className="filter-sort">
          <p className="text-bold">Sort by</p>
          <div>
            <input
              type="radio"
              id="sortFromLowToHigh"
              name="sortFromLowToHigh"
              defaultValue="sortFromLowToHigh"
              checked={
                filtersState.sortByPriceFrom === "LOW_TO_HIGH" ? true : false
              }
              onChange={(e) => handlerLowToHigh(e)}
            />
            <label htmlFor="sortFromLowToHigh"> Price - Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              id="sortFromHighToLow"
              name="sortFromHighToLow"
              defaultValue="sortFromHighToLow"
              checked={
                filtersState.sortByPriceFrom === "HIGH_TO_LOW" ? true : false
              }
              onChange={(e) => handlerHighToLow(e)}
            />
            <label htmlFor="sortFromHighToLow"> Price - High to Low</label>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        {loading && <h1 className="text-center">Loading products...</h1>}
        {error && <p className="text-bold text-center">{error.message}</p>}

        {!error && (
          <section className="flex-center portrait-cards">
            <div className="section-header">
              <p className="text-bold text-center">
                Showing {filterProducts(products, filtersState).length} products
              </p>
            </div>
            <div className="cards-portrait">
              {filterProducts(products, filtersState).length ? (
                filterProducts(products, filtersState).map((product) => (
                  <CardPortrait key={product._id} productData={product} />
                ))
              ) : (
                <div> No products found!</div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export { Products };
