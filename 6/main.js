// Задача 1
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false }
];
users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
);
console.log(users)

// Задача 2
function getUserAverageAge(users) {
    let sum = 0;
    users.forEach(({ age }) => {
        sum += age;
    });
    const average = sum / users.length;
    console.log(average);
}
getUserAverageAge(users)

// Задача 3
const admins = [];
users.forEach(user => {
    if (user.isAdmin) {
        admins.push(user);
    }
});
console.log(admins);

// Задача 4
function first(array, n) {
    let result = [];
    if (n === undefined)
        return array[0];
    for (let i = 0; i < n; i++) {
        result.push(array[i]);
    }
    return result;
}
console.log(first([1, 2, 3, 4, 5]))
console.log(first([1, 2, 3, 4, 5], 0))

