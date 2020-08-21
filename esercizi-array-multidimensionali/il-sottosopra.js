/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input:
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/


var array = [
[1, 2],
[3, 4],
[5, 6],
[7, 8],
[9, 10],
];
var new_array = [
[],
[],
];

for (var i = 0; i < array.length; i++) {
  new_array[0].push(array[i][0]);
  new_array[1].push(array[i][1]);

}

console.log(new_array[0]);
console.log(new_array[1]);
