import Button  from "react-bootstrap/Button";
import Form  from "react-bootstrap/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useContext } from "react";
import { cartContext } from '../context/CartContext'
import { serverTimestamp } from "firebase/firestore";
import { postOrder } from "../firebase/db";
import { useNavigate } from "react-router";

function CheckoutForm () {
    const MySwal = withReactContent(Swal)
    const { cart, getTotal, emptyCart } = useContext(cartContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            items: cart,
            user: {fullname: name, email, phone},
            time: serverTimestamp(),
            total: getTotal()
        }

        const id = await postOrder(order)

        emptyCart()

        MySwal.fire({
            title: <p>Gracias por su compra</p>,
            text: `El ID de tu orden es ${id}`
        }).then(() => navigate('/'))
    }

    return (
        <div className="d-flex justify-content-center">
            <Form className='w-25 pt-4' onSubmit={handleSubmit}> 
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Pepito Perez" required />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" placeholder="+5491123344565" required />
              </Form.Group>
        
              <Button variant="dark" type="submit" className='w-100'>
                Finalizar compra
              </Button>
            </Form>
        </div> 
    );
}

export default CheckoutForm