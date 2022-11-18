import React from "react";
import styles from "./ButtonSecondarySmall.module.css";

function ButtonSecondarySmall({ text, onClick }) {
  return (
    <button className={styles.buttonSecondary} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonSecondarySmall;
