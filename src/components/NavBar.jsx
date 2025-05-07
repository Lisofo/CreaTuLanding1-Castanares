import React from 'react';
import { NavLink } from 'react-router';
import CartWidget from './CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar () {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand as={NavLink} to='/'> Dimensional Art</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to="/category/impreciones">Impreciones 3D</Nav.Link>
            <Nav.Link as={NavLink} to="/category/sublimaciones">Sublimaciones</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;