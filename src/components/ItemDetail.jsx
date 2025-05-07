import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import Carousel from 'react-bootstrap/Carousel';

function ItemDetail({ detail }) {
    return (
        <Card style={{ width: '25rem', margin: 'auto' }}>
            {/* Reemplazamos la Image simple por el Carousel */}
            {detail.carrusel && detail.carrusel.length > 0 ? (
                <Carousel style={{height: '21rem'}}>
                    {detail.carrusel.map((imageUrl, index) => (
                        <Carousel.Item key={index} style={{height: '21rem'}}>
                            <img
                                style={{height: '21rem'}}
                                className="d-block w-100"
                                src={imageUrl}
                                alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <img
                    className="d-block w-100"
                    src={detail.image}
                    alt="Product"
                />
            )}
            
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