import { cartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += product.quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const getQuantity = () => {
        const quantities = cart.map((product) => product.quantity);
        const result = quantities.reduce((acc, current) => acc + current, 0);

        return result;
    };

    const getTotal = () => {
        const prices = cart.map(product => product.price*product.quantity)
        const total = prices.reduce((acc, current) => acc + current, 0)

        return total
    }

    return (
        <cartContext.Provider value={{ addToCart, removeFromCart, emptyCart, getQuantity, getTotal, cart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;