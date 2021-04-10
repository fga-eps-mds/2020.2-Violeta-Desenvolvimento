import React from 'react';

import axios from 'axios';

export default class ListaDepoimento extends React.Component {
    state = {
        depoimentos: [],
    };

    componentDidMount() {
        axios
            .get('http://localhost:8003/depoimentos/api/depoimento/')
            .then((res) => {
                const depoimentos = res.data;
                this.setState({ depoimentos });
            });
    }

    async handleClick(e) {
        e.preventDefault();
        this.state.depoimentos[0].aprovado = true;
        const dep = this.state.depoimentos[0];
        const ind = dep.id_depoimento;
        const lnk = `http://localhost:8003/depoimentos/api/depoimento/${ind}/`;
        await axios.put(lnk, dep);
        window.location.reload();
    }

    render() {
        return (
            <div>
                {this.state.depoimentos.map((depoimento) => (
                    <ul>
                        <li>
                            {depoimento.aprovado === true ? (
                                <label>
                                    {`${depoimento.ds_depoimento} (Aprovado)`}
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.checkValor(e)}
                                    ></input>
                                </label>
                            ) : (
                                <label>
                                    {depoimento.ds_depoimento}
                                    <input type="checkbox"></input>
                                </label>
                            )}
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
