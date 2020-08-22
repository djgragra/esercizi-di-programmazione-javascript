/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

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

var R = new Array(N);
var C = new Array(M);
var sumR0 = 0;
var sumR1 = 0;

//Somma delle righe
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i == 0) {
    sumR0 += matrix[i][j];
    R[0] = sumR0;
  } else {
    sumR1 += matrix[i][j];
    R[1] = sumR1;
   }
 }
}

//Somma delle colonne
for (let i = 0; i < matrix[0].length; i++) {
  C[i] = matrix[0][i] + matrix[1][i];
}

console.log(R);
console.log(C);
