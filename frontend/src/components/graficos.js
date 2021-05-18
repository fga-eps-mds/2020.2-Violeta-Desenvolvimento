import React from 'react';
import axios from 'axios';
import '../css/graficos.css';
import { Chart } from 'react-google-charts';
import { urlGenerator } from './urls';

const url = urlGenerator('questionario', 'vitimas-categoria/');

class Graficos extends React.Component {
    constructor() {
        super();
        this.state = {
            chartData: [],
            chartPie: [],
            victims: [],
            error: '',
        };
    }

    componentDidMount() {
        const geral = [];
        axios
            .get(url)
            .then((data) => data.data)
            .then((result) => {
                this.setState({ victims: result });
            })
            .then(() => {
                const nome = [];
                const vitimasValue = 'Vitimas';
                nome.push(vitimasValue);
                for (
                    let index = 0;
                    index < this.state.victims.length;
                    index += 1
                ) {
                    const ds = this.state.victims[index].ds_categoria;
                    nome.push(ds);
                }
                geral.push(nome);
                console.log(geral);
            })
            .then(() => {
                const valor = [];
                const inicalValue = null;
                valor.push(inicalValue);
                for (let i = 0; i < this.state.victims.length; i += 1) {
                    const couterVl = this.state.victims[i].categoria_counter;
                    valor.push(couterVl);
                }
                geral.push(valor);
            })
            .then(() => {
                this.setState({ chartData: geral });
                console.log(this.state.chartData);
            })
            .then(() => {
                const pie = [];
                pie.push(['Vítimas', 'Quantidade']);
                for (let j = 0; j < this.state.victims.length; j += 1) {
                    pie.push([
                        this.state.victims[j].ds_categoria,
                        this.state.victims[j].categoria_counter,
                    ]);
                }
                this.setState({ chartPie: pie });
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
                <div id="graphs">
                    <div id="columnGraph">
                        <Chart
                            chartType="ColumnChart"
                            data={this.state.chartData}
                            width={'25rem'}
                            height={'25rem'}
                            legendToggle
                            options={{
                                title: 'Vítimas de Violências',
                                backgroundColor: '#FEEFE8',
                                titleTextStyle: {
                                    color: 'black',
                                    fontSize: 20,
                                    bold: false,
                                },
                                fontSize: 16,
                                fontName: 'Roboto',
                                legend: { position: 'bottom' },
                            }}
                        />
                    </div>
                    <div id="pieGraph">
                        <Chart
                            width={'25rem'}
                            height={'25rem'}
                            chartType="PieChart"
                            data={this.state.chartPie}
                            legendToggle
                            options={{
                                title: 'Vítimas de Violências',
                                backgroundColor: '#FEEFE8',
                                titleTextStyle: {
                                    color: 'black',
                                    fontSize: 20,
                                    bold: false,
                                },
                                fontSize: 16,
                                fontName: 'Roboto',
                                legend: { position: 'bottom' },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                </div>
            </section>
        );
    }
}
export default Graficos;
