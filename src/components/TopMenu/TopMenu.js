import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Cart from '../Cart';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import './TopMenu.scss';

const TopMenu = ({productsCart, getProductsCart, products}) => {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav/>
        {/* <MenuNav/> */}
        <Cart productsCart={productsCart} getProductsCart={getProductsCart} products={products}/>
      </Container>
    </Navbar>
  );
}

export default TopMenu;

const BrandNav = () => {
  return (
    <Navbar.Brand>
      <Logo/>
      <h2>La casa de los helados</h2>
    </Navbar.Brand>
  )
}

// const MenuNav = () => {
//   return (
//     <Nav className="mr-auto">
//       <Nav.Link href="#">Aperitivos</Nav.Link>
//       <Nav.Link href="#">Helados</Nav.Link>
//       <Nav.Link href="#">Mascotas</Nav.Link>
//     </Nav>
//   )
// }