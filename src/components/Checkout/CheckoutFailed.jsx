// src/components/Checkout/CheckoutFailed.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-failed-container">
      <h2>Algo salió mal</h2>
      <p>Hubo un problema al procesar su compra. Por favor, inténtelo de nuevo más tarde.</p>
      <button onClick={() => navigate('/')}>Volver al Catálogo</button>
      <button onClick={() => navigate('/checkout')}>Intentar de Nuevo</button>
    </div>
  );
};

export default CheckoutFailed;