import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

import styles from "./Menu.module.css";

const Menu = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }
    
  return (
    <nav className={styles.navbar}>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                    Quem Somos
                </NavLink>
            </li>
            <li>
                <NavLink to="/materials" className={({isActive}) => (isActive ? styles.active : "")}>
                    Materiais
                </NavLink>
            </li>
            <li>
                <NavLink to="/newsletter" className={({isActive}) => (isActive ? styles.active : "")}>
                    Notícias
                </NavLink>
            </li>  
            <li>
                <NavLink to="/contact" className={({isActive}) => (isActive ? styles.active : "")}>
                    Contato
                </NavLink>
            </li>
            {user && (
                <li>
                <NavLink to="/profile/home" className={({isActive}) => (isActive ? styles.active: "")}>
                    Perfil
                </NavLink>
            </li>
            )}
             {user && (
                
                <li>
                    <button className={styles.btn} onClick={logout}>Sair</button>
                </li>
            )} 
            {!user && (
                <li>
                <NavLink to="/associates" className={({isActive}) => (isActive ? styles.active : "")}>
                    Associados
                </NavLink>
            </li>
            )} 
           
        </ul>
    </nav>
  )
}

export default Menu
