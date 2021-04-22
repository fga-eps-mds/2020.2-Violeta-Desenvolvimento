import React from 'react';
import '../css/graficos.css';
import { Chart } from 'react-google-charts';
import { urlGenerator } from './urls';

const url = urlGenerator('questionario', 'vitimas-categoria');

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
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Origin: '',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Accept',
            },
        })
            .then((data) => data.json())
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
                    <Chart
                        chartType="ColumnChart"
                        data={this.state.chartData}
                        width="600px"
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
                            legend: { position: 'bottom' },
                        }}
                    />

                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        data={this.state.chartPie}
                        options={{
                            title: 'Vítimas de Violências',
                            backgroundColor: '#FEEFE8',
                            titleTextStyle: {
                                color: 'black',
                                fontSize: 20,
                                bold: true,
                            },
                            fontName: 'Roboto',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            </section>
        );
    }
}
export default Graficos;
