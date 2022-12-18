

function keyWasPressed(){
    // const inputEl = document.querySelector('.input-pin').value;
    var inputEl = document.getElementById("id-input").value;

    console.log(inputEl);

    // let inputLen = inputEl.lenght;
    // console.log(inputLen);

    if (inputEl == "3") {
        console.log("great")
    }
}

const elementsEl = document.querySelector(".elements");
const iconsEl = document.querySelector(".icons");


// SCRIPT WHICH RELOAD ACTUAL HOUR
const hourEl = document.getElementById("godz");
const dateEl = document.getElementById("date");
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    if(m < 10){
        m = "0" + m;
    }

    time = h + ":" + m;
    hourEl.innerText = time;


    // CHANGE DATE
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let Strdate = weekday[d.getDay()];
    let day = d.getDate();
    const months  = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let month = months[d.getMonth()];

    dateEl.innerText = Strdate + ", " + day + " " + month;

    
    setTimeout(()=>{
        updateClock();
    }, 1000)
} 
updateClock();


// SCRIPT WHICH OPEN LOGIN SCREEN
var ifClicked = 0;
console.log("ifClciked przed kliknieciem");
scrRed = document.querySelector(".screen");
bgToHide = document.querySelector(".image-normal");
const clockScr = document.querySelector(".clock-screen");
scrRed.addEventListener("click", () => {
    if(ifClicked === 0){
    document.getElementById("startup_sound").play();
    ifClicked = 1;
    console.log(ifClicked);
    for (let i = 1; i <= window.screen.availHeight; i++) {
        setTimeout(() => {
            clockScr.style.transform = "translate(0,-" + i + "px)";
        }, 0.3 * i);
    }
    setTimeout(() => {
        for (let i = 1; i <= 50; i++) {
            setTimeout(() => {
                changeVisibilty(i);
            }, 20 * i);
        }

    }, 1000);
    setTimeout(() => {
        for (let i = 1; i <= 50; i++) {
            setTimeout(() => {
                changeVisibilty(i);
            }, 20 * i);
        }

    }, 1000);

    // BLUR TŁA
    setTimeout(() => {
        for (let i = 1; i <= 100; i++) {
            setTimeout(() => {
                bgToHide.style.opacity = 100 + (i-1)*(-1) + "%";
            }, 10 * i);
        }
    
    }, 500);
}})


function changeVisibilty(i){
    elementsEl.style.opacity = i * 2/100;
    iconsEl.style.opacity = i * 2/100;
}

