import { Link } from "react-router-dom"
import styles from './MaterialsDetail.module.css'
import { CiCalendarDate } from "react-icons/ci";

import { useAuthValue } from "../context/AuthContext";

const formatDate = (timestamp) => {
  if (!timestamp) return "Data inválida"; // Trata caso o timestamp seja nulo ou undefined
  const dateObject = timestamp.toDate(); // Converte o Timestamp para um objeto Date
  if (isNaN(dateObject.getTime())) {
    return "Data inválida"; // Retorna uma mensagem de erro se a data for inválida
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Removendo as opções de hora, minuto e segundo
  return dateObject.toLocaleDateString('pt-BR', options);
};


const NewsletterDetail = ({post}) => {
  const { user } = useAuthValue();
  const formattedDate = formatDate(post.createdAt);
  
  return (
    <>
        <div className={styles.post_detail}>
            <div className={styles.post_image}>
                <img src={post.image} alt={post.title} />
            </div>
        <h2>{post.title}</h2>
        <p className={styles.type}>{post.type}</p>
        <div className={styles.details}>   
            <p>{post.preview}</p>
            { user && (
              <button src={post.link}>Baixar</button>
            )}
            
        </div>
      </div>
    </>
    );
  };
  
  export default NewsletterDetail;