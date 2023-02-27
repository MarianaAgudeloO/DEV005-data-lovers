import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;

export const filterCategory = (optionSelected) => {
  let arrayCategory;
  switch (optionSelected) {  
  case "Especie":{
    const speciesComplete = characters.map((item) => item.species);
    const speciesList = speciesComplete.filter((item, index) => speciesComplete.indexOf(item) === index);
    arrayCategory = speciesList;
    break;
  }
  case "Género":{
    const gendersComplete = characters.map((item) => item.gender);
    const genderList = gendersComplete.filter((item, index) => gendersComplete.indexOf(item) === index);
    arrayCategory = genderList;
    break;
  }
  case "Origen":{
    const originComplete = characters.map((item) => item.origin.name);
    const originsList = originComplete.filter((item, index) => originComplete.indexOf(item) === index);
    arrayCategory = originsList;
    break;
  }
  case "Se encuentra actualmente":{
    const locationComplete = characters.map((item) => item.location.name);
    const  locationsList = locationComplete.filter((item, index) => locationComplete.indexOf(item) === index);
    arrayCategory = locationsList;
    break;
  }
  case "Estado de vida":{
    const  statusComplete = characters.map((item) => item.status);
    const  statusList = statusComplete.filter((item, index) => statusComplete.indexOf(item) === index);
    arrayCategory = statusList;
    break;
  }
  }
  return arrayCategory;
};

// Filtrar personajes por categorías
export const filterCharacters = (firstSelected, secondSelected) =>{
  const filteredCharacters = characters.filter((character) => {
    if (firstSelected === "Especie") {
      return character.species === secondSelected;
    }
    if (firstSelected === "Género") {
      return character.gender === secondSelected;
    }
    if (firstSelected === "Origen") {
      return character.origin.name === secondSelected;
    }
    if (firstSelected === "Se encuentra actualmente") {
      return character.location.name === secondSelected;
    }
    if (firstSelected === "Estado de vida") {
      return character.status === secondSelected;
    }
  }); 
  return filteredCharacters;
}


