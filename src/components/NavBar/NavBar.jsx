// src/components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'; // Crea un archivo CSS para estilos personalizados

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <Link className="navbar-brand" to="/">Mi Tienda</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/vehiculos">Vehículos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/bicicletas">Bicicletas</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
