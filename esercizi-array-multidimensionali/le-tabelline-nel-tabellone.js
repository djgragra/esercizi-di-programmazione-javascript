/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

  http://www.imparareaprogrammare.it
*/
const tabellone = [];
let s = "x ";

for (let i = 0; i < 11; i++) {
    s += `| ${i} `;
    tabellone[i] = [];
    for (let j = 0; j < 11; j++)
        tabellone[i][j] = i * j;
}

console.log(s);

for (let i = 0; i < 11; i++)
    console.log(`${i} | ${tabellone[i].join(' | ')}`);
