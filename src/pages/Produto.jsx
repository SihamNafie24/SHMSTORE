import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ProdutoDisplay from '../components/Produto/ProdutoDisplay';
import Head from '../components/global/Head';
import Wrapper from '../components/Wrapper';
import { GlobalContext } from '../context/GlobalContext';

function Produto() {
  const { id } = useParams();
  const { adicionarProduto } = React.useContext(GlobalContext);

  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

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

    fetchApi(
      `https://fake-server-company.herokuapp.com/products/${id}?_expand=seller`,
    );
  }, []);

  if (loading) return <Loading />;
  if (erro) return <p>{erro}</p>;
  if (!produto) return null;
  return (
    <>
      <Head title={produto.name} />
      <ProdutoDisplay handleClick={adicionarProduto} {...produto} />
      <Wrapper text="Descrição" info={produto.description} />
    </>
  );
}

export default Produto;
