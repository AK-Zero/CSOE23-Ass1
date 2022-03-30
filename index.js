let sec = 0;
let msec = 0;
let interval = null;
let sec1;
let msec1;
let k = 1;
let sound = new Audio("initial_tring.wav");
let sound1 = new Audio("boxing_bell_multiple.wav");
let sound2 = new Audio("applause.wav");

function timer() {
  msec++;
  if (msec % 1000 == 0) {
    sec++;
  }
  if (msec % 1000 < 10) {
    msec1 = "00" + (msec % 1000).toString();
  } else if (msec % 1000 < 100) {
    msec1 = "0" + (msec % 1000).toString();
  } else {
    msec1 = msec % 1000;
  }
  if (sec < 10) {
    sec1 = "0" + sec.toString();
  } else {
    sec1 = sec;
  }

  document.getElementById("display").innerHTML = "Time: " + sec1 + ":" + msec1;
}

function shuffle(arr) {
  let pos;
  for (let i = arr.length - 1; i > 0; i--) {
    pos = Math.floor(Math.random() * (i - 1));
    arr[i] += arr[pos];
    arr[pos] = arr[i] - arr[pos];
    arr[i] = arr[i] - arr[pos];
  }

  return arr;
}

function setbtns() {
  sound1.play();
  interval = window.setInterval(timer, 1);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let arr1 = shuffle(arr);
  let arr2 = shuffle(arr1);
  for (let y = 0; y < 12; y++) {
    document.getElementById("btn" + (y + 1).toString()).innerHTML = arr2[y];
  }
  for (y = 0; y < 12; y++) {
    document.getElementById("btn" + (y + 1).toString()).style.opacity =
      0.2 +
      Number(document.getElementById("btn" + (y + 1).toString()).textContent) /
        25;
  }
  document.getElementById("button").style.visibility = "visible";
  document.getElementById("diff").style.visibility = "hidden";
}

function update(cid) {
  let temp = Number(document.getElementById(cid).textContent);
  if (k == temp) {
    if (temp < 13) {
      document.getElementById(cid).innerHTML = temp + 12;
      document.getElementById(cid).style.opacity =
        0.2 + Number(document.getElementById(cid).textContent) / 25;
      sound.play();
    } else {
      document.getElementById(cid).innerHTML = " ";
      document.getElementById(cid).style.opacity = 0;
      sound.play();
    }
    if (temp == 24) {
      window.clearInterval(interval);
      sound2.play();
      document.getElementById("button").style.visibility = "hidden";
      document.getElementById("gameover").style.visibility = "visible";
    }
    k++;
  }
}
