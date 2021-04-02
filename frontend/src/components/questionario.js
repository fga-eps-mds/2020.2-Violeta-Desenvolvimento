import React from 'react';
import '../css/questionario.css';
import womanFigura from '../images/woman.png';

class Questionario extends React.Component {
    constructor() {
        super();
        this.state = {
            arvore_decisao: '',
            categoria_violencia: '',
            contact: '',
            address: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // Submit Form
    submitForm(event) {
        let url;
        let port = '';
        if (process.env.REACT_APP_ENV === 'development') {
            url = process.env.REACT_APP_URL_DEVELOP;
            port = process.env.REACT_APP_QUESTIONARIO_PORT;
        } else {
            url = process.env.REACT_APP_URL_PRODUCTION;
        }
        fetch(`${url}${port}/questionario/api/questionario/`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
        // .then((data) => console.log(data));

        this.setState({
            arvore_decisao: '',
            categoria_violencia: '',
            contact: '',
            address: '',
        });
        event.preventDefault();
    }

    render() {
        return (
            <section id="questionario">
                <div id="titulo">
                    <h1>Questionário</h1>
                </div>
                <div id="container-questionario">
                    <div id="formulario">
                        <p>
                            Sofreu violência física? Seja de modo que ofenda sua
                            integridade ou saúde corporal.
                        </p>
                        <form id="quiz" method="post">
                            <label class="label-formulario">Questão 1:</label>
                            <br />
                            <input
                                value={this.state.arvore_decisao}
                                name="arvore_decisao"
                                onChange={this.changeHandler}
                                type="text"
                                class="input-formulario"
                            />
                            <br />
                            <label class="label-formulario">Questão 2:</label>
                            <br />
                            <input
                                value={this.state.categoria_violencia}
                                name="categoria_violencia"
                                onChange={this.changeHandler}
                                type="text"
                                class="input-formulario"
                            />
                            <br />
                            <label class="label-formulario">Questão 3:</label>
                            <br />
                            <input
                                type="text"
                                id="fname"
                                class="input-formulario"
                                name="fname"
                            />
                            <br />
                        </form>
                    </div>
                    <div id="foto">
                        <img id="img-formulario" src={womanFigura} />
                    </div>
                </div>
                <div id="btn-formulario">
                    <button
                        id="btn-enviar"
                        form="quiz"
                        type="submit"
                        onClick={this.submitForm}
                    >
                        Enviar
                    </button>
                </div>
            </section>
        );
    }
}

export default Questionario;
