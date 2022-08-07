// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(event) {
  const data = event.target.dataset.length;
  const value = String(event.target.value.length);

  if (value !== data) {
    this.classList.remove("valid");
    this.classList.add("invalid");
    console.log(
      "Кільксть введених символів не відповідае умові, потрібно ввести 6 символів",
    );
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
    console.log(`Результат: ${event.target.value}`);
  }
}
