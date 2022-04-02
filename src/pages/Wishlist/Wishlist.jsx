import styles from "./Wishlist.module.css";
import { CardPortrait } from "../../components/index";
import { useWishlist } from "../../hooks/context/index";
import { useDocumentTitle } from "../../hooks/custom/index";

function Wishlist() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Wishlist");

  // WISHLIST PRODUCTS
  const { wishlistProducts } = useWishlist();

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <section className="flex-center portrait-cards">
          <div className="section-header">
            <p className="text-bold text-center">
              Showing {wishlistProducts.length} products
            </p>
          </div>
          <div className="cards-portrait">
            {wishlistProducts.length ? (
              wishlistProducts.map((product) => (
                <CardPortrait key={product._id} productData={product} />
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

export { Wishlist };
