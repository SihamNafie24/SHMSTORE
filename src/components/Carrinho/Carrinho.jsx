import React from 'react';
import styles from './Carrinho.module.css';

import { GlobalContext } from '../../context/GlobalContext';
import CarrinhoItem from './CarrinhoItem';
import closeIcon from '../../img/icons/close-icon.svg';


function Carrinho() {
  const { produtosCarrinho, setShowCarrinho, showCarrinho } =
    React.useContext(GlobalContext);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (produtosCarrinho.length < 1) {
      setShowCarrinho(false);
    }
  }, [produtosCarrinho]);

  React.useEffect(() => {
    if (produtosCarrinho.length > 0) {
      setTotal(
        produtosCarrinho
          .map((produto) => {
            return produto.qtd * produto.price;
          })
          .reduce((valorAnterior, valorAtual) => {
            return valorAnterior + valorAtual;
          }),
      );
    }
  }, [produtosCarrinho]);

  return (
    <aside
      style={{
        maxWidth: showCarrinho ? '460px' : '0px',
        right: showCarrinho ? '0px' : '-96px',
      }}
      className={styles.carrinho}
    >
      <button
        className={styles.closeBtn}
        onClick={() => setShowCarrinho(false)}
      >
        <img src={closeIcon} alt="fechar" />
      </button>
      {produtosCarrinho.length > 0 ? (
        <div className={styles.infoContainer}>
          {produtosCarrinho &&
            produtosCarrinho.map((produto) => (
              <CarrinhoItem key={produto.id} {...produto} />
            ))}
          <div className={styles.totalContainer}>
            <div className={styles.total}>
              <p className={styles.label}>Subtotal:</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
            <div className={styles.total}>
              <p className={styles.label}>Total:</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ) : <div className={styles.mensagemVazio}>Your cart is still empty :(</div>}
    </aside>
  );
}

export default Carrinho;
