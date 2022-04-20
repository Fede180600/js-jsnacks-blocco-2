// jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// Metodo con ciclo for

// Ciclo (for) per chiedere 5 volte di inserire un numero
let sum = 0;

for (let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    sum += userNumber
}

// Stampo in console la somma dei 5 numeri inseriti 
console.log(sum);

