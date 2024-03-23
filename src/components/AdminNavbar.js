import { NavLink } from "react-router-dom";
 
import styles from "./AdminNavbar.module.css";

import logo from "../images/logo.png"
import AdminMenu from "./Admin/AdminMenu";

const AdminNavbar = () => {

  

  return (
    <nav className={styles.AdminNavbar}>
        <NavLink to="/" className={styles.brand}>
            <img src={logo} alt="" />
        </NavLink>
        <ul className={styles.links_list}>
            <AdminMenu />
        </ul>
    </nav>
  )
}

export default AdminNavbar