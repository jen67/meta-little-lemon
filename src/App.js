import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Layouts/Header';
import Main from './Layouts/Main';
import Footer from './Layouts/Footer/Footer';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;