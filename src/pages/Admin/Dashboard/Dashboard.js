import { useState } from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../../hooks/useDeleteDocment";

const Dashboard = () => {
  const { user } = useAuthValue();

  const [currentPageMaterials, setCurrentPageMaterials] = useState(1);
  const [currentPageNews, setCurrentPageNews] = useState(1);
  const itemsPerPage = 5;

  // Para a coleção "materials"
  const { documents: materials, loading: materialsLoading } = useFetchDocuments("materials");
  const { deleteDocument: deleteMaterial } = useDeleteDocument("materials");

  // Para a coleção "news"
  const { documents: news, loading: newsLoading } = useFetchDocuments("news");
  const { deleteDocument: deleteNews } = useDeleteDocument("news");

  const paginateMaterials = (pageNumber) => setCurrentPageMaterials(pageNumber);
  const paginateNews = (pageNumber) => setCurrentPageNews(pageNumber);

  const indexOfLastMaterial = currentPageMaterials * itemsPerPage;
  const indexOfFirstMaterial = indexOfLastMaterial - itemsPerPage;
  const currentMaterials = materials && materials.slice(indexOfFirstMaterial, indexOfLastMaterial);

  const indexOfLastNews = currentPageNews * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = news && news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Dashboard</h1>
            <p>Gerencia todas as postagems feitas no site.</p>
          </div>
        </div>
      </div>

      {/* Materiais */}
      <div className={styles.page}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Materiais</h3>
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Criador</span>
          <span>Ações</span>
        </div>
        {materialsLoading ? (
          <p>Carregando...</p>
        ) : (
          <>
            {currentMaterials && currentMaterials.length > 0 ? (
              currentMaterials.map((material) => (
                <div className={styles.post_row} key={material.id}>
                  <p>{material.title}</p>
                  <p>{material.createdBy}</p>
                  <div className={styles.actions}>
                    <Link to={`/posts/${material.id}`} className="btn btn-outline">
                      Ver
                    </Link>
                    <Link to={`/posts/edit/${material.id}`} className="btn btn-outline">
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteMaterial(material.id)}
                      className="btn btn-outline btn-danger"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noposts}>
                <p>Não foram encontrados materiais</p>
              </div>
            )}
            <div className={styles.pagination}>
              <ul className={styles.pageNumbers}>
                {materials && materials.length > 0 &&
                  Array.from({ length: Math.ceil(materials.length / itemsPerPage) }, (_, i) => (
                    <li key={i} className={currentPageMaterials === i + 1 ? styles.active : null}>
                      <button onClick={() => paginateMaterials(i + 1)}>{i + 1}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Notícias */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Notícias</h3>
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Criador</span>
          <span>Ações</span>
        </div>
        {newsLoading ? (
          <p>Carregando...</p>
        ) : (
          <>
            {currentNews && currentNews.length > 0 ? (
              currentNews.map((newsItem) => (
                <div className={styles.post_row} key={newsItem.id}>
                  <p>{newsItem.title}</p>
                  <p>{newsItem.createdBy}</p>
                  <div className={styles.actions}>
                    <Link to={`/posts/${newsItem.id}`} className="btn btn-outline">
                      Ver
                    </Link>
                    <Link to={`/posts/edit/${newsItem.id}`} className="btn btn-outline">
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteNews(newsItem.id)}
                      className="btn btn-outline btn-danger"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noposts}>
                <p>Não foram encontradas notícias</p>
              </div>
            )}
            <div className={styles.pagination}>
              <ul className={styles.pageNumbers}>
                {news && news.length > 0 &&
                  Array.from({ length: Math.ceil(news.length / itemsPerPage) }, (_, i) => (
                    <li key={i} className={currentPageNews === i + 1 ? styles.active : null}>
                      <button onClick={() => paginateNews(i + 1)}>{i + 1}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
