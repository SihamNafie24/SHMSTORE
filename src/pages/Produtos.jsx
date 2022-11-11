import axios from 'axios';
import React from 'react';
import styles from './Produtos.module.css'
import Produto_Card from '../components/Produto_Card';

function Produtos() {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    const fetchApi = async (url) => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        setProdutos(data);
      } catch (erro) {
        setErro('Erro');
      } finally {
        setLoading(false);
      }
    };

    fetchApi('https://fake-server-company.herokuapp.com/products/list');
  }, []);

  if (loading) return <p>carregando ...</p>;
  if (erro) return <p>{erro}</p>;
  if (!produtos) return null
  return (
    <div className={styles.container}>
      {produtos.map((produto) => (
        <Produto_Card key={produto.id} {...produto} />
      ))}
    </div>
  );
}

export default Produtos;
