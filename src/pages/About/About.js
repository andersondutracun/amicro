import styles from './About.module.css';


const About = () => {



  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Quem somos</h1>
            <p>Nossa história e todo o conteúdo sobre a Amicro Curitiba</p>
          </div>
        </div>
      </div>
      <div className='page'>
        <div className={styles.about}>
          <div className={styles.home_serv}>
            <div className={styles.wrap_left}>
              <button onClick={() => handleClick("oquee")}>O que é</button>
              <button onClick={() => handleClick("quemsomos")}>Quem Somos</button>
              <button onClick={() => handleClick("principios")}>Princípios</button>
              <button onClick={() => handleClick("pilares")}>5 Pilares</button>
              <button onClick={() => handleClick("associe")}>Associe-se</button>
            </div>
            <div className={styles.wrap_right}>
              <div id='oquee' className={styles.sobre_secao}>
                <div className={styles.title_wrap}>
                  <h3>O que é</h3>
                  <div className={styles.text_span}></div>
                </div>
                <div className={styles.sobre_content}>
                  <p className={styles.subtitle}>A Amicro Curitiba é uma entidade e sincera, pronta para apoiar os empresários locais em sua jornada empreendedora. Estamos aqui para oferecer suporte, conhecimento e soluções inovadoras, impulsionandoo o sucesso e a prosperidade dos negócios em nossa região. Junte-se a nós e faça parte dessa comunidade empreendedora dinâmica e inspiradora.</p>
                </div>
              </div>
              <div id='quemsomos' className={styles.sobre_secao}>
                <div className={styles.title_wrap}>
                  <h3>Quem somos</h3>
                  <div className={styles.text_span}></div>
                </div>
                <div className={styles.sobre_content}>
                  <p className={styles.subtitle}>Na <span>AMICRO CURITIBA</span>, somos uma força empreendedora comprometida em impulsionar o crescimento e o desenvolvimento das microempresas e empresas de pequeno porte em Curitiba.</p>
                  <p className={styles.subtitle}>Nossa missão é clara: promover o crescimento profissional dos empreendedores locais, fornecendo suporte, informações e recursos essenciais para impulsionar seus negócios. Trabalhamos em estreita colaboração com o governo municipal, órgãos técnicos e outras entidades empresariais, buscando melhorias nas</p>
                  <p className={styles.subtitle}>Fazemos parte do Sistema Comicro, uma rede nacional que nos permite oferecer informações, capacitações e treinamentos em parceria com diversas entidades, visando o desenvolvimento dos empresários e seus colaboradores</p>
                  <p className={styles.subtitle}>Além disso, nossa associação visa promover e participar de eventos relevantes para o empresariado local, como seminários, congressos e conferências. Acreditamos na importância da cooperação entre os setores público e privado, buscando desenvolver planos de cooperação social e assistencial para beneficiar as microempresas, empresas de pequeno porte e empreendedores individuais.</p>
                  <p className={styles.subtitle}>Nosso objetivo é criar um ambiente favorável ao empreendedorismo e contribuir para o crescimento econômico sustentável de Curitiba. Junte-se a nós nessa jornada de sucesso e prosperidade empresarial!</p>
                </div>
              </div>
              <div id='principios' className={styles.sobre_secao}>
                <div className={styles.title_wrap}>
                  <h3>Principios</h3>
                  <div className={styles.text_span}></div>
                </div>
                <div className={styles.sobre_content}>
                  <ul>
                    <li><p className={styles.subtitle}>Missão: Promover o desenvolvimento e fortalecimento dos associados, microempresas e empresas de pequeno porte, por meio de capacitações e fomento ao cooperativismo, visando ao crescimento sustentável e prosperidade dos negócios locais.</p></li>
                    <li><p className={styles.subtitle}>Visão: Ser o principal catalisador do desenvolvimento empreendedor em Curitiba, criando um ambiente propício para o sucesso das empresas locais.</p></li>
                    <li><p className={styles.subtitle}>Valores: Compromisso, Inovação, Transparência, Colaboração e Empoderamento. Comprometidos em servir nossos membros e comunidade, buscamos soluções criativas e inovadoras, agindo com transpârencia e integridade, promovendo a colaboração e capacitando empreendedores locais.</p></li>
                  </ul>
                </div>
              </div>
              <div id='pilares' className={styles.sobre_secao}>
                <div className={styles.title_wrap}>
                  <h3>5 Pilares</h3>
                  <div className={styles.text_span}></div>
                </div>
                <div className={styles.sobre_content}>
                  <ol>
                    <li><p className={styles.subtitle}>Inovação e Tecnologia: Estímulo à adoção de soluções tecnológicas e práticas inovadoras para aumentar a eficiência e competitividade das empresas.</p></li>
                    <li><p className={styles.subtitle}>Acesso a Financiamento e Investimento: Facilitação do acesso a recursos financeiros e investimentos para viabilizar o crescimento e expansão dos negócios.</p></li>
                    <li><p className={styles.subtitle}>Desenvolvimento de Redes de Parcerias: Promoção da colaboração entre empreendedores, fornecedores, instituições e órgãos governamentais para fortalecer o ecossistema empresarial local.</p></li>
                    <li><p className={styles.subtitle}>Capacitação Empresarial: Oferta de programas e cursos para desenvolver habilidades e competências empreendedoras.</p></li>
                    <li><p className={styles.subtitle}>Sustentabilidade e Responsabilidade Socioambiental: Estímulo à adoção de práticas sustentáveis e responsáveis, visando a redução do impacto ambiental e engajamento com a comunidade.</p></li>
                  </ol>
                </div>
              </div>
              <div id='associe' className={styles.sobre_secao}>
                <div className={styles.title_wrap}>
                  <h3>Associe-se à Amicro Curitiba</h3>
                  <div className={styles.text_span}></div>
                </div>
                <div className={styles.sobre_content}>
                <p className={styles.subtitle}>A Amicro Curitiba é a chave para o sucesso do seu negócio local. Ao se associar, você terá acesso a capacitação, networking e apoio financeiro, fundamentais para o desenvolvimento empreendedor.</p>
                <p className={styles.subtitle}>Junte-se a uma rede de empreendedores engajados e conquiste novos patamares de sucesso.</p>
                <p className={styles.subtitle}>Transforme suas ambições em realidade hoje mesmo,associando-se à AMICRO CURITIBA!</p>
                <p className={styles.subtitle}>Descubra o poder de se associar à AMICRO CURITIBA e impulsione o seu negócio local. Como uma instituição sem fins lucrativos, oferecemos capacitação empreendedora, networking estratégico e acesso ao apoio financeiro. Junte-se a uma comunidade de empreendedores engajados, explore novas oportunidades e transforme suas ambições em realidade. Associe-se à AMICRO CURITIBA hoje mesmo e alcance o sucesso que você sempre desejou!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
