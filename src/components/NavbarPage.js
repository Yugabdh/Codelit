import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavbarPage extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3">
                <Container>
                <Navbar.Brand href="#home">Codelit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarPage;