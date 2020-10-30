import logo from './logo.svg';
import './App.css';
import React from 'react';
import Technologies from './Technologies';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
