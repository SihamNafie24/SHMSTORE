import React from 'react';
import styles from './RedesSociais.module.css';
import twitter from '../img/icons/twitter.svg';
import instagram from '../img/icons/instagram.svg';
import youtube from '../img/icons/youtube.svg';
import facebook from '../img/icons/facebook.svg';

function RedesSociais() {
  return (
    <div className={styles.redes}>
      <h2>Nossas redes</h2>
      <div className={styles.redesContainer}>
        <a className={styles.redesIcons} href="">
          <img src={instagram} alt="instagram" />
        </a>
        <a className={styles.redesIcons} href="">
          <img src={facebook} alt="facebook" />
        </a>
        <a className={styles.redesIcons} href="">
          <img src={twitter} alt="twitter" />
        </a>
        <a className={styles.redesIcons} href="">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
    </div>
  );
}

export default RedesSociais;
