import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../../firebaseConfig';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleConfirmPurchase = async (event) => {
    event.preventDefault();
    const { name, email, address } = event.target.elements;

    // Crear la orden con los datos del carrito y el formulario
    const order = {
      buyer: {
        name: name.value,
        email: email.value,
        address: address.value,
      },
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.Name,
        quantity: item.quantity,
        price: item.Price,
      })),
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      // Intentar agregar la orden a Firestore
      const docRef = await addDoc(collection(db, 'orders'), order);
      clearCart(); // Limpiar el carrito después de la compra
      navigate(`/checkout-success/${docRef.id}`); // Redirigir a una página de éxito
    } catch (error) {
      console.error('Error al crear la orden:', error);
      navigate('/checkout-failed'); // Redirigir a una página de error en caso de fallo
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-items-container">
        <h2>Carrito de Compras</h2>
        <div className="checkout-items">
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img
                  src={item.PictureURL}
                  alt={item.Name}
                  className="checkout-item-image"
                />
                <div className="checkout-item-details">
                  <h3>{item.Name}</h3>
                  <p><span className="label-bold">Precio:</span> ${item.Price}</p>
                  <p><span className="label-bold">Cantidad:</span> {item.quantity}</p>
                  <p><span className="label-bold">Subtotal:</span> ${item.Price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="checkout-summary-container">
        <div className="checkout-summary">
          <h3>Precio Total: ${totalPrice()}</h3>
          <form className="checkout-form" onSubmit={handleConfirmPurchase}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="checkout-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="checkout-input"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              className="checkout-input"
              required
            />
            <button type="submit" className="confirm-purchase-button">
              Confirmar Compra
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
