let section = document.querySelector('section');
let icons = document.querySelector('.icons');

icons.addEventListener('click',() => {
    section.classList.toggle('dark')
})

//the run time function

setInterval(() =>{

    let date = new Date();
    hours = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    let d;
    d = hours < 12 ? "AM" : "PM"; //if hour is less than 12 its value will be AM else PM
    hours = hours > 12 ? hours - 12 : hours; //if hour is greater than 12 its value will be subtract from 12giving us a number less than 12
    hours = hours == 0 ? hours = 12 : hours; //if the hour value is 0 then its value will be 12

    console.log(sec);

    document.querySelector('.hour-num').innerText = hours;
    document.querySelector('.min-num').innerText = min;
    document.querySelector('.sec-num').innerText = sec;
    document.querySelector('.am_pm').innerText = d;
})