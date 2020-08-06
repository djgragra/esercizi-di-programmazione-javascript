/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/


var x = 1

switch (x) {
  case 1:
    console.log('Oggi è lunedì');
    break;
  case 2:
    console.log('Oggi è martedì');
    break;
  case 3:
    console.log('Oggi è mercoledì');
    break;
  case 4:
    console.log('Oggi è giovedì');
    break;
  case 5:
    console.log('Oggi è venerdì');
    break;
  case 6:
    console.log('Oggi è sabato');
    break;
  case 7:
    console.log('Oggi è domenica');
    break;
  default:
    console.log('Hai inserito un valore non valido');

}
