/*
1.Chiedere all'utente i km da fare
2.Se il risultato è diverso da un numero
3. Fare il calcolo km
  -altrimenti chiedere all'utente i km
4.Chiedere età
5.Se è un numero
  -altrimenti chiedere età
6.SE ha <18
7.Allora fare il calcolo della variabile con il calcolo dei km e il -20%
8. altrimenti se l'età è compresa tra +18 e 65
9.Allora fare il calcolo della variabile senza sconto
10.Se ha >= 65anni 
11. Allora fare il calcolo della variabile con il calcolo dei km e il -40%
12.Stampa variabile calcolo totale
*/
let km = prompt('Kilomatri che vuoi fare');
const KM_PRICE = 0.21;

if (km && !isNaN(km)) {
    let totCost = km * KM_PRICE;
    let eta = prompt('Scrivi la tua età');
} else {
    alert('Non hai inserito un km valido.');
}
