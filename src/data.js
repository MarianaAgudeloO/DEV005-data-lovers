import data from './data/rickandmorty/rickandmorty.js';
const characters = data.results;

//Arreglo de personajes que incluyen en el nombre, el texto ingresado
export const searchCharacter = (text) => {
  const results = data.results.filter(character => {
    return character.name.toLowerCase().includes(text.toLowerCase());
  }); 
  return results; 
}


export const order ={
  //Arreglo de personajes ordenados de A-z
  orderCharacters : (characters) => {
    characters.sort((a, b) => a.name.localeCompare(b.name));
    return characters;
  },
  //Arreglo de personajes ordenados de Z-a
  orderCharactersDescending : (characters) => {
    characters.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return characters; 
  }
}


export const filter = {
  filterCategory: (optionSelected) => {
    let arrayCategory;
    switch (optionSelected) {  
    case "Specie":{
      const speciesComplete = characters.map((item) => item.species);
      const speciesList = speciesComplete.filter((item, index) => speciesComplete.indexOf(item) === index);
      arrayCategory = speciesList;
      break;
    }
    case "Gender":{
      const gendersComplete = characters.map((item) => item.gender);
      const genderList = gendersComplete.filter((item, index) => gendersComplete.indexOf(item) === index);
      arrayCategory = genderList;
      break;
    }
    case "Origin":{
      const originComplete = characters.map((item) => item.origin.name);
      const originsList = originComplete.filter((item, index) => originComplete.indexOf(item) === index);
      arrayCategory = originsList;
      break;
    }
    case "Location":{
      const locationComplete = characters.map((item) => item.location.name);
      const  locationsList = locationComplete.filter((item, index) => locationComplete.indexOf(item) === index);
      arrayCategory = locationsList;
      break;
    }
    case "Status":{
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
      if (firstSelected === "Specie") {
        return character.species === secondSelected;
      }
      if (firstSelected === "Gender") {
        return character.gender === secondSelected;
      }
      if (firstSelected === "Origin") {
        return character.origin.name === secondSelected;
      }
      if (firstSelected === "Location") {
        return character.location.name === secondSelected;
      }
      if (firstSelected === "Status") {
        return character.status === secondSelected;
      }
    }); 
    return filteredCharacters;
  }
};



