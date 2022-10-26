"use strict";

function green() {
  document.getElementById("p").style.color = "green";
}

function red() {
  document.getElementById("p").style.color = "red";
}

function orange() {
  document.getElementById("p").style.color = "orange";
}

function bisque() {
  document.getElementById("p").style.color = "bisque";
}

let btnStartGame = document.getElementById("btnStartGame");
btnStartGame.addEventListener("click", startGame);

function startGame() {
  alert("You have 10 guesses. Guess from 1-40 :)");

  let answer = Math.floor(Math.random() * 41);
  console.log(answer);
  let guess = Number(prompt("what's your guess?🌟"));

  for (let i = 1; i < 10; i++) {
    if (answer === guess) {
      alert("you guessed correctly🎉🔑");
      break;
    } else {
      guess = Number(prompt("please try again 😋"));
    }
    if (guess === null) {
      if (confirm("Are you sure you want to quit? 😱")) {
        alert("😴 you boring pieace of #*!?!%");
        break;
      } else {
        continue;
      }
    }
  }
  if (guess === answer) {
  } else {
    alert(`The answer was ${answer} unfortunatly`);
  }
}
