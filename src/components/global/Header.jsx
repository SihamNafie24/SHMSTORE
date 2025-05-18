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
          <span style={{ color: '#00FF7A', fontWeight: 700, fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>SHMSTORE</span>
        </Link>
        <nav style={{alignItems: 'center', display: 'flex', gap: '24px'}}>
          <div className={styles.navLinks}>
            <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.activeNavLink : ''}`}>Home</Link>
            <Link to="/login" className={`${styles.navLink} ${location.pathname.startsWith('/login') ? styles.activeNavLink : ''}`}>Login</Link>
            <Link to="/login/cadastro" className={`${styles.navLink} ${location.pathname.startsWith('/login/cadastro') ? styles.activeNavLink : ''}`}>Register</Link>
            <Link to="/quemsomos" className={`${styles.navLink} ${location.pathname.startsWith('/quemsomos') ? styles.activeNavLink : ''}`}>About us</Link>
          </div>
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
