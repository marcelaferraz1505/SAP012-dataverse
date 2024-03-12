import { filterBy, sortBy, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

let cardsExibidos = data; //representa os dados iniciais
const listaHobby = document.querySelector("#root");//referência ao elemento root no html 

document.addEventListener("DOMContentLoaded", () => { //evento de carregamento da página. Este evento é acionado quando o HTML foi completamente carregado. O código dentro dessa função será executado após o carregamento da página.
  listaHobby.appendChild(renderItems(data));

  const statsContainer = document.getElementById(
    "calcularNivelMedioDeDificuldade"
  );
  const statsContainer2 = document.getElementById("custoParaIniciar");

  const selCategoria = document.querySelector('[name="filtroCategoria"]');
  const selOrdem = document.querySelector('[data-testid="select-sort"]');

  selCategoria.addEventListener("change", (event) => {
    const mostrarCategoria = event.target.value;
    cardsExibidos = filterBy(data, "categoriaHobby", mostrarCategoria);
    listaHobby.innerHTML = "";
    listaHobby.appendChild(renderItems(cardsExibidos));

    statsContainer.innerHTML = "";
    statsContainer2.innerHTML = "";

    const stats = computeStats(cardsExibidos);
    const mediaCustoParaIniciar = document.createElement("span");
    const mediaNivelDificuldade = document.createElement("span");

    mediaCustoParaIniciar.textContent = `Média de Custo para Iniciar: R$${stats.mediaCusto}`;
    mediaNivelDificuldade.textContent = `Média de Nível de Dificuldade: ${stats.mediaNivelDificuldade}`;

    statsContainer.appendChild(mediaNivelDificuldade);
    statsContainer2.appendChild(mediaCustoParaIniciar);
  });

  selOrdem.addEventListener("change", (event) => {
    const mostrarOrdem = event.target.value;
    cardsExibidos = sortBy(cardsExibidos, "custoParaIniciar", mostrarOrdem);
    listaHobby.innerHTML = "";
    listaHobby.appendChild(renderItems(cardsExibidos));
  });
});

const mostrarTodos = document.querySelector('[data-testid="button-clear"]');
const statsContainer = document.querySelector(
  "#calcularNivelMedioDeDificuldade"
);
const statsContainer2 = document.querySelector("#custoParaIniciar");
const selOrdem = document.querySelector("#ordenacao");
const selCategoria = document.querySelector("#filtro");

mostrarTodos.addEventListener("click", () => {
  // zera a lista de cards
  listaHobby.innerHTML = "";

  // zera o sort
  selOrdem.value = "buscar";

  // zera o filter
  selCategoria.value = "Todos";

  //zera a média de dificuldade
  statsContainer.innerHTML = "Média Nível de Dificuldade: 0";

  //zera a média de custo
  statsContainer2.innerHTML = "Média Custo: R$0,00";

  // renderiza novamente
  listaHobby.appendChild(renderItems(data));
});
