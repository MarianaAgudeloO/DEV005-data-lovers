import { filter, searchCharacter, order } from '../src/data.js';

// Test buscar
describe('searchCharacter', () => {
  it('Debería ser una función', () => {
    expect(typeof searchCharacter).toBe('function');
  });
  describe('searchCharacter', () => {
    it('debe devolver un array vacío si no encuentra resultados', () => {
      const characters = [
        { id: 1, name: 'Rick Sanchez' },
        { id: 2, name: 'Morty Smith' }
      ];
      
      const result = searchCharacter(characters, 'Summer');
      
      expect(result).toEqual([]);
    });
    
    it('debe encontrar personajes que contengan el texto especificado', () => {
      const characters = [
        { id: 1, name: 'Rick Sanchez' },
        { id: 2, name: 'Morty Smith' },
        { id: 3, name: 'Summer Smith' }
      ];
      
      const result = searchCharacter(characters, 'Summer');
      
      expect(result).toEqual([{ id: 3, name: 'Summer Smith' }]);
    });
    
    it('debe buscar sin importar mayúsculas o minúsculas', () => {
      const characters = [
        { id: 1, name: 'Rick Sanchez' },
        { id: 2, name: 'Morty Smith' },
        { id: 3, name: 'Summer Smith' }
      ];
      
      const result = searchCharacter(characters, 'SUMMER');
      
      expect(result).toEqual([{ id: 3, name: 'Summer Smith' }]);
    });
  });
  
});

// Test ordenar ascendente
describe('order.orderCharacters', () => {
  it('Debería devolver un arreglo de personajes ordenados alfabéticamente por nombre, y el primer elemento debería ser el personaje "Abadango Cluster Princess', () => {
    const characters = [ 
      {name: 'Abadango Cluster Princess'},    
      {name: 'Morty Smith'},   
      {name: 'Jerry Smith'},    
      {name: 'Rick Sanchez'}, 
      {name: 'Summer Smith'}, 
      {name: 'Beth Smith'}
    ];

    const expectedFirstCharacter = { name: 'Abadango Cluster Princess'};

    const orderedCharacters = order.orderCharacters(characters);
    expect(orderedCharacters[0]).toEqual(expectedFirstCharacter);
  });
});
// Test ordenar descendente
describe('order.orderCharactersDescending', () => {
  it('Debería devolver un arreglo de personajes ordenados de forma descendente por nombre, y el primer elemento debería ser el personaje "Summer Smith', () => {
    const characters = [ 
      {name: 'Abadango Cluster Princess'},    
      {name: 'Morty Smith'},   
      {name: 'Jerry Smith'},    
      {name: 'Rick Sanchez'}, 
      {name: 'Summer Smith'}, 
      {name: 'Beth Smith'}
    ];

    const expectedFirstCharacter = { name: 'Summer Smith'};

    const orderedCharacters = order.orderCharactersDescending(characters);
    expect(orderedCharacters[0]).toEqual(expectedFirstCharacter);
  });
});

// Test filtrar por categoría
describe('filter.filterCategory', () => {
  it('Debería ser una función', () => {
    expect(typeof filter.filterCategory).toBe('function');
  });
  const characters = [
    { name: "Rick Sanchez", species: "Human", gender: "Male", origin: { name: "Earth" }, location: { name: "Earth" }, status: "Alive" }, 
    { name: "Morty Smith",  species: "Human", gender: "Male", origin: { name: "Earth" }, location: { name: "Earth" }, status: "Alive" }, 
    { name: "Summer Smith", species: "Human", gender: "Female", origin: { name: "Earth" }, location: { name: "Earth" }, status: "Alive" }   
  ];

  it("returns unique species list", () => {
    const result = filter.filterCategory(characters, "Specie");
    expect(result).toEqual(["Human"]);
  });

  it("returns unique gender list", () => {
    const result = filter.filterCategory(characters, "Gender");
    expect(result).toEqual(["Male", "Female"]);
  });

  it("returns unique origin list", () => {
    const result = filter.filterCategory(characters, "Origin");
    expect(result).toEqual(["Earth"]);
  });

  it("returns unique location list", () => {
    const result = filter.filterCategory(characters, "Location");
    expect(result).toEqual(["Earth"]);
  });

  it("returns unique status list", () => {
    const result = filter.filterCategory(characters, "Status");
    expect(result).toEqual(["Alive"]);
  });
});

// Test filtrar por personaje 
describe('filter.filterCharacters', () => {
  it('Debería ser una función', () => {
    expect(typeof filter.filterCharacters).toBe('function');
  });
  const characters = [
    { name: 'Rick', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
    { name: 'Morty', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
    { name: 'Summer', species: 'Human', gender: 'Female', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
    { name: 'Birdperson', species: 'Alien', gender: 'Male', origin: { name: 'Bird World' }, location: { name: 'Earth' }, status: 'Dead' },
    { name: 'Jerry', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
    { name: 'Unity', species: 'Alien', gender: 'Genderless', origin: { name: 'Gromflom Prime' }, location: { name: 'Gromflom Prime' }, status: 'Dead' },
  ];

  it('devuelve los personajes que coinciden con la especie seleccionada', () => {
    const result = filter.filterCharacters(characters, 'Specie', 'Human');
    expect(result).toEqual([
      { name: 'Rick', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
      { name: 'Morty', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
      { name: 'Summer', species: 'Human', gender: 'Female', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
      { name: 'Jerry', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
    ]);
  });

  it('Devuelve los personajes que coinciden con el género seleccionado', () => {
    const result = filter.filterCharacters(characters, 'Gender', 'Male');
    expect(result).toEqual([
      { name: 'Rick', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
      { name: 'Morty', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
      { name: 'Birdperson', species: 'Alien', gender: 'Male', origin: { name: 'Bird World' }, location: { name: 'Earth' }, status: 'Dead' },
      { name: 'Jerry', species: 'Human', gender: 'Male', origin: { name: 'Earth' }, location: { name: 'Earth' }, status: 'Alive' },
    ]);
  });
  it('devuelve los personajes que coinciden con el origen seleccionado', () => {
    const result = filter.filterCharacters(characters, 'Origin', 'Bird World');
    expect(result).toEqual([
      { name: 'Birdperson', species: 'Alien', gender: 'Male', origin: { name: 'Bird World' }, location: { name: 'Earth' }, status: 'Dead' }
    ]);
  });
})