import React from 'react';
import styles from './UserProduct.module.css';
import ButtonPrimary from '../Button/ButtonPrimary';

function UserProduct({ name, price, image, description, credit, id, onClick }) {
  return (
    <div>
      <div className={`${styles.container} comeFromBottom`}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>

        <div className={styles.info}>
          <p className={styles.id}>Id: {id}</p>
          <div>
            <p>Name</p>
            <p className={styles.titulo}>{name}</p>
          </div>

          <div>
            <p>Price</p>
            <p className={styles.preco}>$ {price}</p>
          </div>

          <div>
            <p>Installments</p>
            <p className={styles.bool}>{credit == 'true' ? 'Yes' : 'No'}</p>
          </div>

          <div>
            <p>Description</p>
            <p className={styles.desc}>{description}</p>
          </div>

          <div>
            <ButtonPrimary text="Edit" onClick={() => onClick(id)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProduct
