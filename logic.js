document.getElementById("start").addEventListener("click", startFunction);
document.getElementById("stop").addEventListener("click", stopFunction);
document.getElementById("reset").addEventListener("click", resetFunction);

var interval;
var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;

function startFunction() {
    clearInterval(interval);
    interval = setInterval(timer, 10);
}

function stopFunction() {
    clearInterval(interval);
}

function resetFunction() {
    clearInterval(interval);
    hour = minute = second = millsecond = 0;
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";
}

function timer() {
    millisecond++;

    if (millisecond == 100) { 
        second++; 
        millisecond = 0; 
    } 

    if (second == 60) { 
        minute++; 
        second = 0; 
    } 

    if (minute == 60) { 
        hour++; 
        minute = 0; 
        second = 0; 
    }

    document.getElementById("hours").innerHTML = hour < 10 ? "0" + hour.toString() : hour.toString();
    document.getElementById("minutes").innerHTML = minute < 10 ? "0" + minute.toString() : minute.toString();
    document.getElementById("seconds").innerHTML = second < 10 ? "0" + second.toString() : second.toString();
    document.getElementById("milliseconds").innerHTML = millisecond < 10 ? "0" + millisecond.toString() : millisecond.toString();
}
