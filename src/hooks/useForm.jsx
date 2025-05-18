import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Enter a valid email.',
  },
  cpf: {
    regex:
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
    message: 'Enter a valid CPF.',
  },
};

function useForm(type) {
  const [value, setValue] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setErro('Please fill in a value.');
      return false;
    } else if (/min/.test(type)) {
      const minimo = Number(type.replace('min=', ''));
      if (value.length < minimo) {
        setErro(`Enter at least ${minimo} characters.`);
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
