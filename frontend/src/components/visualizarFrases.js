import React from 'react';
// import axios from 'axios';
import '../css/visualizarFrases.css';
// import { urlGenerator } from './urls';

// const url = urlGenerator('frases', 'frases-motivacionais/');
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i -= 1) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
// console.log(url);
const FrasesMotivacionais = (props) => (
    <div class="frases">
        <p>{props.val}</p>
    </div>
);
export default FrasesMotivacionais;
