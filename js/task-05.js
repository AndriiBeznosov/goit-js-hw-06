// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const onInput = document.querySelector("#name-input");
const editSpan = document.querySelector("#name-output");

onInput.addEventListener("input", edit);

function edit(event) {
  if (event.currentTarget.value === "") {
    editSpan.textContent = "Anonymous";
  } else {
    editSpan.textContent = event.currentTarget.value;
  }
}
