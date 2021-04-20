import React from 'react';
import '../css/cadastrarDepoimento.css';
import womanTexting from '../images/womanTexting.svg';
import { urlGenerator } from './urls';

const url = urlGenerator('depoimentos', 'external-depoimento');

class CadastrarDepoimento extends React.Component {
    constructor() {
        super();
        this.state = {
            ds_depoimento: '',
            depoimento_modal_style: { display: 'none' },
            depoimento_modal_confirm_style: { display: 'none' },
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handlerOnClickRequest = this.handlerOnClickRequest.bind(this);
    }

    // Input Change Handler
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // Submit Form
    submitForm(event) {
        this.setState({ depoimento_modal_confirm_style: { display: 'block' } });
        this.setState({ depoimento_modal_style: { display: 'none' } });
        fetch(`${url}/`, {
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

    handlerOnClickRequest() {
        this.setState({ depoimento_modal_style: { display: 'block' } });
    }

    render() {
        return (
            <div>
                <button
                    id="depoimento-enviar"
                    onClick={this.handlerOnClickRequest}
                >
                    Cadastrar Depoimento
                </button>
                <div
                    id="depoimento-modal-request"
                    style={this.state.depoimento_modal_style}
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
                        <button
                            id="depoimento-btn-voltar"
                            onClick={() => window.location.reload(false)}
                        >
                            Voltar
                        </button>
                    </div>
                </div>

                <div
                    id="depoimento-modal-confirm"
                    style={this.state.depoimento_modal_confirm_style}
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
                        <button
                            id="depoimento-confirm-close"
                            style={this.state.depoimento_modal_confirm_style}
                            onClick={() => window.location.reload(false)}
                        >
                            Voltar para depoimentos
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastrarDepoimento;
