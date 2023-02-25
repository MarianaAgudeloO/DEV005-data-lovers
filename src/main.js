import data from './data/rickandmorty/rickandmorty.js';
import datajs from './data.js';


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

//Bucador
btnSearch.addEventListener("click", () => {
  const text = searchText.value;
  const results = datajs.searchCharacter(text)
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
    results = datajs.orderCharacters(characters)
  }
  if (sortSelected === 'Z-a'){
    results = datajs.orderCharactersDescending(characters)
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

  if(selected === "Especie"){
    speciesList.forEach((element) => {
      const templateOptions = `
      <option value = "${element}">${element}</option>
      `;
      secondSelect.innerHTML += templateOptions;
    });
    secondSelect.classList.remove("none");
    
  }
  if(selected === "Género"){
    gendersList.forEach((element) => {
      const templateOptions = `
      <option value = "${element}">${element}</option>
      `;
      secondSelect.innerHTML += templateOptions;
    });
    secondSelect.classList.remove("none");
  }  
  if(selected === "Lugar de origen"){
    originList.forEach((element) => {
      const templateOptions = `
      <option value = "${element}">${element}</option>
      `;
      secondSelect.innerHTML += templateOptions;
    });
    secondSelect.classList.remove("none");
  }
  if(selected === "Location"){
    locationList.forEach((element) => {
      const templateOptions = `
      <option value = "${element}">${element}</option>
      `;
      secondSelect.innerHTML += templateOptions;
    });
    secondSelect.classList.remove("none");
  }
  if(selected === "Estado de vida"){
    statusList.forEach((element) => {
      const templateOptions = `
      <option value = "${element}">${element}</option>
      `;
      secondSelect.innerHTML += templateOptions;
    });
    secondSelect.classList.remove("none");
  }  
})

// Comportamiento del formulario al enviarlo
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir que se recargue la página
  secondSelect.addEventListener("change", () => {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevenir que se recargue la página
      const selected = firstSelect.value;
      const selectedOption = secondSelect.value;
      // Filtrar los personajes según la opción seleccionada
      const filteredCharacters = characters.filter((character) => {
        if (selected === "Especie") {
          return character.species === selectedOption;
        }
        if (selected === "Género") {
          return character.gender === selectedOption;
        }
        if (selected === "Lugar de origen") {
          return character.origin.name === selectedOption;
        }
        if (selected === "Location") {
          return character.location.name === selectedOption;
        }
        if (selected === "Estado de vida") {
          return character.status === selectedOption;
        }
      });
      // Renderizar los personajes filtrados
      main.innerHTML = "";
      let card = "";
      filteredCharacters.forEach((character) => {        
        card = createCard(character);
        main.innerHTML += card;
      });
    });
  })
  
  const selected = firstSelect.value;
  const selectedOption = secondSelect.value;
  // Filtrar los personajes según la opción seleccionada
  const filteredCharacters = characters.filter((character) => {
    if (selected === "Especie") {
      return character.species === selectedOption;
    }
    if (selected === "Género") {
      return character.gender === selectedOption;
    }
    if (selected === "Lugar de origen") {
      return character.origin.name === selectedOption;
    }
    if (selected === "Location") {
      return character.location.name === selectedOption;
    }
    if (selected === "Estado de vida") {
      return character.status === selectedOption;
    }
  });

  // Renderizar los personajes filtrados
  main.innerHTML = "";
  filteredCharacters.forEach((character) => {
    let card = "";
    card = createCard(character);
    main.innerHTML += card;
  });
});

// funcion para crear cards
function createCard(element){
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

// filtrado de especie, género, estado de vida, orígen y locación

const species = characters.map(character => character.species);
const speciesList = species.filter((specie, index) => species.indexOf(specie) === index);

const genders = characters.map(character => character.gender);
const gendersList = genders.filter((gender, index) => genders.indexOf(gender) === index);

const status = characters.map(character => character.status);
const statusList = status.filter((stat, index) => status.indexOf(stat) === index);

const locations = characters.map(character => character.location.name);
const locationList = locations.filter((location, index) => locations.indexOf(location) === index);

const origins = characters.map(character => character.origin.name);
const originList = origins.filter((origin, index) => locations.indexOf(origin) === index);

