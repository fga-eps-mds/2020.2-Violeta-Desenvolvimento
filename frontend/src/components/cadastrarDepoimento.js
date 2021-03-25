import React from 'react';

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
        fetch('http://localhost:8003/api/external-depoimento/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());

        this.setState({
            ds_depoimento: '',
        });
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <form action="">
                    <label class="label-formulario">
                        Cadastre seu depoimento
                    </label>
                    <br />
                    <input
                        value={this.state.ds_depoimento}
                        name="ds_depoimento"
                        onChange={this.changeHandler}
                        type="text"
                        class="input-formulario"
                    />
                </form>
                <button
                    id="btn-enviar"
                    form="quiz"
                    type="submit"
                    onClick={this.submitForm}
                >
                    Enviar depoimento
                </button>
            </section>
        );
    }
}

export default Questionario;
