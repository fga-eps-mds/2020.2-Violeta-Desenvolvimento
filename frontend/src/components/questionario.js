import React from "react";
import "../css/questionario.css";
import womanFigura from "../images/woman.png";

const Questionario = () => {
  return (
    <section id="questionario">
      <div id='titulo'>
        <h1>Questionário</h1>
      </div>
      <div id="container">
        <div id="formulario">
          <p>
            Sofreu violência física? Seja de modo que ofenda sua integridade ou
            saúde corporal.
          </p>
          <p>
            Sofreu violência física? Seja de modo que ofenda sua integridade ou
            saúde corporal.
          </p>
          <p>
            Sofreu violência física? Seja de modo que ofenda sua integridade ou
            saúde corporal.
          </p>
        </div>
        <div id="foto">
          <img id="img-formulario" src={womanFigura} />
        </div>
      </div>
      <div id='btn-formulario'>
        <button id="btn-enviar">Enviar</button>
      </div>
    </section>
  );
};

export default Questionario;
