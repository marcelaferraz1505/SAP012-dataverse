import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const cardHobby = document.querySelector("#root");
cardHobby.appendChild(renderItems(data));