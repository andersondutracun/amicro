import React from "react";
import styles from "./Category.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery"

// components
import NewsletterDetail from "../../components/NewsletterDetail";
import { Link, useParams } from "react-router-dom";

const Category = () => {
    const { category } = useParams();
  const { documents: news } = useFetchDocuments("news", category);
  console.log('teste');

  return (
    <div className={styles.search_container}>
      <h1>Resultados encontrados para: {category}</h1>
      <div className="post-list">
        {news && news.length === 0 && (
          <>
            <p>Não foram encontrados news a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {news && news.map((post) => <NewsletterDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Category;