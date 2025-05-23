import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Produto_Card.module.css';
import calculateCredit from '../../functions/CalculateCredit';

function Produto_Card({ name, price, image, credit, id, description }) {

  return (
    <Link to={`produto/${id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={name} />
        </div>

        <div className={styles.info}>
          <h2 className={styles.nome}>{name}</h2>

          <del>{'$' + (price * 1.05).toFixed(2)}</del>
          <p className={styles.preco}>$ {price}</p>
          {calculateCredit(price, credit)}
          {description && (
            <p style={{ color: '#bebebe', fontSize: '0.95rem', marginTop: '8px', minHeight: '40px' }}>
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Produto_Card;
