import styles from './Materials.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import MaterialsDetail from '../../components/MaterialsDetail';

const Materials = () => {
  const { documents: posts, loading } = useFetchDocuments("materials");
  const navigate = useNavigate();
  const postsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [categoryPageCounts, setCategoryPageCounts] = useState({});

  // Calcular o número total de páginas
  const totalPages = selectedCategory ? categoryPageCounts[selectedCategory] || 0 : Math.ceil(posts ? posts.length / postsPerPage : 0);

  // Função para mudar para a próxima página
  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  }

  // Função para voltar para a página anterior
  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  }

  // Função para navegar para uma página específica
  const goToPage = (page) => {
    setCurrentPage(page);
  }

  // Criar a lista de números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Obter todas as categorias dos posts e a quantidade de posts em cada categoria
  const categories = posts ? posts.reduce((acc, post) => {
    acc[post.type] = (acc[post.type] || 0) + 1;
    return acc;
  }, {}) : {};

  // Função para selecionar uma categoria e obter os posts correspondentes
  const selectCategory = (category) => {
    setSelectedCategory(category);
    // Filtrar os posts por categoria selecionada
    const filteredPosts = posts.filter(post => post.type === category);
    setCategoryPosts(filteredPosts);
    // Redefinir a página atual para 1
    setCurrentPage(1);
  }

  // Função para listar todas as postagens
  const listAllPosts = () => {
    setSelectedCategory(null);
    setCurrentPage(1);
  }

  // Efeito para limpar a categoria selecionada se os posts mudarem
  useEffect(() => {
    setSelectedCategory(null);
  }, [posts]);

  const calculateCategoryPageCounts = () => {
    if (posts) {
      const categoryCounts = {};
      for (const category in categories) {
        const pageCount = Math.ceil(categories[category] / postsPerPage);
        categoryCounts[category] = pageCount;
      }
      setCategoryPageCounts(categoryCounts);
    }
  };

  useEffect(() => {
    calculateCategoryPageCounts();
  }, [posts]);

  // Efeito para limpar a categoria selecionada se os posts mudarem
  useEffect(() => {
    setSelectedCategory(null);
  }, [posts]);

  // Renderizar a lista de posts com base na categoria selecionada
  const renderPosts = selectedCategory ? categoryPosts : posts;

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Materiais</h1>
            <p>Confira os materiais disponíveis.</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.containers}>
            <div className={styles.post_list}>
              {renderPosts &&
                renderPosts
                  .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
                  .map((post) => (
                    <MaterialsDetail key={post.id} post={post} />
                  ))}
            </div>
            {totalPages > 1 && (
              <div className={styles.pagination}>
                {currentPage > 1 && (
                  <button className={styles.pageButton} onClick={prevPage}>
                    {'<'}
                  </button>
                )}
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    className={`${styles.pageButton} ${
                      number === currentPage ? styles.active : ''
                    }`}
                    onClick={() => goToPage(number)}
                  >
                    {number}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button className={styles.pageButton} onClick={nextPage}>
                    {'>'}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles.categories}>
          <h2>Categorias</h2>
          <ul>
            <li onClick={listAllPosts}>
              <span>Exibir tudo</span> 
              <span>{posts ? posts.length : 0}</span>
            </li>
            {Object.entries(categories).map(([category, count]) => (
              <li key={category} onClick={() => selectCategory(category)}>
                <span>{category}</span>
                <span>{count}</span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Materials;
