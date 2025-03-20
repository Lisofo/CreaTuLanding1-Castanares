import { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { cartContext } from '../context/CartContext';

function ItemCount({ product }) {
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(cartContext);

    useEffect(() => {
        return () => {};
    }, [count]);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleRestar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({...product, quantity: count});
        }
    };

    return (
        <div className='d-flex justify-content-between p-3'>
            <Button onClick={handleAdd}>+</Button>
            <p>{count}</p>
            <Button onClick={handleRestar} disabled={count <= 1}>-</Button>
            <Button onClick={handleAddToCart} variant="dark" disabled={count <= 0}>Agregar al carrito</Button>
        </div>
    );
}

export default ItemCount;