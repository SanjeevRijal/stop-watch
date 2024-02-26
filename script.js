const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let hrs=0;
let mins =0;
let secs = 0;

startBtn.addEventListener("click",()=>{
    if(paused){
        paused = false;
        startTime = Date.now()-elapsedTime;
        intervalId = setInterval(updateTime,75)

    }
});


pauseBtn.addEventListener("click",()=>{
    if(!paused){
      paused = true;
      esaplesTime = Date.now-startTime;
      clearInterval(intervalId)  
    }
});


resetBtn.addEventListener("click",()=>{
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    paused = true;
    hrs=0;
    mins =0;
    secs = 0;
    timeDisplay.textContent="00:00:00"
});

function updateTime(){
    elapsedTime = Date.now()-startTime;

    secs = Math.floor((elapsedTime/1000) % 60);
    mins = Math.floor((elapsedTime/(1000*60)) % 60);
    hrs = Math.floor((elapsedTime/(1000*60*60)) % 60)
   
    secs = doubleDigitChecker(secs)
    mins = doubleDigitChecker(mins)
    hrs = doubleDigitChecker(hrs)

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`

}

function doubleDigitChecker(value){
    let newValue = value.toString();
    if(newValue.length < 2){
        value = "0" + newValue;
    }
    return value

}

