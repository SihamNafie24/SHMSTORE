import axios from 'axios';
import React from 'react';
import styles from './Produtos.module.css';
import Produto_Card from '../components/Produto_Card';
import Loading from '../components/Loading';
import Button from '../components/Button';

function Produtos() {
  const [data, setData] = React.useState(null);
  const [produtos, setProdutos] = React.useState(null)
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);
  const [ativo, setAtivo] = React.useState(null);

  React.useEffect(() => {
    const fetchApi = async (url) => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        setData(data);
      } catch (erro) {
        setErro('Erro');
      } finally {
        setLoading(false);
      }
    };

    fetchApi('https://fake-server-company.herokuapp.com/products/list');
  }, []);

  function handleClick({ target }) {
    if (target.innerText === 'ver tudo') {
      setAtivo(null)
    } else {
      setAtivo(target.innerText)
    }
  }

  React.useEffect(() => {
    if (data) {
      if (!ativo) {
        setProdutos(data)
      } else {
        setProdutos(data.filter(produto => {
          return produto.tag === ativo
        }))
      }
    }
  }, [data, ativo])

  if (loading) return <Loading />;
  if (erro) return <p>{erro}</p>;
  if (!produtos) return null;
  return (
    <section>
      <div className={styles.opcoes}>
        <Button onClick={handleClick} ativo={ativo} text="console" />
        <Button onClick={handleClick} ativo={ativo} text="acessorio" />
        {ativo && (
          <Button ativo={ativo} onClick={handleClick} text="ver tudo" />
        )}
      </div>
      <div className={`${styles.container} comeFromBottom`}>
        {produtos.map((produto) => (
          <Produto_Card key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  );
}

export default Produtos