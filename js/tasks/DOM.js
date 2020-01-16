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

//в переменной td находится DOM-элемент для тега <td>
//td.style.backgroundColor = 'red';
/*document.body.children[2].rows[0].cells[0].style.backgroundColor = "red";
document.body.children[2].rows[1].cells[1].style.backgroundColor = "red";
document.body.children[2].rows[2].cells[2].style.backgroundColor = "red";
document.body.children[2].rows[3].cells[3].style.backgroundColor = "red";
document.body.children[2].rows[4].cells[4].style.backgroundColor = "red";
*/
function showColorCells(id, color) {
  let table = document.getElementById(id);
  //alert(table.rows.length);
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];//получаем доступ к коллекции строк таблицы
    row.cells[i].style.backgroundColor = color;//получаем доступ к коллекции ячеек, находящихся внутри строки
  }
}

showColorCells("task2", "red");

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

/*let innerLi = document.querySelectorAll("ul > li");

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
}*/

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

//task #7

//У нас есть пустой DOM-элемент elem и строка text.
//Какие из этих 3-х команд работают одинаково?
//1. elem.append(document.createTextNode(text))
//2. elem.innerHTML = text
//3. elem.textContent = text

let div1 = document.getElementById("elem1");
let div2 = document.getElementById("elem2");
let div3 = document.getElementById("elem3");
let text = "<b>text</b>"

div1.append(document.createTextNode(text));//вставляет text как текст
div2.innerHTML = text;//вставляет text как элемент HTML
div3.textContent = text;//вставляет text как текст

//task #8 
//Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

//DOM не поддерживает удаления элемента напрямую. 
//При удалении элемента с JavaScript, 
//вы должны сначала перейти на его РОДИТЕЛЕЙ. 
//Это процесс всегда был странным и не таким простым.

//Пуленепробиваемый путь:
//Предположим, что у нас есть следующий HTML элемент:
//<div id="myDiv">test</div>
//чтобы удалить его из дерева DOM, вам нужно будет выполнить следующие линии JavaScript’а:
//var elem = document.getElementById("myDiv");
//elem.parentNode.removeChild(elem);

function clear(elem) {
  let list = document.getElementById(elem);
  while (list.firstChild) {
  list.firstChild.remove();
  }
  /*for (let i = 0; i<list.children.length; i++) {//удален только 1-й li
    list.children[i].remove();
  }*/
//цикл for не работает, потому что вызов remove() 
//сдвигает коллекцию elem.childNodes, 
//поэтому элементы начинаются каждый раз с индекса 0. 
//А i увеличивается, и некоторые элементы будут пропущены.
//Цикл for..of делает то же самое.
}

//clear("element");

function clear1(element) { //не понимаю, как работает эта функция???
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

function clear3(element) {//и как это работает не понимаю???
  element.innerHTML = '';
}

//task #9

// почему в документе остался текст "ааа"??
function deleteText(elem) {
  alert(elem); // таблица, как и должно быть
  table.remove();
}
//deleteText(table)
//HTML в задаче некорректен. В этом всё дело.
//Браузер исправил ошибку автоматически. Но внутри <table> не может быть текста: 
//в соответствии со спецификацией допускаются только табличные теги. 
//Поэтому браузер добавляет "aaa" до <table>.
//Теперь очевидно, что когда мы удаляем таблицу, текст остаётся.
//На этот вопрос можно легко ответить, изучив DOM, 
//используя инструменты браузера. 
//Там можно увидеть "aaa" до элемента <table>.
//Вообще, в стандарте HTML описано, 
//как браузеру обрабатывать некорректный HTML, 
//так что такое действие браузера является правильным.

//task #10

//Напишите интерфейс для создания списка.
//Для каждого пункта:
//Запрашивайте содержимое пункта у пользователя с помощью prompt.
//Создавайте элемент <li> и добавляйте его к <ul>.
//Процесс прерывается, когда пользователь нажимает Esc 
//или вводит пустую строку.
//Все элементы должны создаваться динамически.
//Если пользователь вводит HTML-теги -– пусть в списке 
//они показываются как обычный текст.
function createList(where) {
  let whereAdd = document.getElementById(where);
  //alert(whereAdd);
  let headerline = document.createElement("h2");
  headerline.innerHTML = "task #10: напишите интерфейс для создания списка. для каждого пункта запрашивайте содержимое у пользователя...";
  whereAdd.prepend(headerline);
  let list = document.createElement("ul");
  whereAdd.before(list);
  //или можно сразу обратится к узлу по id:
  //task2.before(list);
  //или все что выше можно сделать следующим образом:
  task2.insertAdjacentHTML("beforebegin", "<ul></ul>")
  let message = prompt("введите ваше сообщение");
  while (!!message == true) { //!!message переводи сообщение в логический тип
    //пустая строка или null - false
    let li = document.createElement("li");
    //li.innerHTML = message; //если введем <a>jsdlg</a> на странице отразится jsdlg, теги - в разметке страницы
    li.textContent = message;//если введем <a>jsdlg</a> - так и отразится на странице
    //inner.HTML позволяет получить html содержимое в виде строки
    //textContent предоставляет доступ к тексту внутри элемента за вычетом всех тегов
    list.append(li);
    message = prompt("введите ваше сообщение");
  }
}
//createList("task2");


//task #11
//Напишите функцию createTree, 
//которая создаёт вложенный список ul/li из объекта.
/*
let objForTree = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
let objEmpty = {};

function createTree(where, objName) {
  if (isEmpty(objName)) {
    let headline = document.createElement("h2");
    headline.innerHTML = "task #11: создать вложенный список из массива";
    where.prepend(headline);
    where.before(createUl(objName));
  } else alert("Объект пуст");
}

function createUl(objName) {
  let ul = document.createElement("ul");
  //let ul = "<ul>" + "</ul>";
  //task2.insertAdjacentHTML("beforebegin", ul);
  //createLi
  for (let key in objName) {
    let li = document.createElement("li");
    ul.append(li);
    let textContentli = key;
    li.textContent = textContentli;
    if (isEmpty(objName[key])) {
      //когда функция вызывает сама себя - 
      //Это как раз и называется рекурсией.
      createUl(objName[key]);
      li.append(createUl(objName[key]));
    }
  }
  return ul;
}

function isEmpty(objName) {
  for (let key in objName) {
    return true;
  }
  //alert("объект пуст");
  return false;
}

createTree(task2, objForTree);
//createTree(task2, objEmpty);
*/

//task #12
//Есть дерево, организованное в виде вложенных списков ul/li.
//Напишите код, который добавит каждому элементу списка <li> 
//количество вложенных в него элементов. 
//Узлы нижнего уровня, без детей – пропускайте.

let objForTree = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {},
      "груша": {}
    }
  }
};
let objEmpty = {};

function createTree(where, objName) {
  if (isEmpty(objName)) {
    let headline = document.createElement("h2");
    headline.innerHTML = "task #11: создать вложенный список из массива";
    where.prepend(headline);
    where.append(createUl(objName));
  } else alert("Объект пуст");
}

function createUl(objName) {
  let ul = document.createElement("ul");
  for (let key in objName) {
    let li = document.createElement("li");
    let textContentli;
    ul.append(li);
    textContentli = key;
    li.textContent = textContentli;
    if (isEmpty(objName[key])) {
      //когда функция вызывает сама себя - 
      //Это как раз и называется рекурсией.
      createUl(objName[key]);
      li.after(createUl(objName[key]));
    }
  }
  return ul;
}

function isEmpty(objName) {
  for (let key in objName) {
    return true;
  }
  //alert("объект пуст");
  return false;
}

createTree(task12a, objForTree);

function addCountChildren(id) {
  let headline = document.createElement("h2");
  headline.innerHTML = "task #12: Напишите код, который добавит каждому элементу списка li количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте";
  let list = document.getElementById(id);
  list.before(headline);
  let collectionUl = list.getElementsByTagName("ul");
  for (let ul of collectionUl) {
    let allUl = ul.getElementsByTagName("ul");
    let counterUl = allUl.length;
    if (counterUl == 0) continue;
    let collectionChildren = ul.children; //получим коллекцию детей li and ul
    for (let child of collectionChildren) {
      //console.log("tagName: " + child.tagName);
      if (child.tagName === "LI") {
        let siblingUl = child.nextElementSibling;
        if (siblingUl == null) continue;
          let counter = siblingUl.getElementsByTagName("li").length;
          child.innerHTML += "[" + counter + "]";
      }
    }
  }
}

addCountChildren("task12");
//addCountChildren("task12a");

//task13

//Напишите функцию createCalendar(elem, year, month).
//Вызов функции должен создать календарь для заданного 
//месяца month в году year и вставить его в elem.
//Календарь должен быть таблицей, где неделя – это <tr>, 
//а день – это <td>. 
//У таблицы должен быть заголовок с названиями дней недели, 
//каждый день – <th>, первым днём недели должен быть понедельник.
let week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
let months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

function createCalendar(elem, year, month) {
  insertHeadline(elem, "task #13: написать функцию, создающую календарь для заданного месяца в году");
  let table = document.createElement("table");
  elem.append(table);
  table.id = "tableTask13";
  let tRow = document.createElement("tr");//создали элемент tr
  table.append(tRow);//вставляем элумент в узел
  for (let day of week) {
  let th = document.createElement("th");
  th.innerHTML = day;
  tRow.append(th);
  }
  let firstDayMonth = new Date(year, month-1);
  let firstDayName = firstDayMonth.getDay();//получим первый день месяца
  //вставим пустые ячейки до первого дня месяца:
  let tr = document.createElement("tr");
  table.append(tr);
  for (let i = 0; i < firstDayName; i++) {
    let td = document.createElement("td");
    td.innerHTML = "";
    tr.prepend(td);
  }
  //в остальные ячейки вставим даты
  let lastDayMonth = new Date(year, month, 1-1);//получим последний день месяца
  let lastDayDate = lastDayMonth.getDate();//последний день месяца (число)
  let lastDayName = lastDayMonth.getDay();//последний день месяца (день)
  let i = 0;
  let createTd = function(where) {
    for (; i < lastDayDate;) {
      i++;
      let newData = new Date(year, month - 1, i);
      let newDataDayName = newData.getDay();
      let td = document.createElement("td");
      where.append(td);
      td.innerHTML = i;
      if (newDataDayName == 6){
        let trow = document.createElement("tr");
        table.append(trow);
        createTd(trow);
      }
    }
  };
  createTd(tr);
  //вставим пустые ячейки после последнего дня месяца:
  for (let i = lastDayName; i < 6; i++) {
    let td = document.createElement("td");
    td.innerHTML = "";
    let  lastTr = table.lastChild;
    lastTr.append(td);
  }
}
//используем встроенный объект Data.
//его можно использовать для хранения времени создания/изменения, 
//для измерения времени или просто для вывода текущей даты 
/*let newData = new Date(); // выведет текущую дату и время
alert(newData.getFullYear());//метод позволяет получить год 4 цифры
alert(newData.getMonth());// от 0 до 11
alert(newData.getDate());// от 1 до 31
alert(newData.getTime());// возвращает таймстап
alert(newData.getDay());// от 0 (воскресенье) до 6 (суббота)
let newMonth = new Date(Date.parse('2012-01'));// метод Date.parse считывает строку и возвращает таймстап
alert(newMonth);
//вернем день недели:
function getDayWeek(date) {
  let dayWeek = week[date.getDay()];
  return dayWeek;
}*/

createCalendar(task13, 2020, 2);

// task#14
//Создайте цветные часы как в примере
function insertHeadline (where, text) {
  let headerline = document.createElement("h2");
  headerline.innerHTML = text;
  where.prepend(headerline);
  //where.prepend(headerline) - 
  //вместо let whereAdd = document.gerElementById(where);
  //whereAdd.prepend(headerline);
  //но тогда при вызове функции в параметрах id указываем без ""
}

function createTimer (where){
  insertHeadline(where, "task #14: создать цветные часы как в примере. p.s не работает кнопка стоп???"
  );
  //для создания часов буду использовать таблицу
  let table = document.createElement("table");
  table.id = "tableTask14"
  where.append(table);
  let row = document.createElement("tr");
  table.prepend(row);

  //напишем функцию, создающую ячейки часов
  function addTd(tdName) {
    let td = document.createElement("td");
    td.id = tdName
    row.append(td);
  };

  //напишем функцию, создающую объект даты и времени
  function addAPIDate(datasEntry) {
    let date = new Date();
    if (datasEntry == "hours") {
      let hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
      tdHours.innerHTML = hours;
    } 
    if (datasEntry == "minutes") {
      let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
      tdMinutes.innerHTML = minutes;
    } 
    if (datasEntry == "seconds") {
      let seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
      tdSeconds.innerHTML = seconds;
    }
  };

  //напишем функцию для создания кнопок "пуск" и "стоп"
  function createButton(where, innerText, id) {
    let button = document.createElement("button");
    button.innerHTML = innerText;
    button.id = id;
    where.append(button);
  };

  //напишем функцию, которая будет обновлять часы каждую секунду
  //используем метод setInterval, который позволяет вызывать функцию регулярно, 
  //повторяя вызов через определённый интервал времени.
  //синтаксис: let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
  //func/code - Функция или строка кода для выполнения. Обычно это функция
  //delay - интеквал времени, через который часы будут обновляться в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0
  //arg - Аргументы, передаваемые в функцию (не поддерживается в IE9-)
  let timer;
  function startTime(datasEntry) {
    function addAPITimer() {
      addAPIDate(datasEntry);//заменяю функцию с параметром на функцию без него, т.к setInterval не работает, если передаем функцию с параметром
    }
    timer = setInterval(addAPITimer, 1000);
    addAPITimer(); //начать тут же, не ждать 1 секунду пока setInterval сработает
  };
  //Чтобы остановить дальнейшее выполнение функции, необходимо вызвать clearInterval(timer)

  /*пробовала написать функции отдельно для каждого элемента часов, чтобы сработал "стоп" - без результата
  function addAPIDataSeconds() {
    let date = new Date();
    let seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    tdSeconds.innerHTML = seconds;
}

  function startSeconds() {
    timer = setInterval(addAPIDataSeconds, 1000);
    addAPIDataSeconds();
  }*/

  addTd("tdHours");
  addAPIDate("hours");
  addTd("delimiter1");
  delimiter1.innerHTML = ":";
  addTd("tdMinutes");
  addAPIDate("minutes");
  addTd("delimiter2");
  delimiter2.innerHTML = ":";
  addTd("tdSeconds");
  //addAPIDataSeconds();
  addAPIDate("seconds");
  createButton(where, "Пуск", "start");
  createButton(where, "Стоп", "stop");

  //добавим работу кнопок "старт" и "стоп". для этого можно использовать 
  //как атрибуты html, такжу можно назначать обработчик, 
  //используя свойство DOM-элемента on<событие>

  //включаю таймер при помощи кнопки "старт"

  /*function timeStart() {
    startSeconds();
  }

  function timeStop() {
    clearInterval(timer);
    timer = null;
  }*/

  start.onclick = timeStart;
  stop.onclick = timeStop;

  function timeStart() {
    startTime("hours");
    startTime("minutes");
    startTime("seconds");
  }

  //выключаю таймер при нажатии кнопки "стоп"
  function timeStop() {//не работает???
    clearInterval(timer);
    timer = null;
  }
}

createTimer(task14);

//task15
//вставить элементы 2, 3 между 1 и 4.

function insertLi() {
  insertHeadline(task15, "task #15: вставить пункты 2 и 3 между 1 и 4");
  /*function createLi(id, innerText) {
    let li = document.createElement("li");
    li.id = id;
    li.innerHTML = innerText;
    let ul = document.getElementById("ulTask15");
    //console.log(ul);
    console.dir(ul);
    let whereInsert = ul.lastElementChild;
    whereInsert.before(li);
  }
  createLi("two", "2");
  createLi("three", "3");*/
  //или 
  //огда нам необходимо вставить фрагмент HTML-кода, можно использовать 
  //insertAdjacentHTML, он лучше всего подходит для таких задач
  one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");
}

insertLi();

function sortTable(id, nameForSort) {
  insertHeadline(task16, "task #16: Напишите код для сортировки таблицы по столбцу name");
  //получим коллекцию строк таблицы:
  let collectionRows = id.rows;
  //чтобы применить дальше к коллекции методы массива - преобразуем ее в массив
  let arrayRows = Array.from(collectionRows);
  //из данного массива нам не нужен 1-й элемент, т.к. это заголовок
  //использую метод slice(), чтобы создать копию части массива
  //arrayRows.slice(1);
  //console.log(arrayRows.slice(1));
  //получим элемент с nameForSort
  let th = document.getElementById(nameForSort);
  //получим номер интересующего нас столбца
  let collIndex = th.cellIndex;
  //использую метод масива arr.sort(fn) для сортировки массива
  //и замены порядка элементов в нем.
  //arrayRows.sort(fn)
  //при сравнении sort() элементы сортируются как строки
  /*function compareString(rowA, rowB) {
    /*for (let i = 1; i < arrayRows.length; i++) {
    //получим коллекцию ячеек каждой строки
    let collectionTd = arrayRows[i].children;
    //получим из каждой строки содержимое нужной ячейки:
    let cell = collectionTd[collIndex];
    let cellInnerText = cell.innerHTML;
    //нужно сравнить содержимое всех ячеек и отсортировать строки 
    }*/
    //для упрощения записи, используем функцию-стрелку
    //функция-стрелка: let func = (arg1, arg2 ... argN) => expression
    //Такой код создаёт функцию func с аргументами arg1..argN и вычисляет expression 
    //с правой стороны с их использованием, возвращая результат.

    //при сравнении значений используем тернарный оператор
    //тернарный оператор: условие ? выражение1 : выражение2
    //от функции сравнения требуется любое положительное число, чтобы сказать «больше», 
    //и отрицательное число, чтобы сказать «меньше»

    let compareString = (rowA, rowB) => rowA.cells[collIndex].innerHTML > rowB.cells[collIndex].innerHTML ? 1 : -1;
    arrayRows.slice(1).sort(compareString);
    console.log(arrayRows.slice(1).sort(compareString));
    //вставим полученный отсортированный массив:
    id.tBodies[0].append(...arrayRows.slice(1).sort(compareString));
}

sortTable(tableTask16, "surname");