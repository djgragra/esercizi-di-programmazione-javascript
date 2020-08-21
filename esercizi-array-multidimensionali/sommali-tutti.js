/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

const M = 3;
const N = 2;
var sum = 0;
var matrix = new Array(N);

for (let i = 0; i < matrix.length; i++) { //matrix.length corrisponde a N
  matrix[i] = new Array(M);
  for (let j = 0; j < matrix[i].length; j++) { //matrix[i].length corrisponde a M
    matrix[i][j] = Math.ceil(Math.random() * 100);
    sum += matrix[i][j];
  }
}
console.log(matrix);
console.log('Sum is ' + sum);
