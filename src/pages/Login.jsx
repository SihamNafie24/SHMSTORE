import React from 'react';
import styles from './Login.module.css';
import Input from '../components/Form/Input';
import ButtonPrimary from '../components/Button/ButtonPrimary';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Head from '../components/global/Head';
import { UserGlobalContext } from '../context/UserGlobalContext';

function Login() {
  const senha = useForm('min=8');
  const email = useForm('email');
  const [loading, setLoading] = React.useState(false);
  const [naoEncontrado, setNaoEncontrado] = React.useState(null);
  const navigate = useNavigate();

  const { auth, user, entrar } = React.useContext(UserGlobalContext);

  React.useEffect(() => {
    if (auth && user) {
      navigate(`usuario/${user.id}`);
    }
  }, [auth, user]);

  async function authUser(emailUser, senhaUser) {
    setLoading(true);

    const { data } = await axios.get(
      `https://server-techstore.onrender.com/sellers?email=${emailUser}&password=${senhaUser}`,
    );
    if (data.length > 0) {
      const [user] = data;
      entrar(user);
    } else {
      setNaoEncontrado(true);
    }

    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    email.validate();
    senha.validate();

    if (email.validate() && senha.validate()) {
      authUser(email.value, senha.value);
    }
  }

  return (
    <section>
      <div className={`${styles.container} comeFromBottom`}>
        <Head title="Login" />
        <h1 className={styles.titulo}>Login</h1>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <Input
            label="Username or Email:"
            id="email"
            placeholder="username or email"
            value={email.value}
            {...email}
          />
          <Input label="Password:" type="password" id="password" {...senha} />
          <div>
            Don't have an account?{' '}
            <Link className={styles.link} to="cadastro">
              Sign up
            </Link>{' '}
          </div>
          <ButtonPrimary
            text={loading ? 'loading...' : 'login'}
            disabled={loading ? true : false}
          />
          {naoEncontrado && (
            <div className={styles.mensagemErro}>User not found 😥</div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Login;
