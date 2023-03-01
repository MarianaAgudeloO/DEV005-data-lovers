import { filter, searchCharacter } from '../src/data.js';

// Test buscar
describe('searchCharacter', () => {
  it('Debería ser una función', () => {
    expect(typeof searchCharacter).toBe('function');
  });
  it('Al buscar el nombre Summer debe encontrar un elemnto igual a la variable instanciada', () => {
    const compare = {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
      ],
      "url": "https://rickandmortyapi.com/api/character/3",
      "created": "2017-11-04T19:09:56.428Z"
    }      
    expect(searchCharacter('Summer')).toContainEqual(compare);
  });
  it('Al buscar 124521 debe retornar un array vacío', () => {
    expect(searchCharacter('124521')).toHaveLength(0);
  });
});
// Test ordenar



// Test filtrar
describe('filter.filterCategory', () => {
  it('Debería ser una función', () => {
    expect(typeof filter.filterCategory).toBe('function');
  });
  it('La palabra Alien debería estar contenida en el array retornado para categoría Especie', () => {
    expect(filter.filterCategory('Specie')).toContain("Alien");
  });
  it('La palabra Male debería estar contenida en el array retornado para categoría Género', () => {
    expect(filter.filterCategory('Gender')).toContain("Male");
  });
  it('La palabra Abadango debería estar contenida en el array retornado para categoría Lugar de origen', () => {
    expect(filter.filterCategory('Origin')).toContain("Abadango");
  });
  it('La palabra Purge Planet debería estar contenida en el array retornado para categoría Se encuentra actualmente', () => {
    expect(filter.filterCategory('Location')).toContain("Purge Planet");
  });
  it('La palabra Alive debería estar contenida en el array retornado para categoría Estado de vida', () => {
    expect(filter.filterCategory('Status')).toContain("Alive");
  });
  it('Debe retorner un array con 1 elemento al filtrar por Lugar de origen Bepis 9', () => {
    expect(filter.filterCharacters('Lugar de origen', 'Bepis 9')).toHaveLength(1);
  });
  it('Debe retorner un array con 1 elemento al filtrar por Se encuentra actualmente Venzenulon 7', () => {
    expect(filter.filterCharacters('Se encuentra actualmente', 'Venzenulon 7')).toHaveLength(1);
  });
  it('Debe retorner un array con 147 elementos al filtrar por Estado de vida Dead', () => {
    expect(filter.filterCharacters('Estado de vida', 'Dead')).toHaveLength(147);
  }); 
});

describe('filter.filterCharacters', () => {
  it('Debería ser una función', () => {
    expect(typeof filter.filterCharacters).toBe('function');
  });
  it('Debe retorner un array con 132 elementos al filtrar por especie Alien', () => {
    expect(filter.filterCharacters('Specie', 'Alien')).toHaveLength(132);
  });
  it('Debe retorner un array con    elementos al filtrar por Género Female', () => {
    expect(filter.filterCharacters('Gender', 'Female')).toHaveLength(73);
  });
  it('Debe retorner un array con 1 elemento al filtrar por Lugar de origen Bepis 9', () => {
    expect(filter.filterCharacters('Origin', 'Bepis 9')).toHaveLength(1);
  });
  it('Debe retorner un array con 1 elemento al filtrar por Se encuentra actualmente Venzenulon 7', () => {
    expect(filter.filterCharacters('Location', 'Venzenulon 7')).toHaveLength(1);
  });
  it('Debe retorner un array con 147 elementos al filtrar por Estado de vida Dead', () => {
    expect(filter.filterCharacters('Status', 'Dead')).toHaveLength(147);
  }); 
});

describe('filter.filterCharacters', () => {
  it('Debería ser una función', () => {
    expect(typeof filter.filterCharacters).toBe('function');
  });
  it('Debe retorner un array con 132 elementos al filtrar por especie Alien', () => {
    expect(filter.filterCharacters('Specie', 'Alien')).toHaveLength(132);
  });
  it('Debe retorner un array con    elementos al filtrar por Género Female', () => {
    expect(filter.filterCharacters('Gender', 'Female')).toHaveLength(73);
  });
  it('Debe retorner un array con 1 elemento al filtrar por Lugar de origen Bepis 9', () => {
    expect(filter.filterCharacters('Origin', 'Bepis 9')).toHaveLength(1);
  });
  it('Debe retorner un array con 1 elemento al filtrar por Se encuentra actualmente Venzenulon 7', () => {
    expect(filter.filterCharacters('Location', 'Venzenulon 7')).toHaveLength(1);
  });
  it('Debe retorner un array con 147 elementos al filtrar por Estado de vida Dead', () => {
    expect(filter.filterCharacters('Status', 'Dead')).toHaveLength(147);
  }); 
});