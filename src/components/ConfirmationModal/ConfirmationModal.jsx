import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ isVisible, onClose, onGoToCart }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Producto agregado al carrito</h3>
        <p>¿Desea ir al carrito o continuar comprando?</p>
        <div className="modal-actions">
          <button className="modal-button" onClick={onGoToCart}>
            Ir al carrito
          </button>
          <button className="modal-button" onClick={onClose}>
            Volver al catálogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
