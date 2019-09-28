"use strict";
let login;
let parol;
login = prompt("введите логин");
if (login==="admin") {
  parol=prompt("введите пароль");
  if (parol==="я главный") {
    alert("здравствуйте!");
  } else if (parol=="" || parol==null) {
    alert("отменено");
  } else {
    alert("неверный пароль");
  } 
} else if (login==null || login=="") {
  alert("отменено");
} else {
  alert("я вас не знаю");
}
