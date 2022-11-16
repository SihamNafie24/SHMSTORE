import axios from 'axios';
import React from 'react';
import styles from './CarrinhoItem.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import minusIcon from '../../img/icons/minus-icon.svg';
import plusIcon from '../../img/icons/plus-icon.svg';

function CarrinhoItem({ id, qtd }) {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  const { adicionarProduto, removerProduto, limparCarrinho } =
    React.useContext(GlobalContext);

  React.useEffect(() => {
    const fetchApi = async (url) => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        setProduto(data);
      } catch (erro) {
        setErro('Erro');
      } finally {
        setLoading(false);
      }
    };

    fetchApi(`https://fake-server-company.herokuapp.com/products/get/${id}`);
  }, []);

  if (loading) return <p>Carregando ...</p>;
  if (erro) return <p>{erro}</p>;
  if (produto)
    return (
      <div className={`${styles.item} comeFromRight`}>
        <div className={styles.image}>
          <img src={produto.image} alt={produto.name} />
        </div>
        <div className={styles.info}>
          <p className={styles.nome}>{produto.name}</p>
          <p className={styles.preco}>{`R$ ${(Number(produto.price.replace('R$ ', '')) * qtd).toFixed(2)}`}</p>
          <div className={styles.quantidade}>
            <button
              className={styles.removerBtn}
              onClick={() => removerProduto(produto.id)}
            >
              <img src={minusIcon} alt="remover" />
            </button>
            <p className={styles.numero}>{qtd}</p>

            <button
              className={styles.adicionarBtn}
              onClick={() => adicionarProduto(produto.id)}
            >
              <img src={plusIcon} alt="adicionar" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default CarrinhoItem
