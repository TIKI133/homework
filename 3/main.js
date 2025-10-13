// Задача 1

for (let i = 1; i <= 20; i++) {
    if (i % 4 !== 0) {
        console.log(i);
    }
}


// Задача 2

let number = +prompt("Введите число");

if (isNaN(number) || number < 0) {
    console.log("введите положительное число");
} else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`факториал ${number} равен ${factorial}`);
}