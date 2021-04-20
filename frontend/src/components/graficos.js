import React from 'react';
import '../css/graficos.css';
import { urlGenerator } from './urls';

const url = urlGenerator('questionario', 'vitimas-categoria');

class Graficos extends React.Component {
    constructor() {
        super();
        this.state = {
            victims: [],
            error: '',
        };
    }

    componentDidMount() {
        fetch(url)
            .then((data) => data.json())
            .then((result) => {
                this.setState({ victims: result });
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        return (
            <section class="graficos" id="graficos">
                <div class="container-violencia">
                    <div class="container-box-violencia">
                        {this.state.victims.map((victim) => (
                            <div class="box-violencia">
                                <p id="counter">{victim.categoria_counter}</p>{' '}
                                <br />
                                <p id="ds-categoria">{victim.ds_categoria}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
export default Graficos;
