// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css'; // Archivo CSS para estilos personalizados

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const mockItems = [
        { id: '1', title: 'Auto Deportivo', category: 'vehiculos', price: 12000, pictureUrl: 'https://via.placeholder.com/150' },
        { id: '2', title: 'Camioneta 4x4', category: 'vehiculos', price: 15000, pictureUrl: 'https://via.placeholder.com/150' },
        { id: '3', title: 'Bicicleta', category: 'bicicletas', price: 300, pictureUrl: 'https://via.placeholder.com/150' },
      ];
      const filteredItems = id ? mockItems.filter((item) => item.category === id) : mockItems;
      setTimeout(() => setItems(filteredItems), 1000);
    };

    fetchItems();
  }, [id]);

  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.pictureUrl} alt={item.title} className="item-image" />
            <div className="item-info">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">${item.price}</p>
              <Link to={`/item/${item.id}`} className="item-detail-link">
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
