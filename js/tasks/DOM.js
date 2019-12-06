"use strict";
//task #1

//Для страницы:

//<html>
//<body>
//  <div>Пользователи:</div>
//  <ul>
//    <li>Джон</li>
//    <li>Пит</li>
//  </ul>
//</body>
//</html>

//Напишите код, который получит элемент <div>?
//Напишите код, который получит <ul>?
//Напишите код, который получит второй <li> (с именем Пит)?
//alert(document.body.firstElementChild); //or
//alert(document.body.children[0]);
//alert(document.body.children[document.body.children.length - 2]);//or
//alert(document.body.children[1]);
//alert(document.body.children[1].children[1]);//or
//alert(document.body.children[1].lastElementChild);

//task #2
//Напишите код, 
//который выделит красным цветом все ячейки в таблице по диагонали.
//Вам нужно получить из таблицы <table> 
//все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
//td.style.backgroundColor = 'red';
/*document.body.children[2].rows[0].cells[0].style.backgroundColor = "red";
document.body.children[2].rows[1].cells[1].style.backgroundColor = "red";
document.body.children[2].rows[2].cells[2].style.backgroundColor = "red";
document.body.children[2].rows[3].cells[3].style.backgroundColor = "red";
document.body.children[2].rows[4].cells[4].style.backgroundColor = "red";
*/
function showColorCells(number, color) {
  let table = document.body.children[number];
  //alert(table.rows.length);
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];//получаем доступ к коллекции строк таблицы
    row.cells[i].style.backgroundColor = color;//получаем доступ к коллекции ячеек, находящихся внутри строки
  }
}

//showColorCells(2, "red");

//task #3
//Вот документ с таблицей и формой.
//Как найти?…
//Таблицу с id="age-table".
//Все элементы label внутри этой таблицы (их три).
//Первый td в этой таблице (со словом «Age»).
//Форму form с именем name="search".
//Первый input в этой форме.
//Последний input в этой форме.

let table = document.getElementById("age-table");
//alert(table);
let table_labels = table.querySelectorAll("label");
//alert(table_labels.length);
let table_td = table.querySelector("td");
//alert(table_td.innerHTML);
let form = document.querySelectorAll('form[name="search"]');
for (let elem of form) {
  //alert(form_search.length);
  //alert(form_search.innerHTML);
  let form_inputs = elem.querySelectorAll("input");
  //или
  //let form_inputs = form.getElementsByTagName("input");
  alert(form_inputs.length);
  let form_input_first = form_inputs[0];
  alert(form_input_first.innerHTML);
  let form_input_last = form_inputs[(form_inputs.length - 1)];
  alert(form_input_last.innerHTML);
}




