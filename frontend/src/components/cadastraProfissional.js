import React, { Component } from 'react';
// import axios from 'axios';
import '../css/cadastraProfissional.css';

export default class CadastraProfissional extends Component {
    render() {
        return (
            <div class="adm-add-profissional">
                <input placeholder="Nome" class="input-adm" />
                <input placeholder="Número" class="input-adm" />
                <input placeholder="Descrição" class="input-adm" />
                <textarea placeholder="Categoria" class="input-adm" />
                <button type="button" class="btn-add-profissional">
                    Cadastrar
                </button>
            </div>
        );
    }
}
