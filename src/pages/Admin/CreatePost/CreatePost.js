import styles from './CreatePost.module.css'

import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Postagem</h1>
            <p>Escolha o tipo de postagem que gostaria de fazer.</p>
          </div>
        </div>
      </div>
      <div className={styles.createpost}>
        <div>
          <div className={styles.hub}>
            <h1>Noticias</h1>
            <p>Poste noticias no site principal</p>
            <button onClick={() => handleButtonClick('/admin/createpost/createnewsletter')}>acessar</button>
          </div>
        </div>
        <div>
          <div className={styles.hub}>
            <h1>Materiais</h1>
            <p>Poste materiais no site principal</p>
            <button onClick={() => handleButtonClick('/admin/createpost/creatematerials')}>acessar</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreatePost
