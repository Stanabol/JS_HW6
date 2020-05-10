// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. 
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
//  части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».


let time = window.time = {
    hours: 23,
    minutes: 59,
    seconds: 40,

};

function InfoTime(time) {
    let buf = '';
    for (const key in time) {
        if (time.hasOwnProperty(key)) {
            const value = time[key];
            buf += ` ${value} ${key} `;
        }
    }
    document.getElementById("time").textContent = buf;
    // alert(buf);
}

function MoveSeconds(time) {
    let addseconds = +prompt("Сколько секунд прибавить?");
    let newseconds = time.seconds + addseconds;
    if (newseconds >= 60) {
        let newminutes = Math.trunc(newseconds / 60);
        time.seconds = newseconds % 60;
        MoveMinutes(time, newminutes);

        // for (; newseconds >= 60; newseconds -= 60, time.minutes++) {
        //     time.seconds = newseconds - 60;
        //     if (time.minutes >= 60) {
        //         time.minutes = 0;
        //         time.hours += 1;
        //         if (time.hours >= 24) {
        //             time.hours = 0;
        //         }
        //     }
        // }
    } else {
        time.seconds = newseconds;
    }
    InfoTime(time);
}

function MoveMinutes(time, addminutes = +prompt("Сколько минут прибавить?")) {
    let newminutes = time.minutes + addminutes;
    if (newminutes >= 60) {
        let newhours = Math.trunc(newminutes / 60);
        time.minutes = newminutes % 60;
        MoveHours(time, newhours);
        // for (; newminutes >= 60; newminutes -= 60, time.hours++) {
        //     time.minutes = newminutes - 60;
        //     if (time.hours >= 23) {
        //         time.hours = 0;
        //     }
        // }
    } else {
        time.minutes = newminutes;
    }

    InfoTime(time);
}

function MoveHours(time, addhours = +prompt("Сколько часов прибавить?")) {
    let newhours = time.hours + addhours;
    if (newhours >= 24) {
        time.hours = newhours % 24;
    } else {
        time.hours = newhours;
    }
    InfoTime(time);
}

InfoTime(time);
