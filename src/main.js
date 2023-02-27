import data from './data/rickandmorty/rickandmorty.js';
import { filterCategory, filterCharacters, createCard, searchCharacter, orderCharacters, orderCharactersDescending  } from './data.js';


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
const btnSearch = document.getElementById("search");
const searchText = document.getElementById("searchText");

//Buscador
btnSearch.addEventListener("click", () => {
  const text = searchText.value;
  const results = searchCharacter(text)
  main.innerHTML = "";
  results.forEach((character) => {    
    let card = "";
    card = createCard(character);
    if(main.childElementCount <= 20){
      main.innerHTML += card;
    }
  }
  )
})

const btnSort = document.getElementById("btnSort");
const sortSelect = document.getElementById("sort");
//Ordenar
btnSort.addEventListener("click", () => { 
  const sortSelected = sortSelect.value;
  let results = [];
  if (sortSelected === 'A-z'){
    results = orderCharacters(characters)
  }
  if (sortSelected === 'Z-a'){
    results = orderCharactersDescending(characters)
  }
  
  main.innerHTML = "";
  results.forEach((character) => {    
    let card = "";
    card = createCard(character);
    if(main.childElementCount <= 20){
      main.innerHTML += card;
    }
  }
  )
})

// Comportamiento al elegir determinada opción del primer select
firstSelect.addEventListener("change", () =>{
  const selected = firstSelect.value;
  secondSelect.innerHTML = "";
  filterCategory(selected, secondSelect); 
})
// Comportamiento al elegir determinada opción del segundo select
secondSelect.addEventListener("change", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir que se recargue la página
    const selected = firstSelect.value;
    const selectedOption = secondSelect.value;
    // Filtrar los personajes según la opción seleccionada
    filterCharacters(selected, selectedOption, main);  
  });
})


