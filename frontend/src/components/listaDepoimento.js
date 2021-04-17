import React from 'react';
import axios from 'axios';
import '../css/listaDepoimento.css';
import { urlGenerator } from './urls';

const url = urlGenerator('depoimentos', 'depoimento');

export default class ListaDepoimento extends React.Component {
    state = {
        depoimentos: [],
    };

    componentDidMount() {
        axios.get(url).then((res) => {
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
        let depoimento;
        let lnk;
        if (this.state.depoimentos.length !== 0) {
            for (let i = 0; i < this.state.depoimentos.length; i += 1) {
                depoimento = this.state.depoimentos[i];
                if (depoimento.aprovado === true) {
                    lnk = `${url}/${depoimento.id_depoimento}/`;
                    await axios.put(lnk, depoimento);
                }
            }
            window.location.reload();
        } else {
            alert('Não há depoimentos para aprovar!');
        }
    }

    handleChange(e) {
        let depoimento;
        for (let i = 0; i < this.state.depoimentos.length; i += 1) {
            depoimento = this.state.depoimentos[i];
            if (String(depoimento.id_depoimento) === e.target.name) {
                const newDeps = [...this.state.depoimentos];
                newDeps[i].aprovado = !newDeps[i].aprovado;
                this.setState({ depoimentos: newDeps });
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.depoimentos.map((depoimento) => (
                    <ul>
                        <li class="linha-depoimento">
                            <label>
                                {depoimento.ds_depoimento}
                                <input
                                    type="checkbox"
                                    name={depoimento.id_depoimento}
                                    onChange={(e) => this.handleChange(e)}
                                ></input>
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
