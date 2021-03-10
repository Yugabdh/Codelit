import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import logoImg from '../assets/img/png/logo.png';

class NavbarPage extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="py-3">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img
                            alt=""
                            src={logoImg}
                            width="20"
                            className="d-inline-block align-top"
                        />{' '}
                        Codelit
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
                        </Nav>
                        <Nav>
                            <Link to="/sign-in" className="btn btn-primary btn-custom">Sign In</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarPage;