import { useEffect, useState } from 'react';
import axios from 'axios';
import { urlGenerator } from './urls';

const url = urlGenerator('frases', 'frases-motivacionais/');

function shuffle(array) {
    const crypto = window.crypto || window.msCrypto;
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    const random = arr[0] * 2 ** -32;

    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(random * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const selecionaFrases = () => {
    const [frase0, setFrase0] = useState();
    const [frase1, setFrase1] = useState();
    const [frase2, setFrase2] = useState();

    useEffect(() => {
        async function setFrases() {
            await axios.get(url).then((res) => {
                const frase = res.data;
                shuffle(frase);
                console.log(frase);

                const textaux = 'Não há frases cadastradas';
                if (frase['0'] === undefined) {
                    setFrase0(textaux);
                } else {
                    setFrase0(frase['0'].ds_frase);
                }
                if (frase['1'] === undefined) {
                    setFrase1(textaux);
                } else {
                    setFrase1(frase['1'].ds_frase);
                }
                if (frase['2'] === undefined) {
                    setFrase2(textaux);
                } else {
                    setFrase2(frase['2'].ds_frase);
                }
            });
        }

        setFrases();
    }, []);
    return { 0: frase0, 1: frase1, 2: frase2 };
};

export { shuffle, selecionaFrases };
