import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;

//Arreglo de personajes que incluyen en el nombre, el texto ingresado
export const searchCharacter = (text) => {
  const results = characters.filter(character => {
    return character.name.toLowerCase().includes(text.toLowerCase());
  }); 
  return results; 
}
//Arreglo de personajes ordenados de A-z
export const orderCharacters = (characters) => {
  characters.sort((a, b) => a.name.localeCompare(b.name));
  return characters;
}

//Arreglo de personajes ordenados de Z-a
export const orderCharactersDescending = (characters) => {
  characters.sort((a, b) => {
    return b.name.localeCompare(a.name);
  });
  return characters; 
}

export const filter = {
  filterCategory: (optionSelected) => {
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
    case "Lugar de origen":{
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
  },
  filterCharacters: (firstSelected, secondSelected) =>{
    const filteredCharacters = characters.filter((character) => {
      if (firstSelected === "Especie") {
        return character.species === secondSelected;
      }
      if (firstSelected === "Género") {
        return character.gender === secondSelected;
      }
      if (firstSelected === "Lugar de origen") {
        return character.origin.name === secondSelected;
      }
      if (firstSelected === "Se encuentra actualmente") {
        return character.location.name === secondSelected;
      }
      if (firstSelected === "Estado de vida") {
        return character.status === secondSelected;
      }
    }); 
    console.log(filteredCharacters);
    return filteredCharacters;
  }
};

