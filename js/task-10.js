// 1.Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// 2.Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// 3.Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const containerControls = document.querySelector("#controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let widthHeigth = 30;

function createBoxes() {
  let number = +document.querySelector("#controls input").value;
  if (number > 100) {
    alert(
      `Максимально рекомендованное число для ввода 100, сейчас Вы ввели ${number}`,
    );
  } else {
    for (let i = 0; i < number; i += 1) {
      widthHeigth += 10;
      boxes.insertAdjacentHTML(
        "afterbegin",
        `<div style="background-color: ${getRandomHexColor()}; width:${widthHeigth}px; height:${widthHeigth}px;"></div>`,
      );
    }
  }
}

function destroyBoxes(event) {
  boxes.innerHTML = " ";
  widthHeigth = 30;
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
