import React from 'react';
import '../css/depoimento.css';
import { Carousel } from 'react-responsive-carousel';

class Depoimento extends React.Component {
    state = {
        depoimentos: [],
        error: '',
    };

    componentDidMount() {
        fetch('http://localhost:8003/api/external-depoimento/')
            .then((data) => data.json())
            .then((result) => {
                this.setState({ depoimentos: result });
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        return (
            <div id="depoimento-container">
                <h1 id="title-depoimento">Depoimentos</h1>
                <Carousel>
                    {this.state.depoimentos.map((depoimento) => (
                        <div>
                            <p class="ds-depoimento" id="ds_depoimento">
                                {depoimento.ds_depoimento}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default Depoimento;
