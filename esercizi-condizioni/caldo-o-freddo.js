/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/


var lu = 20; ma = 18; me = 6; gi = 18; ve = 6; sa = 11; dom =20;

//verifico temperatura lunedì
if (lu > ma && lu > me && lu > gi && lu > ve && lu > sa && lu > dom)
  console.log(' Lunedì è stato il giorno più caldo della settimana con ' + lu + ' gradi');
else if (lu < ma && lu < me && lu < gi && lu < ve && lu < sa && lu < dom )
  console.log(' Lunedì è stato il giorno più freddo della settimana con ' + lu + ' gradi');
//tempersture uguali lunedì maggiori
else if ( lu == ma && lu > me && lu > gi && lu > ve && lu > sa && lu > dom)
  console.log(' Lunedì e Martedì sono stati i giorni più caldi della settimana con ' + lu + ' gradi');
else if (lu > ma && lu == me && lu > gi && lu > ve && lu > sa && lu > dom)
  console.log(' Lunedì e Mercoledì sono stati i giorni più caldi della settimana con ' + lu + ' gradi');
else if (lu > ma && lu > me && lu == gi && lu > ve && lu > sa && lu > dom)
  console.log(' Lunedì e Giovedì sono stati i giorni più caldi della settimana con ' + lu + ' gradi');
else if (lu > ma && lu > me && lu > gi && lu == ve && lu > sa && lu > dom)
  console.log(' Lunedì e Venerdì sono stati i giorni più caldi della settimana con ' + lu + ' gradi');
else if (lu > ma && lu > me && lu > gi && lu > ve && lu == sa && lu > dom)
  console.log(' Lunedì e Sabato sono stati i giorni più caldi della settimana con ' + lu + ' gradi');
else if (lu > ma && lu > me && lu > gi && lu > ve && lu > sa && lu == dom)
  console.log(' Lunedì e Domenica sono stati i giorni più caldi della settimana con ' + lu + ' gradi');
//temperature uguali lunedì minori
else if ( lu == ma && lu < me && lu < gi && lu < ve && lu < sa && lu < dom)
  console.log(' Lunedì e Martedì sono stati i giorni più freddi della settimana con ' + lu + ' gradi');
else if (lu < ma && lu == me && lu < gi && lu < ve && lu < sa && lu < dom)
  console.log(' Lunedì e Mercoledì sono stati i giorni più freddi della settimana con ' + lu + ' gradi');
else if (lu < ma && lu < me && lu == gi && lu < ve && lu < sa && lu < dom)
  console.log(' Lunedì e Giovedì sono stati i giorni più freddi della settimana con ' + lu + ' gradi');
else if (lu < ma && lu < me && lu < gi && lu == ve && lu < sa && lu < dom)
  console.log(' Lunedì e Venerdì sono stati i giorni più freddi della settimana con ' + lu + ' gradi');
else if (lu < ma && lu < me && lu < gi && lu < ve && lu == sa && lu < dom)
  console.log(' Lunedì e Sabato sono stati i giorni più freddi della settimana con ' + lu + ' gradi');
else if (lu < ma && lu < me && lu < gi && lu < ve && lu < sa && lu == dom)
  console.log(' Lunedì e Domenica sono stati i giorni più freddi della settimana con ' + lu + ' gradi');

//verifico temperatura di martedì
if (ma > lu && ma > me && ma > gi && ma > ve && ma > sa && ma > dom)
  console.log(' Martedì è stato il giorno più caldo della settimana con ' + ma + ' gradi');
if (ma < lu && ma < me && ma < gi && ma < ve && ma < sa && ma < dom)
  console.log(' Martedì è stato il giorno più freddo della settimana con ' + ma + ' gradi');
//temperature uguali martedì maggiori
if (ma > lu && ma == me && ma > gi && ma > ve && ma > sa && ma > dom)
  console.log(' Martedì e Mercoledì sono stati i giorni più caldi della settimana con ' + ma + ' gradi');
else if (ma > lu && ma > me && ma == gi && ma > ve && ma > sa && ma > dom)
  console.log(' Martedì e Giovedì sono stati i giorni più caldi della settimana con ' + ma + ' gradi');
else if (ma > lu && ma > me && ma > gi && ma == ve && ma > sa && ma > dom)
  console.log(' Martedì e Venerdì sono stati i giorni più caldi della settimana con ' + ma + ' gradi');
else if (ma > lu && ma > me && ma > gi && ma > ve && ma == sa && ma > dom)
  console.log(' Martedì e Sabato sono stati i giorni più caldi della settimana con ' + ma + ' gradi');
else if (ma > lu && ma > me && ma > gi && ma > ve && ma > sa && ma == dom)
  console.log(' Martedì e Domenica sono stati i giorni più caldi della settimana con ' + ma + ' gradi');
//temperature uguali martedì minori
if (ma > lu && ma == me && ma < gi && ma < ve && ma < sa && ma < dom)
  console.log(' Martedì e Mercoledì sono stati i giorni più freddi della settimana con ' + ma + ' gradi');
else if (ma < lu && ma < me && ma == gi && ma < ve && ma < sa && ma < dom)
  console.log(' Martedì e Giovedì sono stati i giorni più freddi della settimana con ' + ma + ' gradi');
else if (ma < lu && ma < me && ma < gi && ma == ve && ma < sa && ma < dom)
  console.log(' Martedì e Venerdì sono stati i giorni più freddi della settimana con ' + ma + ' gradi');
else if (ma < lu && ma < me && ma < gi && ma < ve && ma == sa && ma < dom)
  console.log(' Martedì e Sabato sono stati i giorni più freddi della settimana con ' + ma + ' gradi');
else if (ma < lu && ma < me && ma < gi && ma < ve && ma < sa && ma == dom)
  console.log(' Martedì e Domenica sono stati i giorni più freddi della settimana con ' + ma + ' gradi');

//verifico temperatura mercoledì
if (me > lu && me > ma && me > gi && me > ve && me > sa && me > dom)
  console.log(' Mercoledì è stato il giorno più caldo della settimana con ' + me + ' gradi');
if (me < lu && me < ma && me < gi && me < ve && me < sa && me < dom)
    console.log(' Mercoledì è stato il giorno più freddo della settimana con ' + me + ' gradi');
//temperature uguali mercoledì maggiore
if (me > lu && me > ma &&me == gi && me > ve && me > sa && me > dom)
  console.log(' Mercoledì e Giovedì sono stati i giorni più caldi della settimana con ' + me + ' gradi');
else if (me > lu && me > ma && me > gi && me == ve && me > sa && me > dom)
  console.log(' Mercoledì e Venerdì sono stati i giorni più caldi della settimana con ' + me + ' gradi');
else if (me > lu && me > ma && me > gi && me > ve && me == sa && me > dom)
  console.log(' Mercoledì e Sabato sono stati i giorni più caldi della settimana con ' + me + ' gradi');
else if (me > lu && me > ma && me > gi && me > ve && me > sa && me == dom)
  console.log(' Mercoledì e Domenica sono stati i giorni più caldi della settimana con ' + me + ' gradi');
//temperature uguali mercoledì minori
if (me > lu && me > ma && me == gi && me < ve && me < sa && me < dom)
  console.log(' Mercoledì e Giovedì sono stati i giorni più freddi della settimana con ' + me + ' gradi');
else if (me < lu && me < ma && me < gi && me == ve && me < sa && me < dom)
  console.log(' Mercoledì e Venerdì sono stati i giorni più freddi della settimana con ' + me + ' gradi');
else if (me < lu && me < ma && me < gi && me < ve && me == sa && me < dom)
  console.log(' Mercoledì e Sabato sono stati i giorni più freddi della settimana con ' + me + ' gradi');
else if (me < lu && me < ma && me < gi && me < ve && me < sa && me == dom)
  console.log(' Mercoledì e Domenica sono stati i giorni più freddi della settimana con ' + me + ' gradi');

// verifico temperatura giovadì
if (gi > lu && gi > ma && gi > me && gi > ve && gi > sa && gi > dom)
  console.log(' Giovedì è stato il giorno più caldo della settimana con ' + gi + ' gradi');
if (gi < lu && gi < ma && gi < me && gi < ve && gi < sa && gi < dom)
  console.log(' Giovedì è stato il giorno più freddo della settimana con ' + gi + ' gradi');
//temperature uguali giovedì maggiore
if (gi > lu && gi > ma && gi > me && gi == ve && gi > sa && gi > dom)
  console.log(' Giovedì e Venerdì sono stati i giorni più caldi della settimana con ' + gi + ' gradi');
else if (gi > lu && gi > ma && gi > me && gi > ven && gi == sa && gi > dom)
  console.log(' Giovedì e Sabato sono stati i giorni più caldi della settimana con ' + gi + ' gradi');
else if (gi > lu && gi > ma && gi > me && gi > ven && gi > sa && gi == dom)
  console.log(' Giovedì e Domenica sono stati i giorni più caldi della settimana con ' + gi + ' gradi');
//temperature uguali giovedì minori
if (gi > lu && gi > ma && gi > me && gi == ve && gi < sa && gi < dom)
  console.log(' Giovedì e Venerdì sono stati i giorni più freddi della settimana con ' + gi + ' gradi');
else if (gi < lu && gi < ma && gi < me && gi < ven && gi == sa && gi < dom)
  console.log(' Giovedì e Sabato sono stati i giorni più freddi della settimana con ' + gi + ' gradi');
else if (gi < lu && gi < ma && gi < me && gi < ven && gi < sa && gi == dom)
  console.log(' Giovedì e Domenica sono stati i giorni più freddi della settimana con ' + gi + ' gradi');

//verifico temperatura venerdi
if (ve > lu && ve > ma && ve > me && ve > gi && ve > sa & ve > dom)
  console.log(' Venerdì è stato il giorno più caldo della settimana con ' + ve + ' gradi');
if (ve < lu && ve < ma && ve < me && ve < gi && ve < sa & ve < dom)
  console.log(' Venerdì è stato il giorno più freddo della settimana con ' + ve + ' gradi');

//temperature uguali venerdì maggiore
if (ve > lu && ve > ma && ve > me && ve > gi && ve == sa && ve > dom)
    console.log(' Venerdì e Sabato sono stati i giorni più caldi della settimana con ' + ve + ' gradi');
else if (ve > lu && ve > ma && ve > me && ve > gi && ve > sa && ve == dom)
  console.log(' Venerdì e Domenica sono stati i giorni più caldi della settimana con ' + ve + ' gradi');
//temperature uguali venerdì minori
if (ve > lu && ve > ma && ve > me && ve > gi && ve == sa && ve < dom)
    console.log(' Venerdì e Sabato sono stati i giorni più freddi della settimana con ' + ve + ' gradi');
else if (ve < lu && ve < ma && ve < me && ve < gi && ve < sa && ve == dom)
  console.log(' Venerdì e Domenica sono stati i giorni più freddi della settimana con ' + ve + ' gradi');

//verifico temperatura sabato
if (sa > lu && sa > ma && sa > me && sa > gi && sa > ve && sa > dom)
  console.log(' Sabato è stato il giorno più caldo della settimana con ' + sa + ' gradi');
if (sa < lu && sa < ma && sa < me && sa < gi && sa < ve && sa < dom)
  console.log(' Sabato è stato il giorno più freddo della settimana con ' + sa + ' gradi');
//temperature uguali sabato maggiori
if (sa > lu && sa > ma & sa > me && sa > gi && sa > ve && sa == dom)
  console.log(' Sabato e Domenica sono stati i giorni più caldi della settimana con ' + sa + ' gradi');
//temperature uguali sabato minori
if (sa < lu && sa < ma & sa < me && sa < gi && sa < ve && sa == dom)
  console.log(' Sabato e Domenica sono stati i giorni più freddi della settimana con ' + sa + ' gradi');

//verifico temperatura Domenica
if (dom > lu && dom > ma && dom > me && dom > gi && dom > ve && dom > sa)
  console.log(' Domenica è stato il giorno più caldo della settimana con ' + dom + ' gradi');
//verifico temperatura Domenica
if (dom < lu && dom < ma && dom < me && dom < gi && dom < ve && dom < sa)
  console.log(' Domenica è stato il giorno più freddo della settimana con ' + dom + ' gradi');

