import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Questionario from './components/questionario';
import Depoimento from './components/depoimento';
import Footer from './components/footer';
import CadastrarDepoimento from './components/cadastrarDepoimento';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Questionario />
                <Depoimento />
                <Footer />
                <CadastrarDepoimento />
            </div>
        );
    }
}
export default App;
