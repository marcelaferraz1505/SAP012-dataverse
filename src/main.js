import { filterBy } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

// console.log(example, renderItems(data), data);
let cardsExibidos = data;
const listaHobby = document.querySelector("#root");
document.addEventListener("DOMContentLoaded", () => {
    listaHobby.appendChild(renderItems(data))

})


// listaHobby.appendChild(renderItems(data));
// filtro de dados 
const selCategoria = document.querySelector('[name="filtroCategoria"]');

selCategoria.addEventListener('change', (event) => {

    const mostrarCategoria = event.target.value;

    cardsExibidos = filterBy(data, 'categoriaHobby', mostrarCategoria)
    listaHobby.innerHTML = ""
    listaHobby.appendChild(renderItems(cardsExibidos))

})

// ordenação

