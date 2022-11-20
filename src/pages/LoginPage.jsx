import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import UserSeller from './UserSeller';
import Cadastro from './Cadastro';
import RotaProtegida from '../components/RotaProtegida';

function LoginPage() {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<Login />} />
        <Route
          path="usuario/*"
          element={
            <RotaProtegida>
              <UserSeller />
            </RotaProtegida>
          }
        />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default LoginPage;
