/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.

  Esempio:
    Output: 1 2 3 4 5 6 7 8 9 10
            11 12 13 14 15 16 17 18 19 20
            21 22 23 24 25 26 27 28 29 30
            31 32 33 34 35 36 37 38 39 40
            41 42 43 44 45 46 47 48 49 50
            51 52 53 54 55 56 57 58 59 60
            61 62 63 64 65 66 67 68 69 70
            71 72 73 74 75 76 77 78 79 80
            81 82 83 84 85 86 87 88 89 90
            91 92 93 94 95 96 97 98 99 100

  Consiglio:
  Per andare a capo usa '\n'.

  http://www.imparareaprogrammare.it
*/

var i = 0;
var x = 0;
var raw1 = "";
var raw2 = "";
var raw3 = "";
var raw4 = "";
var raw5 = "";
var raw6 = "";
var raw7 = "";
var raw8 = "";
var raw9 = "";
var raw10 = "";

//prima decina
do {
 i++;
 x++;
if(i == 1) {
  raw1 = i;
}
else
{
   raw1 = raw1 + " " + i;
}
  if(x >= 10) {
    x = 0;

}
} while (i < 10);

//seconda decina
do {
 i++;
 x++;
if(i == 11) {
  raw2 = i;
}
else
{
   raw2 = raw2 + " " + i;
}
  if(x >= 20) {
    x = 0;

}
} while (i < 20);

//terza decina
do {
 i++;
 x++;
if(i == 21) {
  raw3 = i;
}
else
{
   raw3 = raw3 + " " + i;
}
  if(x >= 30) {
    x = 0;

}
} while (i < 30);

//quarta decina
do {
 i++;
 x++;
if(i == 31) {
  raw4 = i;
}
else
{
   raw4 = raw4 + " " + i;
}
  if(x >= 40) {
    x = 0;

}
} while (i < 40);

//quinta decina
do {
 i++;
 x++;
if(i == 41) {
  raw5 = i;
}
else
{
   raw5 = raw5 + " " + i;
}
  if(x >= 50) {
    x = 0;

}
} while (i < 50);

//sesta decina
do {
 i++;
 x++;
if(i == 51) {
  raw6 = i;
}
else
{
   raw6 = raw6 + " " + i;
}
  if(x >= 60) {
    x = 0;

}
} while (i < 60);

//settima decina
do {
 i++;
 x++;
if(i == 61) {
  raw7 = i;
}
else
{
   raw7 = raw7 + " " + i;
}
  if(x >= 70) {
    x = 0;

}
} while (i < 70);

//ottava decina
do {
 i++;
 x++;
if(i == 71) {
  raw8 = i;
}
else
{
   raw8 = raw8 + " " + i;
}
  if(x >= 80) {
    x = 0;

}
} while (i < 80);

//nona decina
do {
 i++;
 x++;
if(i == 81) {
  raw9 = i;
}
else
{
   raw9 = raw9 + " " + i;
}
  if(x >= 90) {
    x = 0;

}
} while (i < 90);

//decima decina
do {
 i++;
 x++;
if(i == 91) {
  raw10 = i;
}
else
{
   raw10 = raw10 + " " + i;
}
  if(x >= 100) {
    x = 0;

}
} while (i < 100);


console.log(raw1 + "\n" + raw2 + "\n" + raw3 + "\n" + raw4 + "\n" + raw5 + "\n" + raw6 + "\n" + raw7 + "\n" + raw8 + "\n" + raw9 + "\n" + raw10);
console.log('end');
