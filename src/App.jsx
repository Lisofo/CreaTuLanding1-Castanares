import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <BrowserRouter >
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/checkout" element={<CheckoutForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;