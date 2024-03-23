import Form from '../../components/Form'
import styles from './Contact.module.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Contato</h1>
            <p>Entre em contato conosco!</p>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.form_grid}>
            <div className={styles.card_contact}>
              <div className={styles.contact_heading}>
                <h1>Contato</h1>
              </div>
              <div className={styles.w_form}>
                <Form />
              </div>
            </div>
            <div className={styles.block}>
            <div className={styles.block_details}>
            <p>Associação de Microempresa e Empresas de Pequeno Porte</p>
          <ol className={styles.footer_links}>
            <li><a href="https://wa.me/554187201045"><div className={styles.footer_note}><BsFillTelephoneFill /><span>(41) 9 8720 - 1045</span></div></a></li>
            <li><a href="mailto:amicrocuritiba@gmail.com"><div className={styles.footer_note}><MdAlternateEmail /><span>amicrocuritiba@gmail.com</span></div></a></li>
            <li><a href="https://maps.app.goo.gl/znpKiLx2hR6DRjea6"><div className={styles.footer_note}><FaLocationArrow /><span>Av Iguaçu 2121, Sala 12C, Bairro Água Verde, Curitiba, PR</span></div></a></li>
          </ol>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
