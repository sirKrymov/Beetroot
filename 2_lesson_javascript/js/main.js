// const ADMIN = 'admin';
// const PASSWORD = 'Черный властелин';
// let who, password;

// function enterPassword() {
//   if (password == false) {
//     alert('Вход отменен');
//   } else if (password != PASSWORD) {
//     alert('Пароль неверен');
//   } else {
//     alert('Добро пожаловать!!!)))');
//   }
// }

// who = prompt('Кто вы?');

// if (who == null) {
//   alert('Вход отменен');
// } else if (who != ADMIN) {
//   alert('Я вас не знаю');
// } else {
//   password = prompt('Введите пароль', '');
//   enterPassword();
// }

let number = prompt('Введите число');
let paragraph = 'get post put delete post put delete put delete delete';
let paragraphArr = paragraph.split(' ');
let newArr = paragraphArr.map(function(word) {
  paragraphArr.filter(word)
})

console.log(newArr);