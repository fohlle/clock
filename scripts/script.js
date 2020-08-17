
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const alarmBtn = document.querySelector(".set-alarm");
const alarmText = document.querySelector(".alarm");



function update(){
    hours.innerText = new Date().getHours();
    minutes.innerText = new Date().getMinutes();
    seconds.innerText = new Date().getSeconds();
    console.log("hi");
}

let time = setInterval(update,1000);

alarmBtn.addEventListener("click", () => {
    
})
//update();