// src/components/NavBar/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import useFetchCategories from '../../hooks/useFetchCategories';
import './NavBar.css';

const NavBar = () => {
  const { categories, loading } = useFetchCategories();

  console.log('Categorías obtenidas desde Firebase:', categories);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Mi Tienda</Link>
        <ul className="navbar-links">
          {/* Menú desplegable de categorías */}
          <li className="dropdown">
            <button className="dropdown-button">Categorías</button>
            <ul className="dropdown-menu">
              {!loading && categories.length > 0 ? (
                categories.map((category) => (
                  <li key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                  </li>
                ))
              ) : (
                <li>Cargando categorías...</li>
              )}
            </ul>
          </li>
          {/* Link al carrito */}
          <li>
            <Link to="/cart" className="cart-widget">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
