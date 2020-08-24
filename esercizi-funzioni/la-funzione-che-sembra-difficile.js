/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4


  http://www.imparareaprogrammare.it
*/

Kennesima(3456789, 5);

function Kennesima(N, K) {
  var n = N.toString();
  //var k = K.toString();

  if (n.length > K) {
    var res = n.charAt(n.length - K);
    console.log(res);
}else if (n.length == K){
    console.log(n.charAt(0));
  }else {
    console.log(0);
  }

}
