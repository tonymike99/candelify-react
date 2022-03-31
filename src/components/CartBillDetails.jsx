import { useCart } from "../hooks/context/cart-context";

function CartBillDetails() {
  const { cartProducts } = useCart();

  let calculatedQuantity = 0;

  calculatedQuantity = cartProducts.reduce(
    (acc, cur) => (acc += cur.quantity),
    0
  );

  let initialValue = {
    totalPrice: 0,
    totalDiscount: 0,
    deliveryCharges: 0,
  };

  let finalValue = cartProducts.reduce(
    (acc, cur) => ({
      ...acc,
      totalPrice: acc.totalPrice + cur.oldPrice * cur.quantity,
      totalDiscount:
        acc.totalDiscount +
        (cur.oldPrice * cur.quantity - cur.price * cur.quantity),
      deliveryCharges: acc.deliveryCharges + 25 * cur.quantity,
    }),
    initialValue
  );

  return (
    <>
      <h2 className="text-bold text-center">PRICE DETAILS</h2>
      <hr className="hr-thin" />
      <div className="total-price">
        <p>Total price</p>
        <p>Rs {finalValue.totalPrice}</p>
      </div>
      <div className="total-discount">
        <p>Total discount</p>
        <p>- Rs {finalValue.totalDiscount}</p>
      </div>
      <div className="delivery-charges">
        <p>Delivery charges</p>
        <p>Rs {finalValue.deliveryCharges}</p>
      </div>
      <hr className="hr-thin" />
      <div className="effective-price">
        <p className="text-bold">EFFECTIVE PRICE</p>
        <p className="text-bold">
          Rs{" "}
          {finalValue.totalPrice -
            finalValue.totalDiscount +
            finalValue.deliveryCharges}
        </p>
      </div>
      <hr className="hr-thin" />
      <small className="text-center">
        You save{" "}
        <span className="text-bold">Rs {finalValue.totalDiscount}</span> on this
        order
      </small>
      <button
        className={
          calculatedQuantity === 0
            ? "btn btn-width-100"
            : "btn btn-primary btn-width-100"
        }
        type="submit"
        disabled={calculatedQuantity === 0}
      >
        PLACE ORDER
      </button>
    </>
  );
}

export { CartBillDetails };
