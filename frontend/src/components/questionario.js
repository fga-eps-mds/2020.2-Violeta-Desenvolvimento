import React from 'react';
import '../css/questionario.css';
import womanFigura from '../images/woman.png';

const Questionario = () => (
    <section id="questionario">
        <div id="titulo">
            <h1>Questionário</h1>
        </div>
        <div id="container">
            <div id="formulario">
                <p>
                    Sofreu violência física? Seja de modo que ofenda sua
                    integridade ou saúde corporal.
                </p>
                <form>
                    <label class="label-formulario" for="">
                        Questão 1:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="fname"
                        class="input-formulario"
                        name="fname"
                    />
                    <br />
                    <label class="label-formulario" for="">
                        Questão 2:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="fname"
                        class="input-formulario"
                        name="fname"
                    />
                    <br />
                    <label class="label-formulario" for="">
                        Questão 3:
                    </label>
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
            <button id="btn-enviar">Enviar</button>
        </div>
    </section>
);

export default Questionario;
