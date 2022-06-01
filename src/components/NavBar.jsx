import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import { CartWidget } from "./CartWidget";
import {itemListContainer} from "./itemListContainer";


function NavBar() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="blue" variant="white">
        <Container>
        <Image fluid="True" className="Logo" src="./img/Logo.png" alt="Brand Logo" />
        <Navbar.Brand href="#inicio">Digital HikeUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#acercadenosotros">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#servicios">¿Que ofrecemos?</Nav.Link>
            <NavDropdow title="Servicios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">1er Servicio</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">2do Servicio</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">3er Servicio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">4to Servicio</NavDropdown.Item>
            </NavDropdow>
            </Nav>
            <CartWidget>

            </CartWidget>
            <itemListContainer>

            </itemListContainer>
            <Nav>
            <Nav.Link href="#deets">Contactate con nosotros</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Habla con un asesor
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

    );

}

export {NavBar};

