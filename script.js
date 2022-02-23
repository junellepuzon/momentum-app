// current time

const time = document.querySelector(".time");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();

  // period
  const amPm = hour >= 12 ? "PM" : "AM";

  // format
  hour = hour % 12 || 12;

  // output
  time.innerHTML = `${hour}<span>:</span>${addZero(min)} ${amPm}`;
}

// add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

showTime();

// background and greeting

const greeting = document.getElementById("greeting");

function backgroundGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('images/morning.jpeg')";
    greeting.textContent = "Good morning,";
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = "url('images/afternoon.jpeg')";
    greeting.textContent = "Good afternoon,";
  } else {
    // evening
    document.body.style.backgroundImage = "url('images/night.jpeg')";
    greeting.textContent = "Good evening,";
  }
}

backgroundGreeting();


