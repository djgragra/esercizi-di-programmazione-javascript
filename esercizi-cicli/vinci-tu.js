/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


var att = 4;
var tent = 0;
var total1 = 0;
var total2 = 0;

//Giocatore 1
console.log('Il Giocatore 1 ha lanciato')
for (var i = 0; i < att; i++) {
  tent++
  var dado = (Math.random() * (7-1) + 1);
  dado = Math.floor(dado);
  if (tent <= att);
    total1 = (total1+dado);

  console.log(dado);

}

//Giocatore 2
console.log('Il Giocatore 2 ha lanciato')
for (var i = 0; i < att; i++) {
  tent++
  var dado = (Math.random() * (7-1) + 1);
  dado = Math.floor(dado);
  if (tent <= att);
    total2 = (total2+dado);

  console.log(dado);

}
console.log('Totale Giocatore 1 ====> ' + total1);
console.log('Totale Giocatore 2 ====> ' + total2);
console.log(" ");

if (total1 > total2)
  console.log('Vince il Giocatore 1');
else if (total1 === total2)
  console.log('PAREGGIO!!!');

else
  console.log('Vince il giocatore 2');
