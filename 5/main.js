// Задача 1 
const person = {
    firstName: "Дмитрий",
    lastName: "Голиков",
    age: 24,
    city: "Москва"
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.city);

// Задача 2 

function isEmpty(obj) {
    for (var key in person) {
        return console.log(false);
    }
    return console.log(true);
}
isEmpty(person);


// Задача 4
function callAllMethods(obj) {
    if (typeof obj !== 'object' || obj === null) {
    }
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key]();
        }
    }
}
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    }
};
callAllMethods(myObject);


