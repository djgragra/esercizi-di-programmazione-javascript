/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/


var x = 5;
var raw = "";
for (i=0; i<11; i++) {
  if (i == 0){
    raw = 0
  }
else {
  raw = raw + " " + (x * i)
}

}
console.log(raw);
