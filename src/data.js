import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;

// export const filterCategory = (dataArray, property, subproperty) => {
//   let dataComplete = [];
//   if(subproperty === null || subproperty === undefined){
//     dataComplete = dataArray.map(item => item[property]);
//   }else{
//     dataComplete = dataArray.map(item => item[property][subproperty]);
//   }  
//   const dataList = dataComplete.filter((item, index) => dataComplete.indexOf(item) === index);
//   return dataList;
// };

// Filtrar categorías
export const filterCategory = (optionSelected, secondSelectElement) => {
  let arrayCategory;
  switch (optionSelected) {  
  case "Especie":{
    const speciesComplete = characters.map((item) => item.species);
    const speciesList = speciesComplete.filter((item, index) => speciesComplete.indexOf(item) === index);
    arrayCategory = speciesList;
    arrayCategory.forEach((element) => {
      const templateOptions = `
       <option value = "${element}">${element}</option>
       `;
      secondSelectElement.innerHTML += templateOptions;
    });
    secondSelectElement.classList.remove("none");
    break;
  }
  case "Género":{
    const gendersComplete = characters.map((item) => item.gender);
    const genderList = gendersComplete.filter((item, index) => gendersComplete.indexOf(item) === index);
    arrayCategory = genderList;
    arrayCategory.forEach((element) => {
      const templateOptions = `
       <option value = "${element}">${element}</option>
       `;
      secondSelectElement.innerHTML += templateOptions;
    });
    secondSelectElement.classList.remove("none");
    break;
  }
  case "Origen":{
    const originComplete = characters.map((item) => item.origin.name);
    const originsList = originComplete.filter((item, index) => originComplete.indexOf(item) === index);
    arrayCategory = originsList;
    arrayCategory.forEach((element) => {
      const templateOptions = `
         <option value = "${element}">${element}</option>
         `;
      secondSelectElement.innerHTML += templateOptions;
    });
    secondSelectElement.classList.remove("none");
    break;
  }
  case "Se encuentra actualmente":{
    const locationComplete = characters.map((item) => item.location.name);
    const  locationsList = locationComplete.filter((item, index) => locationComplete.indexOf(item) === index);
    arrayCategory = locationsList;
    arrayCategory.forEach((element) => {
      const templateOptions = `
           <option value = "${element}">${element}</option>
           `;
      secondSelectElement.innerHTML += templateOptions;
    });
    secondSelectElement.classList.remove("none");
    break;
  }
  case "Estado de vida":{
    const  statusComplete = characters.map((item) => item.status);
    const  statusList = statusComplete.filter((item, index) => statusComplete.indexOf(item) === index);
    arrayCategory = statusList;
    arrayCategory.forEach((element) => {
      const templateOptions = `
             <option value = "${element}">${element}</option>
             `;
      secondSelectElement.innerHTML += templateOptions;
    });
    secondSelectElement.classList.remove("none");
    break;
  }
  }
  return arrayCategory;
};

// Filtrar personajes por categorías
export const filterCharacters = (firstSelected, secondSelected, containerCards) =>{
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

  containerCards.innerHTML = "";
  filteredCharacters.forEach((character) => {
    let card = "";
    card = createCard(character);
    containerCards.innerHTML += card;
  });
  return filteredCharacters;
}

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

