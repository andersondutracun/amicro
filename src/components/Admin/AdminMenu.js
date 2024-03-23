import React from 'react'

import { useAuthentication } from "../../hooks/useAuthentication";

import { NavLink } from "react-router-dom";

import styles from "./AdminMenu.module.css"

const AdminMenu = () => {

    const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/admin/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/createpost" className={({isActive}) => (isActive ? styles.active : "")}>
                    Criar Postagem
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/users" className={({isActive}) => (isActive ? styles.active : "")}>
                    Usuários
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/profile" className={({isActive}) => (isActive ? styles.active : "")}>
                    Perfil
                </NavLink>
            </li>  
            <li>
                <button onClick={logout}>Sair</button>
            </li>
        </ul>
    </nav>

  )
}

export default AdminMenu
