import React from 'react';
import '../css/adm.css';

class Adm extends React.Component {
    constructor() {
        super();
        this.state = {
            admDsdepoimento: '',
            admDepoimentos: [],
            admError: '',
        };
    }

    // Get Depoimentos
    componentDidMount() {
        fetch('http://localhost:8003/depoimentos/api/depoimento')
            .then((admData) => admData.json())
            .then((admResult) => {
                this.setState({ admDepoimentos: admResult });
            })
            .catch((admError) => this.setState({ admError }));
    }

    render() {
        return (
            <div id="adm-container">
                <div class="adm-cadastro">
                    <h1>Cadastro de Profissional</h1>
                    <input placeholder="Nome" class="input-adm" />
                    <input placeholder="Contato" class="input-adm" />
                    <input placeholder="Área de atuação" class="input-adm" />
                    <textarea placeholder="Descrição" class="input-adm" />
                    <button type="button" class="btn-login">
                        Cadastrar
                    </button>
                </div>
                <div class="adm-depoimento">
                    <h1>Aprovação de Depoimento</h1>
                    <div id="container-depoimento">
                        <input type="checkbox" class="box-depoimento" />
                        <div class="container-p-depoimento">
                            <p class="p-depoimento">depoimento</p>
                        </div>
                        <input type="checkbox" class="box-depoimento" />
                        <div class="container-p-depoimento">
                            <p class="p-depoimento">depoimento</p>
                        </div>
                        <button type="button" class="btn-login">
                            Aprovar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Adm;
