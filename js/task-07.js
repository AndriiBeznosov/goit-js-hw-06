// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const changeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

changeInput.addEventListener("change", changeInputFontSize);

function changeInputFontSize(event) {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
  console.log(changeInput.value);
}
