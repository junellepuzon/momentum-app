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

  setTimeout(showTime, 1000);
}

// add zero
function addZero(n) {
  return (parseInt(n) < 10 ? "0" : "") + n;
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

// editable name

const name = document.getElementById("name");

// get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Nelle";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// set name
function setName(event) {
  if (event.type === "keypress") {
    // make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13) {
      localStorage.setItem("name", event.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", event.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

getName();

// editable focus

const focus = document.getElementById("focus");

// get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "Watch JavaScript tutorial";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// set focus
function setFocus(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

getFocus();

// random quotes

let quotes = [
  '"It does not matter how slowly you go as long as you do not stop."',
  '"Start where you are. Use what you have. Do what you can."',
  '"It always seem impossible until it\'s done."',
  '"Learn as if you will live forever, live like you will die tomorrow."',
  '"When you change your thoughts, remember to also change your world."',
  '"Success is not final; failure is not fatal: It is the courage to continue that counts."',
];

function refresh() {
  let randomQuotes = Math.floor(Math.random() * quotes.length);
  document.querySelector(".quote").innerHTML = quotes[randomQuotes];
}

refresh();

