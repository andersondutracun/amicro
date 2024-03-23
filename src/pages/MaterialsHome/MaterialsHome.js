import React from 'react';
import styles from './MaterialsHome.module.css';
import { FaBookOpen } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import MaterialsDetail from '../../components/MaterialsDetails';

const MaterialsHome = () => {
    const { documents: posts, loading } = useFetchDocuments("materials");
    const navigate = useNavigate();

    // Verifica se posts está carregando ou é nulo
    if (loading || !posts) {
        return <div>Loading...</div>;
    }

    // Limitando a quantidade de materiais a serem exibidos
    const limitedPosts = posts.slice(0, 5); // Altere o número 5 para o limite desejado

    return (
        <div className={styles.container}>
            <div className={styles.materials}>
                <div className={styles.title}>
                    <h3>Materiais</h3>
                    <h1>Conteúdo para ajudar o seu negócio</h1>
                    <Link to="/materials">Veja Mais <FaBookOpen /></Link>
                </div>
                <div className={styles.materials_list}>
                    {limitedPosts.map((post) => <MaterialsDetail key={post.id} post={post} />)}
                </div>
            </div>
        </div>
    );
};

export default MaterialsHome;
