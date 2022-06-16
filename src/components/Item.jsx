import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({serv}) => {

    const { producto, descripcion, precio} = serv
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{producto}</Card.Title>
                <Card.Text>
                Precio: {precio}
                Descripcion: {descripcion}
                </Card.Text>
                <Button variant="primary">Detalles</Button>
            </Card.Body>
            </Card>
        </>
    );
}

export default Item;