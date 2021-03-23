import '../css/profissionais.css';
import React from 'react';

const Profissionais = () => (
    <section class="profissionais">
        <div id="container-title">
            <h1 id="title">Profissionais</h1>
            <p id="description">
                Profissionais da área compententes e motivados para ajudar...
            </p>
        </div>
        <nav class="nav-profissionais">
            <ul class="list-nav-profissionais">
                <li>
                    <a href="#ongs">
                        <button id="button-nav-ongs">Ongs</button>
                    </a>
                </li>
                <li>
                    <a href="#psicologos">
                        <button id="button-nav">Psicólogos</button>
                    </a>
                </li>
                <li>
                    <a href="#competentes_orgaos">
                        <button id="button-nav">Órgãos Competentes</button>
                    </a>
                </li>
                <li>
                    <a href="#teste">
                        <button id="button-nav-teste">Teste</button>
                    </a>
                </li>
            </ul>
        </nav>

        <div class="box-contact">
            <div id="box-contact-logo"></div>

            <div id="box-contact-text">
                <p id="box-contact-name">Clínica Sua Clínica</p>
                <p id="box-contact-description">
                    Av. Central Bl. 555 <br />
                    Núcleo Bandeirante - Brasília <br />
                    (61) 7777-8123 <br />
                    www.suaclinica.com <br />
                </p>
            </div>
        </div>
    </section>
);
export default Profissionais;
