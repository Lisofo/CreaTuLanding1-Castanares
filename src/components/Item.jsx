import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

function Item({ producto }) {
    return (
        <Col md={6} lg={3}>
            <Card>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Button as={Link} to={`/item/${producto.id}`} variant="dark">Ver más</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;