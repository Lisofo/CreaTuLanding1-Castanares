import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemDetail({ item }) {
    return (
        <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Card.Text>
                    Precio: ${item.price}
                </Card.Text>
                <Button variant="dark">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemDetail;