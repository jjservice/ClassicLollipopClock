const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hours = day.getHours(); + 30;
    let minutes = day.getMinutes(); + deg;
    let seconds = day.getSeconds(); + deg;

    hr.style.transform = `rotate(${hours * 360 / 12}deg)`;
    mn.style.transform = `rotate(${minutes * 360 / 60}deg)`;
    sc.style.transform = `rotate(${seconds * 360 / 60}deg)`;

})