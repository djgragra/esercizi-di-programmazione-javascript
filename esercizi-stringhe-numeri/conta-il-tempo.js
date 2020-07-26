/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var time = 12560;

var hour = Math.round(time / 3600);
var minute = Math.round((time - (hour * 3600)) / 60);
var seconds = Math.round(time - ((minute * 60) + (hour * 3600)));

console.log(hour + ' ore ' + minute + ' minuti e ' + seconds + ' secondi');
