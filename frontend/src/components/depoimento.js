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
    }

    // Get Depoimentos
    componentDidMount() {
        let url;
        let port = '';
        if (process.env.REACT_APP_ENV === 'development') {
            url = process.env.REACT_APP_URL_DEVELOP;
            port = process.env.REACT_APP_DEPOIMENTOS_PORT;
        } else {
            url = process.env.REACT_APP_URL_PRODUCTION;
            if(process.env.REACT_APP_ENV === 'deploy'){
                url = `${url}${port}/depoimentos-dev/api/external-depoimento/`
	    } else {
                url = `${url}${port}/depoimentos/api/external-depoimento/`
            }
        }
        fetch(url)
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
                </div>
            </div>
        );
    }
}

export default Depoimento;
