import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import styles from './Footer.module.css';
import RedesSociais from '../RedesSociais'

function Footer() {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerLogo}>
        <div className="container">
          <Link to="">
            <span style={{ color: '#00FF7A', fontWeight: 700, fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>SHMSTORE</span>
          </Link>
        </div>
      </div>
      <div className={`container ${styles.footer}`}>
        <div>
          <h2 className={styles.secoes}>Contact</h2>
          <ul>
            <li>
              <strong>Location:</strong> Casablanca - Morocco
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:nafiesiham36@gmail.com">nafiesiham36@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+212643552164">+212 643-552164</a>
            </li>
            <li>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/siham-nafie" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/siham-nafie</a>
            </li>
            <li>
              <strong>GitHub:</strong> <a href="https://github.com/SihamNafie24" target="_blank" rel="noopener noreferrer">https://github.com/SihamNafie24</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.secoes}>Information</h2>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="login/cadastro">Register</Link>
            </li>
            <li>
              <Link to="quemsomos">About us</Link>
            </li>
          </ul>
        </div>
        <RedesSociais />
      </div>
    </footer>
  );
}

export default React.memo(Footer);
