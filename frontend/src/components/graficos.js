import React from 'react';
import '../css/graficos.css';
import { Chart } from 'react-google-charts';
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
                <div class="container-test">
                    <div class="container-graficos">
                        <div>
                            <Chart
                                chartType="ColumnChart"
                                data={[
                                    [
                                        'Vitimas',
                                        'Qnt',
                                        { role: 'style' },
                                        { role: 'annotation' },
                                    ],
                                    ['Sexual', 255, '#7CB342', '255'],
                                    ['Psicológica', 55, '#F78A50', '55'],
                                    ['Moral', 14, '#764E7E', '14'],
                                    ['Patrimonial', 177, '#1E90FF', '177'],
                                    ['Física', 99, '#FF6347', '99'],
                                ]}
                                width="750px"
                                height="400px"
                                options={{
                                    title: 'Vítimas de Violências',
                                    backgroundColor: '#FEEFE8',
                                    titleTextStyle: {
                                        color: 'black',
                                        fontSize: 20,
                                        bold: true,
                                    },
                                    fontSize: 18,
                                    fontName: 'Roboto',
                                    legend: { position: 'none' },
                                    annotations: {
                                        alwaysOutside: 'true',
                                        textStyle: {
                                            fontName: 'Roboto',
                                            fontSize: 18,
                                            bold: false,
                                            italic: false,
                                        },
                                    },
                                }}
                            />
                        </div>
                        <div>
                            <Chart
                                chartType="PieChart"
                                data={[
                                    ['Vitimas', 'Quantidade'],
                                    ['Sexual', 255],
                                    ['Psicológica', 55],
                                    ['Moral', 14],
                                    ['Patrimonial', 177],
                                    ['Física', 99],
                                ]}
                                width="650px"
                                height="400px"
                                options={{
                                    title: 'Vítimas de Violências',
                                    backgroundColor: '#FEEFE8',
                                    titleTextStyle: {
                                        color: 'black',
                                        fontSize: 20,
                                        bold: true,
                                    },
                                    fontSize: 18,
                                    fontName: 'Roboto',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Graficos;
