'use strict';

let today = document.querySelector('#today');
let weekDay = document.getElementById('weekDay');
let time = document.getElementById('time');
let leftDaysToNewYear = document.getElementById('dayCount');
const now = new Date();
const hours = now.getHours();
let greeting;

console.log(typeof(hours));
if(hours < 6) {
    greeting = 'Доброй ночи!';
}
else if(hours < 12) {
    greeting = 'Доброе утро!';
}
else if(hours < 18) {
    greeting = 'Добрый день!';
}
else if(hours < 22) {
    greeting = 'Добрый день!';
}
else {
    greeting = 'Доброй ночи!';
}

let days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function formatTime(date) {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let t = 'AM';

    if (h >12) {
        t = 'PM';
        h = h % 12;    
    };

    if (h < 10) h = '0' + h; 
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    return h + ':' + m + ':' + s + ' ' + t;
  }



function getLeftDaysOfCurrYear(date) {
    const lastDay = new Date(date.getFullYear(), 11, 31);
    const oneDay = 1000 * 60 * 60 * 24;
    const LeftDays = Math.ceil((lastDay.getTime() - now.getTime())/oneDay);
    return LeftDays;
}

today.textContent = greeting;
weekDay.textContent = 'Сегодня: ' + days[now.getDay()];
time.textContent = 'Текущее время: ' + formatTime(now);
leftDaysToNewYear.textContent = 'До нового года осталось ' + getLeftDaysOfCurrYear(now) + ' дней';
