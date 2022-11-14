import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import userIcon from '../../img/icons/user-icon.svg';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className={styles.headerBackground}>
      <div className={`${styles.header} container`}>
        <Link to="">
          <img className={styles.logo} src={logo} alt="techstore" />
        </Link>
        <nav>
          <button className={styles.userNav}>
            <img src={userIcon} alt="icone de usuario" />
            <p>entre ou cadastre-se</p>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Header);
