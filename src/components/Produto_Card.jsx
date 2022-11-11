import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Produto_Card.module.css';

function Produto_Card({ name, price, image, credit, id }) {
  const calculateCredit = (price) => {
    if (!credit)
      return (
        <small>
          <span style={{ fontWeight: 'bold' }}>Á vista</span>
        </small>
      );

    const parcels = price > 500 ? 12 : 6;
    return (
      <small>
        <span style={{ fontWeight: 'bold' }}>{parcels}x</span> de{' '}
        <span style={{ fontWeight: 'bold' }}>
          {(price / parcels).toFixed(2)}
        </span>{' '}
        no cartão
      </small>
    );
  };

  const priceTreated = Number(price.replace('R$ ', '')).toFixed(2);

  return (
    <Link to={`produto/${id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={name} />
        </div>

        <div className={styles.info}>
          <h2 className={styles.nome}>{name}</h2>

          <del>{'R$ ' + (priceTreated * 1.05).toFixed(2)}</del>
          <p className={styles.preco}>{price}</p>
          {calculateCredit(priceTreated)}
        </div>
      </div>
    </Link>
  );
}

export default Produto_Card;
