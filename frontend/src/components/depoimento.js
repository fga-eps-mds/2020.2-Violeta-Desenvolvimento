import React from 'react';
import '../css/depoimento.css';

class Depoimento extends React.Component {
    state = {
        depoimentos: [],
        error: '',
    };

    componentDidMount() {
        fetch('http://localhost:8003/api/depoimento/')
            .then((data) => data.json())
            .then((result) => {
                this.setState({ depoimentos: result });
                console.log(this.state.result);
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        console.log(this.state.depoimentos);
        return (
            <section>
                <div id="carousel__container">
                    <h1 id="titulo">Depoimentos</h1>
                    <section class="carousel">
                        <ul class="carousel__viewport">
                            {this.state.depoimentos.map((depoimento) =>
                                depoimento.aprovado === true ? (
                                    <li
                                        id="carousel__slide"
                                        tabIndex="0"
                                        class="carousel__slide"
                                    >
                                        <p>{depoimento.ds_depoimento}</p>
                                    </li>
                                ) : null
                            )}
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}
export default Depoimento;
