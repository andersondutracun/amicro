import { useState } from 'react';
import styles from './CreateMaterials.module.css';
import { useNavigate } from 'react-router';
import { useAuthValue } from '../../../context/AuthContext';
import { useInsertDocument } from '../../../hooks/useInsertDocument';

const CreateMaterials = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [preview, setPreview] = useState("");
    const [link, setLink] = useState("");
    const [formError, setFormError] = useState("");

    const {user} = useAuthValue();

    const {insertDocument, response} = useInsertDocument("materials");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormError("");

        try {
            
            new URL(image)

        } catch (error) {
            
            setFormError("A imagem precisa ser uma URL")

        }

        if(!title || !image || !type || !preview){
            setFormError("Por favor, preencha todos os campos!");
        }

        if(formError) return;

        insertDocument({
            title,
            image,
            type,
            preview,
            uid: user.uid,
            createdBy: user.displayName,
          });
    }
 
    const handleImageChange = (e) => {
      const imageUrl = e.target.value;
      try {
          new URL(imageUrl);
          setImage(imageUrl);
          setFormError('');
      } catch (error) {
          setFormError("A imagem precisa ser uma URL válida");
      }
  };

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Materiais</h1>
            <p>Defina nos campos abaixo os dados do material.</p>
          </div>
        </div>
      </div>
      <div className={styles.create_post}>
        <h2>Criar postagem (Materiais)</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Titulo</span>
                <input type="text" name="title" required placeholder='Escreva o titulo do material' onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
            <label>
                <span>URL da Imagem</span>
                <input type="text" name="image" required placeholder='Cole o link da imagem do material' onChange={(e) => setImage(e.target.value)} value={image}/>
            </label>
            {image && <img src={image} alt='Preview da imagem' style={{ maxWidth: '100%', maxHeight:'200px' }} />}
            <label>
                <span>Tipo de noticia</span>
                <input type="text" name="type" required placeholder='Escreva o tipo do material. Ex: Cartilha, Revista, Planilha, etc.' onChange={(e) => setType(e.target.value)} value={type}/>
            </label>
            <label>
                <span>Sub titulo</span>
                <input type="text" name="preview" required placeholder='Escreva o subtitulo do material' onChange={(e) => setPreview(e.target.value)} value={preview}/>
            </label>
            <label>
                <span>Link para download</span>
                <input type="text" name="link" required placeholder='Insira o link do download' onChange={(e) => setLink(e.target.value)} value={link}/>
            </label>
            {!response.loading && <button className='btn'>Adicionar Material!</button>}
            {response.loading && <button className='btn' disabled>Aguarde ...</button>}
            {(response.error || formError) && (<p className='error'>{response.error || formError}</p>)}
        </form>
      </div>
    </div>
  )
}

export default CreateMaterials
