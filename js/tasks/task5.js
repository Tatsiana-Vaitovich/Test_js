"use strict";
//Напишите фунцию iGoToNorth, 
//которая принимает параметр number 
//и определяет, подходит ли нам переданное число. 
//Число подходит если оно больше 10, меньше 30 и кратно 7.

var number = prompt ("Введите число");

function iGoToNorth (number) {
  var n = number;
  var result = number % 7;
  (number > 10 && number < 30 && result === 0) ? alert ("число подходит") : alert ("число не подходит");
}

iGoToNorth (number);