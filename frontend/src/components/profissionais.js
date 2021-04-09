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
            currentSlide: 0,
        };

        this.filtercategoria = this.filtercategoria.bind(this);
    }

    next = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide + 1,
        }));
    };

    prev = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide - 1,
        }));
    };

    updateCurrentSlide = (index) => {
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    componentDidMount() {
        fetch('http://localhost:8001/questionario/api/contato-violencia/')
            .then((data) => data.json())
            .then((result) => {
                this.setState({ profissionais: result });
            })
            .catch((error) => this.setState({ error }));
    }

    filtercategoria(nameButton) {
        // console.log(nameButton);
        this.setState({
            categoria: nameButton,
        });
    }

    render() {
        return (
            <section class="profissionais" id="profissionais">
                <h1 id="profissionais-title">Profissionais</h1>
                <div class="profissionais-container-title-nav">
                    <div class="profissionais-container-title">
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
                                    <a href="#profissionais">
                                        <button
                                            class="profissionais-btn-nav"
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
                                    <a href="#">
                                        <button
                                            class="profissionais-btn-nav"
                                            id="button-nav-psicologo"
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
                                    <a href="#">
                                        <button
                                            class="profissionais-btn-nav"
                                            id="button-nav-orgaos"
                                            onClick={() =>
                                                this.filtercategoria('órgãos')
                                            }
                                        >
                                            Órgãos
                                            <br />
                                            Competentes
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <button
                                            class="profissionais-btn-nav"
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
                    <Carousel
                        onChange={this.updateCurrentSlide}
                        selectedItem={this.state.currentSlide}
                        infiniteLoop="true"
                        showArrows="false"
                        showThumbs="false"
                        showStatus="false"
                        showIndicators="false"
                    >
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
                                                {profissional.nome_contato}
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
                    <div class="pagination">
                        <button onClick={this.prev} class="profissionais-prev">
                            ❮ Anterior
                        </button>
                        <button onClick={this.next} class="profissionais-next">
                            Próximo ❯
                        </button>
                    </div>
                    <div class="pagination-mobile">
                        <a href="#">❮ </a>
                        <a href="#"> ❯</a>
                    </div>
                </div>
            </section>
        );
    }
}
export default Profissionais;
