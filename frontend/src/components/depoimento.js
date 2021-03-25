import React from 'react';
import '../css/depoimento.css';
import { Carousel } from 'react-responsive-carousel';
import CadastrarDepoimento from './cadastrarDepoimento';

window.onload = function () {
    const modalRequest = document.getElementById('depoimento-modal-request');
    const modalConfirm = document.getElementById('depoimento-modal-confirm');

    const btnRequest = document.getElementById('depoimento-enviar');
    const btnSend = document.getElementById('depoimento-modal-submit');
    const btnClose = document.getElementById('depoimento-btn-voltar');
    const btnConfirm = document.getElementById('depoimento-confirm-close');

    // When the user clicks the button, open the modal
    btnRequest.onclick = function () {
        modalRequest.style.display = 'block';
    };

    btnSend.onclick = function () {
        modalRequest.style.display = 'none';
        modalConfirm.style.display = 'block';
    };

    btnClose.onclick = function () {
        modalRequest.style.display = 'none';
    };

    btnConfirm.onclick = function () {
        modalConfirm.style.display = 'none';
    };
};

class Depoimento extends React.Component {
    constructor() {
        super();
        this.state = {
            ds_depoimento: '',
            depoimentos: [],
            error: '',
        };
        // this.changeHandler = this.changeHandler.bind(this);
        // this.submitForm = this.submitForm.bind(this);
    }

    // Get Depoimentos
    componentDidMount() {
        fetch('http://localhost:8003/api/external-depoimento/')
            .then((data) => data.json())
            .then((result) => {
                this.setState({ depoimentos: result });
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        return (
            <div>
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
                    {/* <button id="depoimento-enviar">Cadastrar Depoimento</button> */}
                </div>
                {/* <div
                    id="depoimento-modal-request"
                    class="depoimento-modal-request"
                >
                    <div class="depoimento-modal-content">
                        <h1 id="depoimento-modal-title">
                            Cadastre seu depoimento
                        </h1>
                        <div id="depoimento-input-container">
                                                        <textarea
                                id="depoimento-input"
                                value={this.ds_depoimento}
                                placeholder="Digite seu depoimento aqui..."
                            ></textarea>
                            
                        </div>
                        <button
                            id="depoimento-modal-submit"
                            type="submit"
                            form="dsDepoimento"
                            // onClick={this.AddDepoimento}
                        >
                            Cadastrar Depoimento
                        </button>
                        <button id="depoimento-btn-voltar">Voltar</button>
                    </div>
                </div>

                <div
                    id="depoimento-modal-confirm"
                    class="depoimento-modal-confirm"
                >
                    <div class="depoimento-modal-content">
                        <h1 id="depoimento-modal-title">
                            Depoimento cadastrado com suscesso!
                        </h1>
                        <div id="depoimento-confirm-container">
                            <img src={womanTexting} id="womanTexting" />
                            <p id="depoimento-confirm-message">
                                Obrigada pela contribuição! Seu depoimento
                                ajudará muitas mulheres na luta contra violência
                                e nos ajudará a fortelecer essa rede de apoio.
                            </p>
                        </div>
                        <button id="depoimento-confirm-close">
                            Voltar para depoimentos
                        </button>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Depoimento;
