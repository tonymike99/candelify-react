// FILTER PRODUCTS

const filterProducts = (data, state) => {
  let filteredProducts = [];

  if (state.isMensCategory)
    filteredProducts = filteredProducts.concat(
      [...data].filter((product) => product.category === "men")
    );

  if (state.isWomensCategory)
    filteredProducts = filteredProducts.concat(
      [...data].filter((product) => product.category === "women")
    );

  if (state.isKidsCategory)
    filteredProducts = filteredProducts.concat(
      [...data].filter((product) => product.category === "kids")
    );

  if (state.isOthersCategory)
    filteredProducts = filteredProducts.concat(
      [...data].filter((product) => product.category === "others")
    );

  if (
    !(
      state.isMensCategory ||
      state.isWomensCategory ||
      state.isKidsCategory ||
      state.isOthersCategory
    )
  )
    filteredProducts = [...data];

  if (state.isExcludeOutOfStock)
    filteredProducts = filteredProducts.filter(
      (product) => product.inStock === true
    );

  if (state.isExcludeNormalDelivery)
    filteredProducts = filteredProducts.filter(
      (product) => product.fastDelivery === true
    );

  filteredProducts = filteredProducts.filter(
    (product) => product.price <= parseFloat(state.priceRangeValue)
  );

  filteredProducts = filteredProducts.filter(
    (product) => product.ratings >= Number(state.ratingValue)
  );

  if (state.sortByPriceFrom === "LOW_TO_HIGH")
    filteredProducts.sort(
      (productA, productB) => productA.price - productB.price
    );
  else if (state.sortByPriceFrom === "HIGH_TO_LOW")
    filteredProducts.sort(
      (productA, productB) => productB.price - productA.price
    );

  return filteredProducts;
};

export { filterProducts };
