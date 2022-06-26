import "./Header.css";
import { Link } from "react-router-dom";
import {
  useTheme,
  useWishlist,
  useCart,
  useAuth,
} from "../../hooks/context/index";

function Header() {
  const { theme, setTheme } = useTheme();
  const { wishlistProducts } = useWishlist();
  const { cartProducts } = useCart();
  const { encodedToken, logoutUserDetails } = useAuth();

  /* **************************************************************************************************** */

  // To handle logout button onClick
  const handlerLogout = () => {
    logoutUserDetails();
  };

  // To handle theme button onClick
  const handlerTheme = () => {
    document.body.classList.toggle(theme);
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  // To calculate the number of cart products
  let numberOfCartProducts = cartProducts.reduce(
    (acc, cur) => (acc += cur.quantity),
    0
  );

  /* **************************************************************************************************** */

  return (
    <header className="header">
      <Link to="/" className="brand-name">
        Candelify
      </Link>

      <nav>
        <ul className="list list-horizontal">
          <li>
            {encodedToken ? (
              <Link to="/" className="styled-link" onClick={handlerLogout}>
                Logout <i className="fa-solid fa-right-from-bracket fa-lg"></i>
              </Link>
            ) : (
              <Link to="/login" className="styled-link">
                Login <i className="fas fa-user fa-lg" />
              </Link>
            )}
          </li>
          <li>
            <Link to="/" className="styled-link">
              <i className="fas fa-home fa-lg" />
            </Link>
          </li>
          <li className="relative">
            <Link to="/wishlist" className="styled-link">
              <i className="fas fa-heart fa-lg" />
              <span className="badge primary badge-sm badge-outside-top-right">
                {wishlistProducts.length}
              </span>
            </Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="styled-link">
              <i className="fas fa-shopping-cart fa-lg" />
              <span className="badge primary badge-sm badge-outside-top-right">
                {numberOfCartProducts}
              </span>
            </Link>
          </li>
          <li>|</li>
          <li>
            <a
              className="styled-link"
              href="https://github.com/tonymike99/candelify-react"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
          <li>
            <Link to="#" className="styled-link" onClick={handlerTheme}>
              <i
                id="theme-icon"
                className={
                  theme === "dark-theme"
                    ? "fas fa-sun fa-lg"
                    : "fas fa-moon fa-lg"
                }
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
