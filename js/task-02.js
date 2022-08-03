//В HTML есть пустой список ul#ingredients.
//<ul id="ingredients"></ul>

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeItems = (ingredients) => {
  return ingredients.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = item;
    return itemEl;
  });
};
const element = makeItems(ingredients);
listEl.append(...element);

console.log(listEl);
