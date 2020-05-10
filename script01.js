// Задание 1
// Создать объект, описывающий автомобиль (производитель,
//  модель, год выпуска, средняя скорость), и следующие функции  для работы с этим объектом. 
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. 


function Car() {
    let car = {
        Made: prompt("Введите производителя"),
        Model: prompt("Введите модель"),
        Year: +prompt("Введите год выпуска"),
        AverageSpeed: +prompt("Введите среднюю скорость")
    };
    return car
}

function InfoCar(car) {

    let buf = '';
    for (const key in car) {
        if (car.hasOwnProperty(key)) {
            const value = car[key];
            buf += `${key}: ${value}\n`;
        }
    }
    alert(buf);
}

function CalculateTime(car) {
    let dist = +prompt("Введите дистанцию");
    let buf = 0;
    let time = dist / car.AverageSpeed;

    for (let i = 1; i <= time; i++) {
        if (i % 4 == 0 && i != time) {
            buf += 1;
        }
    }
    alert(`${buf + time} часов`);
}

let car = Car();
InfoCar(car)



