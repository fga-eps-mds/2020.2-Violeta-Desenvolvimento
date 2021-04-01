import '../css/profissionais.css';
import React from 'react';

class Profissionais extends React.Component {
    state = {
        profissionais: [],
        error: '',
    };

    componentDidMount() {
        fetch('http://localhost:8001/questionario/api/contato-violencia/')
            .then((data) => data.json())
            .then((result) => {
                this.setState({ profissionais: result });
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        return (
            <section id="profissionais">
                <div class="container-title-nav">
                    <div class="container-title">
                        <h1 id="title">Profissionais</h1>
                        <p id="description">
                            Sed non enim a sapien interdum vulputate quis at
                            diam. Maecenas quis sem erat. Cras tempor dignissim
                            faucibus. Quisque egestas felis facilisis,
                            scelerisque velit vel, posuere velit. Sed at elit
                            vitae augue viverra lobortis. Etiam eget lectus non
                            nulla sodales.
                        </p>
                    </div>
                    <div class="container-nav">
                        <nav class="nav-profissionais">
                            <ul class="list-nav-profissionais">
                                <li>
                                    <a href="#ongs">
                                        <button id="button-nav-ongs">
                                            Ongs
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#psicologos">
                                        <button id="button-nav">
                                            Psicólogos
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#competentes_orgaos">
                                        <button id="button-nav">
                                            Órgãos Competentes
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#teste">
                                        <button id="button-nav-teste">
                                            Teste
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="container-boxes">
                    {this.state.profissionais.map((profissional) => (
                        <div class="box-contact">
                            <div id="box-contact-logo">
                                <div id="box-contact-text">
                                    <div>
                                        <p
                                            class="box-contact-name"
                                            id="nome_contato"
                                        >
                                            {profissional.nome_contato}
                                        </p>
                                        <p
                                            class="box-contact-description"
                                            id="ds_contato"
                                        >
                                            {profissional.ds_contato}
                                        </p>
                                        <p
                                            class="box-contact-number"
                                            id="numero_contato"
                                        >
                                            {profissional.numero_contato}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="pagination">
                    <a href="#previous">❮ Anterior </a>
                    <a href="#next"> Próximo ❯</a>
                </div>
                <div class="pagination-mobile">
                    <a href="#previous">❮ </a>
                    <a href="#next"> ❯</a>
                </div>
            </section>
        );
    }
}
export default Profissionais;
