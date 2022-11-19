import React from 'react';
import styles from './Cadastro.module.css';
import Input from '../components/Form/Input';
import ButtonPrimary from '../components/Button/ButtonPrimary';
import useForm from '../hooks/useForm';
import axios from 'axios';

function Cadastro() {
  const nome = useForm();
  const email = useForm('email');
  const cpf = useForm('cpf');
  const senha = useForm('min=8');

  function handleSubmit(e) {
    e.preventDefault();

    nome.validate();
    email.validate();
    cpf.validate();
    senha.validate();
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Cadastre-se</h1>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <Input label="Nome:" id="name" {...nome} value={nome.value} />
        <Input
          label="Email:"
          id="email"
          placeholder="usuario@email.com"
          {...email}
          value={email.value}
        />
        <Input
          label="CPF:"
          id="cpf"
          placeholder="000.000.000-00"
          {...cpf}
          value={cpf.value}
        />
        <Input
          label="Senha:"
          type="password"
          id="password"
          {...senha}
          value={senha.value}
        />
        <ButtonPrimary
          text='enviar'
          disabled={false}
        />
      </form>
    </section>
  );
}

export default Cadastro;
