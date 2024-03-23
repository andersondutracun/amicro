import React, { useState } from 'react';
import styles from './Restore.module.css'
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';


const Restore = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Email de recuperação de senha enviado. Verifique sua caixa de entrada.');
      setError(null);
    } catch (error) {
      setError('Ocorreu um erro ao enviar o email de recuperação de senha. Verifique o email e tente novamente.');
      setSuccessMessage(null);
    }
  };

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Recupere sua Senha</h1>
            
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.form}> 
            <form onSubmit={handleResetPassword}>
                    <input
                        type='email'
                        placeholder='Digite seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type='submit'>Enviar</button>
                    </form>
                    {error && <p className='error'>{error}</p>}
                    {successMessage && <p className='success'>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Restore;
