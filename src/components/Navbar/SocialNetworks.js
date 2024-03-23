import {FaLinkedinIn, FaYoutube, FaInstagram, FaFacebook} from "react-icons/fa";
import styles from './SocialNetworks.module.css';

const socialNetworks = [
    {name: "facebook", icon: <FaFacebook />, link: "https://github.com/andersondutracun"},
    {name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/amicrocuritiba/"},
    {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/amicro-curitiba/"},
    {name: "youtube", icon: <FaYoutube />, link: "https://www.linkedin.com/company/amicro-curitiba/"},
];

function SocialNetworks() {
  return (
    <section className={styles.redes}>
        {socialNetworks.map((network) => (
            <a href={network.link} id={network.name} key={network.name}>
               {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks