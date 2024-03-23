import styles from './HomeAdm.module.css'

import { useAuthValue } from '../../../context/AuthContext'

const HomeAdm = () => {

  const { user } = useAuthValue();

  return (
    <div className={styles.homeadm}>
      <h1>Olá </h1>
      <p>Seja bem vindo ao painel da Amicro</p>
    </div>
  )
}

export default HomeAdm
