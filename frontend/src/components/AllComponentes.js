import React from 'react';
import Header from './header';
import Home from './home';
import Questionario from './questionario';
import Depoimento from './depoimento';
import Footer from './footer';
import Profissionais from './profissionais';
import Graficos from './graficos';

const AllComponentes = () => (
    <section>
        <Header />
        <Home />
        <Questionario />
        <Depoimento />
        <Graficos />
        <Profissionais />
        <Footer />
    </section>
);

export default AllComponentes;
