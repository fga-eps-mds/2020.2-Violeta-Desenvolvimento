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
            filteredProfissionais: [],
            qtdeItemSlide: 6,
        };
    }

    createArrayProfissionais = () => {
        console.log('Log: createArrayProfissionais');
        this.state.arrayProfissionais = [];

        for (
            let i = 0;
            i <
                this.state.filteredProfissionais.length -
                    this.state.currentSlide * this.state.qtdeItemSlide &&
            i < this.state.qtdeItemSlide;
            i += 1
        ) {
            this.state.arrayProfissionais[i] = this.state.filteredProfissionais[
                this.state.currentSlide * this.state.qtdeItemSlide + i
            ];
        }

        this.setState({
            arrayProfissionais: this.state.arrayProfissionais,
        });
    };

    next = () => {
        console.log('Log: next');
        this.state.currentSlide += 1;
        this.createArrayProfissionais();
    };

    prev = () => {
        console.log('Log: prev');
        this.state.currentSlide -= 1;
        this.createArrayProfissionais();
    };

    updateCurrentSlide = (index) => {
        console.log('Log: updateCurrentSlide');
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    filtercategoria(nameButton) {
        console.log('Log: filtercategoria');

        const arrayBase = this.state.profissionais;
        this.state.categoria = nameButton;
        this.state.filteredProfissionais = [];

        console.log(this.state.categoria);

        for (let i = 0; i < arrayBase.length; i += 1) {
            if (
                arrayBase[i].categoria.toLowerCase() === this.state.categoria ||
                this.state.categoria === null
            ) {
                this.state.filteredProfissionais.push(arrayBase[i]);
            }
        }

        this.state.currentSlide = 0;

        this.createArrayProfissionais();
    }

    componentDidMount() {
        fetch('http://localhost:8001/questionario/api/contato-violencia/')
            .then((data) => data.json())
            .then((result) => {
                this.setState({ profissionais: result });
                this.setState({ filteredProfissionais: result });
                this.createArrayProfissionais();
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
                                                    'psicologo'
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
                                                this.filtercategoria('orgao')
                                            }
                                        >
                                            Órgãos
                                            <br />
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
                    {console.log('Log: gerando...')}
                    {console.log(this.state.arrayProfissionais.length)}
                    {this.state.arrayProfissionais.length > 0 ? (
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
                                {console.log('Executando..')}
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
                                            <p
                                                class="box-contact-catogory"
                                                id="numero_contato"
                                            >
                                                <strong>Categoria:</strong>{' '}
                                                {profissional.categoria}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </Carousel>
                    ) : (
                        <p>Nenhum contato encontrado :)</p>
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
                                    (this.state.filteredProfissionais.length -
                                        1) /
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
                        <a href="#">❮ </a>
                        <a href="#"> ❯</a>
                    </div>
                </div>
            </section>
        );
    }
}
export default Profissionais;
