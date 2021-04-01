import React from 'react';
import '../css/adm.css';

const Adm = () => (
    <div id="adm-container">
        <div class="adm-cadastro">
            <h1>Cadastro de Profissional</h1>
            <input placeholder="Nome" class="input-adm" />
            <input placeholder="Contato" class="input-adm" />
            <input placeholder="Área de atuação" class="input-adm" />
            <textarea placeholder="Descrição" class="input-adm" />
            <button type="button" class="btn-login">
                Cadastrar
            </button>
        </div>
        <div class="adm-depoimento">
            <h1>Aprovação de Depoimento</h1>
        </div>
    </div>
);

export default Adm;
