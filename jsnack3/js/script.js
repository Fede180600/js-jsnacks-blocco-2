// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.
const myNumber = [];
// Chiedo all'utente di inserire un numero
const userNumber = prompt("Dimmi un numero");
console.log(userNumber);
myNumber.push(userNumber);
console.log("Array col numero inserito dall'utente:", myNumber);
// Parte calcoli 
for (let i = 0; i < userNumber.length; i++) {
    const numberToElevate = parseInt(userNumber[i]);
    const numberElevate = Math.pow(numberToElevate, 3);
    
    // Stampo i risultati in console
    console.log(`Cubo di ${numberToElevate} =`, numberElevate);
}

// Olga's correction

// Chiedere all'utente il numero fino al quale calcolare i cubi 

let userLimit = parseInt(prompt("Dimmi un numero fino al quale vuoi calcolare i cubi"));


// Per ogni numero da 1 fino al numero dell'utente
    // Calcolare il cubo
    // Stampare il risultato 

// let counter = 1;
// while (counter <= userLimit) {
//     const thisCube = counter * counter * counter; // Metodo basic
//     const thisCube = Math.pow(counter, 3); // Metodo con Math.pow
//     console.log(thisCube);
//     counter++
// }

for (let i = 0; i <= userLimit; i++) {
    const thisCube = i ** 3; // Terzo metodo
    console.log(thisCube);
}