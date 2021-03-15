import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';

import AlertModal from './AlertModal';
import logoImg from '../assets/img/png/logo.png';

import { logoutUser } from "../actions";

class NavbarPage extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {

    const { isAuthenticated, isVerifying, isLoggingOut, logoutError } = this.props;
    const infoLogError = {
      titleText: "Loggout Error",
      bodyText: "Error occurred while logging out",
      bodyColor: "modal-danger"
    }
    const infoLogSucess = {
      titleText: "Loggout",
      bodyText: "User sucessfully logged out",
      bodyColor: "modal-sucess"
    }
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="py-3">
        <Container>
            <Link className="navbar-brand" to="/">
              <img
                  alt=""
                  src={logoImg}
                  width="30"
                  className="d-inline-block align-top"
              />{' '}
              Codelit
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              { isVerifying ? (
                  <></>
                ) : isAuthenticated ? (
                  <></>
                ) : (
                  <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
                )
              }
              { isVerifying ? (
                  <></>
                ) : isAuthenticated ? (
                  <NavLink className="nav-link" to="/home">Home</NavLink>
                ) : (
                  <></>
                )
              }
              <NavLink className="nav-link" to="/about">About</NavLink>
            </Nav>
            <Nav>
              { isVerifying ? (
                  <div/ > 
                ) : isAuthenticated ? (
                  <button className="btn btn-primary btn-custom" type="button"
                          onClick={ this.handleLogout }>
                            Logout
                  </button>
                ) : (
                  <Link to="/sign-in" className="btn btn-primary btn-custom">Sign In</Link>
                )
              }
              {
                isLoggingOut ? (
                  logoutError ? (
                    <AlertModal info={ infoLogError }/>
                  ) : (
                    <AlertModal info={ infoLogSucess }/>
                  )
                ) : (
                  <></>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    isLoggingOut: state.auth.isLoggingOut,
    isLoggedIn: state.auth.isLoggedIn,
    logoutError: state.auth.logoutError
  }
}

export default connect(mapStateToProps)(NavbarPage);