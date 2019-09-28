"use strict";
/*function min(a,b) {
  return (a<b) ? alert(a) : alert(b);
  }*/

  //ИЛИ 

function min(a,b) {
  if (a<b) {
    return alert(a);
  } else {
    return alert(b);
  }
}

let a = prompt("введите значение а");
let b = prompt("введите значение В");
min(a,b);
