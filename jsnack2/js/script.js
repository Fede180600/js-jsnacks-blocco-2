// jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// Creo le array dei nomi e cognomi 
const guestsNames = ["Alberto", "Giovanni", "Edoardo", "Nicola", "Francesca", "Alessia", "Simone", "Nicole", "Sara"];
const guestsSurnames = ["Malvezzi", "Rossi", "Bergamini", "Farci", "Setti", "Malvezzi", "Valeri", "Corradi"];

// Genero un nome e un cognome casuali dalle arrays
const randomNameIndex = Math.floor(Math.random() * guestsNames.length);
const randomName = guestsNames [randomNameIndex];
console.log("Posizione nella array dei nomi:", randomNameIndex);
console.log("Nome corrispondente:", randomName);

const randomSurnameIndex = Math.floor(Math.random() * guestsSurnames.length);
const randomSurname = guestsSurnames [randomSurnameIndex];
console.log("Posizione nella array dei cognomi:", randomSurnameIndex);
console.log("Cognome corrispondente:", randomSurname);

// Stampo il risultato in console 
const guest = `${randomName} ${randomSurname}`;
console.log("Invitato:", guest);