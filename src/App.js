import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import Menu from './components/Menu';
import SiteHeader from './components/SiteHeader';
import ContainerFluid from './components/ContainerFluid';
import BarCode from './components/BarCode';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Loader />
      <div class="tm-main-container">
        <div class="tm-top-container">
          <Menu /> 
          <SiteHeader />
        </div>
       <ContainerFluid />
        <div class="tm-bottom-container">
          <BarCode />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
