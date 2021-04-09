import '../css/profissionais.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Profissionais extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profissionais: [],
            error: '',
            categoria: null,
        };

        this.filtercategoria = this.filtercategoria.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8001/questionario/api/contato-violencia/')
            .then((data) => data.json())
            .then((result) => {
                this.setState({ profissionais: result });
            })
            .catch((error) => this.setState({ error }));
    }

    filtercategoria(nameButton) {
        console.log(nameButton);
        this.setState({
            categoria: nameButton,
        });
    }

    render() {
        return (
            <section class="profissionais">
                <div class="profissionais-container-title-nav">
                    <div class="profissionais-container-title">
                        <h1 id="profissionais-title">Profissionais</h1>
                        <p id="profissionais-description">
                            Sed non enim a sapien interdum vulputate quis at
                            diam. Maecenas quis sem erat. Cras tempor dignissim
                            faucibus. Quisque egestas felis facilisis,
                            scelerisque velit vel, posuere velit. Sed at elit
                            vitae augue viverra lobortis. Etiam eget lectus non
                            nulla sodales.
                        </p>
                    </div>
                    <div class="profissionais-container-nav">
                        <nav class="nav-profissionais">
                            <ul class="list-nav-profissionais">
                                <li>
                                    <a href="#ongs">
                                        <button
                                            id="button-nav-ongs"
                                            onClick={() =>
                                                this.filtercategoria('ongs')
                                            }
                                        >
                                            Ongs
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#psicologos">
                                        <button
                                            id="button-nav"
                                            onClick={() =>
                                                this.filtercategoria(
                                                    'psicólogos'
                                                )
                                            }
                                        >
                                            Psicólogos
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#competentes_orgaos">
                                        <button
                                            id="button-nav"
                                            onClick={() =>
                                                this.filtercategoria('órgãos')
                                            }
                                        >
                                            Órgãos Competentes
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#teste">
                                        <button
                                            id="button-nav-teste"
                                            onClick={() =>
                                                this.filtercategoria('teste')
                                            }
                                        >
                                            Teste
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="carousel-container">
                    <Carousel infiniteLoop="true">
                        {this.state.profissionais.map((profissional) => {
                            if (
                                profissional.categoria.toLowerCase() ===
                                    this.state.categoria ||
                                this.state.categoria === null
                            ) {
                                return (
                                    <div class="box-contact-container">
                                        <div class="box-contact" id="1">
                                            <p
                                                class="box-contact-name"
                                                id="nome_contato"
                                            >
                                                <strong>Nome:</strong>{' '}
                                                {profissional.nome_contato + 0}
                                            </p>
                                            <p
                                                class="box-contact-description"
                                                id="ds_contato"
                                            >
                                                <strong>Descrição</strong>:{' '}
                                                {profissional.ds_contato + 0}
                                            </p>
                                            <p
                                                class="box-contact-number"
                                                id="numero_contato"
                                            >
                                                <strong>Contato:</strong>{' '}
                                                {profissional.numero_contato +
                                                    0}
                                            </p>
                                        </div>
                                        <div class="box-contact" id="2">
                                            <p
                                                class="box-contact-name"
                                                id="nome_contato"
                                            >
                                                <strong>Nome:</strong>{' '}
                                                {profissional.nome_contato + 1}
                                            </p>
                                            <p
                                                class="box-contact-description"
                                                id="ds_contato"
                                            >
                                                <strong>Descrição</strong>:{' '}
                                                {profissional.ds_contato + 1}
                                            </p>
                                            <p
                                                class="box-contact-number"
                                                id="numero_contato"
                                            >
                                                <strong>Contato:</strong>{' '}
                                                {profissional.numero_contato +
                                                    1}
                                            </p>
                                        </div>
                                        <div class="box-contact" id="3">
                                            <p
                                                class="box-contact-name"
                                                id="nome_contato"
                                            >
                                                <strong>Nome:</strong>{' '}
                                                {profissional.nome_contato + 2}
                                            </p>
                                            <p
                                                class="box-contact-description"
                                                id="ds_contato"
                                            >
                                                <strong>Descrição</strong>:{' '}
                                                {profissional.ds_contato + 2}
                                            </p>
                                            <p
                                                class="box-contact-number"
                                                id="numero_contato"
                                            >
                                                <strong>Contato:</strong>{' '}
                                                {profissional.numero_contato +
                                                    2}
                                            </p>
                                        </div>
                                        <div class="box-contact" id="4">
                                            <p
                                                class="box-contact-name"
                                                id="nome_contato"
                                            >
                                                <strong>Nome:</strong>{' '}
                                                {profissional.nome_contato + 3}
                                            </p>
                                            <p
                                                class="box-contact-description"
                                                id="ds_contato"
                                            >
                                                <strong>Descrição</strong>:{' '}
                                                {profissional.ds_contato + 3}
                                            </p>
                                            <p
                                                class="box-contact-number"
                                                id="numero_contato"
                                            >
                                                <strong>Contato:</strong>{' '}
                                                {profissional.numero_contato +
                                                    3}
                                            </p>
                                        </div>
                                        <div class="box-contact" id="5">
                                            <p
                                                class="box-contact-name"
                                                id="nome_contato"
                                            >
                                                <strong>Nome:</strong>{' '}
                                                {profissional.nome_contato + 4}
                                            </p>
                                            <p
                                                class="box-contact-description"
                                                id="ds_contato"
                                            >
                                                <strong>Descrição</strong>:{' '}
                                                {profissional.ds_contato + 4}
                                            </p>
                                            <p
                                                class="box-contact-number"
                                                id="numero_contato"
                                            >
                                                <strong>Contato:</strong>{' '}
                                                {profissional.numero_contato +
                                                    4}
                                            </p>
                                        </div>
                                        <div class="box-contact" id="6">
                                            <p
                                                class="box-contact-name"
                                                id="nome_contato"
                                            >
                                                <strong>Nome:</strong>{' '}
                                                {profissional.nome_contato + 5}
                                            </p>
                                            <p
                                                class="box-contact-description"
                                                id="ds_contato"
                                            >
                                                <strong>Descrição</strong>:{' '}
                                                {profissional.ds_contato + 5}
                                            </p>
                                            <p
                                                class="box-contact-number"
                                                id="numero_contato"
                                            >
                                                <strong>Contato:</strong>{' '}
                                                {profissional.numero_contato +
                                                    5}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </Carousel>
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
