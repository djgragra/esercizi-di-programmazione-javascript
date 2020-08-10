/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/


var dmonth = 31
var dweek = 4

var day0 = 'lun'; day1 = 'mar'; day2 = 'mer'; day3 = 'gio'; day4 = 'ven'; day5 = 'sab'; day6 = 'dom';
var week_count = ""

//cicli
if (dmonth < 28 || dmonth > 31 || dweek < 0 || dweek > 6) {
  console.log(' Hai inserito il giorno della settimana (Lun = 0; Dom = 6) o il numero dei giorni del mese (min = 28; max = 31) errato.');
}
else {
  for (var i = 1; i < dmonth + 1; i++) {
    switch (dweek){
      case 0:
        week_count = day0
        dweek++
        break;
      case 1:
        week_count = day1
        dweek++
        break;
      case 2:
        week_count = day2
        dweek++
        break;
      case 3:
        week_count = day3
        dweek++
        break;
      case 4:
        week_count = day4
        dweek++
        break;
      case 5:
        week_count = day5
        dweek++
        break;
      case 6:
        week_count = day6
        dweek = 0
        break;
      default:
        console.log('Hai inserito un giorno della settimana non valido');

  }
    console.log(week_count + "  " + i);
}
}
