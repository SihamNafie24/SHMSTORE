import React from 'react';
import styles from './Input.module.css';

function Input({ label, id, setValue, value, placeholder }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={styles.input}
        type="text"
        id={id}
        value={value}
        onChange={({target}) => setValue(target.value)}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
