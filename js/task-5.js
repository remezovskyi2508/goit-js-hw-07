const changeColor = document.querySelector("body");
const changeButton = document.querySelector("button['change-color']");
const textColor = document.querySelector("color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.style.backgroundColor = getRandomHexColor; 





