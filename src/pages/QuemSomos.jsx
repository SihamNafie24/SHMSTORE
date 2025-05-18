import React from 'react';
import sobreImg from '../img/sobre-img.png';
import sobreImg2 from '../img/sobre-img2.png';
import styles from './QuemSomos.module.css';
import marcelo from '../img/equipe/marcelo.png';
import matheus from '../img/equipe/matheus.png';
import milena from '../img/equipe/milena.png';
import yasmin from '../img/equipe/yasmin.png';
import Head from '../components/global/Head'

function QuemSomos() {

  return (
    <section className='comeFromBottom'>
      <Head title='Quem Somos'/>
      <div className={`${styles.secao1} container`}>
        <div>
          <h2 className={styles.titulo}>About us</h2>
          <p className={styles.content}>
            We are a store of electronic products, mainly focused on the gamer audience.<br/>
            Our mission is to deliver high-performance gear and cutting-edge technology that enhance every gamer's experience, from casual players to competitive enthusiasts.
          </p>
        </div>
        <img
          src={sobreImg}
          className='comeFromRight'
          alt="image of a man playing and an xbox controller"
        />
      </div>

      <div className={styles.secao2Bg}>
        <div className={`${styles.secao2} container`}>
          <img
            className='comeFromLeft'
            src={sobreImg2}
            alt="young man playing with a virtual reality headset"
          />
          <div>
            <h2 className={styles.titulo}>Our goals</h2>
            <ul className={`${styles.lista} ${styles.content}`}>
              <li>Become the leading e-commerce platform for technology in the market.</li>
              <li>Establish ourselves as the most recognized brand in the Moroccan e-sports scene.</li>
              <li>Revolutionize access to technology through inclusion, sustainability, and affordable pricing.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
