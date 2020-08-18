/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var matrix = [
[],
[],
[],
[],
[],
[],
[],
[],
[],
[],
];

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    var num = Math.ceil(Math.random() * (100-1) + 1);
    matrix[i].push(num);
  }
}

console.log(matrix.join('\n'));
