import React, { Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

class NavbarPage extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="py-3">
                <Container>
                    <Navbar.Brand href="#home">Codelit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button href="/sign-in" className="btn btn-primary btn-custom">Sign In</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarPage;