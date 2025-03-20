import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

function CartList({ cart }) {
    const navigate = useNavigate();
    const { removeFromCart } = useContext(cartContext);

    const handleClick = () => {
        navigate("/checkout");
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    return (
        <ListGroup className="w-50 mt-5">
            {cart.map((prod) => (
                <ListGroup.Item key={prod.id} className="d-flex justify-content-between p-3">
                    {prod.name} x {prod.quantity}
                    <CloseButton onClick={() => handleRemove(prod.id)} />
                </ListGroup.Item>
            ))}
            <Button variant="dark" onClick={handleClick}>
                Ir a Checkout
            </Button>
        </ListGroup>
    );
}

export default CartList;