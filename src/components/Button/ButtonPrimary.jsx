import React from 'react'
import styles from './ButtonPrimary.module.css'

function ButtonPrimary({text, onClick, disabled}) {
  return (
    <button className={styles.buttonPrimary} disabled={disabled} onClick={onClick}>{text}</button>
    
  )
}

export default ButtonPrimary