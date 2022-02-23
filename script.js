// current time

const time = document.querySelector('.time');

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