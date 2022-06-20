import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/custom/index";

function Login() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Login");

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className="main">
        <section className="auth">
          <h3 className="h3">LOGIN</h3>

          <form className="form" action="#">
            <div className="form-control">
              <input
                type="email"
                id="emailInput"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                id="passwordInput"
                placeholder="Password"
                required
              />
            </div>

            <div className="form-control">
              <button className="btn btn-primary btn-width-100" type="submit">
                Login
              </button>
            </div>

            <small>
              Don't have an account?
              <Link to="/signup" className="styled-link">
                {" "}
                Sign up
              </Link>
            </small>
          </form>
        </section>
      </main>
    </div>
  );
}

export { Login };
