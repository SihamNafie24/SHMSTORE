import React from 'react';
import styles from './ButtonNav.module.css';

function ButtonNav({ text, onClick, ativo }) {
  return (
    <button
      className={`${styles.botao} ${ativo === text ? 'ativo' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonNav;
