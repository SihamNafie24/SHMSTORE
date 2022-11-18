import React from 'react'
import styles from './UserInfo.module.css'

function UserInfo({ name, email, id, cpf }) {
  return (
    <div>
      <div className={styles.titulo}>
        <h2>Informações</h2>
      </div>
      <div className={styles.container}>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Id: {id}</p>
      </div>
    </div>

  )
}

export default UserInfo
