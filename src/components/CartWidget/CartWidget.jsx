// src/components/CartWidget/CartWidget.jsx
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importa el ícono de carrito desde Material Icons
import Badge from '@mui/material/Badge'; // Importa el componente Badge de Material UI

const CartWidget = () => {
  return (
    <Badge badgeContent={3} color="secondary">
      <ShoppingCartIcon /> {/* Ícono de carrito */}
    </Badge>
  );
};

export default CartWidget;