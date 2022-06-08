import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import { CartWidget } from "./CartWidget";

const NavBar = () => {
    const items = 4
    return (

            <>
                <Navbar bg="blue" variant="white">
                    <Container>
                    <Image fluid="True" className="Logo" src="./img/Logo.png" alt="Brand Logo" />
                    <Navbar.Brand href="#inicio">Digital HikeUP</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#acercadenosotros">Acerca de Nosotros</Nav.Link>
                    <Nav.Link href="#features">¿Que ofrecemos?</Nav.Link>
                    <Nav.Link href="#servicios">¿Que ofrecemos?</Nav.Link>
                        <NavDropdown.Collapse title="Servicios" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#1">1er Servicio</NavDropdown.Item>
                        <NavDropdown.Item href="#2">2do Servicio</NavDropdown.Item>
                        <NavDropdown.Item href="#3">3er Servicio</NavDropdown.Item>
                        </NavDropdown.Collapse>
                    <CartWidget items={items}/>
                    </Nav>
                    </Container>
                </Navbar>
            </>

    );

}

export {NavBar};

