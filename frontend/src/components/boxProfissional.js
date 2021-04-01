import React from 'react';

class BoxProfissional extends React.Component {
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
            <div>
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
        );
    }
}

export default BoxProfissional;

// const BoxProfissional = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default BoxProfissional
