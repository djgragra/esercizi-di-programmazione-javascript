/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/


var numero = 5000
numero = numero.toString()
if (numero.length == 1) {

  console.log('Il numero ' + numero + ' è formato da ' + numero.length + ' cifra');

}
else if (numero.length < 5) {
  console.log('Il numero ' + numero + ' è formato da ' + numero.length + ' cifre');
}
else {
  console.log('ERRORE!! Inserisci un numero inferiore a 10000');
}
