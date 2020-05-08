window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    //Timer
    function countTimer (deadline){
        let timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');

        function getTimeRemaining(){   
            let dateStop = new Date (deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),          
                minutes = Math.floor((timeRemaining / 60) % 60),           
                hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};    
        }

        function updateClock() {
            let timer = getTimeRemaining();

            if(Math.floor(timer.timeRemaining) >= 0) {
                if(Math.floor(timer.hours/10) === 0) {
                    timerHours.textContent = '0' + timer.hours;
                }
                else {
                    timerHours.textContent = timer.hours;
                }

                if(Math.floor(timer.minutes/10) === 0) {
                    timerMinutes.textContent = '0' + timer.minutes;
                }
                else {
                    timerMinutes.textContent = timer.minutes;
                }

                if((Math.floor(timer.seconds/10)) === 0) {
                    timerSeconds.textContent = '0' + timer.seconds;
                }
                else {
                    timerSeconds.textContent = timer.seconds;
                }
            }

            if(Math.floor(timer.timeRemaining) <= 0) {
                //console.log('if ' + idInterval);
                clearInterval(idInterval);
            }
        }

        let idInterval = setInterval(function(){
            updateClock();
        }, 1000)
        
    }

    countTimer('09 may 2020 15:57:30');
});