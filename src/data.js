import data from './data/rickandmorty/rickandmorty.js';
//Arreglo de personajes que incluyen en el nombre, el texto ingresado
function searchCharacter(text) {
  const results = data.results.filter(character => {
    return character.name.toLowerCase().includes(text.toLowerCase());
  });
  return results;
}
//Arreglo de personajes ordenados de A-z
function orderCharacters(characters) {
  characters.sort((a, b) => a.name.localeCompare(b.name));
  return characters;
}

//Arreglo de personajes ordenados de Z-a
function orderCharactersDescending(characters) {
  characters.sort((a, b) => {
    return b.name.localeCompare(a.name);
  });
  return characters;
}
export default {
  searchCharacter:searchCharacter, 
  orderCharacters:orderCharacters,
  orderCharactersDescending:orderCharactersDescending
};
