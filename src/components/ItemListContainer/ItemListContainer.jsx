// src/components/ItemListContainer/ItemListContainer.jsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { items, loading } = useFetchItems(categoryId ? 'category' : 'all', categoryId);

  console.log('Category ID utilizado en la consulta:', categoryId);
  console.log('Items obtenidos desde Firebase:', items);

  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : items.length > 0 ? (
        <div className="item-grid">
          {items.map((item) => (
            <div className="item-card" key={item.id}>
              <img
                src={item.PictureURL}
                alt={item.Name}
                className="item-image"
              />
              <div className="item-info">
                <h3 className="item-title">{item.Name}</h3>
                <p className="item-price">${item.Price}</p>
                <button
                  className="item-detail-button"
                  onClick={() => navigate(`/item/${item.id}`)}
                >
                  Ver Detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
