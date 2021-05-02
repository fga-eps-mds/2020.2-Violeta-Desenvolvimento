import '../css/profissionaisQuiz.css';
import React from 'react';

class ContatosQuiz extends React.Component {
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
            <div class="quiz-container-boxes">
                {this.state.profissionais.slice(0, 1).map((profissional) => (
                    <div class="quiz-box-contact">
                        <div id="quiz-box-contact-logo">
                            <div id="quiz-box-contact-text">
                                <div>
                                    <p
                                        class="quiz-box-contact-name"
                                        id="nome_contato"
                                    >
                                        {profissional.nome_contato}
                                    </p>
                                    <p
                                        class="quiz-box-contact-description"
                                        id="quiz-ds_contato"
                                    >
                                        {profissional.ds_contato}
                                    </p>
                                    <p
                                        class="quiz-box-contact-number"
                                        id="quiz-numero_contato"
                                    >
                                        {profissional.numero_contato}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default ContatosQuiz;
