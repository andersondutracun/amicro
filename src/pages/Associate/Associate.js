import styles from './Associate.module.css'
import image from '../../images/empresarios.png'
import { Link } from 'react-router-dom';
import { FaHandshakeSimple } from "react-icons/fa6";

const Associate = () => {
  return (
    <>
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Associado</h1>
            <p>Torne-se associado da AMICRO e desfrute de diversos beneficios!</p>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.associate}>
          <div className={styles.beAssociate}><p>Seja um associado</p></div>
          <div className={styles.listAssociate}>
            <ul>
              <li>
                <p>Descontos em Educação Superior</p>
              </li>
              <li>
                <p>Cursos de Qualificação</p>
              </li>
              <li>
                <p>Palestras Empresariais</p>
              </li>
              <li>
                <p>Consultoria Empresárial</p>
              </li>
              <li>
                <p>Plano de Sáude</p>
              </li>
              <li>
                <p>Intermediação de negócios</p>
              </li>
              <li>
                <p>Consultoria Jurídica</p>
              </li>
              <li>
                <p>Mentoria Empresarial</p>
              </li>
            </ul>
          </div>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
        </div>
        </div>
        <div className={styles.list}>
          <div className={styles.listPage}>
          <div className={styles.title}>
            <h1>Verifique todos os beneficios de um Associado</h1>
          </div>
          <div className={styles.grid}>
            <div className={styles.panel}>
              <div>
                <img src="https://static.wixstatic.com/media/c5d2ac_97f9d83dea354b5b8c354b8595b3d463~mv2.png/v1/crop/x_363,y_0,w_7262,h_4588/fill/w_560,h_354,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10088.png" alt="" />
                <p>Desconto em Educação Superior</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.ipeg.org.br/wp-content/uploads/2019/06/50.png" alt="" />
                <p>Cursos de Qualificação Empresárial</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/554/554846.png" alt="" />
                <p>Cursos de Qualificação dos Funcionários</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.clinicapsicocenter.com.br/assets/images/servicos/inner/palestra.png" alt="" />
                <p>Palestras Empresáriais</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.clinicapsicocenter.com.br/assets/images/servicos/inner/palestra.png" alt="" />
                <p>Palestras para os Funcionários</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://gestaoclick.com.br/wp-content/uploads/gest195163o-cont195161bil-788x683.webp" alt="" />
                <p>Consultoria Contábil</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.cnhindustrialcapital.com/pt_br/PublishingImages/Pages/EDUCA%C3%87%C3%83O-FINANCEIRA/Agilidade.png" alt="" />
                <p>Consultoria Financeira</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://zenklub.com.br/blog/wp-content/uploads/2022/07/iStock-1311990984-min.png" alt="" />
                <p>Consultoria de RH</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://lh3.googleusercontent.com/proxy/0xlLjIn7fiCpuNxnHAPhsemFismx_NkKIk77wHk6hFUCpDZqzuKwuW_5lMzoT1f-zHpF-5bB_6q-9jddQGafr04u5uffZgv6BAMV9KT8nx8BHw" alt="" />
                <p>Recrutamento de Pessoas</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://storage.googleapis.com/dynamicssales.com.br/2022/04/grafico-1024x764.png" alt="" />
                <p>Consultoria de Vendas</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://tecfy.com.br/wp-content/uploads/2020/11/TECFY-cabecalhos-GESTAO-QUALIDADE-EMPRESARIAL.png" alt="" />
                <p>Consultoria em Gestão</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://dtnetwork.com.br/wp-content/uploads/2021/07/tecnologia-em-sua-empresa-1.png" alt="" />
                <p>Consultoria em Tecnologia</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://viverdeblog.com/wp-content/uploads/2017/09/o-que-e-marketing-digital-thumbnail.png" alt="" />
                <p>Consultoria em Marketing</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://pluga.co/blog/wp-content/uploads/2022/08/integracao-marketing-vendas.png" alt="" />
                <p>Consultoria em Mídias Sociais</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.brangex.com.br/images/apoio/imagem-recorte-como-funciona.png" alt="" />
                <p>Consultoria em Exportação ou Importação</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.ufsm.br/app/uploads/sites/256/2019/03/feira.png" alt="" />
                <p>Plano de Saúde</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.dr-oral.com/img/aside-02.png" alt="" />
                <p>Plano de Saúde Bocal</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://www.vittude.com/blog/wp-content/uploads/mascote_vittude_vFinal-04.png" alt="" />
                <p>Atendimento em Saúde Mental</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://sebrae.com.br/Sebrae/Portal%20Sebrae/UFs/AP/Imagens/Neg%C3%B3cios%20familiares%20Dicas%20para%20garantir%20o%20sucesso.png" alt="" />
                <p>Intermediação de Negócios</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://c6d4e2h5.rocketcdn.me/wp-content/uploads/2017/11/Sugest%C3%A3o-2_post-networking_Cr%C3%A9dito-Pixabay-1.png" alt="" />
                <p>Networking entre Empresas</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://portal.aciaf.com.br/wp-content/uploads/2020/02/consultoriajuridica.png" alt="" />
                <p>Consultoria Jurídica</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://prezzocontabil.com.br/wp-content/uploads/2021/01/Consultoria-Tributaria.png" alt="" />
                <p>Consultoria Tributária</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://s3.sa-east-1.amazonaws.com/traus-cms/edsondepaula/block/block_1531-processo-de-coaching-instituto-edson-de-paula.png" alt="" />
                <p>Coaching para Gestores</p>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/5764/5764576.png" alt="" />
                <p>Mentoria Empresárial</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.plans}>
          <div className={styles.plansPage}>
            <div className={styles.title}>
              <h1>Qual o investimento?</h1>
            </div>
            <div className={styles.plansList}>
              <div className={styles.object}>
                <img className={styles} src="https://www.svgrepo.com/download/493428/hands-to-shake-hands.svg" alt="" />
                <h3>Associado</h3>
                <p>Consultorias, cursos, capacitações e muito mais.</p>
                <p>R$ 50,00 / Mensal</p>
              </div>
              <div className={styles.object}>
              <img src="https://www.svgrepo.com/download/493428/hands-to-shake-hands.svg" alt="" />
                <h3>Associado</h3>
                <p>Consultorias, cursos, capacitações e muito mais.</p>
                <p>R$ 210,00 / Semestral</p>
              </div>
              <div className={styles.object}>
              <img src="https://www.svgrepo.com/download/493428/hands-to-shake-hands.svg" alt="" />
                <h3>Associado</h3>
                <p>Consultorias, cursos, capacitações e muito mais.</p>
                <p>R$ 300,00 / Anual</p>
              </div>
            </div>
            <div className={styles.plansText}>
              <p>Junta-se a nós!</p>
            </div>
            <div className={styles.button}>
              <Link to='/formassociate' className='btn'>Quero ser um associado!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Associate
