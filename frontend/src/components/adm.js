import React from 'react';
import '../css/adm.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/auth';
import ListaDepoimento from './listaDepoimento';
import CadastraProfissional from './cadastraProfissional';
import CadastrarFrases from './cadastrarFrases';

const Adm2 = ({ logout }) => {
    const history = useHistory();

    if (localStorage.getItem('access') === null) {
        history.push('/login');
    }

    async function handleClick(e) {
        e.preventDefault();
        await logout();
        if (localStorage.getItem('access') === null) {
            history.push('/login');
        }
    }

    return (
        <div>
            <div id="adm-container" class="adm-container">
                <div class="adm-cadastro">
                    <h1>Cadastro de Profissional</h1>
                    {<CadastraProfissional />}
                </div>
                <div class="adm-depoimento">
                    <h1>Aprovação de Depoimento</h1>
                    <div id="container-depoimento">
                        <div class="container-p-depoimento">
                            {<ListaDepoimento />}
                        </div>
                    </div>
                </div>
                <div id="adm-frase">
                    <h1>Cadastro de Frases</h1>
                    {<CadastrarFrases />}
                </div>
            </div>
            <button class="btn-logout" onClick={(e) => handleClick(e)}>
                Logout
            </button>
        </div>
    );
};

export default connect(null, { logout })(Adm2);
