import React from 'react'
import styles from './ButtonPrimary.module.css'

function ButtonPrimary({text, onClick}) {
  return (
    <button className={styles.buttonPrimary} onClick={onClick}>{text}</button>
    
  )
}

export default ButtonPrimary