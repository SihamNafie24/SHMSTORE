import React from 'react';
import styles from './Wrapper.module.css';
import arrow from '../img/icons/arrow-icon.svg';

function Wrapper({ text, info }) {
  const [ativo, setAtivo] = React.useState(false);
  const bodyRef = React.useRef();

  function handleClick() {
    setAtivo(!ativo);
  }

  React.useEffect(() => {
    const { current } = bodyRef;
    if (ativo) {
      if (current.offsetHeight < 10) {
        current.style.height = `${current.scrollHeight}px`;
      }
    } else {
      current.style.height = `${0}px`;
    }
  }, [ativo]);

  return (
    <div className={`${styles.container} comeFromBottom`}>
      <button onClick={handleClick} className={styles.head}>
        {text}
        <img
          className={`${ativo ? 'rotate' : ''}`}
          src={arrow}
          alt="icone de seta"
        />
      </button>

      <div ref={bodyRef} className={`${styles.body} ${ativo ? 'show' : ''}`}>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  );
}

export default Wrapper;
