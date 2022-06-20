import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardCategory, CardLandscape, Slideshow } from "../../components/index";
import { articleData } from "../../data/articles";
import { useDocumentTitle, useAxios } from "../../hooks/custom/index";

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  // GET DATA

  const params = {
    method: "get",
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
      <main>
        <section>
          {loading && <h3 className="h3 text-center">Loading categories...</h3>}
          {error && <p className="text-bold text-center">{error.message}</p>}
        </section>

        {!error && (
          <section className="categories">
            {categories.map((category) => (
              <Link key={category._id} to="/products">
                <CardCategory key={category._id} data={category} />
              </Link>
            ))}
          </section>
        )}

        <section className="banner">
          <img
            className="image-responsive image-banner"
            src="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </section>

        <section className="articles">
          {articleData.map((content) => (
            <CardLandscape key={content._id} data={content} />
          ))}
        </section>
      </main>
    </div>
  );
}

export { Home };
