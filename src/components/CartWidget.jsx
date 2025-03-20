import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';

const CartWidget = () => {
  const { getQuantity } = useCart()
  const total = getQuantity()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <Button variant="dark" onClick={handleClick}>
      🛒 <Badge bg="secondary">{total}</Badge>
    </Button>
  );
};

export default CartWidget;