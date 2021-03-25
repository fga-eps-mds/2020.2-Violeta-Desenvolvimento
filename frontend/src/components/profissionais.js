import '../css/profissionais.css';
import React from 'react';

const Profissionais = () => (
    <section class="profissionais">
        <div id="container-title">
            <h1 id="title">Profissionais</h1>
            <p id="description">
                Sed non enim a sapien interdum vulputate quis at diam. Maecenas
                quis sem erat. Cras tempor dignissim faucibus. Quisque egestas
                felis facilisis, scelerisque velit vel, posuere velit. Sed at
                elit vitae augue viverra lobortis. Etiam eget lectus non nulla
                sodales.
            </p>
        </div>
        <div id="container-profissionais">
            <div class="box-contact">
                <div id="box-contact-logo">
                    <div id="box-contact-text">
                        <p id="box-contact-name">Clínica Sua Clínica</p>
                        <div>
                            <p id="box-contact-description">
                                Av. Central Bl. 555 <br />
                                Núcleo Bandeirante -Brasília <br />
                            </p>
                            <p id="box-contact-number">(61) 7777-8123</p>
                            <p id="box-contact-description">
                                www.suaclinica.com <br />
                            </p>
                        </div>
                    </div>
                </div>
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

            <div class="pagination">
                <a href="#before">❮ Anterior </a>
                <a href="#next"> Próximo ❯</a>
            </div>
        </div>
    </section>
);
export default Profissionais;
