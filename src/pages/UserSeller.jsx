import React from 'react';
import axios from 'axios';
import UserInfo from '../components/User/UserInfo';
import UserProduct from '../components/User/UserProduct';
import UserModal from '../components/User/UserModal';
import styles from './UserSeller.module.css';
import ButtonPrimary from '../components/Button/ButtonPrimary';
import Head from '../components/global/Head';
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom';

/* <Input value={value} onChange={handleChange} id='buscador' place='ID' />
 <Button text='Buscar' /> */

const UserSeller = () => {
  const {'*':id} = useParams()
  const [response, setResponse] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState();
  const [loading, setLoading] = React.useState(null)

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://fake-server-company.herokuapp.com/sellers/${id}?_embed=products`,
      )
      .then(({ data }) => {
        setLoading(false)
        setResponse(data);
      });
  }, []);

  function handleClick(id) {
    setShowModal(true);

    if (response) {
      let produto = response.products.filter((produto) => produto.id === id);
      const [obj] = produto;
      setModalInfo(obj);
    }
  }

  if (loading) return <Loading />
  return (
    <section>
      <Head title="Painel do Usuario" />
      {response && <UserInfo {...response} />}
      <div className={styles.tituloP}>
        <h2>Produtos</h2>
        <ButtonPrimary text="Cadastrar produto" onClick={handleClick} />
      </div>
      {response &&
        response.products.map((product) => (
          <UserProduct onClick={handleClick} key={product.id} {...product} />
        ))}
      {showModal && (
        <UserModal
          fechar={() => setShowModal(false)}
          produto={modalInfo}
          sellerId={id}
        />
      )}
    </section>
  );
};

export default UserSeller;
