const days01 = document.getElementById('days');
const hours01 = document.getElementById('hours');
const mins01 = document.getElementById('mins');
const seconds01 = document.getElementById('seconds');


const mahaShiv = '1 Mar 2022';

function countdown() {
    const mahaShivDate = new Date(mahaShiv);
    const currentDate = new Date();

    const totalSeconds = (mahaShivDate - currentDate) / 1000;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const seconds = Math.floor(totalSeconds) % 60;

    days01.innerHTML = days;
    hours01.innerHTML = hours;
    mins01.innerHTML = mins;
    seconds01.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000);
