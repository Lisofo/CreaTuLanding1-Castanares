import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setItem(res));
    }, [id]);

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;