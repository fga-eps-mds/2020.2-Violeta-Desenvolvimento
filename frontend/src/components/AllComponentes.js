import React from 'react';
import Header from './header';
import Home from './home';
import Questionario from './questionario';
import Depoimento from './depoimento';
import Footer from './footer';
import Profissionais from './profissionais';
import Graficos from './graficos';
import Frases from './visualizarFrases';
import { selecionaFrases } from './selecionaFrase';

const AllComponentes = () => {
    const frases = selecionaFrases();
    return (
        <section>
            <Header />
            <Home />
            <Questionario />
            <Frases frase={frases[0]} />
            <Depoimento />
            <Frases frase={frases[1]} />
            <Graficos />
            <Frases frase={frases[2]} />
            <Profissionais />
            <Footer />
        </section>
    );
};

export default AllComponentes;
