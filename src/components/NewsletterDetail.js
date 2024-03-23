import { Link } from "react-router-dom"
import styles from './NewsletterDetail.module.css'
import { CiCalendarDate } from "react-icons/ci";

const formatDate = (timestamp) => {
  if (!timestamp) return "Data inválida"; 
  const dateObject = timestamp.toDate();
  if (isNaN(dateObject.getTime())) {
    return "Data inválida";
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dateObject.toLocaleDateString('pt-BR', options);
};


const NewsletterDetail = ({post}) => {
  const formattedDate = formatDate(post.createdAt);
  
  return (
    <>
      <Link className={styles.post_detail} to={`/newsletter/post/${post.id}`}>
        <div className={styles.post_image}>
          <img src={post.image} alt={post.title} />
        </div>
        <div className={styles.details}>
          <div className={styles.post_data}>
            <div className={styles.post_calendar}>
              <p className={styles.calendar}><CiCalendarDate />
              {formattedDate}</p> {/* Exibindo a data formatada */}
            </div>
            <p className={styles.type}>{post.type}</p>
          </div>
          <h2>{post.title}</h2>
          <p>{post.preview}</p>
        </div>
      </Link>
    </>
    );
  };
  
  export default NewsletterDetail;