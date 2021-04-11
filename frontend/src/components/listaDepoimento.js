import React from 'react';

import axios from 'axios';

import '../css/listaDepoimento.css';

export default class ListaDepoimento extends React.Component {
    state = {
        depoimentos: [],
    };

    componentDidMount() {
        axios
            .get('http://localhost:8003/depoimentos/api/depoimento/')
            .then((res) => {
                const depoimentos = res.data;
                const depsN = [];
                for (let i = 0; i < depoimentos.length; i += 1) {
                    if (depoimentos[i].aprovado === false) {
                        depsN.push(depoimentos[i]);
                    }
                }
                this.setState({ depoimentos: depsN });
            });
    }

    async handleClick(e) {
        e.preventDefault();
        if (this.state.depoimentos.length !== 0) {
            this.state.depoimentos[0].aprovado = true;
            const dep = this.state.depoimentos[0];
            const ind = dep.id_depoimento;
            const lnk = `http://localhost:8003/depoimentos/api/depoimento/${ind}/`;
            await axios.put(lnk, dep);
        } else {
            alert('Não há depoimentos para aprovar!');
        }
        window.location.reload();
    }

    render() {
        return (
            <div>
                {this.state.depoimentos.map((depoimento) => (
                    <ul>
                        <li class="linha-depoimento">
                            <label>
                                {depoimento.ds_depoimento}
                                <input type="checkbox"></input>
                            </label>
                        </li>
                    </ul>
                ))}
                <button
                    type="button"
                    class="btn-login"
                    onClick={(e) => this.handleClick(e)}
                >
                    Aprovar
                </button>
            </div>
        );
    }
}
