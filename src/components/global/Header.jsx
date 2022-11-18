import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import userIcon from '../../img/icons/user-icon.svg';
import bagIcon from '../../img/icons/bag-icon.svg';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

function Header() {
  const { setShowCarrinho, showCarrinho, produtosCarrinho } = React.useContext(GlobalContext);
  const bagRef = React.useRef()

  React.useEffect(() => {
    bagRef.current.dataset.content = produtosCarrinho.length
  }, [produtosCarrinho])

  return (
    <header className={styles.headerBackground}>
      <div className={`${styles.header} container`}>
        <Link to="">
          <img className={styles.logo} src={logo} alt="techstore" />
        </Link>
        <nav>
          <button>
            <img src={userIcon} alt="icone de usuario" />
          </button>
          <button ref={bagRef} className={styles.bag} onClick={() => setShowCarrinho(!showCarrinho)}>
            <img src={bagIcon} alt="icone de sacola" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Header);
