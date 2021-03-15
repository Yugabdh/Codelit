import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';


import HomePage from './pages/HomePage';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <>
      <NavbarPage />
      <main>
        <Switch>
          <Route exact path='/'>
            <IndexPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/sign-in'>
            <SignInPage />
          </Route>
          <Route path='/sign-up'>
            <SignUpPage />
          </Route>
          <Route path='/forget-password'>
            <ForgetPasswordPage />
          </Route>
          <ProtectedRoute
            exact
            path="/home"
            component={HomePage}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          {/* <Route component={ NotFound } /> */}
        </Switch>
      </main>
      <FooterPage />
    </>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
