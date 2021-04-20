import React from 'react';
import Header from './header';
import Home from './home';
import Questionario from './questionario';
import Depoimento from './depoimento';
import Footer from './footer';
import Profissionais from './profissionais';

const AllComponentes = () => (
    <section>
        <Header />
        <Home />
        <Questionario />
        <Depoimento />
        <Profissionais />
        <Footer />
    </section>
);

export default AllComponentes;
