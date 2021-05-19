import React from 'react';
import axios from 'axios';
import '../css/profissionais.css';
import { Carousel } from 'react-responsive-carousel';
import { urlGenerator } from './urls';

const url = urlGenerator('questionario', 'contato-violencia/');

class Profissionais extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profissionais: [],
            arrayProfs: [],
            error: '',
            categoria: null,
            currentSlide: 0,
            filteredProfs: [],
            qtdeItemSlide: 6,
            w: 0,
        };
    }

    createarrayProfs = () => {
        this.state.arrayProfs = [];
        this.defineWidth();

        for (
            let i = 0;
            i <
                this.state.filteredProfs.length -
                    this.state.currentSlide * this.state.qtdeItemSlide &&
            i < this.state.qtdeItemSlide;
            i += 1
        ) {
            this.state.arrayProfs[i] =
                this.state.filteredProfs[
                    this.state.currentSlide * this.state.qtdeItemSlide + i
                ];
        }

        this.setState({
            arrayProfs: this.state.arrayProfs,
        });
    };

    defineWidth() {
        this.state.w = window.innerWidth;

        if (this.state.w <= 800) {
            this.state.qtdeItemSlide = 2;
        } else {
            this.state.qtdeItemSlide = 6;
        }
    }

    next = () => {
        this.state.currentSlide += 1;
        this.createarrayProfs();
    };

    prev = () => {
        this.state.currentSlide -= 1;
        this.createarrayProfs();
    };

    updateCurrentSlide = (index) => {
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    filtercategoria(nameButton) {
        const arrayBase = this.state.profissionais;
        this.state.categoria = nameButton;
        this.state.filteredProfs = [];

        for (let i = 0; i < arrayBase.length; i += 1) {
            if (
                arrayBase[i].categoria_fk === this.state.categoria ||
                this.state.categoria === null
            ) {
                this.state.filteredProfs.push(arrayBase[i]);
            }
        }

        this.state.currentSlide = 0;

        this.createarrayProfs();
    }

    componentDidMount() {
        axios
            .get(url)
            .then((result) => {
                const profs = result.data;
                this.setState({ profissionais: profs });
                this.setState({ filteredProfs: profs });
                this.createarrayProfs();
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        return (
            <section class="profissionais" id="profissionais">
                <h1 id="profissionais-title">Profissionais</h1>
                <div class="profissionais-container-title-nav">
                    <div class="profissionais-container-title">
                        <p class="profissionais-description">
                            Lembre-se! Você não está sozinha. Criamos esse
                            ambiente para que possamos te ajudar.
                        </p>
                        <p class="profissionais-description">
                            Aqui você pode encontrar contatos de profissionais e
                            órgãos competentes que podem lhe ajudar.
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
                                                this.filtercategoria(1)
                                            }
                                        >
                                            Ongs
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#profissionais">
                                        <button
                                            class="profissionais-btn-nav"
                                            id="button-nav-psicologo"
                                            onClick={() =>
                                                this.filtercategoria(2)
                                            }
                                        >
                                            Psicólogos
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#profissionais">
                                        <button
                                            class="profissionais-btn-nav"
                                            id="button-nav-orgaos"
                                            onClick={() =>
                                                this.filtercategoria(3)
                                            }
                                        >
                                            Órgãos
                                            <br />
                                            Competentes
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#profissionais">
                                        <button
                                            class="profissionais-btn-nav"
                                            id="button-nav-todos"
                                            onClick={() =>
                                                this.filtercategoria(null)
                                            }
                                        >
                                            Todos
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="carousel-container">
                    {this.state.arrayProfs.length > 0 ? (
                        <Carousel
                            onChange={this.updateCurrentSlide}
                            selectedItem={this.state.currentSlide}
                            infiniteLoop={false}
                            showArrows={false}
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            emulateTouch={false}
                            autoPlay={false}
                            swipeable={false}
                        >
                            <div id="container-profissionais">
                                {this.state.arrayProfs.map((profissional) => (
                                    <div
                                        class="box-contact"
                                        key={profissional.id_contato}
                                    >
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
                                            <strong>Descrição:</strong>{' '}
                                            {profissional.ds_contato}
                                        </p>
                                        <p
                                            class="box-contact-number"
                                            id="numero_contato"
                                        >
                                            <strong>Contato:</strong>{' '}
                                            {profissional.numero_contato}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Carousel>
                    ) : (
                        <p>
                            Nenhum contato encontrado <strong>:)</strong>
                        </p>
                    )}
                    <div class="pagination">
                        <button
                            onClick={this.prev}
                            class="profissionais-prev"
                            disabled={
                                this.state.currentSlide === 0 ? 'true' : ''
                            }
                        >
                            ❮ Anterior
                        </button>
                        <button
                            onClick={this.next}
                            class="profissionais-next"
                            disabled={
                                this.state.currentSlide >=
                                parseInt(
                                    (this.state.filteredProfs.length - 1) /
                                        this.state.qtdeItemSlide,
                                    10
                                )
                                    ? 'true'
                                    : ''
                            }
                        >
                            Próximo ❯
                        </button>
                    </div>
                    <div class="pagination-mobile">
                        <button
                            onClick={this.prev}
                            class="profissionais-prev"
                            disabled={
                                this.state.currentSlide === 0 ? 'true' : ''
                            }
                        >
                            {' '}
                            ❮
                        </button>
                        <button
                            onClick={this.next}
                            class="profissionais-next"
                            disabled={
                                this.state.currentSlide >=
                                parseInt(
                                    (this.state.filteredProfs.length - 1) /
                                        this.state.qtdeItemSlide,
                                    10
                                )
                                    ? 'true'
                                    : ''
                            }
                        >
                            {' '}
                            ❯
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
export default Profissionais;
