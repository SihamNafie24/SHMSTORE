import React from 'react';
import styles from './UserInfo.module.css';
import { UserGlobalContext } from '../../context/UserGlobalContext';

function UserInfo({ name, email, id, cpf }) {
  const {sair} =React.useContext(UserGlobalContext)

  return (
    <div className="comeFromBottom">
      <div className={styles.titulo}>
        <h2>Informações</h2>
      </div>
      <div className={styles.container}>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Id: {id}</p>
        <button onClick={() => sair()} className={styles.botaoSair}>sair</button>
      </div>
    </div>
  );
}

export default UserInfo;
