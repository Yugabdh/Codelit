import { Switch, Route } from 'react-router-dom';

// style
import './assets/style/style.scss';

// components
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';

// pages
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignIn/';
import SignUpPage from './pages/SignUp/';

function App() {
  return (
    <>
      <NavbarPage />
      <main>
        <Switch>
          <Route exact path='/'>
            <IndexPage />
          </Route>
          <Route path='/sign-in'>
            <SignInPage />
          </Route>
          <Route path='/sign-up'>
            <SignUpPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
        </Switch>
      </main>
      <FooterPage />
    </>
  );
}

export default App;
