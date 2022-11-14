import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto'
import CookieMessage from './components/global/CookieMessage';

function App() {

  return <div className='App'>
    <BrowserRouter>
    <Header />
    <div className='content'>
      <Routes>
        <Route path='/' element={<Produtos />}/>
        <Route path='produto/:id' element={<Produto />} />
      </Routes>
    </div>
    <CookieMessage />
    <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
