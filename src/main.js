import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const main = document.getElementById("main");
const characters = data.results;

// Renderiza los personajes al cargar la página
window.addEventListener("load", () =>{
  characters.forEach((character) => {
    const templateCharacterCard = `
    <div>
      <img src = "${character.image}" alt = "${character.name}"></img>
      <p>Nombre: ${character.name}</p>
      <p>Especie: ${character.species}</p>
      <p>Género: ${character.gender}</p>
      <p>Estado de vida: ${character.status}</p>
      <p>Origen: ${character.origin.name}</p>
      <p>Se encuentra actualemente: ${character.location.name}</p>
    </div>
    `;
    if(main.childElementCount <= 20){
      main.innerHTML += templateCharacterCard;
    }
  });
});

const form = document.querySelector("form");
const firstSelect = document.getElementById("filt");
const secondSelect = document.getElementById("secondSelect");
const btnForm = document.getElementById("btnForm");

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

secondSelect.addEventListener("change", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir que se recargue la página
    const selected = firstSelect.value;
    console.log(selected);
    const selectedOption = secondSelect.value;
    console.log(selectedOption);
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
    console.log(filteredCharacters);
    main.innerHTML = "";
    filteredCharacters.forEach((character) => {
      const templateCharacterCard = `
        <div>
          <img src = "${character.image}" alt = "${character.name}"></img>
          <p>Nombre: ${character.name}</p>
          <p>Especie: ${character.species}</p>
          <p>Género: ${character.gender}</p>
          <p>Estado de vida: ${character.status}</p>
          <p>Origen: ${character.origin.name}</p>
          <p>Se encuentra actualemente: ${character.location.name}</p>
        </div>
      `;
      main.innerHTML += templateCharacterCard;
    });
  });
})








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

