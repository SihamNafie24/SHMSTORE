import React from 'react';
import styles from './UserInfo.module.css';
import { UserGlobalContext } from '../../context/UserGlobalContext';
import { useNavigate } from 'react-router-dom';

function UserInfo({ name, email, id }) {
  const { sair } = React.useContext(UserGlobalContext);
  const navigate = useNavigate()

  return (
    <div className="comeFromBottom">
      <div className={styles.titulo}>
        <h2>Informações</h2>
      </div>
      <div className={styles.container}>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>Id: {id}</p>
        <button onClick={() => {sair(); navigate('/')}} className={styles.botaoSair}>
          sair
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
