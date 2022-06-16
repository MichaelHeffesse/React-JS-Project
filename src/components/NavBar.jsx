import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import CartWidget from "./CartWidget";

const NavBar = ({items}) => {


    return (

            <>
                 <Navbar bg="blue" variant="white">
                    <Container>
                    <Image fluid="True" className="Logo" src="./img/Logo.png" alt="Brand Logo" />
                    <Navbar.Brand href="#inicio">Digital HikeUP</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#acercadenosotros">Acerca de Nosotros</Nav.Link>
                    <Nav.Link href="#features">¿Que ofrecemos?</Nav.Link>
                    <Nav.Link href="#servicios">Servicios</Nav.Link>
                    <CartWidget items={items}/>
                    </Nav>
                    </Container>
                </Navbar>
            </>

    );

}

export default NavBar;

