const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

// I VARI VALORI DI MASSA RACCHIUSI IN UN ARRAY

let massaArray = [];

for (let index = 0; index < starWarsCharacters.length; index++) {
  massaArray.push(starWarsCharacters[index].mass);
}

console.log("Solo la massa di tutti:", massaArray);

// CREATA ARRAY CON PERSONAGGI SOLO CON CAPELLI N/A

let capelliArray = [];

for (let index = 0; index < starWarsCharacters.length; index++) {
  if (starWarsCharacters[index].hair_color === "n/a") {
    capelliArray.push(starWarsCharacters[index]);
  }
}
console.log("Personaggi con capelli N/A:", capelliArray);

// TRASFORMATE TUTTE LE PROPRIETA GENDER IN N/A

for (let index = 0; index < starWarsCharacters.length; index++) {
  if (
    starWarsCharacters[index].gender === "male" &&
    starWarsCharacters[index].gender === "female"
  ) {
    starWarsCharacters[index].gender = "n/a";
  }
}

console.log("Trasformati i capelli in n/a:", starWarsCharacters);

// CAMBIO TUTTI I CAPELLI N/A CON COLORE CAPELLI ROSSI

for (let index = 0; index < starWarsCharacters.length; index++) {
  if (starWarsCharacters[index].hair_color === "n/a") {
    starWarsCharacters[index].hair_color = "red";
  }
}

console.log("Trasformati i n/a in capelli rossi", starWarsCharacters);

// CANCELLATI TUTTI I DATI HEIGHT

for (let index = 0; index < starWarsCharacters.length; index++) {
  delete starWarsCharacters[index].height;
}

console.log("Height cancellato:", starWarsCharacters);
