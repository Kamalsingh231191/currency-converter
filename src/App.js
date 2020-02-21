import React from 'react';
import './App.css';
import Header from './components/Header'
import Currencies from './components/Currencies';
import Converter from'./components/Converter';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Currencies />
        <Converter />
        <History />
        <Footer />
    </div>
  );
}

export default App;
