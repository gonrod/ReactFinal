// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'; // Crea un archivo CSS para los estilos personalizados

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const mockItem = {
        id,
        title: `Producto ${id}`,
        description: 'Este es un producto de alta calidad que cumple con todas tus necesidades y expectativas.',
        price: 100,
        pictureUrl: 'https://via.placeholder.com/300',
      };
      setTimeout(() => setItem(mockItem), 2000);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-image-container">
          <img src={item.pictureUrl} alt={item.title} className="item-image" />
        </div>
        <div className="item-info">
          <h2 className="item-title">{item.title}</h2>
          <p className="item-price">Precio: ${item.price}</p>
          <p className="item-description">{item.description}</p>
          <button className="add-to-cart-btn">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
