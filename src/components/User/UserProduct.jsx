import React from "react";
import styles from "./UserProduct.module.css";
import ButtonPrimary from "../Button/ButtonPrimary";

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
            <p>Nome</p>
            <p className={styles.titulo}>{name}</p>
          </div>

          <div>
            <p>Preço</p>
            <p className={styles.preco}>{price}</p>
          </div>

          <div>
            <p>Parcelamento</p>
            <p className={styles.bool}>{credit == 'true' ? "Sim" : "Não"}</p>
          </div>

          <div>
            <p>Descrição</p>
            <p className={styles.desc}>{description}</p>
          </div>

          <div>
            <ButtonPrimary text="Editar" onClick={() => onClick(id)} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default UserProduct;
