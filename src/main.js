import { filterCategory, filterCharacters, createCard } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const main = document.getElementById("main");
const characters = data.results;

// Renderiza los personajes al cargar la página
window.addEventListener("load", () =>{
  characters.forEach((character) => {
    let card = "";
    card = createCard(character);
    
    if(main.childElementCount <= 20){
      main.innerHTML += card;
    }
  });
});

const form = document.querySelector("form");
const firstSelect = document.getElementById("filt");
const secondSelect = document.getElementById("secondSelect");

// Comportamiento al elegir determinada opción del primer select
firstSelect.addEventListener("change", () =>{
  const selected = firstSelect.value;
  secondSelect.innerHTML = "";
  filterCategory(selected, secondSelect); 
})

secondSelect.addEventListener("change", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir que se recargue la página
    const selected = firstSelect.value;
    const selectedOption = secondSelect.value;
    // Filtrar los personajes según la opción seleccionada
    filterCharacters(selected, selectedOption, main);  
  });
})










