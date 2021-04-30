import React from 'react';
import axios from 'axios';
import '../css/depoimento.css';
import { Carousel } from 'react-responsive-carousel';
import CadastrarDepoimento from './cadastrarDepoimento';
import { urlGenerator } from './urls';

const url = urlGenerator('depoimentos', 'external-depoimento/');

class Depoimento extends React.Component {
    constructor() {
        super();
        this.state = {
            ds_depoimento: '',
            depoimentos: [],
            error: '',
        };
    }

    // Get Depoimentos
    componentDidMount() {
        axios.get(url).then((res) => {
            const deps = res.data;
            this.setState({ depoimentos: deps });
        });
    }

    render() {
        return (
            <section id="depoimentos">
                <div class="depoimento">
                    <div id="depoimento-container">
                        <h1 id="title-depoimento">Depoimentos</h1>
                        <Carousel>
                            {this.state.depoimentos.map((depoimento) => (
                                <div>
                                    <p class="ds-depoimento" id="ds_depoimento">
                                        {depoimento.ds_depoimento}
                                    </p>
                                </div>
                            ))}
                        </Carousel>
                        <CadastrarDepoimento />
                    </div>
                </div>
            </section>
        );
    }
}

export default Depoimento;
