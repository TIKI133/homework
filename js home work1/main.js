// Создайте объект с вашим описанием(имя, возраст и т.д.)
const me = {
    name: 'Dmitry',
    surname: 'Golikov',
    age: 24
}
console.log(me)


// Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’
const person = {
    greet: function(name) {
        return `Hello ${name}`;
    }
};


console.log(person.greet("John"))


// Создайте массив объектов с описанием пользователей(такой мы делали в уроке). 
const users = [
    { name: "Alex", role: "user" },
    { name: "Tom", role: "admin" },
    { name: "John", role: "user" },
    { name: "Rob", role: "user" },
    { name: "Jerry", role: "admin" }
];
let regularUsersCount = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].role !== "admin") {
        regularUsersCount++;
    }
}
console.log("Количество обычных пользователей: " + regularUsersCount)