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

console.log(massive);
console.log(massive[0]);

//task3
//Создайте и выведите массив состоящий из "firstWizardName" 
//и "secondWizardName"'
let firstWizardName = "Peter";
let secondWizardName = "Alex";
let numberWizardName = [firstWizardName, secondWizardName];
console.log(numberWizardName);

//task5
//поменяем элемент в массиве:
numberWizardName[0] = "Egor"; //меняем элемент
console.log(numberWizardName);
let i = 0;
console.log(numberWizardName[i]);
console.log(numberWizardName[++i]);

//task6
//добавить имена в массив и перебрать все имена, вывести в консоль

numberWizardName[++i] = "Max";//результат разный i++ b ++i
numberWizardName[++i] = "john";
console.log(numberWizardName);
//перебираем имена с помощью цикла for
function massiveNames() {
  for (i = 0; i < numberWizardName.length; i++) {
  console.log(i+1 + ": " + numberWizardName[i]);
  }
}

//task7
//добавить элемент в массив
//Чтобы добавить новый элемент в массив 
//нужно просто записать значение в индекс элемента, которого нет.

numberWizardName[numberWizardName.length] = "Ric";
console.log(numberWizardName);

numberWizardName[numberWizardName.length] = "nic";
console.log(numberWizardName);

//task8
//узнать количество элементов в массиве

console.log("количество элементов в массиве: " + numberWizardName.length);

//если я добавлю отрицательный элемент в массив

numberWizardName[-numberWizardName.length] = "Dic";
massiveNames();
console.log("количество элементов в массиве: " + numberWizardName.length);

//task9

//выведем имя последнего элемента массива
//В качестве индекса может выступать 
//любое выражение в JavaScript, которое возвращает целое число (integer).
console.log(numberWizardName[numberWizardName.length - 1]);

//task10

//Если длине присвоить новое значение, 
//то массив можно либо расширить, либо сократить

numberWizardName.length = numberWizardName.length + 2;
console.log(numberWizardName);

numberWizardName.length = numberWizardName.length - 4;
console.log(numberWizardName);

numberWizardName.length = 2; //если ..=-2 - выдасть ошибку
console.log(numberWizardName);

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