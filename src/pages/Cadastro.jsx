import React from 'react';
import styles from './Cadastro.module.css';
import Input from '../components/Form/Input';
import ButtonPrimary from '../components/Button/ButtonPrimary';
import useForm from '../hooks/useForm';
import { UserGlobalContext } from '../context/UserGlobalContext';
import Head from '../components/global/Head';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const nome = useForm();
  const email = useForm('email');
  const senha = useForm('min=8');

  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  const navigate = useNavigate();

  const { auth, user } = React.useContext(UserGlobalContext);

  React.useEffect(() => {
    if (auth && user) {
      navigate(`/login/usuario/${user.id}`);
    }
  }, [auth, user]);

  async function authUser(value) {
    setLoading(true);

    async function fetchApi(url) {
      const { data } = await axios.get(url);

      if (data.length < 1) {
        return true;
      } else {
        return false;
      }
    }

    const response = await fetchApi(
      `https://server-techstore.onrender.com/sellers?email=${value}`,
    );

    setLoading(false);

    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (nome.validate() && email.validate() && senha.validate()) {
      authUser(email.value).then((response) => {
        if (response) {
          const fetchApi = async (url, obj) => {
            try {
              setLoading(true);
              const response = await axios.post(url, obj);
              setStatus(response.status);
            } finally {
              setLoading(false);
            }
          };

          fetchApi('https://server-techstore.onrender.com/sellers/create', {
            name: nome.value,
            email: email.value,
            password: senha.value,
          });
        } else {
          setStatus(1);
        }
      });
    }
  }

  function limparInputs() {
    nome.setValue('');
    email.setValue('');
    senha.setValue('');
  }

  React.useEffect(() => {
    if (status) {
      switch (status) {
        case 201:
          setMessage('Registered successfully.');
          break;
        case 1:
          setMessage('Oops, this email is already in use.');
          break;
        default:
          setMessage('It looks like we had a problem. Please try again.');
          break;
      }
    }

    setTimeout(() => {
      if (status === 201) {
        navigate('/login');
      } else {
        setMessage(null);
        setStatus(null);
        limparInputs();
      }
    }, 2000);
  }, [status]);

  if (message)
    return <div className={`${styles.message} comeFromBottom`}>{message}</div>;
  return (
    <section>
      <div className={`${styles.container} comeFromBottom`}>
        <Head title="Register" />
        <h1 className={styles.titulo}>Register</h1>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <Input label="Name:" id="name" {...nome} value={nome.value} />
          <Input
            label="Email:"
            id="email"
            placeholder="usuario@email.com"
            {...email}
            value={email.value}
          />
          <Input
            label="Password:"
            type="password"
            id="password"
            {...senha}
            value={senha.value}
          />
          <ButtonPrimary
            text={loading ? 'loading...' : 'send'}
            disabled={loading ? true : false}
          />
        </form>
      </div>
    </section>
  );
}

export default Cadastro;
