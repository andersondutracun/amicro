import styles from './Navbar.module.css';
import SocialNetworks from './Navbar/SocialNetworks';
import Logo from "../images/logo.png"


import { useAuthValue } from '../context/AuthContext';

import {Link} from 'react-router-dom';
import Menu from './Navbar/Menu';

const Navbar = () => {

    const { user } = useAuthValue(); 

  return (
    <div>
        <div className={styles.redes}>
            <div className={styles.social_media}>
                <SocialNetworks />
            </div>
            <div className={styles.title_name}>
                <Link to="/"><span>AMICRO | CURITIBA - PR</span></Link>
            </div>
        </div>     
        <dir className={styles.nav_top}>
            <div className={styles.logo}>
                <Link to="/"><img src={Logo} alt="Amicro" /></Link>
            </div>
            <div className={styles.center_menu}>
                <Menu />
            </div>
            {user && (
                <div className={styles.btn_associate}>
                <Link to="/indicate">Indique um amigo</Link>
            </div>
            )}
            {!user && (
                <div className={styles.btn_associate}>
                <Link to="/associate">Seja um Associado</Link>
            </div>
            )}
        </dir> 
        <div className={styles.w_nav_bar}></div>
    </div>
  )
}

export default Navbar
