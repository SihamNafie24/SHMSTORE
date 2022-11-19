import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserGlobalContext } from '../context/UserGlobalContext';

function RotaProtegida({children}) {
  const { auth } = React.useContext(UserGlobalContext);
  

  return auth ? children : <Navigate to="/login" />
}

export default RotaProtegida;
