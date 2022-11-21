import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalCarrinho } from './context/GlobalContext';
import { UserContext } from './context/UserGlobalContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalCarrinho>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </GlobalCarrinho>,
);
