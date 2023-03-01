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
const searchText = document.getElementById("searchText");
const btnSearchMobile = document.getElementById("btnSearchMobile");



//Mostrar y ocultar menú hamburguesa
check.addEventListener('change', function() {
  if (this.checked) {
    ul.style.left = "0";
  } else {
    ul.style.left = "-100%";
  }
});
//Buscador
//Comportamiento del buscador en mobile
function searchMobile() {
  const query = searchText.value;
  performSearch(query);
}
//Comportamiento del buscador en escritorio
function searchDesktop() {
  const query = searchText.value;
  performSearch(query);
}

//Buscador en tiempo real o con botón dependiendo del tamaño de la página
function checkWindowSize() {
  if (window.innerWidth <= 858) {
    // Dispositivos móviles: mostrar el botón de búsqueda 
    btnSearchMobile.style.display = "block";
    searchText.removeEventListener("input", searchDesktop);
    btnSearchMobile.addEventListener("click", searchMobile);
  } else {
    // Dispositivos de escritorio: mostrar el campo de búsqueda y ocultar el botón de búsqueda móvil
    btnSearchMobile.style.display = "none"
    searchText.removeEventListener("click", searchMobile);
    searchText.addEventListener("input", searchDesktop);
  }
}

//Verificar el tamaño de la página 
window.addEventListener("load" , () => {
  checkWindowSize();
});
//Verificar el tamaño de la página cada que cambie
window.addEventListener("resize", () => {
  checkWindowSize();
});

//Impresión de los resultados de la búsqueda
function performSearch(query) {
  const results = searchCharacter(query);
  const numberResults = results.length;
  main.innerHTML = "";
  if (results.length === 0) {
    const empty = `
      <div>      
        <p style="color: white;">No results found for this search</p>        
      </div>
    `;
    main.innerHTML = empty;
    const showNumberResults = document.getElementById("resultCount");
    showNumberResults.innerHTML = '';
  } else {
    results.forEach((character) => {
      let card = "";
      card = createCard(character);
      if (main.childElementCount <= 20) {
        main.innerHTML += card;
      }
      const showNumberResults = document.getElementById("resultCount");
      showNumberResults.innerHTML = numberResults + " Results";
    })
  }
  ul.style.left = "-100%";  
}
const sortSelect = document.getElementById("sort");

//Ordenar
sortSelect.addEventListener("change", () => { 
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
  })
  ul.style.left = "-100%";  
  const showNumberResults = document.getElementById("resultCount");
  showNumberResults.innerHTML = '';
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
    const numberResults = filteredCharacters.length;
    const showNumberResults = document.getElementById("resultCount");
    showNumberResults.innerHTML = numberResults + " Results";
  });  
})


// Creación de card de cada personaje
export const createCard = (element) => {
  const templateCharacterCard = `
  <div class ="card">
    <div class="cardCenter">
      <div class="cardFront">
        <img src = "${element.image}" alt = "${element.name}" class="imgCard"></img>
        <div>
          <p id="mainName">${element.name}</p>          
        </div>
      </div>
      <div class="cardBack">
        <p>Name: ${element.name}</p>
        <p>Specie: ${element.species}</p>
        <p>Gender: ${element.gender}</p>
        <p>Status: ${element.status}</p>
        <p>Origin: ${element.origin.name}</p>
        <p>Location: ${element.location.name}</p>
        <p>Type: ${element.type}</p>
        <p>Created: ${element.created}</p>
      </div>
    </div>
  </div>
  `;
  return templateCharacterCard;
}



