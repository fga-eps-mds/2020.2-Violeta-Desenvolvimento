import React from 'react';
import iconVioleta from '../images/iconVioleta.png';
import iconQuestionario from '../images/iconQuestionario.png';
import iconGrafico from '../images/iconGrafico.png';
import iconDepoimento from '../images/iconDepoimento.png';
import iconProfissionais from '../images/iconProfissionais.png';

const Header = () => (
    <header>
        <div class="violeta-header">
            <a href="#home" id="icon-home">
                <img src={iconVioleta} /> <p>violeta</p>
            </a>
            <nav class="menu header-menu">
                <ul>
                    <li>
                        <img class="icon-menu" src={iconQuestionario} />
                        <a
                            href="#questionario"
                            class="violeta-bar-item violeta-btn"
                        >
                            Questionário
                        </a>
                    </li>
                    <li>
                        <img class="icon-menu" src={iconDepoimento} />
                        <a
                            href="#depoimentos"
                            class="violeta-bar-item violeta-btn"
                        >
                            Depoimentos
                        </a>
                    </li>
                    <li>
                        <img class="icon-menu" src={iconGrafico} />
                        <a
                            href="#graficos"
                            class="violeta-bar-item violeta-btn"
                        >
                            Gráficos
                        </a>
                    </li>
                    <li>
                        <img class="icon-menu" src={iconProfissionais} />
                        <a
                            href="#profissionais"
                            class="violeta-bar-item violeta-btn"
                        >
                            Profissionais
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
export default Header;
