import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Digite um email válido.',
  },
  cpf: {
    regex:
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
    message: 'Digite um CPF válido.',
  },
};

function useForm(type) {
  const [value, setValue] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setErro('Preencha um valor.');
      return false;
    } else if (/min/.test(type)) {
      const minimo = Number(type.replace('min=', ''));
      if (value.length < minimo) {
        setErro(`Digite pelo menos ${minimo} caracteres.`);
        return false;
      } else {
        setErro(null);
        return true;
      }
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (erro) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    erro,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
}

export default useForm;
