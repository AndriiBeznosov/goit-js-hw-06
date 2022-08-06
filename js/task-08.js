// Напиши скрипт управления формой логина.
// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form >
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);
const listOfUsers = [];
let user = {};
function onFormSubmit(event) {
  event.preventDefault();
  user = {};
  if (form.elements.password.value === "" || form.elements.email.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    console.log(`${form.elements.email.name} : ${form.elements.email.value}`);
    console.log(
      `${form.elements.password.name} : ${form.elements.password.value}`,
    );
    listOfUsers.push(user);
    console.log(listOfUsers);
    event.target.reset();
  }
}
function onFormInput() {
  user[form.elements.password.name] = form.elements.password.value;
  user[form.elements.email.name] = form.elements.email.value;
}

// function onFormSubmit(event) {
//   event.preventDefault();
//   const inputFirstName = formRef.elements[0].name;
//   const inputSecondName = formRef.elements[1].name;
//   const inputFirstValue = formRef.elements[0].value;
//   const inputSecondValue = formRef.elements[1].value;
//   if (inputFirstValue === "" || inputSecondValue === "") {
//     alert("Все поля должны быть заполнены!");
//   } else {
//     infoRef[inputFirstName] = inputFirstValue;
//     infoRef[inputSecondName] = inputSecondValue;
//     console.log(infoRef);
//     event.target.reset();
//   }
// }
