import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Produtos from './pages/Produtos';
// import Produto from './pages/Produto'

function App() {

  return <div className='App'>
    <BrowserRouter>
    <div className='content'>
      <Routes>
        <Route path='/' element={<Produtos />} />
        {/* <Route path='produto/:id' element={<Produto />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  </div>;
}

export default App;
