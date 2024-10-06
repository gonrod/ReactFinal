import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Checkout.css'; // Archivo CSS para estilos personalizados

const CheckoutSuccess = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const handleReturnToCatalog = () => {
    navigate('/');
  };

  return (
    <div className="checkout-success-container">
      <div className="success-message">
        <div className="check-icon">
          <span>&#10003;</span>
        </div>
        <h2>¡Gracias por su compra!</h2>
        <p>Su orden ha sido generada exitosamente.</p>
        <div className="order-details">
          <p><strong>Número de orden:</strong> {orderId}</p>
          <p><strong>Fecha de compra:</strong> {new Date().toLocaleString()}</p>
        </div>
        <button className="return-button" onClick={handleReturnToCatalog}>
          Volver al Catálogo
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
