
function displayTime() {
    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();
    document.getElementById("times").innerHTML = currentTime;
  }
  
  // Update the time every second
  setInterval(displayTime, 1000);

// // Update time every second
// setInterval(updateTime, 1000);

// `use strict`
// var datetime = new Date();
// console.log(datetime);
// document.getElementById("times").textContent = datetime; //it will print on html page


// let time = document.getElementById("times");
// let d = new date();
// time.innerHTML = d.toLocaleTimeString();