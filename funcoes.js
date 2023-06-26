// function exemplo(a, b) {
//     return a * b;
// }

// console.log(exemplo.length)
// console.log(exemplo.constructor)

// const square = function (number) { return number * number }
// let x = square(4)
// console.log(x)

// function soma(x, y = 10) {
//     return x + y;
// }
// console.log(soma(5))
// console.log(soma(5, 15))

const a = [
    'Hydreogen', 'Helium', 'Lithin', 'Beryllium'
];
const a2 = a.map(function (s) { return s.length });
console.log(a2);

const a3 = a.map(s => s.length);
console.log(a3);

function nome(a, b) {
    return a + b;
}

// (a, b) => {
//     return a + b;
// }

let soma = (a, b) => a + b;

console.log(soma(1, 2))
console.log(nome(1, 2))