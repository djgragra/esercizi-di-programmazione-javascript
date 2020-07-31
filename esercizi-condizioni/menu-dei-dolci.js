/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


var dolce1 = '1. Tiramisù';
var dolce2 = '2. Torta della nonna';
var dolce3 = '3. Cheesecake alla nutella';
var dolce4 = '4. Macedonia';
console.log(dolce1);
console.log(dolce2);
console.log(dolce3);
console.log(dolce4);

dolce1 = 'Tiramisù';
dolce2 = 'Torta della nonna';
dolce3 = 'Cheesecake alla nutella';
dolce4 = 'Macedonia';

var x = 1;


switch (x) {
  case 1:
    console.log('Hai scelto ' + dolce1);
    break;
  case 2:
    console.log('Hai scelto ' + dolce2);
    break;
  case 3:
    console.log('Hai scelto ' + dolce3);
    break;
  case 4:
    console.log('Hai scelto ' + dolce4);
    break;
  default:
    console.log('Dolce non disponibile');

}
