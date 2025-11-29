// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.


function min(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (a < b) {
            return a;
        } else if (a > b) {
            return b;
        } else {
            return 'Числа рівні';
        }
    } else {
        return 'Not a number!';
     }
}

console.log(min(5, 9));


function min(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Math.min(a, b);
    } else {
        return 'Not a number!';
     }
}
console.log(min(15, 9));
