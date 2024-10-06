// src/components/Checkout/CheckoutForm.jsx

import React, { useState } from 'react';
import './Checkout.css'; // Estilos personalizados

const CheckoutForm = ({ onConfirm }) => {
  const [buyerData, setBuyerData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerData({ ...buyerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(buyerData); // Llamamos a la función que confirma el pedido
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={buyerData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={buyerData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Dirección</label>
        <input
          type="text"
          name="address"
          value={buyerData.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="confirm-button">Confirmar Compra</button>
    </form>
  );
};

export default CheckoutForm;
