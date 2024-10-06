import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './Cart.css';

const Cart = () => {
  const { cartItems, increaseItemQuantity, decreaseItemQuantity, removeItem, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Tu carrito está vacío, agrega productos antes de continuar.');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-items-section">
        <h2>Tu Carrito</h2>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.PictureURL} alt={item.Name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.Name}</h3>
                  <div className="cart-item-info">
                    <div className="cart-item-controls">
                      <button onClick={() => decreaseItemQuantity(item.id)} disabled={item.quantity === 1} className="quantity-button">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseItemQuantity(item.id)} className="quantity-button">+</button>
                    </div>
                    <p className="cart-item-price">
                      <strong>Precio:</strong> ${item.Price}
                    </p>
                    <p className="cart-item-subtotal">
                      <strong>Subtotal:</strong> ${parseFloat(item.Price) * item.quantity}
                    </p>
                  </div>
                  <button className="remove-item-button" onClick={() => removeItem(item.id)}>✖</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-summary-section">
        <div className="cart-summary">
          <h3 className="total-price">Precio Total: ${totalPrice()}</h3>
          <button className="clear-cart-button btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
          <button className="checkout-button btn btn-success" onClick={handleCheckout}>Ir al Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
