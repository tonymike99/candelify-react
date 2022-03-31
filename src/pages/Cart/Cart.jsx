import styles from "./Cart.module.css";
import { CardStretched, CartBillDetails } from "../../components/index";
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
        <section className="flex-center">
          <div className="section-header">
            <p className="text-bold">Showing {cartProducts.length} products</p>
          </div>

          {cartProducts.length ? (
            cartProducts.map((product) => (
              <CardStretched key={product._id} productData={product} />
            ))
          ) : (
            <div> No products found!</div>
          )}
        </section>
      </main>
    </div>
  );
}

export { Cart };
