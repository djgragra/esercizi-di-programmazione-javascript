/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

var a = 17
var b = 8
var c = 13

function maggiore(a, b, c){
  if (a > b && a > c) {
    return a
  }
  else if (b > a && b > c) {
    return b
  }
  return c
}

function minore(a, b, c){
  if (a < b && a < c) {
    return a
  }
  else if (b < a && b < c) {
    return b
  }
  return c
}

console.log('Il numero maggiore è ' + maggiore(a, b, c));
console.log('Il numero minore è ' + minore(a, b, c));



// Variante con array
/*
function maggiore(array) {
  return Math.max(...array); //(...array) prende i singoli valori dell'array e non l'intero array
}

function minore(array) {
  return Math.min(...array);
}
var a = 2;
var b = 3;
var c = 1;

console.log(maggiore([a, b, c]));
console.log(minore([a, b, c]));
*/
