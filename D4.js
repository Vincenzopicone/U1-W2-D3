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

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/

let characters = [];

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let index = 0; index < starWarsCharacters.length; index++) {
  characters.push(starWarsCharacters[index].name);
}
console.log("Esercizio 2:", characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci solo oggetti di personaggi femminili con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/

let femaleCharacters = [];

for (let index = 0; index < starWarsCharacters.length; index++) {
  if (starWarsCharacters[index].gender === "female") {
    femaleCharacters.push(starWarsCharacters[index]);
  }
}

console.log("Esercizio 3:", femaleCharacters);
/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

let eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blue_gray: [],
};

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato.
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
*/

for (let index = 0; index < starWarsCharacters.length; index++) {
  switch (starWarsCharacters[index].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[index]);
      break;
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[index]);
      break;
    case "brown":
      eyeColor.brown.push(starWarsCharacters[index]);
      break;
    case "red":
      eyeColor.red.push(starWarsCharacters[index]);
      break;
    case "blue-gray":
      eyeColor.blue_gray.push(starWarsCharacters[index]);
      break;
  }
}

console.log("Esercizio 5:", eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/

let cicli = 0;
let massa = 0;

while (cicli < starWarsCharacters.length) {
  massa = massa + parseInt(starWarsCharacters[cicli].mass);
  cicli++;
}

console.log("Esercizio 6:", massa);

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

switch (true) {
  case massa < 500:
    console.log("Esercizio 7: Ship is under loaded");
    break;
  case massa === 500:
    console.log("Esercizio 7: Ship is half loaded");
    break;
  case massa > 1000:
    console.log("Esercizio 7: DANGER! OVERLOAD ALERT: Jump ship now");
    break;
  case massa > 900:
    console.log("Esercizio 7: Critical Load: Over 900");
    break;
  case massa > 700:
    console.log("Esercizio 7: Warning: Load is over 700");
    break;
}

/* ESERCIZIO 8

Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/

for (let index = 0; index < starWarsCharacters.length; index++) {
  if (starWarsCharacters[index].gender === "n/a") {
    starWarsCharacters[index].gender = "robot";
  }
}

console.log(starWarsCharacters);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto, crea un console.log() per controllare la proprietà length di "characters" prima e dopo l'operazione
*/

console.log("Esercizio 9 characters prima:", characters.length);
console.log("Esercizio 9 femaleCharacters:", femaleCharacters.length);

for (let index1 = 0; index1 < characters.length; index1++) {
  for (let index2 = 0; index2 < femaleCharacters.length; index2++) {
    if (characters[index1] === 5) {
      characters.splice(index1, 1);
    }
  }
}

console.log("Esercizio 9 characters dopo:", characters.length);
/* EXTRA ESERCIZIO 10

Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/

let random = Math.floor(Math.random() * starWarsCharacters.length);
let proprietà = starWarsCharacters[random];
console.log("Esercizio 10 personaggio casuale:", proprietà);
