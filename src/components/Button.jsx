import React from 'react';
import styles from './Button.module.css';

function Button({ text, onClick, ativo }) {
  return (
    <button
      className={`${styles.botao} ${ativo === text ? 'ativo' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
