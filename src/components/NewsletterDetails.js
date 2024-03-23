import { Link } from "react-router-dom";
import styles from './NewsletterDetails.module.css';
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

const NewsletterDetails = ({ post, latestPost }) => { // Adicionando propriedade latestPost
  const formattedDate = formatDate(post.createdAt);

  return (
    <>
      <Link className={`${styles.post_detail} ${latestPost ? styles.latest_post : ''}`} to={`/newsletter/post/${post.id}`}>
        <div className={styles.post_image}>
          <img src={post.image} alt={post.title} />
        </div>
        <div className={styles.details}>
            <h4>{post.title}</h4>
            <div className={styles.block}>
                <div className={styles.category}>{post.type}</div>
                <h4><CiCalendarDate />{formattedDate}</h4>
            </div>
        </div>       
      </Link>
    </>
  );
};

export default NewsletterDetails;
