import React, { Component } from 'react';
import axios from 'axios';
import '../css/visualizarFrases.css';
import { urlGenerator } from './urls';

const url = urlGenerator('frases', 'frases-motivacionais/');
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class FrasesMotivacionais extends Component {
    constructor() {
        super();
        this.state = {
            frases: [],
            frase: '',
            error: '',
        };
    }

    popRandomFrase = () => {
        const aleatoria = this.state.frases;

        shuffle(aleatoria);
        this.setState({ frases: aleatoria });
        this.setState({ frase: this.state.frases.pop() });
    };

    componentDidMount() {
        axios.get(url).then((res) => {
            const frase = res.data;
            this.setState({ frases: frase });

            this.popRandomFrase();
            console.log(this.state.frases.length);
        });
    }

    render() {
        return (
            <div class="frases">
                <p>{this.state.frase.ds_frase}</p>
            </div>
        );
    }
}
export default FrasesMotivacionais;
