import axios from 'axios';
import React from 'react';
import styles from './Produtos.module.css';
import Produto_Card from '../components/Produto/Produto_Card';
import Loading from '../components/Loading';
import ButtonNav from '../components/Button/ButtonNav';
import Head from '../components/global/Head';
import Slide from '../components/Slide';

const slides = [
  {
    id: 'slide1',
    image:
      'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-hero-banner-desktop-01-en-07sep21?$2400px$',
  },
  {
    id: 'slide2',
    image: 'https://preview.redd.it/01hdto0hzcn51.jpg?width=1846&format=pjpg&auto=webp&s=a20c4243466f1849aa29432a31310eb7628c0ba4',
  },
  {
    id: 'slide3',
    image: 'https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2020/06-junho/24-psn/bannertv-ps5.jpg',
  },
  {
    id: 'slide4',
    image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/81b69a02d9469be08c2426117991d9f0.png',
  },
];

function Produtos() {
  const [data, setData] = React.useState(null);
  const [produtos, setProdutos] = React.useState(null);
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
    setAtivo(target.innerText);
  }

  React.useEffect(() => {
    if (data) {
      if (!ativo || ativo === 'ver tudo') {
        setProdutos(data);
      } else {
        setProdutos(
          data.filter((produto) => {
            return produto.tag === ativo;
          }),
        );
      }
    }
  }, [data, ativo]);

  if (loading) return <Loading />;
  if (erro) return <p>{erro}</p>;
  if (!produtos) return null;
  return (
    <section>
      <Head title="Tech Store" />
      <Slide slides={slides} />
      <div className={styles.opcoes}>
        <ButtonNav onClick={handleClick} ativo={ativo} text="games" />
        <ButtonNav onClick={handleClick} ativo={ativo} text="consoles" />
        <ButtonNav onClick={handleClick} ativo={ativo} text="acessórios" />
        <ButtonNav onClick={handleClick} ativo={ativo} text="ver tudo" />
      </div>
      <div className={`${styles.container} comeFromBottom`}>
        {produtos.map((produto) => (
          <Produto_Card key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  );
}

export default Produtos;
