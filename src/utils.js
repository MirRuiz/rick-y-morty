const createCharacterRow = (character) => {
  const element = document.createElement("div");
  const avatar = createAvatar(character);
  element.appendChild(avatar);
  const link = createRowText(character);
  element.appendChild(link);
  element.className = "character-row";
  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.image;
  return element;
};
const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);
  return element;
};
const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.image;
  return element;
};
const showCharacter = (character) => {
  
  const characterDetails = document.getElementById("character-detail");
  characterDetails.innerHTML = "";
  characterDetails.appendChild(createAvatarDetail(character));
  characterDetails.appendChild(createParagraph("Nombre: " + character.name));
  characterDetails.appendChild(createParagraph("Genero: " + character.gender));
  characterDetails.appendChild(createParagraph("Estado: " + character.status));
  characterDetails.appendChild(
    createParagraph("Especie: " + character.species)
  );
};
const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};
export { createCharacterRow, showCharacter };
