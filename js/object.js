"use strict";

/*task #1 не закончила
//Объявите переменную book 
//и назначьте ей объект с именем (name) 
//'Программирование на Javascript' 
//и типом (type) 'Book'

var ПрограммированиеНаJavascript = {

};

var book = function (ПрограммированиеНаJavascript) {
  
};
*/

/* task #2
//Напишите код, выполнив задание из каждого пункта отдельной строкой:

//Создайте пустой объект user.
//Добавьте свойство name со значением John.
//Добавьте свойство surname со значением Smith.
//Измените значение свойства name на Pete.
//Удалите свойство name из объекта.

// создаем пустой объект user
let user = {
};

// добавляем свойство name со значением John
user.name = "John";

//добавляем свойство surname со значением Smith
user.surname = "Smith";

//изменяем значение свойства name на Pete
user.name = "Pete";
//удаляем свойство name из объекта
delete user.name;
*/

/*task 
//перебор свойств объкта используя for...in

//создаем объект user
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};


for (let key in user) {
  // ключи
  console.log( key );  // name, age, isAdmin
  //выводим значения всех ключей
  console.log( user[key] ); // John, 30, true
}
*/


/*task #3
//Напишите функцию isEmpty(obj), 
//которая возвращает true, если у объекта нет свойств, 
//иначе false.

//Должно работать так:
//let schedule = {};
//alert( isEmpty(schedule) ); // true
//schedule["8:30"] = "get up";
//alert( isEmpty(schedule) ); // false

function isEmpty(obj) {

  for (let key in obj) {
    //если тело начнет выполнятся, значит в объекте есть свойства;
    return(false);
  }
  return(true);
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
*/

/*task #3

//У нас есть объект, в котором хранятся зарплаты нашей команды:

//let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
//}
//Напишите код для суммирования всех зарплат 
//и сохраните результат в переменной sum. Должно получиться 390.

//Если объект salaries пуст, то результат должен быть 0.
let summ;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

summ = 0;
for (let key in salaries) {
// цикл for позволяет перебрать все свойства в цикле 
// тело цикла выполнится для каждого свойства объекта
summ += salaries[key];
}
console.log(summ);
*/

//task #4
//Создайте функцию multiplyNumeric(obj), 
//которая умножает все числовые свойства объекта obj на 2.
//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. 
//Следует напрямую изменять объект.
//Используйте typeof для проверки, что значение свойства числовое.

//в данном случае создаем новую переменную, сам массив не изменяется
/*function multiplyNumeric(obj) {
  for (let key in obj) {
    let value = obj[key];
    console.log("value: " + value);
    if (typeof value == "number") {
      value *= 2;
      console.log("value new: " + value);
    }
  }
}*/

//что бы изменялись значения свойств объекта
/*function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);
*/