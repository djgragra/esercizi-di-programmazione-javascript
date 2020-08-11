/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

var N = 10;
var Q = 10;

var numbers = [];

for (var i = 1; i <= N; i++) {
  var number = Math.floor(Math.random()*(Q - 0)+1);
    numbers.push(number);
}
console.log(numbers);

var revnumbers = numbers.reverse();
console.log(revnumbers);
