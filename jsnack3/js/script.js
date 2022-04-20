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
