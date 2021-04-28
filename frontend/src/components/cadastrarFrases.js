import React, { useState } from 'react';
import axios from 'axios';
import '../css/cadastrarFrases.css';
import { urlGenerator } from './urls';

const url = urlGenerator('frases', 'frases-motivacionais/');
const CadastrarFrases = () => {
    const initialValue = {
        ds_frase: '',
    };
    const [values, setValues] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    async function onSubmit(ev) {
        ev.preventDefault();

        await axios.post(url, values);
        window.location.reload();
    }

    return (
        <form onSubmit={onSubmit}>
            <div class="frases">
                <label htmlFor="ds_frase">Frase</label>
                <textarea
                    class="input-adm"
                    id="ds_frase"
                    name="ds_frase"
                    type="text"
                    required
                    onChange={onChange}
                ></textarea>
            </div>
            <button type="submit" class="btn-add-frases">
                Cadastrar
                {console.log(values)}
            </button>
        </form>
    );
};

export default CadastrarFrases;
