"use strict"
function power(x, n) {
  let result = x**n;
  if (n>0) {
  return alert(result);
  } else {
    return alert("вы ввели неверные данные");
  }
}
let x = prompt("введите x");
let n = prompt("введите n");
power(x, n);
