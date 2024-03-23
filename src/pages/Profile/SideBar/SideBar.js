import styles from './SideBar.module.css'
import { NavLink } from 'react-router-dom'


const SideBar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <ul>
            <li><NavLink to='/profile/home' className={({isActive}) => (isActive ? styles.active: "")}>Perfil</NavLink></li>
            <li><NavLink to='/profile/business' className={({isActive}) => (isActive ? styles.active: "")}>Empresa</NavLink></li>
            <li><NavLink to='/profile/partners' className={({isActive}) => (isActive ? styles.active: "")}>Sócios</NavLink></li>
            <li><NavLink to='/profile/billing' className={({isActive}) => (isActive ? styles.active: "")}>Faturamento</NavLink></li>
            <li><NavLink to='/profile/services' className={({isActive}) => (isActive ? styles.active: "")}>Serviços</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
