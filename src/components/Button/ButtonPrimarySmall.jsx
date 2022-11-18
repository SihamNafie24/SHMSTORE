import React from "react";
import styles from "./ButtonPrimarySmall.module.css";

function ButtonPrimarySmall({ text, onClick }) {
  return (
    <button className={styles.buttonPrimary} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonPrimarySmall;
