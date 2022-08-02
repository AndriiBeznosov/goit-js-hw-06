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

const titleEl = document.querySelectorAll("li.item");
titleEl.forEach(function (el, i) {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Element: ${el.lastElementChild.children.length}`);
});
