// Задача 1

const number = 10;

if (number % 2 === 0) {
    console.log("Четное число");
} else {
    console.log("Нечетное число");
}



// Задача 2

const age = 18;
const a = "10%";
const b = "20%";
const c = "30%";

const discount = age < 18 ? a : age <= 65 ? b : c

console.log(discount);


// Задача 3

const username = prompt("пользоватеь");
const password = prompt("пароль");

if (username === "admin" || username === "user" && password === "123456") {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}