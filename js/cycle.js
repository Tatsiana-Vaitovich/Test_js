"use strict";
//task #1
//При помощи цикла for выведите чётные числа от 2 до 10

//my solution
function showEven (a, b) {
  let firstNumber = a;
  let lastNumber = b;
  let number;
  for (number = firstNumber; number <= lastNumber; number++) {
    let result = number % 2;
    if (result !==0) continue; //continue and break - только с for
    console.log(number);
  }
}

//their solution
/*for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}*/

//task #2
//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
function showEvenWithFor (c, d) {
  let firstNumber = c;
  let lastNumber = d;
  let number = firstNumber;
  while (number <= lastNumber) {
    let result = number % 2;
    if (result==0) {
    console.log(number);
    }
    number++;
  }
}

//task #3
//Напишите цикл, который предлагает prompt ввести число, большее 100. 
//Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

//Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

//Предполагается, что посетитель вводит только числа. 
//Предусматривать обработку нечисловых строк в этой задаче необязательно.
  
/*let j;
do {
  j = prompt("введите число, которое больше 100");
}
  while (j <= 100 && j); */
  //while (j) то же самое, что while (j !=0)
  // почему когда условие j<100 при вводе 100 - тоже цикл останавливается?
  //Проверка && j вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить.
  //Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.

//task #4
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
//Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Для n = 10 результат должен быть 2,3,5,7.
//P.S. Код также должен легко модифицироваться для любых других интервалов.

function showPrimeNumber (e, f) {
  let rangeFirstNumber = e;
  let rangeLastNumber = f;
  let divisor;
  let result;
  nextNumber: //метка. используется, чтобы выйти из нескольких уровней цикла
  for (e; e <= f; e++) {
    for (divisor = 2; divisor < e; divisor++) {
        result = e % divisor;
        if (result === 0) continue nextNumber;//переходим к следующему числу
    }
    console.log("primeNumber: " + e);
  }
}

showPrimeNumber (1, 9);

//task #5
//Просуммируем несколько элементов арифметической прогрессии. 
//Арифметической прогрессией называют ряд чисел, 
//каждое последующее из которых равно предыдущему, 
//плюс какое-то фиксированное число.
//Напишем функцию. 
//Первым параметром будет первое число (base), 
//вторым — разница между соседними числами (diff) 
//и третьим — количество элементов последовательности (count).

function showArithmeticalProgression(base, diff, count) {
  let counter = 1;

  for (counter; counter <= count; counter++) {
    console.log(base);
    base = base + diff;
  }
}

showArithmeticalProgression(2, 3, 5);

//task #6
//Напишите функцию isPlain, 
//определяющую, 
//является ли переданное целое положительное число — простым. 
//Функция будет принимать один параметр number и возвращать true, 
//если число — простое 
//и false, если число делится на другое целое число без остатка. 
//Например, числа 2, 3 и 5 являются простыми, 
//а 9, 12 и 40 — не являются. 
//В решении используйте цикл for. 
//Чтобы проверить, является ли число простым, 
//достаточно проверить, делится ли оно на числа от 2 
//до половины number (включительно) без остатка.

function isPlain(number) {
  let divisor = 2;
  let result;

  for (divisor; divisor < number; divisor++) {
    result = number % divisor;
      if (result == 0) {
        console.log(number + " - не простое число");
        return;
      }
    }

  console.log(number + " - простое число");
}

isPlain(10);

//task #7
//Напишите функцию fib, получающую на вход положительное целое число 
//и возвращающую число фибоначчи с указанным номером. 
//(Первое и второе числа фибоначчи: 
//1, начиная с третьего, число фибоначчи 
//равно сумме двух предыдущих чисел). 
//Необходимо выполнить задание, используя цикл.

function fib(number) {
  let fibFirst = 0;
  let fibSecond = 1;
  let fibNumber;
  let counter;

  for (counter = 2; number >= counter; counter++) {
  fibNumber = fibFirst + fibSecond;
  fibFirst = fibSecond;
  fibSecond = fibNumber;
  }

  console.log(fibNumber);
}

fib(6);

//task #8
//Напишите функцию digitSumm, 
//вычисляющую сумму цифр числа. 
//Первый параметр функции — number. 
//Для получения цифр используйте 
//операцию получения остатка от деления %.


function digitSumm(number) {
  let controlNumber = 1;
  let rest = number % controlNumber; ;
  let result = number / controlNumber;
  let currentDigit;
  let previousDigit = 0;
  let summ;

  while (result > 9) {
    console.log ("result: " + result);
    controlNumber = controlNumber * 10;
    result = number / controlNumber;
  }

  console.log("controlNumder: " + controlNumber);

  for (controlNumber; controlNumber >= 1; controlNumber / 10) {
    rest = number % controlNumber;
    console.log("rest: " + rest);

    if (rest == 0 ) {
      currentDigit = number / controlNumber;
      console.log("currentDigit if rest == 0: " + currentDigit);
      summ = currentDigit + previousDigit;
      console.log("digitSumm: " + summ);
      return;
    } else if (rest > 10) {
      currentDigit = rest % 10; 
      console.log("currentDigit if rest > 10: " + currentDigit);
    }  else {
      currentDigit = rest;
      console.log("currentDigit else: " + currentDigit);
    }
    summ =  currentDigit + previousDigit;
    previousDigit = summ;
    console.log("previousDigit: " + previousDigit);
    number = (number - currentDigit) / 10;
    console.log("number: " + number);
  }
  alert(digitSumm);
}

digitSumm(11);