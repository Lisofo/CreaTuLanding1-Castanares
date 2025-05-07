import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

function CartList({ cart }) {
    const navigate = useNavigate();
    const { removeFromCart, emptyCart } = useContext(cartContext);

    const handleClick = () => {
        navigate("/checkout");
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleEmptyCart = () => {
        emptyCart();
    };

    return (
        <div className="w-50 mt-5">
            <ListGroup>
                {cart.map((prod) => (
                    <ListGroup.Item key={prod.id} className="d-flex align-items-center p-3 gap-3">
                    <Image src={prod.image} thumbnail style={{ width: '5rem', height: '5rem' }}/>
                    <div className="flex-grow-1">
                      {prod.name} x {prod.quantity}
                    </div>
                    <CloseButton onClick={() => handleRemove(prod.id)} />
                  </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="d-flex flex-column mt-3">
                <Button variant="dark" onClick={handleClick} className="w-100 mb-2">
                    Ir a Checkout
                </Button>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleEmptyCart} size="sm" className="w-25">
                        Vaciar carrito
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CartList;