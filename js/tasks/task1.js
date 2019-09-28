"use strict";
//В коробке лежит 10 красных фишек, 
//20 синих и 40 жёлтых. 
//Фиолетовых фишек столько, сколько синих и красных вместе. 
//Зелёных столько, сколько жёлтых и синих. 
//Оранжевых столько, сколько жёлтых и красных. 
//Посчитайте количество чёрных фишек, 
//если оно равно сумме количества зелёных, оранжевых и фиолетовых фишек.



function sum(r, b, y) {
var red = r;
var blue = b;
var yellow = y;
var purple = red + blue;//30
var green = yellow + blue;//60
var orange = green + red;//70
var black = green + orange + purple;//160
//alert(black);
console.log(black);
}
sum(20, 20, 40);
