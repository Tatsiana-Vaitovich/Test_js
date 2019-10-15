"use strict";
//Замените код Function Expression стрелочной функцией:

/*
//вариант №1

function ask (question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  alert("Вы согласились.");
}

function showCancel() {
  alert("Вы отменили выполнение.");
}

ask ("Вы согласны?", showOk, showCancel); 
//функции showOk and showCancel передаются в качестве аргументов ask

//вариант №2 функция-колбэк. 
//мы передаем функцию и ожидаем, 
//что она вызовется обратно когда нибудь позже, 
//если это будет необходимо.
//showOk становится колбэком для ответа "yes", 
//a showCansel - для ответа "no"

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

// question - текст вопроса;
// yes - функция, которая будет вызываться, если ответ положительный
// no - функция, которая будет вызываться, если ответ отрицательный

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

//здесь функции объявляются прямо внутри вызова ask(). у них нет имен, 
//потому что они не присвоены переменным
//такие функции называются анонимными
//они недоступны снаружи ask

//вариант №3 используем условный оператор

let question = prompt("Вы согласны?");
let ask;
if (question == "") { // "" - "ok"
  ask = function () {
    alert("Вы согласились."); 
  };
} else {
    ask = function () {
      alert("Вы отменили выполнение.");
    };
}

ask (question);

// вариант4 используем тернарный оператор

let question = prompt("Вы согласны?");
let ask;

ask = (question == "") ? 
  function () { 
    alert("Вы согласились."); 
  } :
  function () { 
    alert("Вы отменили выполнение."); 
  };

ask (question);

  //вариант 5 используем функции-стрелки
  //let functionName = (arg1, arg2 ... argN) => expression;

  let question = prompt("вы согласны?");
  let ask;

  ask = (question == "") ? 
    () => alert("вы согласились.") ://т.е вместо объявления функции function () {} указываем в виде функции стрелки 
    () => alert("вы отменили выполнение."); 
  
ask ();
*/
//их вариант

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// меняем функции в параметрах:
/*ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);*/

//на стрелочные функции
ask (
  "вы согласны?", 
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
  );
