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
            <img src={logo} alt="tech store" />
          </Link>
        </div>
      </div>
      <div className={`container ${styles.footer}`}>
        <div>
          <h2 className={styles.secoes}>Contato</h2>
          <ul>
            <li>
              <a href="tel:+5521999999999">21 99999-9999</a>
            </li>
            <li>
              <a href="mailto:atendimento@techstore.com">
                atendimento@techstore.com
              </a>
            </li>
          </ul>
          <address>
            <p>Rua Coronel Agostinho, 256</p>
            <p>Rio de Janeiro - RJ</p>
          </address>
        </div>
        <div>
          <h2 className={styles.secoes}>Informações</h2>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="login/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="">Quem somos</Link>
            </li>
          </ul>
        </div>
        <RedesSociais />
      </div>
    </footer>
  );
}

export default React.memo(Footer);
