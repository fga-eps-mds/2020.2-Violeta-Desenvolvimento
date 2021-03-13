import React from 'react';
import iconVioleta from '../images/logo.png';

import '../css/header.css';

const Header = () => (
    <header class="menu-bg">
        <div class="menu">
            <div class="menu-logo">
                <a href="#home">
                    <img id="logo" src={iconVioleta} />
                </a>
            </div>
            <nav class="menu-nav">
                <ul>
                    <li>
                        <a href="#sobre">Questionário</a>
                    </li>
                    <li>
                        <a href="#produto">Depoimentos</a>
                    </li>
                    <li>
                        <a href="#preco">Gráficos</a>
                    </li>
                    <li>
                        <a href="#qualidade">Profissionais</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
export default Header;
