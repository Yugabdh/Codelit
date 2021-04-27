import { connect, useDispatch } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';

import logoImg from '../assets/img/png/logo.png';

import { signout } from "../redux/actions/auth";

function NavbarPage({ auth }) {
  const dispatch = useDispatch();
  return(
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="py-3" animation="none">
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
        <Navbar.Collapse id="responsive-navbar-nav"  animation="none">
          <Nav className="mr-auto">
            
            {
              !auth.isLoaded ? <></> : 
                !auth.isEmpty ? <>
                  <NavLink className="nav-link" to="/home">Home</NavLink>
                
                  </> 
                : 
                  <>
                    <NavLink className="nav-link" to="/sign-up">Sign up</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </>
              
            }
            
            
          </Nav>
          <Nav>
            {
              !auth.isLoaded ? <></> : 
              !auth.isEmpty ? <button className="btn btn-primary btn-block btn-lg login-btn" type="button" onClick={(e) => dispatch(signout())}> Logout </button> : 
              <Link to="/sign-in" className="btn btn-primary btn-block btn-lg login-btn">Sign In</Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps)(NavbarPage);