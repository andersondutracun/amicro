import React from 'react';
import styles from './NewsletterHome.module.css';
import { IoIosJournal } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import NewsletterDetails from '../../components/NewsletterDetails';

const NewsletterHome = () => {
    const { documents: posts, loading } = useFetchDocuments("news");
    const navigate = useNavigate();

    // Verifica se posts está carregando ou é nulo
    if (loading || !posts) {
        return <div>Loading...</div>;
    }

    // Ordenando os posts pela data de criação
    const sortedPosts = [...posts].sort((a, b) => b.createdAt - a.createdAt);

    // Pegando a postagem mais recente
    const latestPost = sortedPosts[0];

    // Pegando as outras 5 postagens mais recentes
    const otherPosts = sortedPosts.slice(1, 5);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Últimas notícias</h3>
                <Link to="/newsletter">Saiba Mais <IoIosJournal /></Link>
            </div>
            <div className={styles.materials_list}>
                {latestPost && <NewsletterDetails key={latestPost.id} id="latestPost" post={latestPost} latestPost={true} className={`${styles.latest_post} ${styles.highlighted}`} />}
                {otherPosts.map((post, index) => <NewsletterDetails key={post.id} post={post} latestPost={false} className={index === 0 ? styles.other_post1 : styles.other_post2} />)}
            </div>

        </div>
    );
};

export default NewsletterHome;
