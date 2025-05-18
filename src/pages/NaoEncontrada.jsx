import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/notworking.gif';
import styles from './NaoEncontrada.module.css'

function NaoEncontrada() {
  return (
    <div className="container comeFromBottom">
      <div className={styles.mensagem}>
        <img src={img} alt="macaco surtando sem acesso a uma página" />
        <p>Ooops! Page not found :(</p>
        <Link className={styles.link} to=''>Back to home page</Link>
      </div>
    </div>
  );
}

export default NaoEncontrada;
