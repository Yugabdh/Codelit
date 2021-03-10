import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <Router>
      <NavbarPage />
      <main>
        <Routes />
      </main>
      <FooterPage />
    </Router>
  );
}

export default App;
