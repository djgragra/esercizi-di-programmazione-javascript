/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/


var A = 70;
var B = 20;
var random = (Math.random() * (100-1) + 1);
random = Math.floor(random)
console.log('Il Giocatore 1 hai scelto ' + A);
console.log('Il Giocatore 2 hai scelto ' + B);
console.log('Ho estratto il numero ' + random);

  var differenzaA = (random - A)
  differenzaA = Math.abs(differenzaA)
//  console.log(differenzaA);

  var differenzaB = (random - B)
  differenzaB = Math.abs(differenzaB)
//  console.log(differenzaB);

if (random === A)
  console.log('Complimenti Giocatore 1 hai indovinato il numero estratto');
  else if (random === B)
    console.log('Complimenti Giocatore 2 hai indovinato il numero estratto');
      else if (differenzaA < differenzaB)
        console.log('Nessuno dei due ha azzeccato il numero estratto, ma il Giocatore 1 si è avvicinato di più!');
          else
            console.log('Nessuno dei due ha azzeccato il numero estratto, ma il Giocatore 2 si è avvicinato di più!');
