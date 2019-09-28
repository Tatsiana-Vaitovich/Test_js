"use strict";

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
let age = prompt("укажите ваш возвраст");
checkAge(age);*/

//без if, используя ?
/*function checkAge(age) {
return (age>18) ? true : confirm("родители разрешили?");
}
let age = prompt("укажите ваш возвраст");
checkAge(age);*/

//без if, используя ||

/*function checkAge(age) {
  return (age<18) || age==18 ? confirm("родители разрешили?") : true;
}
let age = prompt("укажите ваш возвраст");
checkAge(age);*/

//или

function checkAge(age) {
  return (age<18) || confirm("родители разрешили?");
}
let age = prompt("укажите ваш возвраст");
checkAge(age);

