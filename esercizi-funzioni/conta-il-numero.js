/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre


  http://www.imparareaprogrammare.it
*/

var n = 10;
quanteCifre(n);

function quanteCifre(numero) {
  let x = numero.toString();
  if (x >= 0 && x <=9) {
    console.log(x.length + ' cifra');
  }else if (x >= 10 && x <= 9999){
    console.log(x.length + ' cifre');
  }else {
    console.log('Hai inserito un numero troppo grande');
  }
}
