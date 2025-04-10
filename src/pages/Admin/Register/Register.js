import { useAuthentication } from "../../../hooks/useAuthentication";
import styles from './Register.module.css';

import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user ={
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
    }

    const res = await createUser(user);

    console.log(res);
  }

  useEffect(() =>{
    if(authError){
      setError(authError);
    }
  }, [authError]);
  
  return (
    <div className={styles.register}>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Registro</h1>
            <p>Realize seu registro para ter acesso ao painel administrativo.</p>
          </div>
        </div>
      </div>
      <div className={styles.register_form}>        
      <h1>Realize seu cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="E-mail do usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn">Aguarde..</button>}
        {error && <p className="">{error}</p>}
      </form>
      <div className={styles.space}></div>
      </div>
    </div>
  )
}

export default Register
