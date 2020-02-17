"use strict";
// task обработчик события
// событие - это сигнал от браузера, что что-то произошло.
// обработчик события - функция, которая сработает как только событие произошло
// обработчик может быть назначен: 
// только HTML - прямо в разметке при помощи атрибута on<событие>;
// HTML + js;
// js

let c = 0;
let d = 0;

function countClick () {
  c++;
  console.log(c);
}

/*button4.onclick = function () {
  d++;
  console.log(d);
}*/

// или

button4.onclick = countClick;

// убрать обработчик:
// button4.onclick = 0;

// Внутри обработчика события this ссылается на текущий элемент, то есть на тот, 
// на котором, как говорят, «висит» (т.е. назначен) обработчик - button5

// нельзя повесить на одно событие несколько обработчиков. 
// выход - использование методов addEventListener и removeEventListener:

button4.addEventListener("click", () => console.log("вы нажали на button4"));
button4.removeEventListener("click", () => console.log("вы нажали на button4"));
// отмена не сработала

function getMessage() {
  let name = this.id;
  this.style.color = "red";
  console.log("вы нажали на " + name);
}

button5.addEventListener("click", getMessage);
// button5.removeEventListener("click", getMessage);

button4.addEventListener("click", getEventObject);

function getEventObject() {
  console.log("event.type: " + event.type);
  console.log("event.currentTarget: " + event.currentTarget);
  console.log("event.coords: " + event.clientX + "; " + event.clientY);
}

// можно назначить обработчиком не только функцию, но и объект
button5.addEventListener('click', {
  handleEvent(event) {
    console.log(event.type + " на " + event.currentTarget);
  }
});

// task#1
// Добавьте JavaScript к кнопке button, 
// чтобы при нажатии элемент <div id="text"> исчезал.

function hideText() {
  let text = document.getElementById("text");
  text.style.display = "none";
};

button6.addEventListener("click", hideText);

// task#2
// Создайте кнопку, которая будет скрывать себя по нажатию.
function hideButton() {
  let button = document.createElement("button");
  button.id = "button7";
  button.innerHTML = "Нажми, чтобы спрятать кнопку";
  event_tasks.append(button);
  function hide() {
    button.style.display = "none";
  }
  button.addEventListener("click", hide);
}

// hideButton();

// task#3
// Пусть мяч перемещается при клике на поле, туда, куда был клик

function getMoveBall() {
  // положение мяча на странице определяется координатими относительно окна браузера 
  // или относительно страницы
  // чтобы "привязать" мяч к полю - можно исопользовать absolute позиционирование.
  // получим координаты поля:
  let field = document.getElementById("get_coords");
  field.style.position = "relative";
  let ball = document.getElementById("ball");
  ball.style.position = "absolute";
  // задаю изначальные координаты мяча
  ball.style.top = "0px";
  ball.style.left = "0px"
  // чтобы перемещение мяча было плавным использую css свойство transition
  ball.style.transition = "top 1s, left 1s";
  let fieldCoords = field.getBoundingClientRect();

  get_coords.addEventListener("click", moveBall);
  // когда происходит событие, браузер создает объект события, 
  // содержащий "подробности" этого события, т.о
  // координаты click получу используя объект event: event.clientX, event.clientY
  // напишем функцию обработчик
  function moveBall() {
    // для перемещения мяча при клику задам ему новые координаты
    // когда у нас есть координаты поля и координаты клика, можем найти, координаты мяча при перемещении
    ball.style.top = event.clientY - fieldCoords.top - 1/2 * ball.offsetHeight + "px";
    ball.style.left = event.clientX - fieldCoords.left - 1/2 * ball.offsetHeight + "px";
  }
}

getMoveBall();

// task#3
// Создать меню, которое по нажатию открывается либо закрывается

function createMenu() {
  document.body.insertAdjacentHTML("afterbegin", "<div><h2>task#3: Создать меню, которое по нажатию открывается либо закрывается. events.js</h2><div><h3>Главы:</h3><ul><li>DOM</li><li>styles and classes</li><li>events</li></ul></div></div>");
  // получим этот элемент
  let menu = document.getElementsByTagName("div")[1];
  // добавим немного стилей
  // elem.className заменяет всю строку с классами
  menu.className = "menu";
  menu.firstElementChild.classList.add("menu_title");
  menu.lastElementChild.classList.add("list");
  // используем событие click 
  menu.firstElementChild.onclick = hideMenu;
  function hideMenu() {
    // нужно перебрать классы элемента и проверить, открыт ли он
    // elem.classList - специальный объект, который содержит методы, 
    // позволяющие добавлять/удалять классы
    // elem.className возвращает строку
    // метод строк includes позволяет проверить наличие подстроки в строке
    if (menu.lastElementChild.className.includes("close")) {
      menu.lastElementChild.classList.remove("close");
    } else {
      menu.lastElementChild.classList.add("close");
    }
    if (menu.firstElementChild.className.includes("title_close")) {
      menu.firstElementChild.classList.remove("title_close");
    } else {
      menu.firstElementChild.classList.add("title_close");
    }
  }
}
createMenu();

// task#4
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения 
// добавьте в верхний правый угол кнопку закрытия.

// обратимся к элементу
// определим место в документе, куда вставим кнопку
let meshed = document.getElementById("task4")
.getElementsByClassName("message__header-wrapper");
// получила коллекцию элементов 
// для перебора коллекции использую for...of
for (let node of meshed) {
  // создадим кнопку закрытия
  let clouseButton = document.createElement("span");
  clouseButton.innerHTML = "[x]";
  clouseButton.classList = "message__header-button"
  // добавим элементу атрибут onclick
  node.append(clouseButton);
  // назначим обработчик для кнопки
  clouseButton.onclick = hide;
};
// обработчик события для срабатывания кнопки:
function hide() {
  // чтобы получить элемент, на котором сработал датчик, использую объект  события
  let message = event.currentTarget.parentElement.parentElement;
  message.classList.add("remove");
}

// task#5
// Создайте «Карусель» –- ленту изображений, 
// которую можно листать влево-вправо нажатием на стрелочки.

let carusel = document.getElementsByClassName("slider")[0];
let slides = carusel.getElementsByClassName("slides")[0];
let collectionSlide = carusel.getElementsByClassName("slide");
let numberSlide = collectionSlide.length;
let moveX = collectionSlide[0].offsetWidth;
let slidesWidth = collectionSlide[0].offsetWidth * numberSlide;
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let coordX = 0;

function moveLeft() {
  // чтобы сдвинуть карусель на один слайд влево нужно сместить его на -ширину по оси х;
  // получим текущие координаты slides по оси х
  if (Math.abs(coordX) < slidesWidth - 3 * moveX) {
    coordX += -3 * moveX;
    // slides.classList.add("move-slides");
    let left = "translateX(" + coordX + "px)";
    slides.style.transform = left;
  } else {
    return;
  }
}

function moveRight() {
  if (Math.abs(coordX) > moveX) {
    coordX += 3 * moveX;
    // slides.classList.add("move-slides");
    let right = "translateX(" + coordX + "px)";
    slides.style.transform = right;
  } else {
    return;
  }
}

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);
