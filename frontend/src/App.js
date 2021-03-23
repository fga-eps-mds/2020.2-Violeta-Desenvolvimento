import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Questionario from './components/questionario';
import Footer from './components/footer';
import Profissionais from './components/profissionais';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Questionario />
                <Profissionais />
                <Footer />
            </div>
        );
    }
}
export default App;
