import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/notworking.gif';
import styles from './NaoEncontrada.module.css'

function NaoEncontrada() {
  return (
    <div className="container comeFromBottom">
      <div className={styles.mensagem}>
        <img src={img} alt="macaco surtando sem acesso a uma página" />
        <p>Ooops! página não encontrada :(</p>
        <Link className={styles.link} to=''>Voltar para a página inicial</Link>
      </div>
    </div>
  );
}

export default NaoEncontrada;
