import '../css/profissionais.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Profissionais extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profissionais: [],
            arrayProfissionais: [],
            error: '',
            categoria: null,
            currentSlide: 0,
        };

        this.filtercategoria = this.filtercategoria.bind(this);
    }

    createArrayProfissionais = () => {
        this.state.arrayProfissionais = [];
        const arrayBase = this.state.profissionais;
        const filteredProfissionais = [];

        for (let i = 0; i < arrayBase.length; i += 1) {
            if (
                arrayBase[i].categoria.toLowerCase() === this.state.categoria ||
                this.state.categoria === null
            ) {
                filteredProfissionais.push(arrayBase[i]);
                this.state.currentSlide = 1;
            }
        }

        for (let j = 0; j < 6; j += 1) {
            if (
                filteredProfissionais[this.state.currentSlide * 6 - 1 - j] !==
                undefined
            ) {
                this.state.arrayProfissionais[j] =
                    filteredProfissionais[this.state.currentSlide * 6 - 1 - j];
            }
        }
    };

    next = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide + 1,
        }));
        this.createArrayProfissionais();
    };

    prev = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide - 1,
        }));
        this.createArrayProfissionais();
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
        this.createArrayProfissionais();
        this.setState({
            categoria: nameButton,
        });
    }

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
                                    <a href="#profissionais">
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
                                    <a href="#profissionais">
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
                                    <a href="#profissionais">
                                        <button
                                            class="profissionais-btn-nav"
                                            id="button-nav-teste"
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
                    <Carousel
                        onChange={this.updateCurrentSlide}
                        selectedItem={this.state.currentSlide}
                        infiniteLoop={true}
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        emulateTouch={true}
                        autoPlay={false}
                        swipeable={true}
                    >
                        {console.log(this.state.arrayProfissionais)}
                        {console.log(this.state.currentSlide)}
                        {this.state.arrayProfissionais != null ? (
                            <div id="container-profissionais">
                                {this.state.arrayProfissionais.map(
                                    (profissional) => (
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
                                                <strong>Descrição</strong>:{' '}
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
                                    )
                                )}
                            </div>
                        ) : (
                            <p>Nenhum contato encontrado :)</p>
                        )}
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
