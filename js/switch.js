"use strict";

//task #1
//Напишите if..else, соответствующий следующему switch:
function showBrowserSwitch (browserName) {
  switch (browserName) {
    case 'Edge':
      console.log( "You've got the Edge!" );
      break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      console.log( 'Okay we support these browsers too' );
      break;
    default:
      console.log( 'We hope that this page looks ok!' );
  }
}

function showBrowserIfElse(brouserName) {
  if (brouserName === "Edge") {
    console.log("You've got the Edge!");
  } else if (brouserName === "Chrome" 
  || brouserName === "Firefox" 
  || brouserName === "Safari" 
  || brouserName === "Opera") {
    console.log('Okay we support these browsers too');
  } else {
    console.log('We hope that this page looks ok!');
  }
}

//showBrowserIfElse("Firefox");
//showBrowserSwitch("Firefox");

//task #2
//Перепишите код с использованием одной конструкции switch:
const numberOne = +prompt('Введите число между 0 и 3', '');
if (numberOne === 0) {
  alert('Вы ввели число 0');
}
if (numberOne === 1) {
  alert('Вы ввели число 1');
}
if (numberOne === 2 || numberOne === 3) {
  alert('Вы ввели число 2, а может и 3');
}

const numberTwo = +prompt("Введите число между 0 и 3");
switch(numberTwo) {
  case(0):
    alert("Вы ввели число 0");
    break;
  case(2):
  case(3):
    alert("Вы ввели число 2, а может и 3");
}
