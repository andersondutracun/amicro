import React from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import NewsletterDetail from "../../components/NewsletterDetail";

const AllCategoriesPage = () => {
  const { documents: allPosts } = useFetchDocuments("news");

  return (
    <div>
      <h1>Todas as Categorias</h1>
      <div>
        {allPosts && allPosts.map((post) => (
          <NewsletterDetail key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesPage;
