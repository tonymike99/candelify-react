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
        <p className="text-bold text-center margin-bottom-2">
          Showing {wishlistProducts.length} products
        </p>

        <div className="cards-wrapper">
          {wishlistProducts.map((product) => (
            <CardPortrait key={product._id} productData={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export { Wishlist };
