/*
  Pa-pa-pa lindromo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/


var parole = 'i topi non avevano nipoti';

palindromo(parole);

function palindromo(frase) {
  let f1 = frase.replace(/\W/g, "");
  let f2 = [...f1].reverse().join(''); // inverte la stringa

if (f1 === f2) {
  console.log('true');
}else {
  console.log('false');
}

}
