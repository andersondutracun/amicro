import { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import styles from './CreateNewsletter.module.css';
import { useNavigate } from 'react-router';
import { useAuthValue } from '../../../context/AuthContext';
import { useInsertDocument } from '../../../hooks/useInsertDocument';

const CreateNewsletter = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [preview, setPreview] = useState("");
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();

    const { insertDocument, response } = useInsertDocument("news");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormError("");

        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL");
        }

        if (!title || !image || !type || !editorState || !preview) {
            setFormError("Por favor, preencha todos os campos!");
            return;
        }

        insertDocument({
            title,
            image,
            type,
            body: editorState.getCurrentContent().getPlainText('\u0001'),
            preview,
            uid: user.uid,
            createdBy: user.displayName,
        });
    };

    return (
        <div className='section'>
            <div className='header'>
                <div className='container'>
                    <div className='banner'>
                        <h1>Noticias</h1>
                        <p>Defina nos campos abaixo os dados da noticia.</p>
                    </div>
                </div>
            </div>
            <div className={styles.create_post}>
                <h2>Criar postagem (Noticias)</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Titulo</span>
                        <input type="text" name="title" required placeholder='Escreva o titulo da noticia' onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </label>
                    <label>
                        <span>URL da Imagem</span>
                        <input type="text" name="image" required placeholder='Cole o link da imagem da noticia' onChange={(e) => setImage(e.target.value)} value={image}/>
                    </label>
                    {image && <img src={image} alt='Preview da imagem' style={{ maxWidth: '100%', maxHeight:'200px' }} />}
                    <label>
                        <span>Tipo de noticia</span>
                        <input type="text" name="type" required placeholder='Escreva o tipo da noticia. Ex: Pesquisa, Imprensa, Economia, Blog, etc.' onChange={(e) => setType(e.target.value)} value={type}/>
                    </label>
                    <label>
                        <span>Conteudo</span>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={setEditorState}
                            placeholder='Escreva o conteudo da noticia.'
                        />
                    </label>
                    <label>
                        <span>Sub titulo</span>
                        <input type="text" name="preview" required placeholder='Escreva o subtitulo da noticia' onChange={(e) => setPreview(e.target.value)} value={preview}/>
                    </label>
                    {!response.loading && <button className='btn'>Criar Noticia!</button>}
                    {response.loading && <button className='btn' disabled>Aguarde ...</button>}
                    {(response.error || formError) && (<p className='error'>{response.error || formError}</p>)}
                </form>
            </div>
        </div>
    );
};

export default CreateNewsletter;
