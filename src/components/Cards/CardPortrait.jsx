import { useWishlist, useCart } from "../../hooks/context/index";

function CardPortrait({ productData }) {
  const {
    name,
    price,
    ratings,
    inStock,
    fastDelivery,
    oldPrice,
    discountPercent,
    image,
  } = productData;
  const { wishlistProducts, setWishlistProducts } = useWishlist();
  const { cartProducts, setCartProducts } = useCart();

  // ****************************************************************************************************

  const handlerAddToWishlist = (product) => {
    // If product is not there in wishlist, then add product to wishlist
    if (!wishlistProducts.includes(product)) {
      setWishlistProducts([...wishlistProducts, product]);
    }
  };

  const handlerRemoveFromWishlist = (id) => {
    // If product is there in wishlist, then remove product from wishlist
    setWishlistProducts(
      wishlistProducts.filter((product) => product._id !== id)
    );
  };

  const handlerAddToCart = (product) => {
    // If product is there in wishlist, then remove the product from wishlist
    if (wishlistProducts.includes(product))
      setWishlistProducts(
        wishlistProducts.filter(
          (currentProduct) => currentProduct._id !== product._id
        )
      );

    // If product is there in cart, then update the quantity
    const isProductAlreadyInCart = cartProducts.find((currentProduct) => {
      if (currentProduct._id === product._id) {
        currentProduct.quantity++;
        return true;
      }
      return false;
    });

    // If product is not there in cart, then add the product to cart and update quantity to 1
    if (!isProductAlreadyInCart) {
      product.quantity = 1;
      setCartProducts([...cartProducts, product]);
    }
  };

  const handlerRemoveFromCart = (id) => {
    // If product is there in cart, then remove product from cart
    setCartProducts(cartProducts.filter((product) => product._id !== id));
  };

  // ****************************************************************************************************

  return (
    <div className="card">
      <div className="relative">
        <button
          className="pointer btn round btn-light btn-floating badge badge-inside-top-right"
          onClick={
            wishlistProducts.includes(productData)
              ? () => handlerRemoveFromWishlist(productData._id)
              : () => handlerAddToWishlist(productData)
          }
        >
          <i
            className={
              wishlistProducts.includes(productData)
                ? "fas fa-heart fa-lg"
                : "far fa-heart fa-lg"
            }
            style={{
              color: wishlistProducts.includes(productData) ? "red" : "black",
            }}
          />
        </button>
        <img className="image-responsive" src={image} alt={name} />
      </div>

      <div className="card-body">
        <h4 className="h4">{name}</h4>
        <small className="text-bold">₹ {price}</small>
        <div>
          <small className="text-strikethrough">₹ {oldPrice}</small>{" "}
          <small className="text-bold">{discountPercent}% off</small>
        </div>
        <small className="text-bold">⭐ {ratings}/5</small>
        {inStock ? (
          <small className="text-muted"> In Stock </small>
        ) : (
          <small> Out of Stock </small>
        )}
        {fastDelivery ? (
          <small className="text-muted"> Fast Delivery </small>
        ) : (
          <small> 3 days minimum </small>
        )}
      </div>

      <div className="card-footer">
        <button
          className={
            cartProducts.includes(productData)
              ? "pointer btn btn-danger btn-width-100"
              : "pointer btn btn-primary btn-width-100"
          }
          onClick={
            cartProducts.includes(productData)
              ? () => handlerRemoveFromCart(productData._id)
              : () => handlerAddToCart(productData)
          }
        >
          {cartProducts.includes(productData)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export { CardPortrait };
