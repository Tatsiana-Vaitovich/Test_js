"use strict";
//task1
//код, который будет доставать случайное число из массива:

let number = 9;
let massive = [1, 3, 8, number, "number " + number]; 
//в массив можно класть не только константы, но и переменные
//В качестве значения может также выступать выражение, 
//которое будет вычислено и сохранено в соответсвующем элементе массива.

//console.log(massive[Math.floor(Math.random() * massive.length)]);

//math.random() генерирует случайное число от 0 до 1;
//massive.length - позволяет обратиться к количеству элементов в массиве;
//т.о получим случайное число от 0 до числа элементов в массиве;
//math.floor() - округлит число вниз, т.к в данном случае необходимо, 
//чтобы результат был на 1 меньше, чем количество элементов в массиве,
//т.к нумерация элементов в массиве начинается с 0.

//task2
//выведем его элементы massive

//console.log(massive);
//console.log(massive[0]);

//task3
//Создайте и выведите массив состоящий из "firstWizardName" 
//и "secondWizardName"'
let firstWizardName = "Peter";
let secondWizardName = "Alex";
let numberWizardName = [firstWizardName, secondWizardName];
//console.log(numberWizardName);

//task5
//поменяем элемент в массиве:
numberWizardName[0] = "Egor"; //меняем элемент
//console.log(numberWizardName);
let i = 0;
//console.log(numberWizardName[i]);
//console.log(numberWizardName[++i]);

//task6
//добавить имена в массив и перебрать все имена, вывести в консоль

numberWizardName[++i] = "Max";//результат разный i++ b ++i
numberWizardName[++i] = "john";
//console.log(numberWizardName);
//перебираем имена с помощью цикла for
function massiveNames() {
  for (i = 0; i < numberWizardName.length; i++) {
  //console.log(i+1 + ": " + numberWizardName[i]);
  }
}

//task7
//добавить элемент в массив
//Чтобы добавить новый элемент в массив 
//нужно просто записать значение в индекс элемента, которого нет.

numberWizardName[numberWizardName.length] = "Ric";
//console.log(numberWizardName);

numberWizardName[numberWizardName.length] = "nic";
//console.log(numberWizardName);

//task8
//узнать количество элементов в массиве

//console.log("количество элементов в массиве: " + numberWizardName.length);

//если я добавлю отрицательный элемент в массив

numberWizardName[-numberWizardName.length] = "Dic";
massiveNames();
//console.log("количество элементов в массиве: " + numberWizardName.length);

//task9

//выведем имя последнего элемента массива
//В качестве индекса может выступать 
//любое выражение в JavaScript, которое возвращает целое число (integer).
//console.log(numberWizardName[numberWizardName.length - 1]);

//task10

//Если длине присвоить новое значение, 
//то массив можно либо расширить, либо сократить

numberWizardName.length = numberWizardName.length + 2;
//console.log(numberWizardName);

numberWizardName.length = numberWizardName.length - 4;
//console.log(numberWizardName);

numberWizardName.length = 2; //если ..=-2 - выдасть ошибку
//console.log(numberWizardName);

/*task11
//Создайте и выведите массив состоящий из 
//вашего возраста имени и фамилии

let userAge = prompt("введите ваш возвраст");
let userName = prompt("введите ваше имя");
let userSurname = prompt("введите вашу фамилию");
let userData = [userSurname, userName, userAge];
//alert("фамилия: "+ userData[0] + " имя: " + userData[1] + " возвраст: " + userData[2]);
alert(userData);
*/

//task12
/*многомерный массив

let usersData = [
  ["Yury", 1977],
  ["Tatsiana", 1983],
  ["Egor", 2009],
  ["Anna", 2013]
];

console.log(usersData);

//Чтобы достать, например, anna — нужно сначала обратиться к usersData, а потом из 3-го элемента извлечь anna:

let userLast = usersData[usersData.length - 1];
let userLastName = userLast[0];
console.log(userLastName);

//также элемент многомерного массива можно вызвать так:
console.log(usersData[usersData.length - 1][0]);//выведет Anna

*/
/*task13 

var bag = [
  ['Посох', 'Кулак'],
  ['Файрбол', 'Молния', 'Стрела'],
  ['Проклятие', 'Заклинание']
];

var bagPocket1 = bag[0];
var bagPocket2 = bag[1];
var bagPocket3 = bag[2];

console.log('Положите в левую руку молнию');

var leftHand = bagPocket2[1];

console.log('Положите в правую руку заклинание');

var rightHand = bagPocket3[1];

console.log('У мага в левой руке: ' + leftHand + ', а в правой: ' + rightHand);

console.log('Всего предметов в сумке у мага: ' + Number(bagPocket1.length + bagPocket2.length + bagPocket3.length));


//task 14: методы

usersData.push(["Lena", 1997]);//push добавлеяет элемент в конце массива
console.log(usersData);
usersData.pop();//удаляем элемент в конце массива
console.log(usersData);
usersData.unshift(["Lena", 1997]);// добавлеяет элемент в начале массива
console.log(usersData);
usersData.shift();//удаляем элемент в начале массива
console.log(usersData);
console.log(usersData.length);
console.log(usersData.slice(1,3));//получаем  фрагмент массива
console.log(typeof(usersData));//проверяем тип значений, используя оператор typeof
*/

//task15
/*перебор элементов массива
for (let elemen of usersData) {//используем цикл for...of
  console.log("name, use cycle for...of: " + elemen);
}

for (let i = 0; i < usersData.length; i++) {//используем цикл for
  console.log("name, use cycle for" + usersData[i]);
}

for (let key in usersData) {//т.к массив это объект, то для перебора свойств можно использовать цикл for in но в этом случае могут быть проблемы
  console.log("name, use cycle for...in: " + usersData[key]);//выведет значения свойств
}

for (let key in usersData) {
  console.log("key, use cyclt for...in: " + key);//выведет индексы свойств
}
*/

//task 16
/*эксперимент с копией элемента многомерного массива
console.log(usersData[0]);
let father = usersData[0];
console.log(usersData);
console.log(father);
usersData[0] = "sljg";
console.log("father: " + father);//получили 2 разных, независимых массива father and usersData[0];
console.log("typeof(father): " + typeof(father));//object
console.log("userData[0]: " + usersData[0]);
console.log("typeof(userData[0]: " + typeof(usersData[0]));//string
console.log("typeof(userData): " + typeof(usersData));//object
for (let elemen of father) {
  console.log("element of father: " + elemen);//цикл for...of перебирает елементы массива
}
*/

/*task17

//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//Удалите первый элемент массива и покажите его.
//Вставьте «Рэп» и «Регги» в начало массива.

let styles = ["Джаз", "Блюз",];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.floor((styles.length)/2)] = "Классика";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);
*/

/*task 18

//Напишите функцию sumInput(), которая:
//Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
//Подсчитывает и возвращает сумму элементов массива.
//P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let element;
  let arr = [];
  let sumArr;
  do {
  element = prompt("введите значение");
  //проверяем, является введенное значение числом:
  if (element === "" || element === null || !isFinite(element)) {
    //isFinite(value) преобразует аргумент в число и возвращает true, 
    //если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
    //пустая строка интерпретируется как 0 во всех числовых функциях, 
    //включаяisFinite.
    break;
  } else {
    element = Number(element);
    arr.push(element);
    }
  } while (true);
  alert("введен массив: " + arr);
  sumArr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sumArr += arr[i];
  }
  alert("cумма элементов массива: " + sumArr);
}

sumInput();
*/
//-------------------------
//методы массивов

//1. вставка/удаление элементов --------

//метод для удаления элемента из массива
//arr.splice(index[, deleteCount, elem1, ..., elemN])
let arr = ["я", "изучаю", "js"];
arr.splice(0, 1);
//console.log(arr); //"изучаю", "js"
//добавим элемены в массив
arr.push("прямо", "сейчас");
arr.unshift("я");
//console.log(arr);
//удалим первых 3 элемента и заменим их другими
arr.splice(0, 3, "давай", "танцевать");
//console.log(arr);
let arrNew = ["я", "изучаю", "js", "прямо", "сейчас"];
//console.log(arrNew);
//удалим 2 первых элемента
//и выведем массив из удаленных элементов
let removed = arrNew.splice(0, 2);//"я", "изучаю"
//console.log(removed);
//чтобы вставить элементы в массив без удаления достаточно указать deleteCount 0
//вставим после 2 элемента 
removed.splice(2, 0, "сложный", "язык");
//console.log(removed.splice(2, 0, "сложный", "язык"));// [] - ничего не удаляем
//console.log(removed);//я изучаю сложный язык
//в методах массива разрешены отрицательные индексы. они позволяют осчитывать элементы с конца
//console.log(arr);//давай танцевать прямо сейчас
arr.splice(-1, 2, "завтра");//давай танцевать прямо завтра - отсчет ведется с конца массива
//console.log(arr);

//2.копирование элементов----------
//метод slice возвращает новый массив, в который копирует элементы, начиная с индекса start до end
//arr.slice([start], [end])
let arrSlice = arr.slice(2, 3)
//console.log(arrSlice);//прямо
let arrSl = arr.slice(-3, -1)
//console.log(arrSl);//танцевать прямо

//метод concat создает новый массив, в который копируются данные из других массивов и доп значения
//arr.concat(arg1, arg2...)
//console.log(arr); //давай танцевать прямо завтра
//console.log(removed);//я изучаю сложный язык
//let arrSum = arr.concat("lf", "lg");//давай танцевать прямо завтра lf lg
let arrSum = removed.concat(arr, "lf", "lg");//я изучаю сложный язык давай танцевать прямо завтра lf lg
//console.log(arrSum);

//3.запуск функции для каждого элемента массива-----
//метод arr.forEach - позволяет запускать функцию для каждого элемента массива
// arr.forEach(console.log);

//4.поиск в массиве--------
//arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, 
//на котором был найден искомый элемент, в противном случае -1
//console.log(arrSum);
//console.log(arrSum.indexOf("завтра", 0));//7
//arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
//console.log(arrSum.lastIndexOf("завтра", 10));//7
//arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
//console.log(arrSum.includes("завтра", 0));//true
//все эти методы используют строгое сравнение

//метод arr.find используется, если есть массив объектов и надо найти объект с определённым условием
//let result = arr.find(function(item, index, array)
let wether = [
  {name: "winter", temperature: -10},
  {name: "spring", temperature: 15},
  {name: "summer", temperature: 25},
  {name: "autumn", temperature: 5}
];
let temperature = wether.find(item => item.temperature == -10);
//console.log(temperature);//{name: "winter", temperature: -10}
//console.log(temperature.name);//winter
//Метод arr.findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, 
//а не сам элемент, и -1, если ничего не найдено.
let temperatureIndex = wether.findIndex(item => item.temperature == -10);
//console.log(temperatureIndex);//0
//метод find ищет один (первый попавшийся) элемент, на котором функция-колбек вернет true;
//метод filter - возвращает массив из всех подходящих элементов
//let results = arr.filter(function(item, index, array) 
let temperatures = wether.filter(item => item.temperature > 0);
//console.log(temperatures);

//5.преобразование массива

//метод map вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции
//let result = arr.map(function(item, index, array)
//console.log(arr);//давай танцевать прямо завтра
let arrLenght = arr.map(item => item.length);
//console.log(arrLenght);//[5, 9, 5, 6]

//Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов
//console.log(arr)//давай танцевать прямо завтра
arr.sort();
//console.log(arr);//давай завтра прямо танцевать
//по умолчанию элементы сортируются как строки
let numbers = [10, 42, 36, 6];
//console.log(numbers.sort());//10, 36, 42, 6 - отсортировано как строки
//чтобы элементы сортировались как числа, необходимо написать функцию для сортировки
function compare(a,b) {
  if(a > b) return 1; 
  if (a < b) return -1;
  return 0;
}
numbers.sort((a, b) => a > b ?  1 : -1);
//console.log(numbers);//6, 10, 36, 42
numbers.sort((a, b) => a > b ? -1 : 1);
//console.log(numbers);//42, 36, 10, 6
numbers.sort(compare);
//console.log(numbers);

//Метод arr.reverse меняет порядок элементов в arr на обратный.
numbers.reverse();
//console.log(numbers);//6, 10, 36, 42

//Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim
let names = "Anna, Egor, Tanja, Yury";
let arrNames = names.split(", ");
// console.log(arrNames);//["Anna", "Egor", "Tanja", "Yury"]

//Вызов split(s) с пустым аргументом s разбил бы строку на массив букв
let arrLetters = names.split("");
// console.log(arrLetters);//["A", "n", "n", "a"..]

//Вызов arr.join(glue) делает в точности противоположное split. 
//Он создаёт строку из элементов arr, вставляя glue между ними.
let newNames = arrNames.join("; ");
// console.log(newNames);//Egor; Anna; Tanja; Yury

//5. перебор массива
//можно для этого использовать for
/*console.log(arrNames);
for (let i = 0; i < arrNames.length; i++) {
  console.log("for " + arrNames[i]);
}
//можно использовать для перебора массива for...of
for (let value of arrNames) {//выведет значения свойств
  console.log("for...of " + value);
}
//для сравнения с for...in
for (let key in arrNames) {//выведет ключи - 0, 1, 2, 3
  console.log(key);
}
//можно использовать метод forEach
arrNames.forEach(console.log);
//используем метод map
function useMap(item) {
  return ("value" + item);
}
let arrNamesMap = arrNames.map(useMap);
//let arrNamesMap = arrNames.map(item => "value " + item);
// console.log(arrNamesMap);
//Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее. 
//Они используются для вычисления какого-нибудь единого значения на основе всего массива
// console.log(numbers);//[6, 10, 36, 42]
//используя метод reduce получим сумму элементов массива
// console.log(numbers.reduce((summ, current) => summ + current, 0));//94. 
//0 - initial - результат предыдущего вызова этой функции, в данном случае принимаем, что на начало вычисления initial = 0
// console.log(numbers.reduce((summ, current) => summ + current));//94. 
//т.к по умолчанию, если initial не задан, в качестве первого значения берется первый элемент массива и перебор стартует со второго
//но так м.б ошибки
//метод arr.reduceRight работает аналогично, но проходит по массиву справа налево*/


//6. метод, для проверки данный объект массив или объект
//Array.isArray(объект для проверки) - возвращает true, если массив; false - если объект
/*console.log(wether);//[]
console.log(typeof(wether));//object
console.log(wether[0]);//{}
console.log(typeof(wether[0]));//object
console.log(Array.isArray(wether));//true - []
console.log(Array.isArray(wether[0]));//false - {}*/

//Почти все методы массива, которые вызывают функции – такие как find, filter, map, 
//за исключением метода sort, принимают необязательный параметр thisArg.

//task 19
//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
  // чтобы изменить регистр символов в строке использую метод str.toUpperCase()
  let arr = str.split("-");
  // первые буквы в словах, начиная со второго, д.б заглавные
  arr.forEach((item, index) => {
    if (index > 0) {
      arr[index] = item[0].toUpperCase() + item.substring(1);
    }
  });
  console.log(arr);
  let newStr = arr.join("");
  console.log(newStr);
} 

let str = "my-short-string";
// camelize(str);

//task 20
//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
//ищет в нём элементы между a и b и отдаёт массив этих элементов.

function filterRange(arr, a, b) {
  let newArr = arr.filter(item => a <= item && item <= b ? item : "");
  console.log(newArr);
}

//filterRange(numbers, 10, 50);

//task 21
//Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать

function filterRangeInPlace(arr, a, b) {
  console.log("task 21")
  console.log("функция изменяет массив, удаляя из него элементы до элемента со значением " + a + " и после элемента со значением " + b)
  console.log("исходный массив " + arr)
  let newArr = arr.filter(item => a < item && item < b);//получили массив из значений, удовлетворяющих условие
  let firstValue = newArr[0];
  let firstIndex = arr.findIndex(item => item == firstValue);
  //для удаления использую метод splice(firstIndex, lastIndex-firstIndex);
  console.log(arr.splice(firstIndex, newArr.length));
}

//numbers[6, 10, 36, 42]
// filterRangeInPlace(numbers, 10, 40);

function filterRangeInPlace1 (arr, a, b) {
  console.log("task 21-1")
  console.log("функция изменяет массив, удаляе из него элементы, которые меньше " + a + " и больше " + b)
  console.log("исходный массив " + arr);
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    //удаляем элементы, которые не соответсвуют условию
    if (a > value || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
}

// filterRangeInPlace1(numbers, 10, 50);

// task 22
// сортировать массив в порядке по убыванию
function sortArrNumber(arr) {
  console.log("исходный массив " + arr);
  console.log(arr.sort());//числа отсортированы как строки
  function compare(a, b) {
    /*let result = 
    a < b ? 1 : //от функции сравнения требуется положительное число, чтобы сказать "больше"
    a > b ? -1 ://и отрицательное число, чтобы сказать "меньше"
    0 ;
    return result;*/
    // или можно просто написать для сортировки по убыванию
    return (b - a);
  }
  //console.log(arr.sort((a, b) => a < b ? 1 : -1));
  //или
  console.log(arr.sort((a, b) => b - a));
  // или
  // console.log(arr.sort(compare));
}

// sortArrNumber(numbers);

// task 23
// У нас есть массив строк arr. Нужно получить отсортированную копию, 
// но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
  //для сортировки используется метод sort. но он меняет исходный массив
  //для создании копии массива можно использовать метод slice
  let copy = arr.slice();
  copy.sort();
  console.log(arr);//без изменений
  console.log(copy);//измененная копия
}
arr.reverse();
// copySorted(arr);

// task 23
// Создайте функцию конструктор Calculator, 
// которая создаёт «расширяемые» объекты калькулятора.
// функция-конструктор - это обычная функция. но есть правила:
// ее имя начинается с заглавной буквы 
// и вызывается она при помощи оператора new

// создам обычный калькулятор
/*function Calculator() {
  this.a = prompt("введите число а");
  this.b = prompt("введите число в");
  this.summ = function(){
    let summ = +this.a + +this.b;
    alert(this.a + " + " + this.b + " = " + summ);
  };
  this.mul = function() {
    let mul = +this.a * +this.b;
    alert(this.a + " * " + this.b + " = " + mul);
  }
}
let calculator = new Calculator();
calculator.summ();
calculator.mul();
*/

// задам a и в как параметры

/*function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.summ = function(){
    let summ = +this.a + +this.b;
    console.log(this.a + " + " + this.b + " = " + summ);
  };
  this.mul = function() {
    let mul = +this.a * +this.b;
    console.log(this.a + " * " + this.b + " = " + mul);
  }
}
let calculator = new Calculator(3, 4);
calculator.summ();
calculator.mul();
*/
// Метод eval() выполняет JavaScript код, представленный строкой
// чтобы создать расширяемый калькулятор нужно ввести дополнительный параметр - фунция
/*function Calculator(str) {
    // this.str = str;
    this.result = str => eval(str)
}

let calcul = new Calculator();
console.log(calcul.result("4*3"));
// console.log(calcul.addMetod("*", (a, b) => a * b);*/

function Calculator(){
  this['+'] = (a, b) => a + b;//создаем метод используя функцию-стрелку
  this['-'] = (a, b) => a - b;
  this.calculate = (str) => {
  let arr = str.split(' ');//преобразуем полученную строку в массив
  return this[arr[1]](+arr[0], +arr[2]);//возвращаем результат функции сложения или вычитания
  };
  this.addMethod = (operation, func) => {//добавляем новый метод
  this[operation] = func;
  };
}
  
  let calc = new Calculator;
  
  // console.log( calc.calculate("3 + 7") ); // 10
  let powerCalc = new Calculator;
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  let result = powerCalc.calculate("2 ** 3");
  // console.log( result ); // 8

// task 24
// У вас есть массив объектов, и в каждом из них есть свойство name. 
// Напишите код, который преобразует их в массив имён.

//использую массив wether
function transformationArr(arr){
  console.log("исходный массив" + arr);
  //для преобразования каждого элемента массива можно использовать метод map
  let arrResult = arr.map(item => item.name);//метод map вызывает функцию для каждого элемента массива
  console.log(arrResult);
}

// transformationArr(wether);

// task25
// У вас есть массив объектов user, и у каждого из объектов есть 
// name, surname и id.
// Напишите код, который создаст ещё один массив объектов 
// с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 30};
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 40};
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 20};

let users = [vasya, petya, masha];

function createNewArrayForUsersData(initialArr) {
  console.log(initialArr);
  //для строк могут использоваться '', "", ``. 
  // `` - в такую строку можно вставлять произвольные выражения, 
  // обернув их в ${...}
  let result = initialArr.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}));
  console.log(result);
}

// createNewArrayForUsersData(users);

// task 26 
// Напишите функцию sortByAge(users), 
// которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(arr) {
  console.log(arr);
  // для сортировки используем метод sort
  arr.sort(sortedByAge);
  function sortedByAge(a, b)  {
    let result = b.age - a.age;
    return result;
  }
}

// sortByAge(users);

// task 27
// Напишите функцию shuffle(array), которая перемешивает 
// (переупорядочивает случайным образом) элементы массива.

function shuffle(arr) {
  // чтобы получить случайное число используем функцию
  function getRandomNumber() {
    // функция Math.random() Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
    //получим случайное число от 1 до -1
    let randomNumber = -1 + Math.random() * 2;
    return(randomNumber);
  }
  arr.sort(getRandomNumber);//для сравнения достаточно, чтобы возвращалось положительное или отрицательное число
  console.log(arr);
}

// shuffle(users);

// task 28
// Напишите функцию getAverageAge(users), 
// которая принимает массив объектов со свойством age 
// и возвращает средний возраст.

function getAverageAge(arr) {
  console.log(arr);
  //для вычисления какого-нибудь единого значения на основе всего массива 
  //применяются методы arr.reduce и reduceRight
  // чтобы получить все значения возвраста используем метод map 
  // в отличие от filter, map вызывает функцию для каждого элемента массива
  // и возвращает массив результатов, а filter возвращает массив элементов, 
  // для которых функция-колбэк вернет true
  //получим массив элементов item.age:
  /*let arrAge = arr.map(getArrAge);
  function getArrAge(arr) {
    let result = arr.age;
    console.log(result);
    return result;
  }*/
  // или если использовать функцию-стрелку:
  let arrAge = arr.map(item => item.age);
  let averageAge = arrAge.reduce(((sum, current) => (sum + current)/arrAge.length));
  // округлим полученный результат до сотых (использую функцию округления до ближайшего целого):
  console.log((Math.round(averageAge * 100))/100);// получим число, округленное до сотых
  // также для округления можем использовать метод toFixed(n)
  console.log(averageAge.toFixed(2)); // число округлится, но вернет строку "result"
  console.log(averageAge);
}

// getAverageAge(users);

// task 29
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, 
// содержащий только уникальные элементы arr.
// для решения данной задачи нужно знать свойства строк

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  console.log(arr);
  // если мы хотим проверить наличие элемента в массиве
  // и нет необходимости знать его точный индекс
  // предпочтительно использование arr.includes. метод возвращает true/false
  let resultArr = [];
  for (let value of arr) {
  if (!resultArr.includes(value)) {
    resultArr.push(value);
  } 
  }
  console.log(resultArr);
}

// unique(strings);