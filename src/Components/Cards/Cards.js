import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../product/product';

function Cards() {
    // call the fucntion product from prudct file as variable
    const productData = product();
    // affiche produit
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productData.imageUrl}/>
        <Card.Body>
            <Card.Title>{productData.name}</Card.Title>
            <Card.Text>{productData.price}</Card.Text>
            <Card.Text>{productData.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}

export default Cards;