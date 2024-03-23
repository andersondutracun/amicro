import styles from './Footer.module.css';
import logo from '../images/logo.png';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Menu from './Footer/Menu';
import SocialNetworks from './Footer/SocialNetworks';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container_footer}>
        <div className={styles.column}>
          <img src={logo} alt="Amicro" />
          <p>Associação de Microempresa e Empresas de Pequeno Porte</p>
          <ol className={styles.footer_links}>
            <li><a href="https://wa.me/554187201045"><div className={styles.footer_note}><BsFillTelephoneFill /><span>(41) 9 8720 - 1045</span></div></a></li>
            <li><a href="mailto:amicrocuritiba@gmail.com"><div className={styles.footer_note}><MdAlternateEmail /><span>amicrocuritiba@gmail.com</span></div></a></li>
            <li><a href="https://maps.app.goo.gl/znpKiLx2hR6DRjea6"><div className={styles.footer_note}><FaLocationArrow /><span>Av Iguaçu 2121, Sala 12C, Bairro Água Verde, Curitiba, PR</span></div></a></li>
          </ol>
        </div>
        <div className={styles.column}>
          <Menu />
          <div className={styles.divider}></div>
         <div className={styles.footer_social}>Acompanhe nossas redes sociais </div>
          <div>
            <SocialNetworks />
          </div>
        </div>
      </div>
      <div className={styles.footer_block}>
        <p>
          Copyright 2024 Amicro
        </p>
        <Link to="/policies"><p>Politica de Privacidade</p></Link>
      </div>
      

    </div>
  )
}

export default Footer
