import { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { cartContext } from '../context/CartContext';

function ItemCount({ product }) {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(cartContext)

    useEffect(() => {
        return () => {};
    }, [count]);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleRestar = () => {
        setCount(count - 1);
    };

    const handleAddToCart = () => {
        addToCart({...product, quantity: count})
    }

    return (
        <div className='d-flex justify-content-between p-3'>
            <Button onClick={handleAdd}>+</Button>
            <p>{count}</p>
            <Button onClick={handleRestar}>-</Button>
            <Button onClick={handleAddToCart} variant="dark">Agregar al carrito</Button>
        </div>
    );
}

export default ItemCount;