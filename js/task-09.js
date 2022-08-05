// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
const body = document.querySelector("body");
const changeColorBtn = document.querySelector("button.change-color");
const colorText = document.querySelector("span.color");

changeColorBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const colorRandom = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  body.style.background = colorRandom;
  colorText.textContent = colorRandom;

  return console.log(colorRandom);
}
