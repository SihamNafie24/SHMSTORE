import React from 'react';
import styles from './RedesSociais.module.css';
import twitter from '../img/icons/twitter.svg';
import instagram from '../img/icons/instagram.svg';
import facebook from '../img/icons/facebook.svg';

function RedesSociais() {
  return (
    <div className={styles.redes}>
      <h2>Our networks</h2>
      <div className={styles.redesContainer}>
        <a className={styles.redesIcons} href="https://www.instagram.com/f57.shm/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a className={styles.redesIcons} href="https://web.facebook.com/maiviss.nobil" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a className={styles.redesIcons} href="https://x.com/SihamNafie" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </div>
  );
}

export default RedesSociais;
