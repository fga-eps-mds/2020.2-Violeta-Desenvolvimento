import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from '../images/setaMenu.svg';
import { ReactComponent as MenuIcon } from '../images/hanburgerMenu.svg';
import { ReactComponent as Logo } from '../images/iconVioleta.svg';

import '../css/header.css';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <header class="header">
            <div class="logo-container">
                <a href="#home" id="logo-container">
                    <Logo class="logo" />
                    <h1>Violeta</h1>
                </a>
            </div>
            <div class="logo-nav">
                <ul class={click ? 'nav-options active' : 'nav-options'}>
                    <li class="option" onClick={closeMobileMenu} id="li01">
                        <a href="#questionario">Questionário</a>
                    </li>
                    <li class="option" onClick={closeMobileMenu}>
                        <a href="#depoimentos">Depoimentos</a>
                    </li>
                    <li class="option" onClick={closeMobileMenu}>
                        <a href="#graficos">Gráficos</a>
                    </li>
                    <li class="option" onClick={closeMobileMenu}>
                        <a href="#profissionais">Profissionais</a>
                    </li>
                </ul>
            </div>
            <div class="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu class="menu-icon" />
                ) : (
                    <MenuIcon class="menu-icon" />
                )}
            </div>
        </header>
    );
};
export default Header;
