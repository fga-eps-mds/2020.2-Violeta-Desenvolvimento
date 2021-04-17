import React from 'react';
import '../css/adm.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/auth';
import ListaDepoimento from './listaDepoimento';
import CadastraProfissional from './cadastraProfissional';

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
        <div id="adm-container">
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
            <div>
                <button class="btn-logout" onClick={(e) => handleClick(e)}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default connect(null, { logout })(Adm2);
