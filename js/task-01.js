// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemCategories = document.querySelector("#categories");
console.log(`Number of categories: ${itemCategories.children.length}`);

const itemEl = document.querySelectorAll("li.item");
itemEl.forEach(function (item) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Element: ${item.lastElementChild.children.length}`);
});
