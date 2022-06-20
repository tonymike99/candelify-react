import styles from "./Cart.module.css";
import { CardExtended, CartBillDetails } from "../../components/index";
import { useCart } from "../../hooks/context/index";
import { useDocumentTitle } from "../../hooks/custom/index";

function Cart() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Cart");

  // CART PRODUCTS
  const { cartProducts } = useCart();

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <aside className={styles.aside}>
        <CartBillDetails />
      </aside>

      <main className={styles.main}>
        <section>
          <p className="text-bold text-center margin-bottom-2">
            Showing {cartProducts.length} products
          </p>

          <div className="cards-wrapper cards-wrapper-column">
            {cartProducts.length ? (
              cartProducts.map((product) => (
                <CardExtended key={product._id} productData={product} />
              ))
            ) : (
              <div> No products found!</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export { Cart };
