/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/


var array = [4, 1, 9, 2, -2, 11, 10, -6];
console.log('Array non ordinato\n' + array);
var new_array = [];


while (array.length != 0) {
  var numero = Math.max(...array);
  var remove = array.indexOf(numero);
  new_array.push(numero);
  array.splice(remove, 1);

}

console.log('Array ordinato decrescente\n' + new_array);

new_array.reverse();
console.log('Array ordinato crescente\n' + new_array);
