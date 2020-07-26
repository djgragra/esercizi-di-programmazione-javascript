/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/


var name = 'Graziano';
var year = 2020;
var birth = 1968;
var age = (year - birth);
var to100 = (100 - age);

console.log(name + ' ha ' + age + ' anni, e gli mancano ' + to100 + ' anni per arrivare a 100 anni');
