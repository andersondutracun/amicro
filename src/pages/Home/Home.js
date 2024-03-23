import React from 'react';
import styles from './Home.module.css';
import SlideShow from '../../components/SlideShow';
import MaterialsHome from '../MaterialsHome/MaterialsHome';
import NewsletterHome from '../NewsletterHome/NewsletterHome';

const Home = () => {
  const images = [
    'https://static.wixstatic.com/media/9583a6_94d9b220e2f8431f9b5862c80d150a00~mv2.png/v1/fill/w_1903,h_525,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/9583a6_94d9b220e2f8431f9b5862c80d150a00~mv2.png',
    'https://comicro.org.br/images/e3c22c3b2f0b338f46bbbcfb222cef14d092f78574a0a8.jpg',
    'https://comicro.org.br/images/30346156818d5870e0a754b1e026b8f0e84dbab5d89567.png',
    'https://comicro.org.br/images/3a50dea44fbcf1d74b87ac1a852ef71dbde1274d85a75e.png',
    // Adicione mais URLs de imagens conforme necessário
  ];

  return (
    <div className={styles.home}>
      <div>
        <SlideShow className={styles.slideshow} images={images} interval={5000} /> {/* Altere o intervalo conforme desejado */}
      </div>
      <div>
        {MaterialsHome && <MaterialsHome />}
        {NewsletterHome && <NewsletterHome />}
      </div>
    </div>

  );
};

export default Home;
