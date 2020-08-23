/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0


  http://www.imparareaprogrammare.it
*/

//var numero = 5;

timer(50);

function timer(numero){
  var count = numero - 1;
  for (var i = count; i >=0; i--) {
    count = i
  console.log(count);

  }
  return count;

}


/*
console.log(conta(10));

function conta(numero) {
  var contatore = '';
  for (let i=1; i<=numero; i++){
    contatore += numero - i + '\n';
  }
  return contatore;
}
*/
