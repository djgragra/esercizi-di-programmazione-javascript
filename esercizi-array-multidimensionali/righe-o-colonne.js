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

const M = 7; //colonne
const N = 4; //righe
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

var R = new Array();
var C = new Array();
sum = 0;


//Somma delle righe usando forEach
for (let i = 0; i < matrix.length; i++) {
  matrix[i].forEach(function(item, index) {
    sum += matrix[i][index];
  });

/*
// Somma delle righe usando For
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
*/

  R.push(sum);
  sum = 0;
}

//Somma delle colonne
for (let i = 0; i < matrix[0].length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    sum += matrix[j][i];
  }
  C.push(sum);
  sum = 0;
}

console.log(R);
console.log(C);
