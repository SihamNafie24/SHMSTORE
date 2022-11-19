import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import userIcon from '../../img/icons/user-icon.svg';
import bagIcon from '../../img/icons/bag-icon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import { UserGlobalContext } from '../../context/UserGlobalContext';

function Header() {
  const { setShowCarrinho, showCarrinho, produtosCarrinho } =
    React.useContext(GlobalContext);
  const { user } = React.useContext(UserGlobalContext);
  const bagRef = React.useRef();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    bagRef.current.dataset.content = produtosCarrinho.length;
  }, [produtosCarrinho]);

  React.useEffect(() => {
    if (location.pathname.includes('/login/usuario/')) {
      bagRef.current.style.opacity = '0';
    } else {
      bagRef.current.style.opacity = 'initial';
    }
  }, [location]);

  return (
    <header className={styles.headerBackground}>
      <div className={`${styles.header} container`}>
        <Link to="">
          <img className={styles.logo} src={logo} alt="techstore" />
        </Link>
        <nav>
          <button className={styles.user} onClick={() => navigate('login')}>
            <img src={userIcon} alt="icone de usuario" />
            {user && (
              <div className="comeFromRight">
                <p>acesse sua conta</p>
                <p className={styles.nome}>{user.name}</p>
              </div>
            )}
          </button>

          <button
            ref={bagRef}
            className={styles.bag}
            onClick={() => setShowCarrinho(!showCarrinho)}
          >
            <img src={bagIcon} alt="icone de sacola" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Header);
