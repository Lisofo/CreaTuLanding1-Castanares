import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import Image from 'react-bootstrap/Image';

function ItemDetail({ detail }) {
    return (
        <Card style={{ width: '25rem', margin: 'auto' }}>
            <Image src={detail.image} rounded />
            <Card.Body>
                <Card.Title>{detail.title}</Card.Title>
                <Card.Text>
                    {detail.description}
                </Card.Text>
                <Card.Text>
                    Precio: ${detail.price}
                </Card.Text>
                <ItemCount product={detail}/>
            </Card.Body>
        </Card>
    );
}

export default ItemDetail;