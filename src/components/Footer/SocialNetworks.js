import {FaLinkedinIn, FaYoutube, FaInstagram, FaFacebook} from "react-icons/fa";
import styles from './SocialNetworks.module.css';

const socialNetworks = [
    {name: "Facebook", icon: <FaFacebook />, link: "https://github.com/andersondutracun"},
    {name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/amicrocuritiba/"},
    {name: "Linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/amicro-curitiba/"},
    {name: "Youtube", icon: <FaYoutube />, link: "https://www.linkedin.com/company/amicro-curitiba/"},
];

function SocialNetworks() {
  return (
    <section className={styles.redes_footer}>
        {socialNetworks.map((network) => (
            <a href={network.link} id={network.name} key={network.name}>
               <div className={styles.block}>{network.icon}
               <div>
               {network.name}
               </div>
               </div>
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks