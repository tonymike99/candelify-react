import { useCart } from "../hooks/context/index";

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
  const { cartProducts, setCartProducts } = useCart();

  const handlerAddToCart = (product) => {
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

  return (
    <div className="card relative text-center">
      <button className="btn round btn-light btn-floating badge badge-lg badge-inside-top-right">
        <i
          className="fas fa-heart fa-lg"
          style={{
            color: "red",
            cursor: "pointer",
          }}
        />
      </button>
      <img className="image-responsive" src={image} alt={name} />
      <div className="card-header">
        <small className="text-muted">{name}</small>
      </div>
      <div className="card-body">
        <h3 className="text-bold">₹ {price}</h3>
        <small>
          <span className="text-strikethrough">₹ {oldPrice}</span>{" "}
          <span className="text-bold">{discountPercent}% off</span>
        </small>
        <p className="text-muted">⭐ {ratings}/5 ⭐</p>
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
              ? "btn btn-danger btn-width-100"
              : "btn btn-primary btn-width-100"
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
