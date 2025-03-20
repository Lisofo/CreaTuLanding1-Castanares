import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import { getProductById } from '../firebase/db';

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id).then(res => setItem(res))
    }, [id]);

    return (
        <div>
            {item ? <ItemDetail detail={item} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;