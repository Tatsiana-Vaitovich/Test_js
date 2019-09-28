"use strict";

//каждую весну дедушка Мазай выезжает на своей лодке спасать зайцев от наводнения. 
//Нужно посчитать, сколько зайцев будет сидеть в последней лодке, 
//если одновременно с дедушкой лодка вмещает до 6 зайцев. 
//Также известно следующее:
//Как минимум один раз Мазай выезжает на поиски обязательно
//Если в лодке есть свободные места и на реке остались неспасённые зайцы, 
//дедушка домой не вернётся
//Спасение продолжается до последнего зайца 
//(то есть, если Мазай привёз полную лодку зайцев и отпустил, 
//но на реке ещё остались зайцы, он за ними снова поедет)

function RabbitsInLastBoat (a, b) {
  var totalRabbits = a;
  var boatСapacity = b;
  var rest = totalRabbits % boatСapacity;
  //rest=0 если totalRabbits=0 или зайцев на беругу не осталось
  if (rest===0) {
    alert ("Все спасены, Мазай едет домой");
  } else if (rest>boatСapacity) {
    rest = rest % boatСapacity;
    }
    else {
      alert ("в последней лодке " + rest + " зайцев");
    }
  }

function RabbitsInLastBoat2 (c, d) { //используем тернарный оператор
  var totalRabbits = c;
  var boatСapacity = d;
  var rest = totalRabbits % boatСapacity;
  //rest=0 если totalRabbits=0 или зайцев на беругу не осталось
  (rest === 0) ? alert("Все спасены, Мазай едет домой"):
  (rest > boatСapacity) ? rest = rest % boatСapacity : alert ("в последней лодке " + rest + " зайцев");
}

RabbitsInLastBoat (90, 7);
RabbitsInLastBoat2 (2, 7);