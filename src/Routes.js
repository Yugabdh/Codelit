import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <HomePage />
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
        {/* <Route component={ NotFound } /> */}
      </Switch>
    );
    }
}

export default Routes;