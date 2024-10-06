// src/components/CartWidget/CartWidget.jsx
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importa el ícono de carrito desde Material Icons
import Badge from '@mui/material/Badge'; // Importa el componente Badge de Material UI
import { useCart } from '../../hooks/useCart'; // Importa el hook useCart para acceder al contexto del carrito

const CartWidget = () => {
  const { cartItems } = useCart(); // Obtén los artículos del carrito desde el contexto

  // Calcula el total de artículos en el carrito
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Badge badgeContent={totalItems} color="secondary">
      <ShoppingCartIcon /> {/* Ícono de carrito */}
    </Badge>
  );
};

export default CartWidget;
