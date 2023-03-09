import {order, filter, searchCharacter} from './data.js';

//Obtenemos información desde la API
async function getAllCharacters() {
  const allCharacters = [];

  let page = 1;
  let pageCount = 1;

  // Recorre todas las páginas para obtener todos los personajes
  while (page <= pageCount) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();

    pageCount = data.info.pages;
    const characters = data.results;
    allCharacters.push(...characters);

    page++;
  }

  return allCharacters;
}
// Identifica al cargar el DOM si esta o no el boton responsive 
addEventListener('DOMContentLoaded', () =>{

  const btn_menu = document.querySelector(".btn_menu");
  if(btn_menu){
    btn_menu.addEventListener("click", () =>{
      const browser = document.querySelector(".browser");
      browser.classList.toggle("show");
    })
  }
});
const sortSelect = document.getElementById("sort");

//Menú oculto a la hora de elegir el ordenado 
sortSelect.addEventListener("change", () => {   
  const browser = document.querySelector(".browser");
  browser.classList.toggle("show");
}); 

(async () => {
  const characters = await getAllCharacters();
 
  const logo = document.querySelector(".logo")
  logo.addEventListener("click", () =>{
    location.reload();
  })
  // Renderiza los personajes al cargar la página
  const main = document.getElementById("main");

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
  const searchText = document.getElementById("searchText");
  const btnSearchMobile = document.getElementById("btnSearchMobile");
  
  //Buscador
  //Comportamiento del buscador en mobile
  function searchMobile() {
    const query = searchText.value;
    performSearch(query);
    const browser = document.querySelector(".browser");
    browser.classList.toggle("show");
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
    const results = searchCharacter(characters, query);
    const numberResults = results.length;
    main.innerHTML = "";
    if (results.length === 0) {
      const showNumberResults = document.getElementById("resultCount");
      showNumberResults.innerHTML = 'No results found for this search';
    } else {
      results.forEach((character) => {
        let card = "";
        card = createCard(character);
        if (main.childElementCount <= 20) {
          main.innerHTML += card;
        }
        const showNumberResults = document.getElementById("resultCount");
        showNumberResults.innerHTML = numberResults + " Results";
        showNumberResults.style.fontSize = "20px";
      })
    }
  }

  const sortSelect = document.getElementById("sort");

  //Ordenar
  sortSelect.addEventListener("change", () => { 
    const sortSelected = sortSelect.value;
    let results = [];
    if (sortSelected === 'A-z'){
      results = order.orderCharacters(characters)  
      const showNumberResults = document.getElementById("resultCount");
      showNumberResults.innerHTML = 'Order A-z';  
      showNumberResults.style.fontSize = "20px";
    }
    if (sortSelected === 'Z-a'){
      results = order.orderCharactersDescending(characters)    
      const showNumberResults = document.getElementById("resultCount");
      showNumberResults.innerHTML = 'Order Z-a';  
      showNumberResults.style.fontSize = "20px";
    }  
    main.innerHTML = "";
    results.forEach((character) => {    
      let card = "";
      card = createCard(character);
      if(main.childElementCount <= 20){
        main.innerHTML += card;
      }
    }) 
    
  })


  // Comportamiento al elegir una categoría
  firstSelect.addEventListener("change", () =>{
    const selected = firstSelect.value;
    secondSelect.innerHTML = "";
    const arrayCategoryFiltered = filter.filterCategory(characters, selected);
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
    form.addEventListener("submit", completeFilter);  
  })

  function completeFilter(event) {
    event.preventDefault(); // Prevenir que se recargue la página
    const selected = firstSelect.value;
    const selectedOption = secondSelect.value;
    // Filtrar los personajes según la opción seleccionada
    const filteredCharacters = filter.filterCharacters(characters, selected, selectedOption);
    main.innerHTML = "";
    filteredCharacters.forEach((character) => {
      let card = "";
      card = createCard(character);
      main.innerHTML += card;
    }); 
    const browser = document.querySelector(".browser");
    browser.classList.toggle("show");
    const numberResults = filteredCharacters.length;
    const showNumberResults = document.getElementById("resultCount");
    showNumberResults.innerHTML = numberResults + " Results";
    showNumberResults.style.fontSize = "20px";
  }
})();


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







