import React from 'react';
import styles from './Input.module.css';

function Input({ label, id, onChange, value, placeholder, type, onBlur, erro}) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {erro && <p className={`${styles.mensagemErro} comeFromLeft`}>{erro}</p>}
    </div>
  );
}

export default Input;
