import React, { Component } from 'react';
import logo from './images/iconVioleta.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
