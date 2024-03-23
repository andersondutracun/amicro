import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";
 
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.footer}>
    <ul className={styles.links_list_footer}>
        <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active_footer : "")}>
                Inicio
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active_footer : "")}>
                Quem Somos
            </NavLink>
        </li>
        <li>
            <NavLink to="/materials" className={({isActive}) => (isActive ? styles.active_footer : "")}>
                Materiais
            </NavLink>
        </li>
        <li>
            <NavLink to="/newsletter" className={({isActive}) => (isActive ? styles.active_footer : "")}>
                Notícias
            </NavLink>
        </li>  
        <li>
            <NavLink to="/contact" className={({isActive}) => (isActive ? styles.active_footer : "")}>
                Contato
            </NavLink>
        </li>  
        <li>
            <NavLink to="/associates" className={({isActive}) => (isActive ? styles.active_footer : "")}>
                Associados
            </NavLink>
        </li>
    </ul>
</nav>
  )
}

export default Menu
