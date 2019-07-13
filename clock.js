let hourHand = document.querySelector("#hour-hand");
let minuteHand = document.querySelector("#minute-hand");
let secondHand = document.querySelector("#second-hand");

let date = new Date();
let hour = date.getHours();
let seconds = date.getSeconds();
let minutes = date.getMinutes();

let hourValue = (hour > 12) ? hour - 12 : hour;

let hourAngle = hourValue * 30;
let secondsAngle = seconds * 6;
let minutesAngle = minutes * 6;

hourHand.style.transform = `translate(-50%, -50%) rotate(${hourAngle}deg)`;
minuteHand.style.transform = `translate(-50%, -50%) rotate(${minutesAngle}deg)`;
secondHand.style.transform = `translate(-50%, -50%) rotate(${secondsAngle}deg)`;

setInterval(() =>{
   
    let date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();

    secondsAngle = seconds * 6;
    minutesAngle = minutes * 6;

    minuteHand.style.transform = `translate(-50%, -50%) rotate(${minutesAngle}deg)`;
    secondHand.style.transform = `translate(-50%, -50%) rotate(${secondsAngle}deg)`;
},1000);

setInterval(() =>{
    let date = new Date();
    let minute = date.getMinutes();

    let newHourAngle = (minute > 12) ? hourAngle + (6 * (Math.floor(minute/12))) : hourAngle;

    hourHand.style.transform = `translate(-50%, -50%) rotate(${newHourAngle}deg)`;
},60000);