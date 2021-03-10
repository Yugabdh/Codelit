import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/sign-in'>
          <SignInPage />
        </Route>
        <Route path='/sign-up'>
          <SignUpPage />
        </Route>
        {/* <Route component={ NotFound } /> */}
      </Switch>
    );
    }
}

export default Routes;