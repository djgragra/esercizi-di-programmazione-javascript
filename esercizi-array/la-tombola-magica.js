/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var estrazione = [];
var win = [];

for (var i = 0; i < mynumbers.length; i++) {
  var x = Math.floor(Math.random()*(90 - 0)+1);
  if (mynumbers.includes(x)) {
    win.push(x);
  }

estrazione.push(x);

}

var winnumber = win.length;
console.log('I tuoi numeri ' + mynumbers + '\n' + '\n' + 'Numeri estratti ' + estrazione );

if (winnumber == 1) {
  console.log('\n' + 'Hai indovinato ' + winnumber + ' numero');
} else {
   console.log('\n' + 'Hai indovinato ' + winnumber + ' numeri');
}


switch (winnumber) {
  case 2:
    console.log('\n' + 'Hai fatto ambo');
    break;
  case 3:
    console.log('\n' + 'Hai fatto terna');
    break;
  case 4:
    console.log('\n' + 'Hai fatto quaterna');
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    console.log('\n' + 'Hai fatto cinquina');
    break;
  case 10:
    console.log('\n' + 'Hai fatto Tombola');
    break;
  default:
    console.log('\n' + 'Peccato, non hai vinto');
}
