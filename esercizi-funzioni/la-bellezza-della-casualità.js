/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var n = 10;

randomNumber(n);

function randomNumber(numero) {
  let x = numero + 1;
  let y = Math.floor(Math.random() * (x - 0));
  console.log(y);
  return y;

}
