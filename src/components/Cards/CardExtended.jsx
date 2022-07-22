import { useWishlist, useCart } from "../../hooks/context/index";

function CardExtended({ productData }) {
  const { name, oldPrice, price, discountPercent, quantity, image } =
    productData;
  const { wishlistProducts, setWishlistProducts } = useWishlist();
  const { cartProducts, setCartProducts } = useCart();

  // ****************************************************************************************************

  const handlerSaveToWishlist = (productData) => {
    // Remove product from cart
    setCartProducts(
      cartProducts.filter((product) => product._id !== productData._id)
    );

    // Add product to wishlist
    if (wishlistProducts.includes(productData))
      setWishlistProducts([...wishlistProducts]);
    else setWishlistProducts([...wishlistProducts, productData]);
  };

  const handlerRemoveFromCart = (id) => {
    // Remove product from cart
    setCartProducts(cartProducts.filter((product) => product._id !== id));
  };

  const handlerIncreaseQuantity = (id) => {
    // Find the product in cart whose quantity is to be increased
    setCartProducts(
      cartProducts.map((product) =>
        product._id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handlerDecreaseQuantity = (id) => {
    // Find the product in cart whose quantity is to be increased
    setCartProducts(
      cartProducts.filter((product) => {
        if (product._id === id) {
          if (product.quantity === 1) return false;
          product.quantity--;
        }
        return true;
      })
    );
  };

  // ****************************************************************************************************

  return (
    <div className="card card-extended">
      <div className="card-left-content">
        <img className="image-responsive" src={image} alt={name} />
      </div>

      <div className="card-middle-content">
        <h4 className="h4">{name}</h4>
        <small className="text-bold">₹ {price}</small>
        <div>
          <small className="text-strikethrough">₹ {oldPrice}</small>{" "}
          <small className="text-bold">{discountPercent}% off</small>
        </div>
        <p>
          Quantity:{" "}
          <button
            className="round btn btn-secondary btn-floating"
            onClick={() => handlerDecreaseQuantity(productData._id)}
          >
            <i className="fas fa-minus" />
          </button>{" "}
          {quantity}{" "}
          <button
            className="round btn btn-primary btn-floating"
            onClick={() => handlerIncreaseQuantity(productData._id)}
          >
            <i className="fas fa-plus" />
          </button>
        </p>
      </div>

      <div className="card-right-content">
        <button
          className="pointer btn btn-secondary-outline btn-width-100"
          onClick={() => handlerSaveToWishlist(productData)}
        >
          Save to wishlist
        </button>
        <button
          className="pointer btn btn-danger btn-width-100"
          onClick={() => handlerRemoveFromCart(productData._id)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export { CardExtended };
