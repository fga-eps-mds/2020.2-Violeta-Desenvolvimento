import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //   Link
} from 'react-router-dom';

import './App.css';
import Adm from './components/adm';
// import Header from './components/header';
// import Home from './components/home';
// import Questionario from './components/questionario';
// import Depoimento from './components/depoimento';
// import Footer from './components/footer';
import AllComponentes from './components/AllComponentes';
import Login from './components/login';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login/adm">
                        <Adm />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <AllComponentes />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default App;
