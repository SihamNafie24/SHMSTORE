import React from 'react'
import styles from './ButtonSecondary.module.css'

function ButtonSecondary({text, onClick}) {
  return (
    <button className={styles.buttonSecondary} onClick={onClick}>{text}</button>
    
  )
}

export default ButtonSecondary