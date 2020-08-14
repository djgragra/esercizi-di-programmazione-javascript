/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/
var numeri = [];

//generazione numeri
while (numeri.length < 10) {
  random = Math.ceil(Math.random() * 10);
  numeri.push(random);

}
console.log('numeri estratti' + '\n' + numeri);

//scelta numero e eliminazione dei numeri trovati
while (numeri.length > 0) {
  var numero = prompt("scegli un numero da eliminare");
  console.log('Hai scelto ' + numero);
  var num = parseInt(numero, 10)
    if (numeri.includes(num))
    while ((i = numeri.indexOf(num)) != -1){
      numeri.splice(i, 1);

}

console.log('Sono rimasti ancora ' + numeri.length + ' numeri' + '\n' + numeri + '\n');
}

console.log('Complimenti hai trovato tutti i numeri');
