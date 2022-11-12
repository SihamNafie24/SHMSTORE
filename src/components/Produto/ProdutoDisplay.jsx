import React from 'react';
import styles from './ProdutoDisplay.module.css';
import calculateCredit from '../../functions/CalculateCredit';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';
import Input from '../Form/Input';

function ProdutoDisplay({
  name,
  price,
  image,
  description,
  tag,
  credit,
  id,
  seller,
}) {
  const [value, setValue] = React.useState('');

  const priceTreated = Number(price.replace('R$ ', '')).toFixed(2);
  return (
    <main className={`${styles.container} comeFromBottom`}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.vendedor}>
            Vendido e entregue por{' '}
            <span style={{ fontWeight: 'bold' }}>{seller.name}</span>
          </p>
          <h1 className={styles.nome}>{name}</h1>
        </div>
        <div className={styles.precoContainer}>
          <div>
            <del>{'R$ ' + (priceTreated * 1.05).toFixed(2)}</del>
            <p className={styles.preco}>{price}</p>
            {calculateCredit(priceTreated, credit)}
          </div>
          <div className={styles.buttons}>
            <ButtonPrimary text="Comprar" />
            <ButtonSecondary text="Retirar na loja" />
          </div>
        </div>
        <div className={styles.cep}>
          <Input
            placeholder="Digite seu CEP aqui"
            id="cep"
            setValue={setValue}
            value={value}
          />
          <ButtonSecondary text="consultar" />
        </div>
      </div>
    </main>
  );
}

export default ProdutoDisplay;
