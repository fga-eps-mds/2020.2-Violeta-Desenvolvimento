import React from 'react';
import '../css/visualizarFrases.css';

const FrasesMotivacionais = (props) => (
    <section id="frases-motivacionais">
        <div class="visualizar-frases">
            <p>{props.frase}</p>
        </div>
    </section>
);

export default FrasesMotivacionais;
