import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';
import { useCart } from '../../hooks/useCart';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const { items, loading } = useFetchItems('single', itemId);
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    console.log('ItemDetailContainer - ID obtenido desde la URL:', itemId);
  }, [itemId]);

  useEffect(() => {
    console.log('ItemDetailContainer - Item obtenido desde Firestore:', items);
  }, [items]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!items) {
    return <p>No se encontró el producto.</p>;
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItemToCart(items, quantity);
    setIsModalVisible(true); // Mostrar el modal después de agregar al carrito
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigate('/'); // Redirigir al catálogo principal
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="item-detail-container">
      <img src={items.PictureURL} alt={items.Name} className="item-detail-image" />
      <div className="item-detail-info">
        <h2 className="item-detail-title">{items.Name}</h2>
        <p className="item-detail-price">${items.Price}</p>
        <p className="item-detail-description">{items.Description}</p>
        <div className="item-actions">
          <div className="quantity-control">
            <button onClick={handleDecreaseQuantity} className="quantity-button">-</button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="quantity-input"
            />
            <button onClick={handleIncreaseQuantity} className="quantity-button">+</button>
          </div>
          <button
            className="add-to-cart-button"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <ConfirmationModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onGoToCart={handleGoToCart}
      />
    </div>
  );
};

export default ItemDetailContainer;
