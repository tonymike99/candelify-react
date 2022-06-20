import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/custom/index";

function Signup() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Signup");

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className="main">
        <section className="auth">
          <h3 className="h3">SIGN UP</h3>

          <form className="form" action="#">
            <div className="form-control">
              <input
                type="text"
                id="firstNameInput"
                placeholder="First Name"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                id="lastNameInput"
                placeholder="Last Name"
                required
              />
            </div>

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
                Sign up
              </button>
            </div>

            <small>
              Have an account?
              <Link to="/login" className="styled-link">
                {" "}
                Log in
              </Link>
            </small>
          </form>
        </section>
      </main>
    </div>
  );
}

export { Signup };
