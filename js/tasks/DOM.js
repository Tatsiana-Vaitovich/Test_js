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

/*let table = document.getElementById("age-table");
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
  //alert(form_inputs.length);
  let form_input_first = form_inputs[0];
  //alert(form_input_first.innerHTML);
  console.log(form_input_first);
  let form_input_last = form_inputs[(form_inputs.length - 1)];
  //alert(form_input_last.innerHTML);
}*/

//task #4

//У нас есть дерево, структурированное как вложенные списки ul/li.
//Напишите код, который выведет каждый элемент списка <li>:
//Какой в нём текст (без поддерева) ?
//Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

let innerLi = document.querySelectorAll("ul > li");

//перебираем все элементы:
function innerHtmlElem(nameCollection) {
  for (let elem of nameCollection) {
    return elem.innerHTML;
  }
}

function outerHtmlElem(nameCollection) {
  for (let elem of nameCollection) {
    return elem.outerHTML;
  }
}

//вывод текста без поддерева
function writeTextContentElem(nameCollection) {
  for (let elem of nameCollection) {
    return elem.textContent;
  }
}

//or

function writeTypeElem(nameCollection) {
  for (let elem of nameCollection) {
    return elem.nodeType;
  }
}

//считаем число всех вложенных в ul li
function countChildren(nameCollection) {
  let i = 0;
  for (let elem of nameCollection) {
    i++;
  }
  return i;
}

//or

function counterCollectionsChildren(nameCollection) {
  let counter = nameCollection.length;
  return counter;
}

//task #4 DOM - узлы. типы, свойства, содержимое.

//Объектом какого класса является document?
//Какое место он занимает в DOM-иерархии?
//Наследует ли он от Node или от Element, или может от HTMLElement?

/*
//узнаем имя класса дом-узла, используя свойство конструктор
console.log(document.constructor);
//выведем имя дом узла
console.log(document.constructor.name);
//console.log выводит элемент в виде дом-дерева
console.log(document);
//Console. dir это способ посмотреть в консоли 
//свойства заданного javascript объекта
console.dir(document);
console.log(document.textContent);

//for body:
console.log("body.constructor " + document.body.constructor);
console.log("body.constructor.name " + document.body.constructor.name);
console.log("document.body tageName " + document.body.tagName);
console.log("document.body nodeName " + document.body.nodeName);
console.log("document.body nodeType " + document.body.nodeType);
console.log("document.body textContent " + document.body.textContent);
console.log("console.log document.body " + document.body);
console.log(document.body);
console.dir("console.dir document.body " + document.body);
console.dir(document.body);


//объектом какого класса является document можно выяснить так:
console.log(document);//[jbject HTMLDocument]
//or
console.log(document.constructor.name)//HTMLDocument
//т.е document - объект класса HTMLDocument
//какое место он занимает в иерархии?
//пройдем по цепочке прототипов _proto_
//методы класса находятся в prototype котструктора. 
//так, в HTMLDocument.prototype находятся методы для объектов типа document
//также внутки prototype есть ссылка на функцию-конструктоз:
console.log(HTMLDocument.prototype.constructor === HTMLDocument); //true
//чтобы получить имя класса в стороковой форме, используем constructor.name
//сделаем это для всей цепочки прототипов document вверх до класса Node
//console.log(HTMLDocument.prototype.constructor.name); //HTMLDocument
//console.log(HTMLDocument.prototype._proto_.constructor.name); //Document
//console.log(HTMLDocument.prototype._proto_._proto_.constructor.name); //Node
//еакже можем исследовать объект с помощью console.dir(documetn) 
// и увидеть имена функций-конструкторов, открыв _proto_. 
// браузерная консоль берет их как раз из свойства constructor
console.dir(document);
*/

//task #5 DOM-атрибуты
//Напишите код для выбора элемента с атрибутом data-widget-name 
//из документа и прочитайте его значение.
/*
let attr = document.querySelectorAll("[data-widget-name]");//получим статистическую коллекцию
//метод
//let attr = document.getElementsByName("data-widget-name");//*получим живую коллекцию
//в данном случае не работает, т.к он работает только с теми элементами, 
//для которых в спецификации явно предусмотрен атрибут name: 
//это form, input, a, select, textarea и ряд других

//перебираем элементы коллекции
function readDatasetElementValue(nameCollection) {
  for (let elem of nameCollection) {
    return (elem.dataset.widgetName);
  }
}

//или же все атрибуты элемента, стандартные и нестандартные 
//можно получить используя elem...Attribute:

console.log(attr[0].getAttribute("data-widget-name"));
*/

//task #6
//Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
//Ссылка является внешней, если:
//Её href содержит ://
//Но не начинается с http://internal.com.
/*
let links = document.getElementsByTagName("a");
for (let link of links) {
  //let href = link.href;
  //используем link.getAttribute('href'). 
  //Не link.href, потому что нам нужно значение из HTML
  let href = link.getAttribute("href");
  if (!href) continue; // нет атрибута
  if (!href.includes('://')) continue; // нет протокола
  if (href.startsWith('http://internal.com')) continue; // внутренняя
  link.style.color = "orange";
}

//есть еще один способ - добавить проверку в css-селектор
/*let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
//тогда
let links = document.querySelectorAll(selector)*/

