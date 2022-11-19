import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import CookieMessage from './components/global/CookieMessage';
import { GlobalCarrinho } from './context/GlobalContext';
import { UserContext } from './context/UserGlobalContext';
import Carrinho from './components/Carrinho/Carrinho';
import Login from './pages/LoginPage';

function App() {
  return (
    <GlobalCarrinho>
      <UserContext>
        <div className="App">
          <BrowserRouter>
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Produtos />} />
                <Route path="produto/:id" element={<Produto />} />
                <Route path="login/*" element={<Login />} />
              </Routes>
            </div>
            <CookieMessage />
            <Carrinho />
            <Footer />
          </BrowserRouter>
        </div>
      </UserContext>
    </GlobalCarrinho>
  );
}

export default App;
