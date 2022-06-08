import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({coins}) => {

    const { symbol, price, marketCap} = coins
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{symbol}</Card.Title>
                <Card.Text>
                Precio: {price}
                Capitalizacion de mercado: {marketCap}
                </Card.Text>
                <Button variant="primary">Detalles</Button>
            </Card.Body>
            </Card>
        </>
    );
}

export {Item};