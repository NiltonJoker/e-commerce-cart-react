import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';
import {BASE_PATH} from '../../utils/constants';
import './Product.scss';

const Product = ({product, addProductCart}) => {
  const {name, price, image, extraInfo, id} =  product;
  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${image}`}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{extraInfo}</Card.Text>
          <Card.Text>{price.toFixed(2)} $ / Unidad</Card.Text>
          <Button onClick={() => addProductCart(id, name)}>Añadir al Carrito</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
