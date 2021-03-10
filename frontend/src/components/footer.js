import React from 'react';
import iconGit from '../images/iconGit.png';
import iconIMP from '../images/iconIMP.png';

const Footer = ()=>{
  return(
    <footer class="violeta-center violeta-roxo violeta-footer" id="footer">
      <div class="container">
        <nav class="menu">
          <ul>
            <li><img src={iconGit}/><a href="https://github.com/fga-eps-mds/2020.2-Violeta-Desenvolvimento" class="violeta-footer-item" target="_blank"><p>Repositório de<br />Desenvolvimento</p></a></li>
            <li><img src={iconGit}/><a href="https://github.com/fga-eps-mds/2020.2-Violeta-Documentacao" class="violeta-footer-item" target="_blank"><p>Repositório de<br />Documentação</p></a></li>
            <li><img src={iconIMP}/><a href="https://www.institutomariadapenha.org.br/" class="violeta-footer-item" target="_blank"><p>Instituto Maria da<br />Penha</p></a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;