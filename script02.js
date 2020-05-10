// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. 
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

let fraction = {
    numeratorOne: +prompt("Введите числитель первой дроби"),
    denominatorOne: +prompt("Введите знаменатель первой дроби"),
    numeratorTwo: +prompt("Введите числитель второй дроби"),
    denominatorTwo: +prompt("Введите знаменатель второй дроби"),

};
let max = fraction.denominatorOne > fraction.denominatorTwo ? fraction.denominatorOne : fraction.denominatorTwo;
let min = fraction.denominatorOne < fraction.denominatorTwo ? fraction.denominatorOne : fraction.denominatorTwo;

function CommonFactor(fraction) {
    let commonFactor = 0;
    for (let i = 1; i <= max; i++) {
        if ((fraction.denominatorOne % i == 0) && fraction.denominatorTwo % i == 0) {
            commonFactor = i;
        }
    }
    return commonFactor;
}
function Sum(fraction) {
    let factorOne = 0;
    let factorTwo = 0;
    let sum = 0;

    if (fraction.denominatorOne == fraction.denominatorTwo) {
        alert(`${fraction.numeratorOne + fraction.numeratorTwo}/${max} `);
    } else if (fraction.denominatorOne != fraction.denominatorTwo) {
        factorOne = fraction.denominatorOne / CommonFactor(fraction);
        factorTwo = fraction.denominatorTwo / CommonFactor(fraction);
        sum = (fraction.numeratorOne * factorTwo) + (fraction.numeratorTwo * factorOne);
    }
    return `${sum}/${factorTwo * fraction.denominatorOne}`
}
function Subtraction(fraction) {
    let factorOne = 0;
    let factorTwo = 0;
    let subtraction = 0;
    let max = fraction.numeratorOne < fraction.numeratorTwo ? fraction.numeratorOne : fraction.numeratorTwo;
    let min = fraction.numeratorOne > fraction.numeratorTwo ? fraction.numeratorOne : fraction.numeratorTwo;
    if (fraction.denominatorOne == fraction.denominatorTwo) {
        alert(`${max - min}/${max} `);
    } else if (fraction.denominatorOne != fraction.denominatorTwo) {
        for (let i = 1; i <= max; i++) {
            if ((fraction.denominatorOne % i == 0) && fraction.denominatorTwo % i == 0) {
                factorOne = fraction.denominatorOne / CommonFactor(fraction);
                factorTwo = fraction.denominatorTwo / CommonFactor(fraction);
                subtraction = (max * factorTwo) - (min * factorOne);
            }
        }
    }
    return `${subtraction}/${factorTwo * fraction.denominatorOne}`
}
function Multiply(fraction) {

}
// alert(Sum(fraction));
// Sum(fraction);
// Subtraction(fraction);
console.log(`Результат суммы = ${Sum(fraction)}`);
console.log(`Результат вычитание = ${Subtraction(fraction)}`);
