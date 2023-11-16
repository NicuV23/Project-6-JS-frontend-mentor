const downElements = document.getElementsByClassName('down');
const topElements = document.getElementsByClassName('top');
const dayElement = document.getElementsByClassName('day')[0];
const hourElement = document.getElementsByClassName('hour')[0];
const minuteElement = document.getElementsByClassName('minute')[0];
const secondElement = document.getElementsByClassName('second')[0];

const launchDate = new Date("2023-12-31T12:00:00Z");

function updateLaunchDate() {
    const currentTime = new Date().getTime();
    const distance = launchDate - currentTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dayElement.innerHTML = `${days}`;
    hourElement.innerHTML = `${hours}`;
    minuteElement.innerHTML = `${minutes}`;
    secondElement.innerHTML = `${seconds}`;
}

console.log(launchDate);

updateLaunchDate();

setInterval(updateLaunchDate, 1000);
