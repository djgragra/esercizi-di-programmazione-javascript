/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/

var d = 31;
var m = 3;
var y = 2020;

var date = {
  day: d,
  month: m,
  year: y
}

if (d <= 28 && m == 2 ) {
  console.log(`La data inserita è ${date.day}/${date.month}/${date.year}`);

} else if (d <= 31 && m == 1 || d <= 31 && m == 3 || d <= 31 && m == 5 || d <= 31 && m == 8 || d <= 31 && m == 10 || d <= 31 && m == 12) {
  console.log(`La data inserita è ${date.day}/${date.month}/${date.year}`);

} else if (d <= 30 && m == 4 || d <= 30 && m == 6 || d <= 30 && m == 7 || d <= 30 && m == 9 || d <= 30 && m == 11) {
  console.log(`La data inserita è ${date.day}/${date.month}/${date.year}`);

} else {
  console.log(`La data inserita ${date.day}/${date.month}/${date.year} non è valida`);
}
