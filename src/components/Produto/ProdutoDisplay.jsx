import React from 'react';
import styles from './ProdutoDisplay.module.css';
import calculateCredit from '../../functions/CalculateCredit';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';
import Input from '../Form/Input';
import axios from 'axios';


function ProdutoDisplay({
  name,
  price,
  image,
  description,
  tag,
  credit,
  id,
  seller,
  handleClick
}) {
  const [cep, setCep] = React.useState('');
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null)
  const imageRef = React.useRef();

  React.useEffect(() => {
    const endereco = JSON.parse(localStorage.getItem('endereco')) 
    if (endereco) setData(endereco)

    imageRef.current.dataset.content = tag;
  }, []);

  function handleChange({ target }) {
    setCep(target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (/^([\d]{2})\.*([\d]{3})-?([\d]{3})$/.test(cep)) {
      setLoading(true)
      const cepValue = cep.replace(/\.|-/, '');

      const { data } = await axios.get(
        `https://viacep.com.br/ws/${cepValue}/json/`,
      );
      
      setData(data)

      const {logradouro, localidade, uf} = data
      setLoading(false)
      if (logradouro) {
        window.localStorage.setItem('endereco', JSON.stringify({logradouro, localidade, uf}));
      }
    }
  }

  return (
    <main className={`${styles.container} comeFromBottom`}>
      <div className={styles.image} ref={imageRef}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.vendedor}>
            Vendido e entregue por{' '}
            <span style={{ fontWeight: 'bold' }}>{seller.name}</span>
          </p>
          <h1 className={styles.nome}>{name}</h1>
        </div>
        <div className={styles.precoContainer}>
          <div>
            <del>{'R$ ' + (price * 1.05).toFixed(2)}</del>
            <p className={styles.preco}>R$ {price}</p>
            {calculateCredit(price, credit)}
          </div>
          <div className={styles.buttons}>
            <ButtonPrimary onClick={() => handleClick(id, price)} text="Comprar" />
            <ButtonSecondary text="Retirar na loja" />
          </div>
        </div>
        <div className={styles.cepContainer}>
          <form onSubmit={handleSubmit} className={styles.cep}>
            <label style={{whiteSpace: 'noWrap', display: 'flex', alignItems: 'center'}} htmlFor="cep">Digite seu CEP:</label>
            <Input
              placeholder="00000-000"
              id="cep"
              onChange={handleChange}
              value={cep}
            />
            <ButtonSecondary text={loading ? 'carregando' : "consultar"} disabled={loading ? true : false}/>
          </form>
          {data && data.logradouro && (
            <div className={styles.cepResponse}>
              <p>{data.logradouro}</p>
              <p>
                {data.localidade} / {data.uf}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProdutoDisplay
