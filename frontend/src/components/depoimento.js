import React from 'react';
import '../css/depoimento.css';
import { Carousel } from 'react-responsive-carousel';
import CadastrarDepoimento from './cadastrarDepoimento';
import { urlGenerator } from './urls';

const url = urlGenerator('depoimentos', 'external-depoimento');

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
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Origin: '',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Accept',
            },
        })
            .then((data) => data.json())
            .then((result) => {
                this.setState({ depoimentos: result });
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        return (
            <div class="depoimento" id="depoimentos">
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
        );
    }
}

export default Depoimento;
