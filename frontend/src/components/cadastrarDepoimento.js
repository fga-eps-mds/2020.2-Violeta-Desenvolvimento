import React from 'react';
import '../css/cadastrarDepoimento.css';
import womanTexting from '../images/womanTexting.svg';

class CadastrarDepoimento extends React.Component {
    constructor() {
        super();
        this.state = {
            ds_depoimento: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // Submit Form
    submitForm(event) {
        fetch('http://localhost:8003/api/external-depoimento/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());

        this.setState({
            ds_depoimento: '',
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button id="depoimento-enviar">Cadastrar Depoimento</button>
                <div
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
                                onChange={this.changeHandler}
                                value={this.ds_depoimento}
                                name="ds_depoimento"
                                type="text"
                                placeholder="Digite seu depoimento aqui..."
                            ></textarea>
                        </div>
                        <button
                            id="depoimento-modal-submit"
                            type="submit"
                            value="ds_depoimento"
                            form="depoimento-input"
                            onClick={this.submitForm}
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
                </div>
            </div>
        );
    }
}

export default CadastrarDepoimento;
