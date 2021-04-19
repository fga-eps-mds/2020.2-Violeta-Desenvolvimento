import React, { useState } from 'react';
import axios from 'axios';
import '../css/cadastraProfissional.css';
import { useHistory } from 'react-router-dom';
import { urlGenerator } from './urls';

const url = urlGenerator('questionario', 'contato-violencia');
const CadastraProfissional = () => {
    const initialValue = {
        nome_contato: '',
        numero_contato: 0,
        ds_contato: '',
        categoria_fk: '',
    };
    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post(`${url}/`, values).then((response) => {
            history.push('/login');
            return response;
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div class="adm-add-profissional">
                <label htmlFor="nome_contato">Nome</label>
                <input
                    class="input-adm"
                    id="nome_contato"
                    name="nome_contato"
                    type="text"
                    required
                    onChange={onChange}
                />
                <label htmlFor="numero_contato">Telefone</label>
                <input
                    class="input-adm"
                    id="numero_contato"
                    name="numero_contato"
                    type="tel"
                    placeholder="(61) 1234-56789"
                    required
                    pattern="[0-9]{2} [0-9]{4}-[0-9]{5}"
                    onChange={onChange}
                />
                <label htmlFor="ds_contato">Descrição</label>
                <input
                    class="input-adm"
                    id="ds_contato"
                    name="ds_contato"
                    type="text"
                    required
                    onChange={onChange}
                />
                <label htmlFor="categoria_fk">Categoria</label>
                <select
                    class="input-adm select-option"
                    id="categoria_fk"
                    name="categoria_fk"
                    onChange={onChange}
                    required
                >
                    <option value="" selected disabled hidden>
                        Selecione Categoria
                    </option>
                    <option value="1">Ongs</option>
                    <option value="2">Psicólogos</option>
                    <option value="3">Órgãos Compotentes</option>
                </select>
                <button type="submit" class="btn-add-profissional">
                    Cadastrar
                    {console.log(values)}
                </button>
            </div>
        </form>
    );
};

export default CadastraProfissional;
