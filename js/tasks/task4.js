"use strict";
//Напишите функцию fizzbuzz, которая принимает параметр number и:
//Для чисел, кратных трём, возвращает 'Fizz'
//Для чисел, кратных пяти, возвращает 'Buzz'
//Для чисел, кратных пятнадцати (одновременно трём и пяти), возвращает 'FizzBuzz'
//В остальных случаях возвращает исходное число


function fizzbuzz (n) {
  let number = n;
  let number3 = 3;
  let number5 = 5;
  let result3 = number % number3;
  let result5 = number % number5;
  if (number == 0) {
    alert(number);
  } else if (result3 === 0 && result3 === 0) {
    alert ("FizzBizz");
  } else if (result5 === 0) {
    alert ("Buzz");
  } else if (result3 === 0) {
    alert ("Fizz");
  } else {
    alert (number);
  }
}

// использую тернарный оператор
function fizzbuzz2 (n) {
  let number = n;
  let number3 = 3;
  let number5 = 5;
  let result3 = number % number3;
  let result5 = number % number5;
  (number == 0) ? alert(number):
  (result3 === 0 && result3 === 0) ? alert ("FizzBizz"):
  (result5 === 0) ? alert ("Buzz"):
  (result3 === 0) ? alert ("Fizz"):
  alert (number);
}

let n = prompt("введите число");
fizzbuzz (n);