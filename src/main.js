import data from './data/rickandmorty/rickandmorty.js';
import { filter, searchCharacter, orderCharacters, orderCharactersDescending  } from './data.js';


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
const check = document.getElementById("check");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const firstSelect = document.getElementById("filt");
const secondSelect = document.getElementById("secondSelect");
const btnSearch = document.getElementById("search");
const searchText = document.getElementById("searchText");

//Mostrar y ocultar menú hamburguesa
check.addEventListener('change', function() {
  if (this.checked) {
    ul.style.left = "0";
  } else {
    ul.style.left = "-100%";
  }
});
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
  ul.style.left = "-100%";
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
  ul.style.left = "-100%";
})


// Comportamiento al elegir una categoría
firstSelect.addEventListener("change", () =>{
  const selected = firstSelect.value;
  secondSelect.innerHTML = "";
  const arrayCategoryFiltered = filter.filterCategory(selected);
  arrayCategoryFiltered.forEach((element) => {
    const templateOptions = `
     <option value = "${element}">${element}</option>
     `;
    secondSelect.innerHTML += templateOptions;
  });
  secondSelect.classList.remove("none");
});

// Comportamiento al elegir una opcion de la categoría seleccionada antes
secondSelect.addEventListener("change", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir que se recargue la página
    const selected = firstSelect.value;
    const selectedOption = secondSelect.value;
    // Filtrar los personajes según la opción seleccionada
    const filteredCharacters = filter.filterCharacters(selected, selectedOption); 
    main.innerHTML = "";
    filteredCharacters.forEach((character) => {
      let card = "";
      card = createCard(character);
      main.innerHTML += card;
    }); 
    ul.style.left = "-100%";
  });  
})


// Creación de card de cada personaje
export const createCard = (element) => {
  const templateCharacterCard = `
  <div class ="card">
    <div>
      <img src = "${element.image}" alt = "${element.name}" class="imgCard"></img>
    </div>
    <div>
      <p>Nombre: ${element.name}</p>
      <p>Especie: ${element.species}</p>
      <p>Género: ${element.gender}</p>
      <p>Estado de vida: ${element.status}</p>
      <p>Origen: ${element.origin.name}</p>
      <p>Se encuentra actualmente: ${element.location.name}</p>
    </div>
  </div>
  `;
  return templateCharacterCard;
}



