// CSS
import styles from "./NewsletterPage.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const formatDate = (timestamp) => {
  if (!timestamp) return "Data inválida";
  const dateObject = timestamp.toDate();
  if (isNaN(dateObject.getTime())) {
    return "Data inválida";
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dateObject.toLocaleDateString('pt-BR', options);
};

const NewsletterPage = () => {
  const { id } = useParams();
  const { document: post, loading, error } = useFetchDocument("news", id);
  
  // Store fetched data in a separate state for conditional rendering
  const [postData, setPostData] = useState(null);
  
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  
  
  const formattedDate = postData ? formatDate(postData.createdAt) : null;
  
  return (
    <main>
    {loading && <p>Loading post...</p>}
    {error && <p>Error: {error}</p>}
    {postData && (
      <>
        <div className={styles.section}>
          <div className={styles.header}>
            <div className={styles.container}>
              <div className={styles.calendar}><span><CiCalendarDate /></span>{formattedDate}</div>
              <div className={styles.category}>{postData.type}</div>
            </div>
            <h1>{postData.title}</h1>
          </div>
        </div>
        <div className={styles.image}>
          <img src={postData.image} alt={postData.title} />
        </div>
        <div className={styles.section2}>
          <div className={styles.container2}>
            <div className={styles.post_content}>
              <div className={styles.content_post}>
                <div className={styles.block}>
                  <p>{postData.body}</p>
                  <Link to="/newsletter" className="btn">Voltar</Link>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </>
      )}
      
      
      </main>
      );
    };
    
    export default NewsletterPage;
    