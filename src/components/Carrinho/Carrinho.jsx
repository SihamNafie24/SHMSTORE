import React from 'react';
import styles from './Carrinho.module.css';

import { GlobalContext } from '../../context/GlobalContext';
import CarrinhoItem from './CarrinhoItem';

function Carrinho() {
  const { produtosCarrinho } = React.useContext(GlobalContext);
  const [showCarrinho, setShowCarrinho] = React.useState(false);

  React.useEffect(() => {
    if (produtosCarrinho.length > 0) {
      setShowCarrinho(true);
    } else {
      setShowCarrinho(false);
    }
  }, [produtosCarrinho]);

    return (
      <aside
        style={{ width: showCarrinho ? '460px' : '0px', right: showCarrinho ? '0px' : '-96px' }}
        className={styles.carrinho}
      >
        {produtosCarrinho &&
          produtosCarrinho.map((produto) => (
            <CarrinhoItem key={produto.id} {...produto} />
          ))}
      </aside>
    );
}

export default Carrinho;
