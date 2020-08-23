/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

var numero = 5;

function fattoriale(elemento) {
  var counter = numero;
  for (var i = counter; i > 1; i--) {
    numero = numero * (i - 1);
  }
  return numero;
}

console.log(fattoriale(numero));
