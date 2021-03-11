import React from 'react';
import '../css/home.css';

const Home = () => (
    <section id="home">
        <div id="conteudo">
            <h1>Você não está sozinha!</h1>
            <p>
                Em caso de abuso ou agressão, <span>DENUNCIE</span>
                !<br />
                Conheça mais sobre as ONGS, ajuda e suporte, Órgãos Competente e
                contatos de profissionais.
                <br />
                Se você não sabe ou tem dúvidas se passou por uma situação de
                abuso, responda o questionário.
                <br />
            </p>
            <a id="btn-questionario">Responda o Questionário</a>
        </div>
    </section>
);

export default Home;
