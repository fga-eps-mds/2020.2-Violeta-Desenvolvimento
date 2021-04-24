import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { urlGenerator, shuffle } from './urls';
import Header from './header';
import Home from './home';
import Questionario from './questionario';
import Depoimento from './depoimento';
import Footer from './footer';
import Profissionais from './profissionais';
import Graficos from './graficos';
import Frases from './visualizarFrases';

const url = urlGenerator('frases', 'frases-motivacionais/');

const AllComponentes = () => {
    const [frase1, setFrase1] = useState();
    const [frase2, setFrase2] = useState();
    const [frase3, setFrase3] = useState();

    useEffect(() => {
        async function euFrases() {
            await axios.get(url).then((res) => {
                const frase = res.data;
                shuffle(frase);

                setFrase1(frase['0'].ds_frase);
                setFrase2(frase['1'].ds_frase);
                setFrase3(frase['2'].ds_frase);
            });
        }

        euFrases();
    }, []);

    return (
        <section>
            <Header />
            <Home />
            <Questionario />
            <Frases val={frase1} />
            <Depoimento />
            <Frases val={frase2} />
            <Graficos />
            <Frases val={frase3} />
            <Profissionais />
            <Footer />
        </section>
    );
};

export default AllComponentes;
