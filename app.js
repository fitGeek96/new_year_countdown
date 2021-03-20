//jshint esversion:9
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');


const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    console.log(`${d} days, ${h} hours, ${m} minutes, ${s} seconds`);

    days.innerText = `${d}`;
    hours.innerText = `${h}`;
    minutes.innerText = `${m}`;
    seconds.innerText = `${s}`;


}

setInterval(() => {
    updateCountdown();
}, 1000);