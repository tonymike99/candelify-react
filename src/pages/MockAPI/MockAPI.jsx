import styles from "./MockAPI.module.css";
import Mockman from "mockman-js";
import { useDocumentTitle } from "../../hooks/custom/index";

function MockAPI() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Mockman");

  // ****************************************************************************************************

  return (
    <div className={styles.MockAPI}>
      <Mockman />
    </div>
  );
}

export { MockAPI };
