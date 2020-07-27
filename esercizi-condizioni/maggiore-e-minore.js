/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/


var a = 3;
var b = -1;
var c = 4;
var d = -2;

// trovo il numero maggiore

if (a >= b && a >= c && a >= d){
console.log('Il numero maggiore è ' + a)

}

if (b >= a && b >= c && b >= d){
console.log('Il numero maggiore è ' + b)

}

if (c >= a && c >= b && c >= d){
console.log('Il numero maggiore è ' + c)

}

if (d >= a && d >= b && d >= c){
console.log('Il numero maggiore è ' + d)

}

// trovo il numero minore

if (a <= b && a <= c && a <= d){
console.log('Il numero minore è ' + a)

}

if (b <= a && b <= c && b <= d){
console.log('Il numero minore è ' + b)

}

if (c <= a && c <= b && c <= d){
console.log('Il numero minore è ' + c)

}

if (d <= a && d <= b && d <= c){
console.log('Il numero minore è ' + d)

}
