import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import CookieMessage from './components/global/CookieMessage';
import Carrinho from './components/Carrinho/Carrinho';
import Login from './pages/LoginPage';
import QuemSomos from './pages/QuemSomos';
import NaoEncontrada from './pages/NaoEncontrada';
import React from 'react';

function App() {
  const location = useLocation()

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [location])

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="login/*" element={<Login />} />
          <Route path="quemsomos" element={<QuemSomos />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </div>
      <CookieMessage />
      <Carrinho />
      <Footer />
    </div>
  );
}

export default App;
