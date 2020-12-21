function getCharacter() {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.json();
    })
    .then((datos) => {
      return datos.results;
    });
}

export { getCharacter };
