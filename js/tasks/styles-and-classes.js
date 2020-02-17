"use strict";
// task#1
// Напишите функцию showNotification(options), 
// которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

function showNotification() {
  let div = document.createElement("div");
  document.body.prepend(div);
  div.insertAdjacentHTML("afterbegin", "<p>Это сообщение исчезнет через 3 секунды</p>")
  // let div = document.body.insertAdjacentHTML("afterbegin", "<div><p>Это сообщение исчезнет через 3 секунды</p></div>")
  div.style.cssText = `
  display: block;
  width: auto;
  height: 70px;
  padding: 10px;
  background-color: grey;
  font-weight: 800;
  color: white;
  text-align: center;`;
  //метод setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
  function show() {
    div.style.display = "none";
  }
  setTimeout(show, 3000);
  console.log(div.clientLeft);
}

// showNotification();

// task2 
// найти размер прокрутки снизу

function getMetriks (where) {
  let div = document.createElement("div");
  where.before(div);
  div.id = "styles_and_classes";
  div.insertAdjacentHTML("afterbegin", "<p>Текст Текст Текст Текст Текст Текст Текст Текст Текст</p>");
  insertHeadline(styles_and_classes, "task#2; работа js со стилями; найти метрики элемента");
  // данный div имеет полосу прокрутки, т.к указано overflow: auto;
  // Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. 
  // А как подсчитать размер прокрутки снизу (назовём его scrollBottom)
  // свойство scrollHeight - высота содержимого с внутренними отступами и учитывая невидимую область элемента
  // свойство clientHeight - высота содержимого с внутренними отступами
  let scrollBottom = div.scrollHeight - div.scrollTop - div.clientHeight;
  // Напишите код, который возвращает ширину стандартной полосы прокрутки. 
  let scrollBarWidth =div.offsetWidth - div.clientWidth - 2*div.clientLeft;
  console.log("scrollBottom, px: " + scrollBottom);
  console.log("scrollBarWidth, px: " + scrollBarWidth);

}

// getMetriks(task16);

// task#3 найти координаты внешних и внутренних углов элемента
function getCoords(elem) {
  let rect = document.getElementById(elem);
  let coords = rect.getBoundingClientRect();
  let coords1 = [Math.round(coords.left) + "px", Math.round(coords.top) + "px"];
  console.log(coords1);
  let coords2 = [Math.round(coords.right) + "px", Math.round(coords.bottom) + "px"];
  console.log(coords2);
  let coords3 = [Math.round(coords.left + rect.clientLeft) + "px", Math.round(coords.top + rect.clientTop) + "px"];
  console.log(coords3);
  let coords4 = [Math.round(coords.left + rect.clientLeft + rect.clientWidth) + "px", Math.round(coords.top + rect.clientTop + rect.clientHeight) + "px"];
  console.log(coords4);
}

// getCoords("get-coords");

// task#4
// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem 
// в зависимости от значения свойства position рядом с элементом anchor.
// Аргумент position – строка с одним из 3 значений:
// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), 
// которая уже есть в исходном коде задачи. 
// Она создаёт и показывает элемент-«заметку» с текстом html 
// на заданной позиции position рядом с элементом anchor.

  function showNotePositionFixed(anchor, elem, position, html) {
    // создадим элемент-заметку:
    let note = document.createElement(elem);
    note.className = "note";
    note.innerHTML = html;
    //определяю координаты элемента, к которому нужно привязать note
    let rect = document.getElementsByTagName(anchor)[0];
    rect.append(note);
    let coords = rect.getBoundingClientRect();
    // в данном случае координаты rect - координаты относительно окна браузера
    // если мы зададим для note position = "fixed" - его координаты также будут относительно окна браузера
    switch(position) {
    case("top"): {
      note.style.top = coords.top - note.offsetHeight + "px";
      note.style.left = coords.left + "px";
      break;
      }
    case("bottom"): {
      note.style.top = coords.bottom + "px";
      note.style.left = coords.right - note.offsetWidth + "px";
      break;
      }
    case("left"): {
      note.style.top = coords.bottom + "px";
      note.style.left = coords.left + "px";
      break;
    }
    default: 
    alert("значение position не найдено");
  }
}

// note, полученные в результате данных функций будут зафиксированны
// относительно окна браузера и при прокрутке страницы буду двигаться вместе со стр
/*showNotePositionFixed("blockquote", "div", "top", "note");
showNotePositionFixed("blockquote", "div", "left", "note");
showNotePositionFixed("blockquote", "div", "bottom", "note");*/

// task#5
// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.
// Это предотвратит расхождение элементов при прокрутке страницы.
// Используйте решение предыдущего задания для начала. 
// Чтобы проверить решение в условиях с прокруткой, 
// добавьте стиль элементу <body style="height: 2000px">.

function showNotePositionAbsolute(anchor, elem, position, html) {
    // создадим элемент-заметку:
    let note = document.createElement(elem);
    note.className = "note";
    note.style.position = "absolute";
    note.innerHTML = html;
    //определяю координаты элемента, к которому нужно привязать note
    let rect = document.getElementsByTagName(anchor)[0];
    rect.append(note);
    rect.style.position = "relative";
    // если мы зададим для note position = "absolute" - его координаты будут относительно rect
    switch(position) {
    case("top"): {
      note.style.top = 0 - note.offsetHeight + "px";
      note.style.left = 0 - rect.clientLeft + "px";
      break;
      }
    case("bottom"): {
      note.style.top = rect.offsetHeight + "px";
      note.style.left = rect.offsetWidth - note.offsetWidth - rect.clientLeft + "px";
      break;
      }
    case("left"): {
      note.style.top = rect.offsetHeight + "px";
      note.style.left = 0 - rect.clientLeft + "px";
      break;
    }
    default: 
    alert("значение position не найдено");
  }
}

// note будут зафиксированы относительно родителя, при прокрутке страницы они неподвижны
/*showNotePositionAbsolute("blockquote", "div", "top", "note");
showNotePositionAbsolute("blockquote", "div", "left", "note");
showNotePositionAbsolute("blockquote", "div", "bottom", "note");*/

// task#6 
// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.
// Новые значения для аргумента position:
// top-out, right-out, bottom-out – работают так же, как раньше,
//  они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: 
// приклеивают его к верхнему/правому/нижнему краю.

function showNoteIn(anchor, elem, position, html) {
  // создадим элемент-заметку:
  let note = document.createElement(elem);
  note.className = "note";
  note.style.position = "absolute";
  note.innerHTML = html;
  //определяю координаты элемента, к которому нужно привязать note
  let rect = document.getElementsByTagName(anchor)[0];
  rect.append(note);
  rect.style.position = "relative";
  // если мы зададим для note position = "absolute" - его координаты будут относительно rect
  switch(position) {
  case("top"): {
    note.style.top = 0 + "px";
    note.style.left = 0 - rect.clientLeft + "px";
    break;
    }
  case("bottom"): {
    note.style.top = rect.offsetHeight - note.offsetHeight + "px";
    note.style.left = rect.offsetWidth - note.offsetWidth - rect.clientLeft + "px";
    break;
    }
  case("left"): {
    note.style.top = rect.offsetHeight - note.offsetHeight + "px";
    note.style.left = 0 - rect.clientLeft + "px";
    break;
  }
  default: 
  alert("значение position не найдено");
}
}

// note будут зафиксированы относительно родителя, при прокрутке страницы они неподвижны
/*showNoteIn("blockquote", "div", "top", "note-in");
showNoteIn("blockquote", "div", "left", "note-in");
showNoteIn("blockquote", "div", "bottom", "note-in");
showNoteIn("div", "div", "top", "note");*/
