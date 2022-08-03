// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const onDecrementBtn = document.querySelector('[data-action="decrement"]');
const onIncrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let total = 0;

onDecrementBtn.addEventListener("click", onDecrement);
onIncrementBtn.addEventListener("click", onIncrement);

function onDecrement() {
  counter.textContent = total -= 1;
}
function onIncrement() {
  counter.textContent = total += 1;
}
