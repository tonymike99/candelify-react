import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardCategory, CardLandscape, Slideshow } from "../../components/index";
// import { categories } from "../../data/categories";
import { articleData } from "../../data/articles";
import { useDocumentTitle, useAxios } from "../../hooks/custom/index";

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  // GET DATA

  const params = {
    method: "get",
    // baseURL: "https://candelify-react.netlify.app/",
    url: "/api/categories",
  };

  const { response, loading, error } = useAxios(params);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setCategories(response.categories);
    }
  }, [response]);

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        {loading && <h1 className="text-center">Loading categories...</h1>}
        {error && <p className="text-bold text-center">{error.message}</p>}

        {!error && (
          <section className={styles["categories"]}>
            {categories.map((category) => (
              <Link key={category._id} to="/products">
                <CardCategory key={category._id} data={category} />
              </Link>
            ))}
          </section>
        )}

        <section className="image-slider">
          <Slideshow />
          {/* <Data /> */}
        </section>

        <section className="new-arrivals cards-landscape">
          {articleData.map((content) => (
            <CardLandscape key={content._id} data={content} />
          ))}
        </section>
      </main>
    </div>
  );
}

export { Home };
